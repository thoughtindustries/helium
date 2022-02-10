const fetch = require('isomorphic-unfetch');
const { ApolloClient, InMemoryCache } = require('@apollo/client');
const { BatchHttpLink } = require('@apollo/client/link/batch-http');
const { createPersistedQueryLink } = require('@apollo/client/link/persisted-queries');
const { setContext } = require('@apollo/client/link/context');

module.exports = { initPageContext };

async function initPageContext(
  url,
  renderPage,
  currentUser,
  appearance,
  heliumEndpoint,
  isProduction,
  sha256,
  authToken
) {
  const { apolloClient } = makeApolloClient(heliumEndpoint, isProduction, sha256, authToken);
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

function makeApolloClient(heliumEndpoint, isProduction, sha256, authToken) {
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

  if (isProduction && sha256) {
    const persistedLink = createPersistedQueryLink({
      sha256
    }).concat(link);

    link = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authToken: authToken ? `${authToken}` : ''
        }
      };
    }).concat(persistedLink);
  }

  return {
    heliumEndpoint,
    apolloClient: new ApolloClient({
      ssrMode: true,
      link,
      cache: new InMemoryCache()
    })
  };
}
