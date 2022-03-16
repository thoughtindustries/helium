import React, { ReactElement } from 'react';
import { useCatalog } from './core';

const CatalogError = ({ children }: { children: ReactElement }): JSX.Element => {
  const { state } = useCatalog();
  const { error } = state;

  if (error) {
    return <>{error}</>;
  }

  return children;
};

CatalogError.displayName = 'CatalogError';
export default CatalogError;
