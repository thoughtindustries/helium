import { useCatalogSlice } from '../use-catalog';
import { CatalogAggregationsState } from './types';

export default function useCatalogAggregations() {
  const mapper = ({
    aggregations,
    aggregationFilters,
    isCurated,
    // token
    token,
    tokenLabel
  }: CatalogAggregationsState) => ({
    aggregations,
    aggregationFilters,
    isCurated,
    // token
    token,
    tokenLabel
  });
  return useCatalogSlice(mapper);
}
