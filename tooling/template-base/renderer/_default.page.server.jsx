import React from 'react';
import { PageWrapper } from './PageWrapper';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import logoUrl from './logo.svg';
import { ApolloProvider } from '@apollo/client';
import { renderToStringWithData } from '@apollo/client/react/ssr';
import { getPageMeta } from './getPageMeta';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

export { render };
export { onBeforeRender };

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = [
  'pageProps',
  'urlPathname',
  'apolloIntialState',
  'heliumEndpoint',
  'appearance',
  'documentProps',
  'currentUser',
  'isProduction',
  'queryParams'
];

async function render(pageContext) {
  const { pageHtml } = pageContext;

  // See https://vite-plugin-ssr.com/html-head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || 'Vite SSR app';
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr';

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
  const { Page, pageProps, apolloClient, appearance, currentUser, urlParsed } = pageContext;
  const queryParams = urlParsed.search || {};
  const documentProps = getPageMeta(pageContext);

  if (currentUser && currentUser.lang) {
    i18n.changeLanguage(currentUser.lang);
  }

  const App = (
    <ApolloProvider client={apolloClient}>
      <I18nextProvider i18n={i18n}>
        <PageWrapper pageContext={pageContext}>
          <Page
            {...pageProps}
            appearance={appearance}
            currentUser={currentUser}
            queryParams={queryParams}
          />
        </PageWrapper>
      </I18nextProvider>
    </ApolloProvider>
  );

  const pageHtml = await renderToStringWithData(App);
  const apolloIntialState = apolloClient.extract();

  return { pageContext: { pageHtml, apolloIntialState, documentProps, queryParams } };
}
