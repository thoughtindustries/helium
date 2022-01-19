import { createPageRenderer } from 'vite-plugin-ssr';
import jwt_decode from 'jwt-decode';
// We load `importBuild.js` so that the worker code can be bundled into a single file
import '../dist/server/importBuild.js';
import { initPageContext } from './../lib/init-page-context';
import { findTiInstance } from './../lib/find-ti-instance';

export { handleSsr };

const renderPage = createPageRenderer({
  isProduction: true
});

async function handleSsr(url) {
  const tiInstance = findTiInstance(INSTANCE_NAME);
  const { currentUser, appearanceBlock } = decryptUserAndAppearance(url, tiInstance);
  const pageContext = await initPageContext(
    url,
    renderPage,
    currentUser,
    appearanceBlock,
    HELIUM_ENDPOINT,
    true
  );
  const { httpResponse } = pageContext;

  if (!httpResponse) {
    return null;
  } else {
    const { statusCode, body } = httpResponse;
    const headers = assembleHeaders(pageContext);

    return new Response(resolveAssetUrls(url, body), {
      headers,
      status: statusCode
    });
  }
}

function decryptUserAndAppearance(url, tiInstance) {
  let currentUser = {};
  let appearanceBlock = {};

  const urlObj = new URL(url);
  if (urlObj.searchParams && urlObj.searchParams.get('jwt')) {
    if (tiInstance && tiInstance.apiKey) {
      const signedJwt = urlObj.searchParams.get('jwt');
      const decryptedJWT = jwt_decode(signedJwt);

      if (decryptedJWT) {
        if (decryptedJWT.currentUser) {
          currentUser = decryptedJWT.currentUser;
        }

        if (decryptedJWT.appearanceBlock) {
          appearanceBlock = decryptedJWT.appearanceBlock;
        }
      }
    }
  }

  return { currentUser, appearanceBlock };
}

function resolveAssetUrls(url, htmlString) {
  const urlObj = new URL(url);
  const resolvedString = htmlString.replace(
    / (src|href)="\/assets\/(.*?)">/g,
    ` $1="${urlObj.origin}/assets/$2">`
  );
  return resolvedString;
}

function assembleHeaders(pageContext) {
  const headers = { 'content-type': 'text/html' };

  if (pageContext && pageContext.documentProps) {
    for (const key of Object.keys(pageContext.documentProps)) {
      headers[`-x-page-${key}`] = pageContext.documentProps[key];
    }
  }

  return headers;
}
