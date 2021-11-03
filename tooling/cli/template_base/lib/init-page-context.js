const fetch = require('isomorphic-unfetch');
const memCache = require('graphql-hooks-memcache');
const { GraphQLClient } = require('graphql-hooks');

module.exports = { initPageContext };

async function initPageContext(url, tiInstance, renderPage, currentUser) {
  const { accentColor, secondaryColor, linkColor, font, altFont, logoAsset } = tiInstance;
  const appearanceSettings = { accentColor, secondaryColor, linkColor, font, altFont, logoAsset };
  const { graphQLClient, heliumEndpoint } = makeGraphQLClient(tiInstance);
  const pageContextInit = {
    url,
    tiInstance,
    graphQLClient,
    heliumEndpoint,
    appearanceSettings,
    currentUser
  };

  const pageContext = await renderPage(pageContextInit);

  return pageContext;
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
