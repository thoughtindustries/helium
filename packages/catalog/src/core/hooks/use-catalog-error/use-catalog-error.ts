import { useMemo } from 'react';
import { useCatalogSlice } from '../use-catalog';
import { CatalogErrorState } from './types';

export default function useCatalogError() {
  const mapper = ({ error }: CatalogErrorState) => ({ error });
  const stateSlice = useCatalogSlice(mapper);
  return useMemo(() => stateSlice, [stateSlice]);
}
