const fetch = require('isomorphic-unfetch');
const { ApolloClient, InMemoryCache } = require('@apollo/client');
const { BatchHttpLink } = require('@apollo/client/link/batch-http');
const { createPersistedQueryLink } = require('@apollo/client/link/persisted-queries');

module.exports = { initPageContext };

async function initPageContext(
  url,
  renderPage,
  currentUser,
  appearance,
  heliumEndpoint,
  isProduction,
  sha256
) {
  const { apolloClient } = makeApolloClient(heliumEndpoint, isProduction, sha256);
  const pageContextInit = {
    url,
    apolloClient,
    heliumEndpoint,
    appearance,
    currentUser,
    isProduction
  };

  const pageContext = await renderPage(pageContextInit);

  return pageContext;
}

function makeApolloClient(heliumEndpoint, isProduction, sha256) {
  let link = new BatchHttpLink({
    uri: heliumEndpoint,
    fetch
  });

  if (isProduction && sha256) {
    link = createPersistedQueryLink({
      sha256
    }).concat(link);
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
