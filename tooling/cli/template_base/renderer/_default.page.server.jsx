import ReactDOMServer from "react-dom/server";
import React from "react";
import { PageWrapper } from "./PageWrapper";
import { html } from "vite-plugin-ssr";
import logoUrl from "./logo.svg";
import { ClientContext } from 'graphql-hooks';
import { getInitialState } from 'graphql-hooks-ssr';

export { render };
export { addPageContext };

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname", "graphQLInitialState", "heliumEndpoint"];

async function render(pageContext) {
  const { pageHtml } = pageContext;

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
      </body>
    </html>`;
}

async function addPageContext(pageContext) {
  const { Page, pageProps, graphQLClient } = pageContext;
  const App = (
    <ClientContext.Provider value={graphQLClient}>
      <PageWrapper pageContext={pageContext}>
        <Page {...pageProps} />
      </PageWrapper>
    </ClientContext.Provider>
  );
  
  const graphQLInitialState = await getInitialState({App, client: graphQLClient});
  const pageHtml = ReactDOMServer.renderToString(App);

  return { pageHtml, graphQLInitialState };
}
