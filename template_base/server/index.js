const express = require('express');
const { createPageRender } = require('vite-plugin-ssr');
const { GraphQLClient } = require('graphql-hooks');
const fetch = require('isomorphic-unfetch');
const memCache = require('graphql-hooks-memcache');

const isProduction = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;
const instanceName = process.env.INSTANCE;
const configJson = require('./../ti-config');

function findTInstance(instanceName) {
  const { instances = [] } = configJson;
  let instance = instances[0];

  if (instanceName) {
    const possibleMatch = instances.find(instance => instance.nickname === instanceName);
    if (possibleMatch && possibleMatch.apiKey) {
      instance = possibleMatch;
    }
  }

  return instance;
}

startServer();

async function startServer() {
  const app = express();
  const tiInstance = findTInstance(instanceName);

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

  const renderPage = createPageRender({ viteDevServer, isProduction, root });
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;
    const graphQLClient = makeGraphQLClient(tiInstance);
    const pageContext = {
      url,
      tiInstance,
      graphQLClient
    };

    const result = await renderPage(pageContext);
    if (result.nothingRendered) return next();
    res.status(result.statusCode).send(result.renderResult);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}

function makeGraphQLClient(tiInstance) {
  return new GraphQLClient({
    ssrMode: true,
    url: `${tiInstance.instanceUrl}/graphql`, // Server URL (must be absolute)
    cache: memCache(),
    fetch
  });
}
