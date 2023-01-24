import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { PageWrapper } from './PageWrapper';
import { ApolloProvider } from '@apollo/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { PageContext } from '../types';
import makeApolloClient from '@thoughtindustries/helium-server/make-apollo-client';

export { render };

async function render(pageContext: PageContext) {
  const {
    Page,
    pageProps,
    heliumEndpoint,
    apolloInitialState,
    appearance,
    currentUser,
    isProduction,
    queryParams,
    authToken
  } = pageContext;

  console.log('>>>pageProps: ', pageProps);
  console.log('>>>PageContext: ', pageContext);

  const apolloClient = await makeApolloClient(
    heliumEndpoint,
    apolloInitialState,
    isProduction,
    authToken
  );

  if (currentUser && currentUser.lang) {
    i18n.changeLanguage(currentUser.lang);
  }

  console.log(pageContext.routeParams);

  hydrateRoot(
    document.getElementById('page-view')!,
    <ApolloProvider client={apolloClient}>
      <I18nextProvider i18n={i18n}>
        <PageWrapper pageContext={pageContext}>
          <Page
            {...pageProps}
            appearance={appearance}
            currentUser={currentUser}
            queryParams={queryParams}
            routeParams={pageContext.routeParams}
          />
        </PageWrapper>
      </I18nextProvider>
    </ApolloProvider>
  );
}
