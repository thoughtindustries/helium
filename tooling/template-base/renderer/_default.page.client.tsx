import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { PageWrapper } from './PageWrapper';
import { ApolloProvider } from '@apollo/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { PageContext } from '../types';
import makeApolloClient from '@thoughtindustries/helium-server/make-apollo-client';
import { ErrorBoundary } from 'react-error-boundary';

export { render };
export const clientRouting = true;

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

  const apolloClient = await makeApolloClient(
    heliumEndpoint,
    apolloInitialState,
    isProduction,
    authToken
  );

  if (currentUser && currentUser.lang) {
    i18n.changeLanguage(currentUser.lang);
  }

  const logError = (error: Error, info: { componentStack: string }) => {
    console.log(error, info);
  };

  function Fallback({ error }: { error: Error }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.

    return (
      <div role="alert">
        <p className="text-xl text-bold">Something went wrong!</p>
        {error?.message && <pre className="">{error.message}</pre>}
      </div>
    );
  }

  const pageViewElement = document.getElementById('page-view');
  if (!pageViewElement) {
    console.error('Could not find page-view element for hydration');
    return;
  }

  hydrateRoot(
    pageViewElement,
    <ErrorBoundary FallbackComponent={Fallback} onError={logError}>
      <ApolloProvider client={apolloClient}>
        <I18nextProvider i18n={i18n}>
          <PageWrapper pageContext={pageContext}>
            <Page
              {...pageProps}
              appearance={appearance}
              currentUser={currentUser}
              queryParams={queryParams}
            />
          </PageWrapper>
        </I18nextProvider>
      </ApolloProvider>
    </ErrorBoundary>
  );
}
