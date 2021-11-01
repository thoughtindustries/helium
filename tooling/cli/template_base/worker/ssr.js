import { createPageRenderer } from 'vite-plugin-ssr';
// We load `importBuild.js` so that the worker code can be bundled into a single file
import '../dist/server/importBuild.js';
import { initPageContext } from './../lib/init-page-context';
import { parse } from 'node-html-parser';

export { handleSsr };

const renderPage = createPageRenderer({
  isProduction: true
});

async function handleSsr(url) {
  const pageContext = await initPageContext(url, INSTANCE_NAME, renderPage);
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
