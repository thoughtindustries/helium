import { GlobalTypes } from '@thoughtindustries/content';
import {
  AggregationFilter,
  CatalogRequestParams,
  CatalogRequestURLParams,
  parseSort,
  Sort
} from '../parse-catalog-data';
import { CatalogURLSearchParams } from './types';

const toInteger = (str: string): number => parseInt(str, 10);

const parsePageFromQueryParams = (params: URLSearchParams): number | undefined => {
  const page = params.get(CatalogURLSearchParams.Page);
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
  params: URLSearchParams
): AggregationFilter[] | undefined => {
  const labels = params.get(CatalogURLSearchParams.AggregationLabels);
  const values = params.get(CatalogURLSearchParams.AggregationValues);
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

const parseTokenFromQueryParams = (params: URLSearchParams): string | undefined => {
  const token = params.get(CatalogURLSearchParams.Token);
  if (!token) {
    return;
  }
  return token;
};

const parseSearchTermFromQueryParams = (params: URLSearchParams): string | undefined => {
  const searchTerm = params.get(CatalogURLSearchParams.SearchTerm);
  if (!searchTerm) {
    return;
  }
  return searchTerm;
};

const parseContentTypesFromQueryParams = (params: URLSearchParams): string[] | undefined => {
  const contentTypes = params.get(CatalogURLSearchParams.ContentTypes);
  if (!contentTypes) {
    return;
  }
  try {
    return JSON.parse(contentTypes) as string[];
  } catch {
    return;
  }
};

const parseDisplayTypeFromQueryParams = (
  params: URLSearchParams
): GlobalTypes.ContentItemDisplayType | undefined => {
  const displayType = params.get(
    CatalogURLSearchParams.DisplayType
  ) as GlobalTypes.ContentItemDisplayType;
  if (!displayType) {
    return;
  }
  return displayType;
};

const parseSortFromQueryParams = (params: URLSearchParams): Sort | undefined => {
  const sort = params.get(CatalogURLSearchParams.Sort);
  if (!sort) {
    return;
  }
  return parseSort(sort);
};

export const toRequestParams = (params: URLSearchParams): Partial<CatalogRequestURLParams> => {
  const result: Partial<CatalogRequestParams> = {};

  const page = parsePageFromQueryParams(params);
  if (page) {
    result.page = page;
  }

  const aggregationFilters = parseAggregationFiltersFromQueryParams(params);
  if (aggregationFilters) {
    result.aggregationFilters = aggregationFilters;
  }

  const token = parseTokenFromQueryParams(params);
  if (token) {
    result.token = token;
  }

  const searchTerm = parseSearchTermFromQueryParams(params);
  if (searchTerm) {
    result.searchTerm = searchTerm;
  }

  const contentTypes = parseContentTypesFromQueryParams(params);
  if (contentTypes) {
    result.contentTypes = contentTypes;
  }

  const displayType = parseDisplayTypeFromQueryParams(params);
  if (displayType) {
    result.displayType = displayType;
  }

  const sort = parseSortFromQueryParams(params);
  if (sort) {
    result.sort = sort;
  }

  return result;
};
