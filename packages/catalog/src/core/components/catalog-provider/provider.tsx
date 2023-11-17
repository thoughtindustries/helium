import React, { FC } from 'react';
import { CatalogProviderProps } from './types';
import CatalogServerProvider from './server-provider';
import CatalogClientProvider from './client-provider';

/**
 * Catalog provider renders nested providers based on prop `ssr`. The nested providers
 * differ in where the data-fetching takes place, either in server or client contexts.
 * Both nested providers are for internal use only.
 */
const CatalogProvider: FC<CatalogProviderProps> = ({ children, ...restProps }) => {
  const { ssr } = restProps;

  if (ssr) {
    return <CatalogServerProvider {...restProps}>{children}</CatalogServerProvider>;
  }

  return <CatalogClientProvider {...restProps}>{children}</CatalogClientProvider>;
};

export default CatalogProvider;
