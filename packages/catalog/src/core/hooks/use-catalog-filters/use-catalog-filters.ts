import { useMemo } from 'react';
import { useCatalogSlice } from '../use-catalog';
import { CatalogFiltersState } from './types';

export default function useCatalogFilters() {
  const mapper = ({
    searchTerm,
    setSearchTerm,
    removeSearchTerm,
    // aggregation filter
    aggregationFilters,
    removeAggregationFilter,
    // token
    token,
    tokenLabel,
    removeToken,
    // content types
    contentTypes,
    resultContentTypes,
    contentTypeFilterEnabled,
    addContentType,
    removeContentType,
    // sort
    sort,
    enabledSorts,
    setSort,
    // display type
    displayType,
    enabledDisplayTypes,
    resultsDisplayType,
    setDisplayType
  }: CatalogFiltersState) => ({
    searchTerm,
    setSearchTerm,
    removeSearchTerm,
    // aggregation filter
    aggregationFilters,
    removeAggregationFilter,
    // token
    token,
    tokenLabel,
    removeToken,
    // content types
    contentTypes,
    resultContentTypes,
    contentTypeFilterEnabled,
    addContentType,
    removeContentType,
    // sort
    sort,
    enabledSorts,
    setSort,
    // display type
    displayType,
    enabledDisplayTypes,
    resultsDisplayType,
    setDisplayType
  });
  const stateSlice = useCatalogSlice(mapper);
  return useMemo(() => stateSlice, [stateSlice]);
}
