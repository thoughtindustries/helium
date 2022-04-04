import { setContext } from '@apollo/client/link/context/context.cjs';
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries/persisted-queries.cjs';
import { BatchHttpLink } from '@apollo/client/link/batch-http/batch-http.cjs';
import { ApolloClient, InMemoryCache } from '@apollo/client/core/core.cjs';

export default async function makeApolloClient(
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
    const cryptoHash = await import('crypto-hash');
    const { sha256 } = cryptoHash;
    link = link.concat(createPersistedQueryLink({ sha256 }));
  }

  const endpoint = !isProduction ? '/graphql' : heliumEndpoint;

  link = link.concat(
    new BatchHttpLink({
      uri: endpoint
    })
  );

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache().restore(apolloInitialState)
  });

  return client;
}
