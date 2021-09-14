import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { PageWrapper } from "./PageWrapper";
import { ClientContext } from 'graphql-hooks';
import { GraphQLClient } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';

hydrate();

async function hydrate() {
  // For Client Routing we should use `useClientRouter()` instead of `getPage()`.
  // See https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage();
  const { Page, pageProps, tiInstance, graphQLInitialState } = pageContext;
  const graphQLClient = makeGraphQLClient(tiInstance, graphQLInitialState);

  ReactDOM.hydrate(
      <ClientContext.Provider value={graphQLClient}>
        <PageWrapper pageContext={pageContext}>
          <Page {...pageProps} />
        </PageWrapper>
      </ClientContext.Provider>,
    document.getElementById("page-view")
  );
}

function makeGraphQLClient(tiInstance, graphQLInitialState) {
  return new GraphQLClient({
    url: `${tiInstance.instanceUrl}/graphql`,
    cache: memCache({ initialState: graphQLInitialState})
  })
}