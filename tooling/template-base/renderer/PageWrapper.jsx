import React from 'react';
import './tailwind.css';
import './PageWrapper.css';
import { PageContextProvider } from './usePageContext';
import PropTypes from 'prop-types';

export { PageWrapper };

function PageWrapper({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>{children}</PageContextProvider>
    </React.StrictMode>
  );
}

PageWrapper.propTypes = {
  pageContext: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};
