import express from 'express';
import cookieParser from 'cookie-parser';
import findTiInstance from './../utilities/find-ti-instance';
import { fetchUserAndAppearance, fetchUser } from './../utilities/fetch-user-and-appearance';
import initPageContext from './../utilities/init-page-context';
import fetch from 'isomorphic-unfetch';
import path from 'path';

// Dynamic import to avoid CJS require() of ESM modules
// This variable will be set on first use
let renderPage: any = null;

const isProduction = process.env.NODE_ENV === 'production';
const instanceName = process.env.INSTANCE || '';
const heliumEndpoint = process.env.HELIUM_ENDPOINT;
const COOKIE_OR_HEADER_NAME_AUTHTOKEN = 'authToken';
const cookieAuthTokenRegexp = /authToken=/;

/**
 * GraphiQL is a single-page-app which is built in the same out dir
 * as the `/src` directory. All of the GraphiQL assets are built under
 * sub directory `graphiql`.
 */
const graphiqlDistPath = path.join(__dirname, 'graphiql');
const graphiqlStaticAssets = express.static(path.join(graphiqlDistPath, 'assets'));
const graphiqlIndexPath = path.join(graphiqlDistPath, 'index.html');

export default async function setupHeliumServer(root: string, viteDevServer: any, port: number) {
  if (!heliumEndpoint) {
    throw new Error(`
    HELIUM_ENDPOINT environment variable is not set.
    The development server should be started 'helium dev'
    `);
  }

  // Load renderPage dynamically to avoid CJS/ESM issues
  if (!isProduction && viteDevServer) {
    // In development, use dev server's module loader for HMR support
    const vikeDevModule = await viteDevServer.ssrLoadModule('vike/server');
    renderPage = vikeDevModule.renderPage;
  } else if (!renderPage) {
    // In production or first time, dynamically import vike
    const vikeModule = await import('vike/server');
    renderPage = vikeModule.renderPage;
  }

  const app = express();
  app.use(cookieParser());
  const tiInstance = await findTiInstance(instanceName);

  if (isProduction) {
    app.use(express.static(`${root}/dist/client`, { index: false }));
  } else {
    (await import('dotenv')).config();

    // IMPORTANT: Don't let Vite handle .pageContext.json requests
    // We need to handle them ourselves for Client Routing
    app.use((req, res, next) => {
      if (req.originalUrl.includes('.pageContext.json')) {
        // Skip Vite middleware for Client Routing requests
        return next();
      }
      // Let Vite handle everything else
      viteDevServer.middlewares(req, res, next);
    });

    app.use(express.json());

    app.use('/graphiql/assets', graphiqlStaticAssets);
    app.get('/graphiql', async (_, res) => {
      res.sendFile(graphiqlIndexPath);
    });
    // proxying graphql requests in dev environment because of CORS errors
    app.post('/graphql', async (req, res) => {
      const { body: reqBody, headers: reqHeaders } = req;

      // parse request header and pass-thru authToken header
      const reqAuthToken =
        reqHeaders[COOKIE_OR_HEADER_NAME_AUTHTOKEN] ||
        reqHeaders[COOKIE_OR_HEADER_NAME_AUTHTOKEN.toLowerCase()];
      const headers: any = { 'Content-Type': 'application/json' };

      if (reqAuthToken) {
        headers[COOKIE_OR_HEADER_NAME_AUTHTOKEN] = reqAuthToken;
      } else if (!isProduction && tiInstance?.email) {
        // primarily for SSO-configured schools utilizing local delevopment,
        // as the auth cookie set via Thought Industries SSO flow will be set
        // for that domain and will not be included in requests coming from localhost
        if (Array.isArray(reqBody)) {
          reqBody.push({ user: tiInstance.email });
        } else {
          reqBody.user = tiInstance.email;
        }
      }

      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(reqBody)
      };

      fetch(heliumEndpoint, options)
        /**
         * since this runs in node env, 'isomorphic-unfetch` proxies to 'node-fetch`.
         * 'node-fetch' offers API to extract cookies from response header, which
         * is not part of the standard 'Response' type. cast the response to 'any' to
         * avoid TS errors.
         */
        .then((tiRes: any) => {
          // forward authToken in header if set
          const tiCookies: string[] = tiRes.headers.raw ? tiRes.headers.raw()['set-cookie'] : [];
          const tiAuthTokenCookie = tiCookies.find(c => cookieAuthTokenRegexp.test(c));
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

  // company appearance is bound to server lifetime
  let appearanceBlock = {};

  app.get('*', async (req, res, next) => {
    // current user is bound to each server request
    let currentUser = {};
    const shouldFetchAppearance = !Object.keys(appearanceBlock).length;
    const requestCookieAuthToken = req.cookies[COOKIE_OR_HEADER_NAME_AUTHTOKEN];

    // fetch appearance (batch operation to fetch current user if applied)
    if (shouldFetchAppearance) {
      const userAndAppearance = await fetchUserAndAppearance(
        tiInstance,
        requestCookieAuthToken,
        isProduction
      );
      currentUser = userAndAppearance.currentUser;
      appearanceBlock = userAndAppearance.appearanceBlock;
    }

    // fetch current user
    const canUseConfigEmail = !isProduction && tiInstance.email;
    const shouldFetchUser =
      (!!requestCookieAuthToken || canUseConfigEmail) && !Object.keys(currentUser).length;

    if (shouldFetchUser) {
      currentUser = await fetchUser(tiInstance, requestCookieAuthToken, isProduction);
    }

    const url = req.originalUrl;
    // Check if this is a Client Routing JSON request
    const isClientRoutingRequest = url.includes('.pageContext.json');

    const result = await initPageContext(
      url,
      renderPage,
      currentUser,
      appearanceBlock,
      heliumEndpoint,
      isProduction,
      null,
      requestCookieAuthToken,
      port
    );

    const { httpResponse, redirectTo } = result;

    if (redirectTo) {
      res.redirect(redirectTo);
    } else if (isClientRoutingRequest) {
      // Client Routing: Handle JSON request
      // Vike returns the pageContext in httpResponse.body for .pageContext.json requests
      if (httpResponse) {
        const { statusCode, body } = httpResponse;
        // Set proper content type for JSON responses
        if (body && (body.startsWith('{') || body.startsWith('['))) {
          res.setHeader('Content-Type', 'application/json');
        }
        res.status(statusCode).send(body);
      } else {
        // Fallback if no response
        res.status(404).json({ error: 'Page context not found' });
      }
    } else {
      // Regular HTML response (Server Routing or initial Client Routing load)
      if (!httpResponse) return next();

      const { statusCode, body } = httpResponse;
      res.status(statusCode).send(body);
    }
  });

  return app;
}
