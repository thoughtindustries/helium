import { CatalogContentQueryVariables } from '@thoughtindustries/content';
import { DEFAULT_PAGE } from './constants';
import parseAggregationFilters from './parse-aggregation-filters';
import serializeSort from './serialize-sort';
import { CatalogState } from './types';

const parseRequestParamsFromState = (state: CatalogState): CatalogContentQueryVariables => {
  const {
    page = DEFAULT_PAGE,
    token,
    sort,
    displayType,
    resultsDisplayType,
    aggregationFilters,
    searchTerm,
    contentTypes
  } = state;
  const sortParam = sort && serializeSort(sort);
  const displayTypeParam = displayType || resultsDisplayType;
  const transformedFilters = parseAggregationFilters(aggregationFilters);
  return {
    page,
    sort: sortParam,
    resultsDisplayType: displayTypeParam,
    token,
    contentTypes,
    query: searchTerm,
    labels: transformedFilters.labels,
    values: transformedFilters.values
  };
};

export default parseRequestParamsFromState;
