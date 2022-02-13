import React, { ReactElement } from 'react';
import { useCatalogLoader } from './core';

const CatalogLoader = ({ children }: { children: ReactElement }): JSX.Element => {
  const { isLoading } = useCatalogLoader();

  if (isLoading) {
    return (
      <div className="loading__spinner">
        I am loading
        <div className="loading__spinner__bounce1"></div>
        <div className="loading__spinner__bounce2"></div>
        <div className="loading__spinner__bounce3"></div>
      </div>
    );
  }

  return children;
};

CatalogLoader.displayName = 'CatalogLoader';
export default CatalogLoader;
