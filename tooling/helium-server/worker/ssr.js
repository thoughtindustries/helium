import jwt_decode from 'jwt-decode';
import initPageContext from './init-page-context';
import tiConfig from 'tiConfig';
// Static import required for Cloudflare Workers - dynamic imports not supported
import { renderPage } from 'vike/server';

export { handleSsr };

const bufferToHex = buffer => {
  const view = new DataView(buffer);

  let hexCodes = '';
  for (let index = 0; index < view.byteLength; index += 4) {
    hexCodes += view.getUint32(index).toString(16).padStart(8, '0');
  }

  return hexCodes;
};

const create =
  algorithm =>
  async (buffer, { outputFormat = 'hex' } = {}) => {
    if (typeof buffer === 'string') {
      buffer = new globalThis.TextEncoder().encode(buffer);
    }

    const hash = await globalThis.crypto.subtle.digest(algorithm, buffer);

    return outputFormat === 'hex' ? bufferToHex(hash) : hash;
  };

const sha256 = create('SHA-256');

// Parse asset manifest once at worker startup for better performance
// Cloudflare Workers are long-lived, so this cache persists across requests
let CACHED_ASSET_URLS = null;
if (typeof __STATIC_CONTENT_MANIFEST !== 'undefined') {
  try {
    const assetManifest = JSON.parse(__STATIC_CONTENT_MANIFEST);
    CACHED_ASSET_URLS = getAssetUrls(assetManifest);
    console.log('Asset manifest parsed and cached at worker startup');
  } catch (error) {
    console.error('Failed to parse asset manifest at startup:', error);
  }
}

async function handleSsr(url, authToken = null, userAndAppearanceToken = null) {
  // Debug information we'll include in response headers
  const debugInfo = {
    url,
    renderPageDefined: !!renderPage,
    timestamp: new Date().toISOString()
  };

  try {
    if (!renderPage) {
      // Return debug info as HTML so it's visible in the browser
      return new Response(
        `<!DOCTYPE html>
        <html>
        <head><title>Worker Debug</title></head>
        <body>
          <h1>Worker Error: renderPage not defined</h1>
          <pre>${JSON.stringify(debugInfo, null, 2)}</pre>
        </body>
        </html>`,
        {
          status: 500,
          headers: {
            'content-type': 'text/html;charset=UTF-8',
            'x-debug-worker': 'renderPage-undefined'
          }
        }
      );
    }

    const tiInstance = findTiInstance(INSTANCE_NAME);
    const { currentUser, appearanceBlock } = decryptUserAndAppearance(
      userAndAppearanceToken,
      tiInstance
    );

    const pageContext = await initPageContext(
      url,
      renderPage,
      currentUser,
      appearanceBlock,
      HELIUM_ENDPOINT,
      true,
      sha256,
      authToken,
      null,
      CACHED_ASSET_URLS // Use pre-parsed asset URLs from startup
    );

    debugInfo.pageContextStatus = pageContext?.httpResponse?.statusCode;

    const { httpResponse, redirectTo } = pageContext;

    if (redirectTo) {
      return Response.redirect(redirectTo, 302);
    }

    if (!httpResponse) {
      debugInfo.noHttpResponse = true;
      return null;
    } else {
      const { statusCode, body } = httpResponse;
      // Check if this is a Client Routing pageContext.json request
      const isClientRoutingRequest = url.includes('.pageContext.json');
      const headers = assembleHeaders(pageContext, isClientRoutingRequest);

      // Add debug headers (visible in browser DevTools Network tab)
      headers['x-debug-status'] = statusCode || '200';
      headers['x-debug-url'] = url;
      headers['x-debug-has-renderpage'] = renderPage ? 'true' : 'false';

      return new Response(body, {
        headers,
        status: statusCode
      });
    }
  } catch (error) {
    // Return error details as HTML so they're visible in the browser
    return new Response(
      `<!DOCTYPE html>
      <html>
      <head><title>Worker Error</title></head>
      <body>
        <h1>Worker SSR Error</h1>
        <h2>Error Message:</h2>
        <pre>${error.message}</pre>
        <h2>Error Stack:</h2>
        <pre>${error.stack}</pre>
        <h2>Debug Info:</h2>
        <pre>${JSON.stringify(debugInfo, null, 2)}</pre>
      </body>
      </html>`,
      {
        status: 500,
        headers: {
          'content-type': 'text/html;charset=UTF-8',
          'x-debug-worker-error': error.message
        }
      }
    );
  }
}

