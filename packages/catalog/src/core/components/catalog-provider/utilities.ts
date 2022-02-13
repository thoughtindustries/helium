import { AggregationFilter, CatalogDriverState } from '../../driver';
import { CatalogSearchQuery } from './types';

const toInteger = (str: string): number => parseInt(str, 10);

const parsePageFromQueryParams = (params: CatalogSearchQuery): number | undefined => {
  const page = params.page;
  if (!page) {
    return;
  }
  const parsedPage = toInteger(page);
  if (isNaN(parsedPage) || parsedPage < 1) {
    return;
  }
  return parsedPage;
};

const parseAggregationFiltersFromQueryParams = (
  params: CatalogSearchQuery
): AggregationFilter[] | undefined => {
  const labels = params.labels;
  const values = params.values;
  if (!labels || !values) {
    return;
  }
  try {
    const parsedLabels = JSON.parse(labels) as string[];
    const parsedValues = JSON.parse(values) as string[];
    return parsedLabels.reduce((acc, label, index) => {
      if (index in parsedValues && parsedValues[index]) {
        acc.push({ label, value: parsedValues[index] });
      }
      return acc;
    }, [] as AggregationFilter[]);
  } catch {
    return;
  }
};

const parseSearchTermFromQueryParams = (params: CatalogSearchQuery): string | undefined => {
  const searchTerm = params.query;
  if (!searchTerm) {
    return;
  }
  return searchTerm;
};

const parseTokenFromQueryParams = (params: CatalogSearchQuery): string | undefined => {
  const token = params.token;
  if (!token) {
    return;
  }
  return token;
};

export const paramsToState = (params?: CatalogSearchQuery): Partial<CatalogDriverState> => {
  const state: Partial<CatalogDriverState> = {};

  if (!params) {
    return state;
  }

  const page = parsePageFromQueryParams(params);
  if (page) {
    state.page = page;
  }

  const aggregationFilters = parseAggregationFiltersFromQueryParams(params);
  if (aggregationFilters) {
    state.aggregationFilters = aggregationFilters;
  }

  const searchTerm = parseSearchTermFromQueryParams(params);
  if (searchTerm) {
    state.searchTerm = searchTerm;
  }

  const token = parseTokenFromQueryParams(params);
  if (token) {
    state.token = token;
  }

  return state;
};
