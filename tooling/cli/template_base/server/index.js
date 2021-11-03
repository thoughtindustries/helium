const express = require('express');
const { createPageRenderer } = require('vite-plugin-ssr');
const { initPageContext } = require('./../lib/init-page-context');
const { fetchTestUser } = require('./../lib/fetch-test-user');
const { findTiInstance } = require('./../lib/find-ti-instance');

const isProduction = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;
const instanceName = process.env.INSTANCE;

startServer();

async function startServer() {
  const app = express();

  let viteDevServer;
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`, { index: false }));
  } else {
    const vite = require('vite');
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: true }
    });
    app.use(viteDevServer.middlewares);
  }

  const renderPage = createPageRenderer({ viteDevServer, isProduction, root });
  let currentUser;

  app.get('*', async (req, res, next) => {
    const tiInstance = findTiInstance(instanceName);

    if (!currentUser) {
      currentUser = await fetchTestUser(tiInstance);
    }

    const url = req.originalUrl;
    const result = await initPageContext(url, tiInstance, renderPage, currentUser);
    const { httpResponse } = result;

    if (!httpResponse) return next();

    const { statusCode, body } = httpResponse;
    res.status(statusCode).send(body);
  });

  const port = process.env.PORT || 3000;

  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
