import React, { ReactElement } from 'react';
import { useCatalog } from '@thoughtindustries/catalog';

const CatalogError = ({ children }: { children: ReactElement }): JSX.Element => {
  const { params } = useCatalog();
  const { error } = params;

  if (error) {
    return <>{error}</>;
  }

  return children;
};

CatalogError.displayName = 'CatalogError';
export default CatalogError;
