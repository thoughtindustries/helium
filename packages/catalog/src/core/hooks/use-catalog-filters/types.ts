import { CatalogState } from '../../utilities/parse-catalog-state';

export type CatalogFiltersState = Pick<
  CatalogState,
  // search term
  | 'searchTerm'
  // aggregation filter
  | 'aggregationFilters'
  // token
  | 'token'
  | 'tokenLabel'
  // content types
  | 'contentTypes'
  | 'resultContentTypes'
  | 'contentTypeFilterEnabled'
  // sort
  | 'sort'
  | 'enabledSorts'
  // display type
  | 'displayType'
  | 'enabledDisplayTypes'
  | 'resultsDisplayType'
>;
