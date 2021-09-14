import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { PageWrapper } from "./PageWrapper";
import { ClientContext } from 'graphql-hooks';
import { useGraphQLClient } from '../lib/graphql-client'

hydrate();

function GraphQLProvider({ tiInstance, children }) {
  const graphQLClient = useGraphQLClient(tiInstance);
  return (
    <ClientContext.Provider value={graphQLClient}>
      {children}
    </ClientContext.Provider>
  )
}

async function hydrate() {
  // For Client Routing we should use `useClientRouter()` instead of `getPage()`.
  // See https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage();
  const { Page, pageProps, tiInstance } = pageContext;

  ReactDOM.hydrate(
      <PageWrapper pageContext={pageContext}>
        <GraphQLProvider tiInstance={tiInstance}>
          <Page {...pageProps} />
        </GraphQLProvider>
      </PageWrapper>,
    document.getElementById("page-view")
  );
}
