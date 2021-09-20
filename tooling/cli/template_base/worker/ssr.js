import { createPageRender } from 'vite-plugin-ssr';
// We load `importBuild.js` so that the worker code can be bundled into a single file
import '../dist/server/importBuild.js';
import { initPageContext } from './../lib/init-page-context';

export { handleSsr };

const renderPage = createPageRender({ isProduction: true });

async function handleSsr(url) {
  const pageContext = await initPageContext(url, INSTANCE_NAME, renderPage);
  const { renderResult } = pageContext;

  if (!renderResult) {
    return null;
  } else {
    const { statusCode, renderResult } = pageContext;
    return new Response(renderResult, {
      headers: { 'content-type': 'text/html' },
      status: statusCode
    });
  }
}
