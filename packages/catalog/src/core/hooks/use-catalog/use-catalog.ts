import React from 'react';
import { CatalogContext } from '../../components/catalog-provider';

/**
 * The `useCatalog` hook provides access to the catalog context. It must be a descendent of a `CatalogProvider` component.
 */
export default function useCatalog() {
  const context = React.useContext(CatalogContext);

  if (!context) {
    throw new Error('Expected a Catalog Context, but no Catalog Context was found');
  }

  return context;
}