function decryptUserAndAppearance(userAndAppearanceToken, tiInstance) {
  let currentUser = {};
  let appearanceBlock = {};

  if (userAndAppearanceToken && tiInstance && tiInstance.apiKey) {
    const decryptedJWT = jwt_decode(userAndAppearanceToken);

    if (decryptedJWT) {
      if (decryptedJWT.currentUser) {
        currentUser = decryptedJWT.currentUser;
      }

      if (decryptedJWT.appearanceBlock) {
        appearanceBlock = decryptedJWT.appearanceBlock;
      }
    }
  }

  return { currentUser, appearanceBlock };
}

function assembleHeaders(pageContext, isClientRoutingRequest = false) {
  // For Client Routing navigation requests, return JSON
  // For regular page loads, return HTML
  const contentType = isClientRoutingRequest ? 'application/json' : 'text/html';
  const headers = { 'content-type': contentType };

  if (pageContext && pageContext.documentProps) {
    for (const key of Object.keys(pageContext.documentProps)) {
      headers[`-x-page-${key}`] = pageContext.documentProps[key];
    }
  }

  return headers;
}

function findTiInstance(instanceName) {
  const { instances = [] } = tiConfig;
  let instance = instances[0];

  if (instanceName) {
    const possibleMatch = instances.find(instance => instance.nickname === instanceName);
    if (possibleMatch && possibleMatch.apiKey) {
      instance = possibleMatch;
    }
  }

  return instance;
}

function getAssetUrls(manifest) {
  // The manifest maps original asset paths to their hashed versions
  // We need to build a complete list of all assets Vike needs
  const assetUrls = {
    scripts: [],
    styles: [],
    // Keep a mapping for chunk resolution
    assetMap: {}
  };

  // Build a complete asset map for runtime resolution
  for (const [originalPath, hashedPath] of Object.entries(manifest)) {
    // Store the mapping for runtime resolution
    const cleanPath = originalPath.replace(/^\/+/, '');
    assetUrls.assetMap[cleanPath] = `/${hashedPath}`;

    // Extract the actual asset filename from the hashed path
    // e.g., "assets/chunks/chunk-B5g9DQMI.8f2f937207.js" -> "assets/chunks/chunk-B5g9DQMI.js"
    const parts = hashedPath.split('.');
    if (parts.length > 2 && parts[parts.length - 2].match(/^[a-f0-9]+$/)) {
      // Remove the hash part to get the original filename
      const withoutHash = [...parts.slice(0, -2), parts[parts.length - 1]].join('.');
      assetUrls.assetMap[withoutHash] = `/${hashedPath}`;
    }

    // Collect entry points and CSS files - include BOTH routing entries
    // The correct one will be loaded based on the build configuration
    if (
      (originalPath.includes('entry-server-routing') ||
        originalPath.includes('entry-client-routing')) &&
      originalPath.endsWith('.js')
    ) {
      assetUrls.scripts.unshift(`/${hashedPath}`); // Main entry first
    } else if (
      originalPath.includes('renderer_default.page.client') &&
      originalPath.endsWith('.js')
    ) {
      assetUrls.scripts.push(`/${hashedPath}`);
    } else if (originalPath.endsWith('.css')) {
      assetUrls.styles.push(`/${hashedPath}`);
    }
  }

  // Remove duplicates
  assetUrls.scripts = [...new Set(assetUrls.scripts)];
  assetUrls.styles = [...new Set(assetUrls.styles)];

  return assetUrls;
}
