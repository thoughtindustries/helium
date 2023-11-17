import React, { ReactElement } from 'react';
import { LoadingDots } from '@thoughtindustries/content';
import { useCatalog } from './core';

interface CatalogLoaderProps {
  children: ReactElement;
}

const CatalogLoader = ({ children }: CatalogLoaderProps): JSX.Element => {
  const { isLoading } = useCatalog();

  if (isLoading) {
    return <LoadingDots />;
  }

  return children;
};

CatalogLoader.displayName = 'CatalogLoader';
export default CatalogLoader;
