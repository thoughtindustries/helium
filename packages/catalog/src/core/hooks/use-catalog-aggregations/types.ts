import { CatalogDriverState } from '../../driver';

export type CatalogAggregationsState = Pick<
  CatalogDriverState,
  | 'aggregations'
  | 'aggregationFilters'
  | 'isCurated'
  // token
  | 'token'
  | 'tokenLabel'
>;
