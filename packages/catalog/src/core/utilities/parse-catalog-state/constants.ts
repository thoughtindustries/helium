import { CatalogState } from './types';

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 6;
export const SORT_DELIMITER = ':';

export const DEFAULT_STATE: CatalogState = {
  // default request state
  page: DEFAULT_PAGE,
  aggregationFilters: [],
  contentTypes: [],
  // default response state
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
  // default general state
  isLoading: false,
  pageSize: DEFAULT_PAGE_SIZE
};
