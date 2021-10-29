const fetch = require('isomorphic-unfetch');
const {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} = require("@apollo/client");
const configJson = require('./../ti-config');

module.exports = { initPageContext };

async function initPageContext(url, instanceName, renderPage) {
  const tiInstance = findTInstance(instanceName);
  const { accentColor, secondaryColor, linkColor, font, altFont, logoAsset } = tiInstance;
  const appearanceSettings = { accentColor, secondaryColor, linkColor, font, altFont, logoAsset };
  const { apolloClient, heliumEndpoint } = makeApolloClient(tiInstance);
  const pageContextInit = {
    url,
    tiInstance,
    apolloClient,
    heliumEndpoint,
    appearanceSettings
  };

  const pageContext = await renderPage(pageContextInit);
  return pageContext;
}

function findTInstance(instanceName) {
  const { instances = [] } = configJson;
  let instance = instances[0];

  if (instanceName) {
    const possibleMatch = instances.find(instance => instance.nickname === instanceName);
    if (possibleMatch && possibleMatch.apiKey) {
      instance = possibleMatch;
    }
  }

  return instance;
}

function makeApolloClient(tiInstance) {
  const heliumEndpoint = `${tiInstance.instanceUrl}/helium?apiKey=${tiInstance.apiKey}`;
  return {
    heliumEndpoint,
    apolloClient: new ApolloClient({
      ssrMode: true,
      link: createHttpLink({
        uri: heliumEndpoint,
        fetch,
      }),
      cache: new InMemoryCache(),
    })
  };
}
