import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { PageWrapper } from './PageWrapper';
import { ApolloProvider } from '@apollo/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { PageContext } from '../types';
import makeApolloClient from '@thoughtindustries/helium-server/make-apollo-client';
import { ErrorBoundary } from 'react-error-boundary';

export { render };

// IMPORTANT: The mere PRESENCE of this export enables Client Routing!
// To use Server Routing: Comment out or remove the export entirely
// To use Client Routing: Uncomment the export (any value works, but true is conventional)
// export const clientRouting = true;

// Keep track of the React root for Client Routing
let root: ReturnType<typeof createRoot> | null = null;
let isHydrated = false; // Track if we've already hydrated
// Track current Apollo Client for proper cleanup
let currentApolloClient: ReturnType<typeof makeApolloClient> | null = null;

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

  // Clean up previous Apollo Client to prevent memory leaks
  if (currentApolloClient) {
    // Stop all active queries and subscriptions
    currentApolloClient.stop();
    // Clear the store to free up memory
    await currentApolloClient.clearStore();
    currentApolloClient = null;
  }

  // Create Apollo Client - always create fresh on client side
  const apolloClient = await makeApolloClient(
    heliumEndpoint,
    apolloInitialState,
    isProduction,
    authToken
  );

  // Track the current client
  currentApolloClient = apolloClient;

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
    console.error('Could not find page-view element');
    return;
  }

  const app = (
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

  // For Client Routing: check if this is the first render or a navigation
  if (pageContext.isHydration !== false && !isHydrated) {
    // Initial page load - hydrate the server-rendered HTML (only once)
    root = hydrateRoot(pageViewElement, app);
    isHydrated = true;
  } else {
    // Client-side navigation - reuse the root for all subsequent renders
    if (!root) {
      // Fallback: create root if somehow it doesn't exist
      root = createRoot(pageViewElement);
    }
    root.render(app);
  }
}
