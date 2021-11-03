import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { PageWrapper } from "./PageWrapper";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import 'virtual:windi.css'

hydrate();

async function hydrate() {
  // For Client Routing we should use `useClientRouter()` instead of `getPage()`.
  // See https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage();
  const { Page, pageProps, heliumEndpoint, apolloIntialState, appearanceSettings, currentUser } = pageContext;
  const propsAndAppearance = { ...pageProps, ...appearanceSettings };
  const apolloClient = makeApolloClient(heliumEndpoint, apolloIntialState);

  ReactDOM.hydrate(
    <ApolloProvider client={apolloClient}>
      <PageWrapper pageContext={pageContext}>
        <Page {...propsAndAppearance} currentUser={currentUser} />
      </PageWrapper>
    </ApolloProvider>,
    document.getElementById("page-view")
  );
}

function makeApolloClient(heliumEndpoint, apolloIntialState) {
  return new ApolloClient({
    link: new BatchHttpLink({ 
      uri: heliumEndpoint
    }),
    cache: new InMemoryCache().restore(apolloIntialState),
  })
}