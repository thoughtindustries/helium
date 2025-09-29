import React, { Suspense } from 'react';
import { PageWrapper } from './PageWrapper';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { ApolloProvider } from '@apollo/client';
import { getPageMeta } from './getPageMeta';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { PageContext } from '../types';

// See https://vike.dev/data-fetching
export const passToClient = [
  'pageProps',
  // 'urlParsed', // Automatically available with Client Routing - don't pass
  // 'urlPathname', // Automatically available with Client Routing - don't pass
  'apolloInitialState',
  'heliumEndpoint',
  'appearance',
  'documentProps',
  'currentUser',
  'isProduction',
  'queryParams',
  'authToken',
  'routeParams',
  'assetUrls'
];

export { render };

type RenderFn = (pageContext: PageContext) => Promise<{
  documentHtml: ReturnType<typeof escapeInject>;
  pageContext: Record<string, any>;
}>;
const render: RenderFn = async pageContext => {
  const { Page, pageProps, apolloClient, appearance, currentUser, queryParams, assetUrls } =
    pageContext;

  // See https://vike.dev/html-head
  const documentProps = getPageMeta(pageContext);
  const title = (documentProps && documentProps.title) || 'Vite SSR app';
  const desc = (documentProps && documentProps.description) || 'App using Vite + vike';

  if (currentUser && currentUser.lang) {
    i18n.changeLanguage(currentUser.lang);
  }

  const tree = (
    <Suspense fallback="Loading...">
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
    </Suspense>
  );

  const pageHtml = await getDataFromTree(tree);
  const apolloInitialState = apolloClient.extract();

  // Build asset tags if provided (from Worker environment)
  let assetTags = '';
  if (assetUrls) {
    // Add CSS files
    if (assetUrls.styles && assetUrls.styles.length > 0) {
      assetTags += assetUrls.styles.map(url => `<link rel="stylesheet" href="${url}">`).join('\n');
    }
    // Add JavaScript files
    if (assetUrls.scripts && assetUrls.scripts.length > 0) {
      assetTags +=
        '\n' +
        assetUrls.scripts.map(url => `<script type="module" src="${url}"></script>`).join('\n');
    }
  }

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        ${dangerouslySkipEscape(assetTags)}
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      apolloInitialState
    }
  };
};
