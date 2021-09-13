import ReactDOMServer from "react-dom/server";
import React from "react";
import { PageWrapper } from "./PageWrapper";
import { html } from "vite-plugin-ssr";
import logoUrl from "./logo.svg";
import memCache from 'graphql-hooks-memcache';
import GraphQLClient, { ClientContext } from 'graphql-hooks';
import { getInitialState } from 'graphql-hooks-ssr';

export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

async function render(pageContext) {
  const { tiInstance } = pageContext;
  const { instanceUrl } = tiInstance;

  const client = new GraphQLClient({
    url: `${instanceUrl}/graphql`,
    cache: memCache()
  });

  const App = (
    <ClientContext.Provider value={client}>
      <ServerLocation url={pageContext.url}>
        <PageWrapper pageContext={pageContext}>
          <Page {...pageProps} />
        </PageWrapper>
      </ServerLocation>
    </ClientContext.Provider>
  )

  const initialState = await getInitialState({ App, client })

  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    App
  );

  // See https://vite-plugin-ssr.com/html-head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc = (documentProps && documentProps.description) || "App using Vite + vite-plugin-ssr";

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${html.dangerouslySkipEscape(pageHtml)}</div>
        <script type="text/javascript">
            window.__INITIAL_STATE__=${JSON.stringify(initialState).replace(
              /</g,
              '\\u003c'
            )};
          </script>
      </body>
    </html>`;
}
