import { useMemo } from 'react';
import { useCatalogSlice } from '../use-catalog';
import { CatalogLoaderState } from './types';

export default function useCatalogLoader() {
  const mapper = ({ isLoading }: CatalogLoaderState) => ({ isLoading });
  const stateSlice = useCatalogSlice(mapper);
  return useMemo(() => stateSlice, [stateSlice]);
}
