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

  if (!isProduction) {
    const expressPlayground = require('graphql-playground-middleware-express').default;
    const fetch = require('isomorphic-unfetch');

    app.use(express.json());

    app.get('/graphiql', expressPlayground({ endpoint: '/graphql' }));
    app.post('/graphql', async (req, res) => {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      };

      fetch(heliumEndpoint, options)
        .then(tiRes => {
          res.status(tiRes.status);
          return tiRes;
        })
        .then(r => r.json())
        .then(data => {
          res.send(data);
        });
    });
  }

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
      const userAndAppearance = await fetchUserAndAppearance(tiInstance);
      currentUser = userAndAppearance.currentUser;
      appearanceBlock = userAndAppearance.appearanceBlock;
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
