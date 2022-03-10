import { CatalogState } from '../../utilities/parse-catalog-state';

export type CatalogAggregationsState = Pick<
  CatalogState,
  | 'aggregations'
  | 'aggregationFilters'
  | 'isCurated'
  // token
  | 'token'
  | 'tokenLabel'
>;
