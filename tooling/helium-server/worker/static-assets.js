// ********************************************
// This code was provided by Cloudflare Workers
// ********************************************

import {
  getAssetFromKV,
  serveSinglePageApp,
  mapRequestToAsset
} from '@cloudflare/kv-asset-handler';

export { handleStaticAssets };

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false;

// Custom asset mapper to handle Vike asset URLs
function mapVikeAssets(request) {
  const url = new URL(request.url);
  let pathname = url.pathname;

  // Try to get the manifest to find the correct hashed filename
  if (typeof __STATIC_CONTENT_MANIFEST !== 'undefined') {
    try {
      const manifest = JSON.parse(__STATIC_CONTENT_MANIFEST);

      // Handle bare chunk requests (e.g., "/chunk-C97W_Hzk.js")
      // These come from relative imports in the JS files
      if (!pathname.startsWith('/assets/') && pathname.includes('chunk-')) {
        pathname = '/assets/chunks' + pathname;
      }

      // Handle bare entry requests
      if (
        !pathname.startsWith('/assets/') &&
        (pathname.includes('entry-') || pathname.includes('renderer_'))
      ) {
        pathname = '/assets/entries' + pathname;
      }

      // Handle CSS requests
      if (!pathname.startsWith('/assets/') && pathname.endsWith('.css')) {
        pathname = '/assets/static' + pathname;
      }

      // Clean the path for matching
      const cleanPath = pathname.replace(/^\/+/, '');

      // Look for an exact match first
      if (manifest[cleanPath]) {
        url.pathname = '/' + manifest[cleanPath];
        return new Request(url.toString(), request);
      }

      // CRITICAL: Handle Vike's asset URLs that don't have Cloudflare's hash
      // Vike generates: /assets/entry-server-routing.DTgIhraB.js
      // Cloudflare has: /assets/entry-server-routing.DTgIhraB.6edf2d3208.js
      // We need to find the Cloudflare version by matching the Vike pattern

      // Try to match by removing the extension and looking for similar files
      const pathWithoutExt = cleanPath.replace(/\.(js|css)$/, '');

      for (const [originalPath, hashedPath] of Object.entries(manifest)) {
        // Check if this is the file Vike is looking for
        // Match if the original path starts with what Vike requested (minus extension)
        const origWithoutExt = originalPath.replace(/\.(js|css)$/, '');

        if (
          origWithoutExt === pathWithoutExt ||
          originalPath === cleanPath ||
          // Also try matching if Vike's hash is part of the Cloudflare path
          hashedPath.includes(pathWithoutExt)
        ) {
          url.pathname = '/' + hashedPath;
          return new Request(url.toString(), request);
        }
      }

      // Fallback: Try to find a match by looking for the file without considering hashes
      const fileName = pathname.split('/').pop();
      const baseFileName = fileName.split('.')[0];

      for (const [originalPath, hashedPath] of Object.entries(manifest)) {
        // Check if this manifest entry matches our file
        if (originalPath.includes(baseFileName)) {
          url.pathname = '/' + hashedPath;
          return new Request(url.toString(), request);
        }
      }
    } catch (e) {
      console.error('Error parsing manifest:', e);
    }
  }

  // Fall back to the default single page app behavior
  return serveSinglePageApp(request);
}

async function handleStaticAssets(event) {
  let options = { mapRequestToAsset: mapVikeAssets };

  /**
   * You can add custom logic to how we fetch your assets
   * by configuring the function `mapRequestToAsset`
   */
  // options.mapRequestToAsset = handlePrefix(/^\/docs/)

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true
      };
    }
    const page = await getAssetFromKV(event, options);

    // allow headers to be altered
    const response = new Response(page.body, page);

    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Referrer-Policy', 'unsafe-url');
    response.headers.set('Feature-Policy', 'none');
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Vary', 'Origin');

    return response;
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req)
        });

        return new Response(notFoundResponse.body, {
          ...notFoundResponse,
          status: 404
        });
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 });
  }
}

/**
 * Here's one example of how to modify a request to
 * remove a specific prefix, in this case `/docs` from
 * the url. This can be useful if you are deploying to a
 * route on a zone, or if you only want your static content
 * to exist at a specific path.
 */
function handlePrefix(prefix) {
  return request => {
    // compute the default (e.g. / -> index.html)
    let defaultAssetKey = mapRequestToAsset(request);
    let url = new URL(defaultAssetKey.url);

    // strip the prefix from the path for lookup
    url.pathname = url.pathname.replace(prefix, '/');

    // inherit all other props from the default request
    return new Request(url.toString(), defaultAssetKey);
  };
}
