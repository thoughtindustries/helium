import {
  AggregationFilter,
  CatalogDriverRequestState,
  CatalogDriverRequestURLState
} from './types';
import { aggregationFiltersToParams } from './utilities';

type CatalogParsedURL = {
  pathname: string;
  searchString?: string;
};

type AggregationFilterWithComposedURL = {
  filter: AggregationFilter;
  url: string;
};

const toInteger = (str: string): number => parseInt(str, 10);

const parsePageFromQueryParams = (params: URLSearchParams): number | undefined => {
  const page = params.get('page');
  if (!page) {
    return;
  }
  const parsedPage = toInteger(page);
  if (isNaN(parsedPage) || parsedPage < 1) {
    return;
  }
  return parsedPage;
};

// TODO: validate inputs
const parseAggregationFiltersFromQueryParams = (
  params: URLSearchParams
): AggregationFilter[] | undefined => {
  const labels = params.get('labels');
  const values = params.get('values');
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
  const token = params.get('token');
  if (!token) {
    return;
  }
  return token;
};

const paramsToState = (params: URLSearchParams): Partial<CatalogDriverRequestURLState> => {
  const state: Partial<CatalogDriverRequestState> = {};

  const page = parsePageFromQueryParams(params);
  if (page) {
    state.page = page;
  }

  const aggregationFilters = parseAggregationFiltersFromQueryParams(params);
  if (aggregationFilters) {
    state.aggregationFilters = aggregationFilters;
  }

  const token = parseTokenFromQueryParams(params);
  if (token) {
    state.token = token;
  }

  return state;
};

/**
 * The URL Manager is responsible for parsing URL and composing URLs
 * for server side routing. When user interacts with the UI, user will
 * be redirected to the new route reflecting their interactions.
 *
 * Note that only CatalogDriver relevant query params are handled here.
 * For some URL navigations, the `page` param will be reset.
 * For non-relevant query params, composed URLs will carry them over.
 */

export default class CatalogURLManager {
  private readonly _pathname;
  private readonly _searchParams;
  private readonly _parsedState;

  constructor(parsedUrl: CatalogParsedURL) {
    const { pathname, searchString } = parsedUrl;
    this._pathname = pathname;
    this._searchParams = new URLSearchParams(searchString || undefined);
    this._parsedState = paramsToState(this._searchParams);
  }

  private _composeURL(searchString: string): string {
    if (!searchString) {
      return this._pathname;
    }
    return `${this._pathname}?${searchString}`;
  }

  /**
   * Parse the current URL into application state
   *
   * @returns URL state
   */
  getStateFromURL(): Partial<CatalogDriverRequestURLState> {
    return this._parsedState;
  }

  composeURLsForRemoveAggregationFilterBatch(
    filters: AggregationFilter[]
  ): AggregationFilterWithComposedURL[] {
    const { aggregationFilters = [] } = this._parsedState;
    return filters.reduce((acc, currentFilter) => {
      const { label: currentLabel, value: currentValue } = currentFilter;
      const clonedParams = new URLSearchParams(this._searchParams);
      const newFilters = aggregationFilters.filter(
        ({ label, value }) => label !== currentLabel && value !== currentValue
      );

      if (newFilters.length) {
        const transformedFilters = aggregationFiltersToParams(newFilters);
        clonedParams.set('labels', JSON.stringify(transformedFilters.labels));
        clonedParams.set('values', JSON.stringify(transformedFilters.values));
      } else {
        clonedParams.delete('labels');
        clonedParams.delete('values');
      }

      // reset page
      clonedParams.delete('page');
      acc.push({
        filter: currentFilter,
        url: this._composeURL(clonedParams.toString())
      });
      return acc;
    }, [] as AggregationFilterWithComposedURL[]);
  }

  composeURLForAddAggregationFilter(filter: AggregationFilter, isCurated: boolean): string {
    const { aggregationFilters = [] } = isCurated ? {} : this._parsedState;
    const clonedParams = new URLSearchParams(this._searchParams);
    const newFilters = [...aggregationFilters];
    newFilters.push(filter);
    const transformedFilters = aggregationFiltersToParams(newFilters);
    clonedParams.set('labels', JSON.stringify(transformedFilters.labels));
    clonedParams.set('values', JSON.stringify(transformedFilters.values));
    // reset page
    clonedParams.delete('page');
    return this._composeURL(clonedParams.toString());
  }

  composeURLForSetPage(page: number): string {
    const clonedParams = new URLSearchParams(this._searchParams);
    clonedParams.set('page', page.toString());
    return this._composeURL(clonedParams.toString());
  }

  composeURLForRemoveToken(): string {
    const clonedParams = new URLSearchParams(this._searchParams);
    clonedParams.delete('token');
    // reset page
    clonedParams.delete('page');
    return this._composeURL(clonedParams.toString());
  }
}
