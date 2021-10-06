const fetch = require('isomorphic-unfetch');
const memCache = require('graphql-hooks-memcache');
const { GraphQLClient } = require('graphql-hooks');
const configJson = require('./../ti-config');

module.exports = { initPageContext };

async function initPageContext(url, instanceName, renderPage) {
  const tiInstance = findTInstance(instanceName);
  const { accentColor, secondaryColor, linkColor, font, altFont, logoAsset } = tiInstance;
  const appearanceSettings = { accentColor, secondaryColor, linkColor, font, altFont, logoAsset };
  const { graphQLClient, heliumEndpoint } = makeGraphQLClient(tiInstance);
  const pageContextInit = {
    url,
    tiInstance,
    graphQLClient,
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

function makeGraphQLClient(tiInstance) {
  const heliumEndpoint = `${tiInstance.instanceUrl}/helium?apiKey=${tiInstance.apiKey}`;
  return {
    heliumEndpoint,
    graphQLClient: new GraphQLClient({
      ssrMode: true,
      url: heliumEndpoint,
      cache: memCache(),
      fetch
    })
  };
}
