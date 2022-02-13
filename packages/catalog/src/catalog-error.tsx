import React, { ReactElement } from 'react';
import { useCatalogError } from './core';

const CatalogError = ({ children }: { children: ReactElement }): JSX.Element => {
  const { error } = useCatalogError();

  if (error) {
    return <>{error}</>;
  }

  return children;
};

CatalogError.displayName = 'CatalogError';
export default CatalogError;
