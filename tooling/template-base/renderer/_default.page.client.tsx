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
import { PageContext } from './../types';

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

  const apolloClient = makeApolloClient(
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

function makeApolloClient(
  heliumEndpoint: string,
  apolloInitialState: Record<string, any>,
  isProduction: boolean,
  authToken: string | undefined
) {
  let link = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authToken: authToken ? `${authToken}` : ''
      }
    };
  });

  if (isProduction) {
    link = link.concat(createPersistedQueryLink({ sha256 }));
  }

  link = link.concat(
    new BatchHttpLink({
      uri: heliumEndpoint,
      fetch: (uri, options: RequestInit | undefined) => {
        let endpoint = uri;

        if (!isProduction) {
          // proxy mutations in dev to avoid CORS errors
          const reqBody =
            options && options.body && typeof options.body === 'string' ? options.body : null;

          if (reqBody) {
            const body = JSON.parse(reqBody);
            const hasMutation = body.some((doc: Record<string, string>) =>
              doc.query.includes('mutation ')
            );
            endpoint = hasMutation ? '/graphql' : uri;
          }
        }

        return fetch(endpoint, options);
      }
    })
  );

  return new ApolloClient({
    link,
    cache: new InMemoryCache().restore(apolloInitialState)
  });
}
