import { useCatalogSlice } from '../use-catalog';
import { CatalogFiltersState } from './types';

export default function useCatalogFilters() {
  const mapper = ({
    searchTerm,
    // aggregation filter
    aggregationFilters,
    // token
    token,
    tokenLabel,
    // content types
    contentTypes,
    resultContentTypes,
    contentTypeFilterEnabled,
    // sort
    sort,
    enabledSorts,
    // display type
    displayType,
    enabledDisplayTypes,
    resultsDisplayType
  }: CatalogFiltersState) => ({
    searchTerm,
    // aggregation filter
    aggregationFilters,
    // token
    token,
    tokenLabel,
    // content types
    contentTypes,
    resultContentTypes,
    contentTypeFilterEnabled,
    // sort
    sort,
    enabledSorts,
    // display type
    displayType,
    enabledDisplayTypes,
    resultsDisplayType
  });
  return useCatalogSlice(mapper);
}
