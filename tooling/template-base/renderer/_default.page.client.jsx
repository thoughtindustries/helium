import ReactDOM from 'react-dom';
import React from 'react';
import { getPage } from 'vite-plugin-ssr/client';
import { PageWrapper } from './PageWrapper';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries';
import { setContext } from '@apollo/client/link/context';
import { sha256 } from 'crypto-hash';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

hydrate();

async function hydrate() {
  // For Client Routing we should use `useClientRouter()` instead of `getPage()`.
  // See https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage();
  const {
    Page,
    pageProps,
    heliumEndpoint,
    apolloIntialState,
    appearance,
    currentUser,
    isProduction,
    queryParams,
    authToken
  } = pageContext;

  const apolloClient = makeApolloClient(heliumEndpoint, apolloIntialState, isProduction, authToken);

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

function makeApolloClient(heliumEndpoint, apolloIntialState, isProduction, authToken) {
  let link = new BatchHttpLink({
    uri: heliumEndpoint,
    fetch: (uri, options) => {
      let endpoint = uri;

      if (!isProduction) {
        // proxy mutations in dev to avoid CORS errors
        const body = JSON.parse(options.body);
        const hasMutation = body.some(doc => doc.query.includes('mutation '));
        endpoint = hasMutation ? '/graphql' : uri;
      }

      return fetch(endpoint, options);
    }
  });

  if (isProduction) {
    const persistedLink = createPersistedQueryLink({ sha256 }).concat(link);
    link = setContext((_, { headers }) => {
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authToken: authToken ? `${authToken}` : ''
        }
      };
    }).concat(persistedLink);
  }

  return new ApolloClient({
    link,
    cache: new InMemoryCache().restore(apolloIntialState)
  });
}
