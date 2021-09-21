import { createPageRenderer } from 'vite-plugin-ssr';
// We load `importBuild.js` so that the worker code can be bundled into a single file
import '../dist/server/importBuild.js';
import { initPageContext } from './../lib/init-page-context';

export { handleSsr };

const renderPage = createPageRenderer({
  isProduction: true,
  base: 'https://helium.rjschill.workers.dev/'
});

async function handleSsr(url) {
  const pageContext = await initPageContext(url, INSTANCE_NAME, renderPage);
  const { httpResponse } = pageContext;

  if (!httpResponse) {
    return null;
  } else {
    const { statusCode, body } = httpResponse;
    return new Response(body, {
      headers: { 'content-type': 'text/html' },
      status: statusCode
    });
  }
}
