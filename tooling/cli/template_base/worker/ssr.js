import { createPageRenderer } from 'vite-plugin-ssr';
import { parse } from 'node-html-parser';
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
  const currentUser = addCurrentUser(url, tiInstance);
  const pageContext = await initPageContext(url, tiInstance, renderPage, currentUser);
  const { httpResponse } = pageContext;

  if (!httpResponse) {
    return null;
  } else {
    const { statusCode, body } = httpResponse;
    const responseString = parseHtmlBody(body);
    const headers = assembleHeaders(pageContext);

    return new Response(resolveAssetUrls(url, responseString), {
      headers,
      status: statusCode
    });
  }
}

function addCurrentUser(url, tiInstance) {
  let currentUser = {};

  const urlObj = new URL(url);
  if (urlObj.searchParams && urlObj.searchParams.get('jwt')) {
    if (tiInstance && tiInstance.apiKey) {
      const signedJwt = urlObj.searchParams.get('jwt');
      const decryptedJWT = jwt_decode(signedJwt);

      if (decryptedJWT) {
        if (decryptedJWT.currentUser) {
          currentUser = decryptedJWT.currentUser;
        }
      }
    }
  }

  return currentUser;
}

function resolveAssetUrls(url, htmlString) {
  const urlObj = new URL(url);
  const resolvedString = htmlString.replace(/ src="\/(.*?)">/g, ` src="${urlObj.origin}/$1">`);
  return resolvedString;
}

function parseHtmlBody(body) {
  const root = parse(body);
  const bodyNode = root.querySelector('body');
  const childNodes = bodyNode.childNodes || [];

  return childNodes.length ? childNodes.map(childNode => childNode.toString()).join('') : '';
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
