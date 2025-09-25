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
  const pathname = url.pathname;

  // If this is an asset request that Vike generated (without full hash)
  // We need to find the matching file in the manifest
  if (pathname.startsWith('/assets/')) {
    // Try to get the manifest to find the correct hashed filename
    if (typeof __STATIC_CONTENT_MANIFEST !== 'undefined') {
      try {
        const manifest = JSON.parse(__STATIC_CONTENT_MANIFEST);

        // Look for an exact match first
        const cleanPath = pathname.replace(/^\/+/, '');
        if (manifest[cleanPath]) {
          // Found exact match, use the hashed version
          url.pathname = '/' + manifest[cleanPath];
          return new Request(url.toString(), request);
        }

        // Try to find a match by removing the existing hash and looking for the base name
        // e.g., "chunk-C97W_Hzk.js" -> look for entries starting with "assets/chunks/chunk-C97W_Hzk"
        for (const [originalPath, hashedPath] of Object.entries(manifest)) {
          // Check if this is the file we're looking for
          if (originalPath.includes(cleanPath.replace('.js', '').replace('.css', ''))) {
            url.pathname = '/' + hashedPath;
            return new Request(url.toString(), request);
          }

          // Also check if the requested path without extension matches
          const requestedBase = cleanPath.split('.')[0];
          const manifestBase = originalPath.split('.')[0];
          if (manifestBase === requestedBase) {
            url.pathname = '/' + hashedPath;
            return new Request(url.toString(), request);
          }
        }
      } catch (e) {
        console.error('Error parsing manifest:', e);
      }
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
