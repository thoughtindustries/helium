import ReactDOMServer from "react-dom/server";
import React from "react";
import { PageWrapper } from "./PageWrapper";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import logoUrl from "./logo.svg";
import { ClientContext } from 'graphql-hooks';
import { getInitialState } from 'graphql-hooks-ssr';

export { render };
export { onBeforeRender };

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname", "graphQLInitialState", "heliumEndpoint", "appearanceSettings"];

async function render(pageContext) {
  const { pageHtml } = pageContext;

  // See https://vite-plugin-ssr.com/html-head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc = (documentProps && documentProps.description) || "App using Vite + vite-plugin-ssr";

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}

async function onBeforeRender(pageContext) {
  const { Page, pageProps, graphQLClient, appearanceSettings } = pageContext;
  const propsAndAppearance = { ...pageProps, ...appearanceSettings };
  const App = (
    <ClientContext.Provider value={graphQLClient}>
      <PageWrapper pageContext={pageContext}>
        <Page {...propsAndAppearance} />
      </PageWrapper>
    </ClientContext.Provider>
  );
  
  const graphQLInitialState = await getInitialState({App, client: graphQLClient});
  const pageHtml = ReactDOMServer.renderToString(App);

  return {pageContext: { pageHtml, graphQLInitialState }};
}
