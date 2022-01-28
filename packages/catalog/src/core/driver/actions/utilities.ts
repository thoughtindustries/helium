import { DEFAULT_PAGE } from '../constants';
import { CatalogDriverState } from '../types';

export function reset(): Partial<CatalogDriverState> {
  return {
    aggregationFilters: [],
    contentTypes: [],
    searchTerm: undefined,
    token: undefined,
    tokenLabel: undefined,
    page: DEFAULT_PAGE
  };
}
