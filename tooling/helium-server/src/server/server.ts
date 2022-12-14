import express from 'express';
import { createPageRenderer } from 'vite-plugin-ssr';
import findTiInstance from './../utilities/find-ti-instance';
import fetchUserAndAppearance from './../utilities/fetch-user-and-appearance';
import initPageContext from './../utilities/init-page-context';
import fetch, { Response } from 'node-fetch';
import expressPlayground from 'graphql-playground-middleware-express';

const isProduction = process.env.NODE_ENV === 'production';
const instanceName = process.env.INSTANCE || '';
const heliumEndpoint = process.env.HELIUM_ENDPOINT;

export default async function setupHeliumServer(root: string, viteDevServer: any, port: number) {
  if (!heliumEndpoint) {
    throw new Error(`
    HELIUM_ENDPOINT environment variable is not set.
    The development server should be started 'helium dev'
    `);
  }

  const app = express();
  const tiInstance = await findTiInstance(instanceName);

  if (isProduction) {
    app.use(express.static(`${root}/dist/client`, { index: false }));
  } else {
    app.use(viteDevServer.middlewares);
    app.use(express.json());

    app.get('/graphiql', expressPlayground({ endpoint: '/graphql' }));
    // proxying graphql requests in dev environment because of CORS errors
    app.post('/graphql', async (req, res) => {
      const reqBody = req.body;

      if (Array.isArray(reqBody)) {
        reqBody.push({ user: tiInstance.email });
      } else {
        reqBody.user = tiInstance.email;
      }

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
      };

      fetch(heliumEndpoint, options)
        .then((tiRes: Response) => {
          // forward authToken in header if set
          const tiCookies = tiRes.headers.raw()['set-cookie'];
          const tiAuthTokenCookie = tiCookies.find(c => /authToken=/.test(c));
          if (tiAuthTokenCookie) {
            res.setHeader('set-cookie', tiAuthTokenCookie);
          }
          res.status(tiRes.status);
          return tiRes;
        })
        .then((r: Response) => r.json())
        .then((data: Record<string, any>) => {
          res.send(data);
        });
    });
  }

  const renderPage = createPageRenderer({ viteDevServer, isProduction, root });
  let currentUser = {};
  let appearanceBlock = {};

  app.get('*', async (req, res, next) => {
    if (!Object.keys(currentUser).length || !Object.keys(appearanceBlock).length) {
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
      isProduction,
      null,
      null,
      port
    );

    const { httpResponse } = result;

    if (!httpResponse) return next();

    const { statusCode, body } = httpResponse;
    res.status(statusCode).send(body);
  });

  return app;
}
