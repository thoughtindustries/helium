import { CatalogParams } from './types';

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 48;
export const SORT_DELIMITER = ':';

export const DEFAULT_PARAMS: CatalogParams = {
  // default request params
  page: DEFAULT_PAGE,
  aggregationFilters: [],
  contentTypes: [],
  // default response data
  results: [],
  aggregations: [],
  hasMore: false,
  isCurated: false,
  enabledSorts: [],
  enabledDisplayTypes: [],
  resultContentTypes: [],
  contentTypeFilterEnabled: false,
  displayStartDateEnabled: false,
  displayAuthorsEnabled: false,
  displayDescriptionOnCalendar: false,
  // default general params
  isLoading: false,
  pageSize: DEFAULT_PAGE_SIZE
};
