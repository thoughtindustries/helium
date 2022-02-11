import { handleSsr } from './ssr';
import { handleStaticAssets } from './static-assets';

addEventListener('fetch', event => {
  try {
    if (event.request.method === 'OPTIONS') {
      event.respondWith(handleOptions(event));
    } else {
      event.respondWith(
        handleFetchEvent(event).catch(err => {
          console.error(err.stack);
        })
      );
    }
  } catch (err) {
    console.error(err.stack);
    event.respondWith(new Response('Internal Error', { status: 500 }));
  }
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
  'Access-Control-Max-Age': '86400',
  Vary: 'Origin'
};

function handleOptions(event) {
  const { request } = event;
  // Make sure the necessary headers are present
  // for this to be a valid pre-flight request
  let headers = request.headers;
  if (headers.get('Origin') !== null) {
    // Handle CORS pre-flight request.
    // If you want to check or reject the requested method + headers
    // you can do that here.

    return new Response(null, {
      headers: corsHeaders
    });
  } else {
    // Handle standard OPTIONS request.
    // If you want to allow other HTTP Methods, you can do that here.
    return new Response(null, {
      headers: {
        Allow: 'GET, HEAD, POST, OPTIONS'
      }
    });
  }
}

async function handleFetchEvent(event) {
  if (!isAssetUrl(event.request.url)) {
    const { headers } = event.request;
    const authToken = headers.get('authToken') || null;
    const response = await handleSsr(event.request.url, authToken);
    if (response !== null) return response;
  }
  const response = await handleStaticAssets(event);
  return response;
}

function isAssetUrl(url) {
  const { pathname } = new URL(url);
  return pathname.startsWith('/assets/') || pathname.endsWith('manifest.json');
}
