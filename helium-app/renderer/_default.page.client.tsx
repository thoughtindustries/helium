import ReactDOM from 'react-dom';
import React from 'react';
import { getPage } from 'vite-plugin-ssr/client';
import { PageWrapper } from './PageWrapper';
import { ApolloProvider } from '@apollo/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { PageContext } from '../types';
import makeApolloClient from '@thoughtindustries/helium-server/make-apollo-client';

hydrate();

async function hydrate() {
  // For Client Routing we should use `useClientRouter()` instead of `getPage()`.
  // See https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage<PageContext>();
  const {
    Page,
    pageProps,
    heliumEndpoint,
    apolloInitialState,
    appearance,
    currentUser,
    isProduction,
    queryParams,
    authToken
  } = pageContext;

  const apolloClient = await makeApolloClient(
    heliumEndpoint,
    apolloInitialState,
    isProduction,
    authToken
  );

  if (currentUser && currentUser.lang) {
    i18n.changeLanguage(currentUser.lang);
  }

  ReactDOM.hydrate(
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
    </ApolloProvider>,
    document.getElementById('page-view')
  );
}
