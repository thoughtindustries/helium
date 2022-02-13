import { useMemo } from 'react';
import { useCatalogSlice } from '../use-catalog';
import { CatalogPaginationState } from './types';

export default function useCatalogPagination() {
  const mapper = ({ page, pageSize, total }: CatalogPaginationState) => ({
    page,
    pageSize,
    total
  });
  const stateSlice = useCatalogSlice(mapper);
  return useMemo(() => stateSlice, [stateSlice]);
}
