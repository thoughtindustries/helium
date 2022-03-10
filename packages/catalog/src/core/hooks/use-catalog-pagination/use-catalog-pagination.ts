import { useCatalogSlice } from '../use-catalog';
import { CatalogPaginationState } from './types';

export default function useCatalogPagination() {
  const mapper = ({ page, pageSize, total }: CatalogPaginationState) => ({
    page,
    pageSize,
    total
  });
  return useCatalogSlice(mapper);
}
