import { CatalogDriverActions, CatalogDriverState } from '../../driver';

export type CatalogFiltersState = Pick<
  CatalogDriverState & CatalogDriverActions,
  // search term
  | 'searchTerm'
  | 'setSearchTerm'
  | 'removeSearchTerm'
  // aggregation filter
  | 'aggregationFilters'
  | 'removeAggregationFilter'
  // token
  | 'token'
  | 'tokenLabel'
  | 'removeToken'
  // content types
  | 'contentTypes'
  | 'resultContentTypes'
  | 'contentTypeFilterEnabled'
  | 'addContentType'
  | 'removeContentType'
  // sort
  | 'sort'
  | 'enabledSorts'
  | 'setSort'
  // display type
  | 'displayType'
  | 'enabledDisplayTypes'
  | 'resultsDisplayType'
  | 'setDisplayType'
>;
