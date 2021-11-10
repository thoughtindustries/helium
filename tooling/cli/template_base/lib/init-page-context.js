const fetch = require('isomorphic-unfetch');
const { ApolloClient, InMemoryCache } = require('@apollo/client');
const { BatchHttpLink } = require('@apollo/client/link/batch-http');
const { createPersistedQueryLink } = require('@apollo/client/link/persisted-queries');
const crypto = require('crypto');
const { print } = require('graphql/language/printer');
const { parse } = require('graphql/language');

module.exports = { initPageContext };

async function initPageContext(url, tiInstance, renderPage, currentUser, appearance, isProduction) {
  const { apolloClient, heliumEndpoint } = makeApolloClient(tiInstance, isProduction);
  const pageContextInit = {
    url,
    tiInstance,
    apolloClient,
    heliumEndpoint,
    appearance,
    currentUser,
    isProduction
  };

  const pageContext = await renderPage(pageContextInit);

  return pageContext;
}

function makeApolloClient(tiInstance, isProduction) {
  const heliumEndpoint = `${tiInstance.instanceUrl}/helium`;
  let link = new BatchHttpLink({
    uri: heliumEndpoint,
    fetch
  });

  if (isProduction) {
    link = createPersistedQueryLink({
      sha256: source => hashQuerySource(source)
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

function hashQuerySource(querySource) {
  const query = print(parse(querySource));

  return crypto
    .createHash('sha256')
    .update(query)
    .digest('hex');
}
