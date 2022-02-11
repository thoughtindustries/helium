import React from 'react';
import './tailwind.css';
import './PageWrapper.css';
import { PageContextProvider } from './usePageContext';
import { PageWrapperProps } from './../types';

export { PageWrapper };

function PageWrapper({ pageContext, children }: PageWrapperProps): JSX.Element {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>{children}</PageContextProvider>
    </React.StrictMode>
  );
}
