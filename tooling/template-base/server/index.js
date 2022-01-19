const express = require('express');
const { createPageRenderer } = require('vite-plugin-ssr');
const { initPageContext } = require('./../lib/init-page-context');
const { fetchUserAndAppearance } = require('../lib/fetch-user-and-appearance');
const { findTiInstance } = require('./../lib/find-ti-instance');

const isProduction = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;
const instanceName = process.env.INSTANCE;
const heliumEndpoint = process.env.HELIUM_ENDPOINT;

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
  let appearanceBlock;

  app.get('*', async (req, res, next) => {
    const tiInstance = findTiInstance(instanceName);

    if (!currentUser || !appearanceBlock) {
      // const userAndAppearance = await fetchUserAndAppearance(tiInstance);
      currentUser = {};
      appearanceBlock = {};
      // currentUser = userAndAppearance.currentUser;
      // appearanceBlock = userAndAppearance.appearanceBlock;
    }

    const url = req.originalUrl;
    const result = await initPageContext(
      url,
      renderPage,
      currentUser,
      appearanceBlock,
      heliumEndpoint,
      isProduction
    );

    const { httpResponse } = result;

    if (!httpResponse) return next();

    const { statusCode, body } = httpResponse;
    res.status(statusCode).send(body);
  });

  const port = process.env.PORT || 3000;

  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
