import fetch from 'isomorphic-unfetch';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries';
import { setContext } from '@apollo/client/link/context';

export default async function initPageContext(
  url,
  renderPage,
  currentUser,
  appearance,
  heliumEndpoint,
  isProduction,
  sha256,
  authToken,
  port
) {
  const apolloClient = makeApolloServerClient(
    heliumEndpoint,
    isProduction,
    sha256,
    authToken,
    port
  );

  const pageContextInit = {
    url,
    apolloClient,
    heliumEndpoint,
    appearance,
    currentUser,
    isProduction,
    authToken
  };

  const pageContext = await renderPage(pageContextInit);

  return pageContext;
}

function makeApolloServerClient(heliumEndpoint, isProduction, sha256, authToken, port) {
  const authTokenHeaders = authToken ? { authToken } : {};
  let link = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        ...authTokenHeaders
      }
    };
  });

  if (isProduction && sha256) {
    link = link.concat(
      createPersistedQueryLink({
        sha256
      })
    );
  }

  const endpoint = !isProduction && port ? `http://localhost:${port}/graphql` : heliumEndpoint;

  link = link.concat(
    new BatchHttpLink({
      uri: endpoint,
      fetch
    })
  );

  return new ApolloClient({
    ssrMode: true,
    link: link,
    cache: new InMemoryCache()
  });
}
