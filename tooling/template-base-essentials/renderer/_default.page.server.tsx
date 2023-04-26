import React, { Suspense } from 'react';
import { PageWrapper } from './PageWrapper';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { ApolloProvider } from '@apollo/client';
import { getPageMeta } from './getPageMeta';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { PageContext } from '../types';

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = [
  'pageProps',
  'urlParsed',
  'urlPathname',
  'apolloInitialState',
  'heliumEndpoint',
  'appearance',
  'documentProps',
  'currentUser',
  'isProduction',
  'queryParams',
  'authToken'
];

export { render };

type RenderFn = (pageContext: PageContext) => Promise<{
  documentHtml: ReturnType<typeof escapeInject>;
  pageContext: Record<string, any>;
}>;
const render: RenderFn = async pageContext => {
  const { Page, pageProps, apolloClient, appearance, currentUser, queryParams } = pageContext;

  // See https://vite-plugin-ssr.com/html-head
  const documentProps = getPageMeta(pageContext);
  const title = (documentProps && documentProps.title) || 'Vite SSR app';
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr';

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

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
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
