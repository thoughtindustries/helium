import { createBrowserHistory as createHistory, BrowserHistory } from 'history';
import {
  AggregationFilter,
  CatalogDriverRequestState,
  CatalogDriverRequestURLState
} from './types';
import { aggregationFiltersToParams } from './utilities';

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

const parseSearchTermFromQueryParams = (params: URLSearchParams): string | undefined => {
  const searchTerm = params.get('query');
  if (!searchTerm) {
    return;
  }
  return searchTerm;
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

const stateToParams = ({
  searchTerm,
  page,
  aggregationFilters,
  token
}: CatalogDriverRequestURLState): URLSearchParams => {
  const params = new URLSearchParams();
  if (page && page > 1) params.set('page', page.toString());
  if (searchTerm) params.set('query', searchTerm);
  if (aggregationFilters && aggregationFilters.length > 0) {
    const transformedFilters = aggregationFiltersToParams(aggregationFilters);
    params.set('labels', JSON.stringify(transformedFilters.labels));
    params.set('values', JSON.stringify(transformedFilters.values));
  }
  if (token) params.set('token', token);
  return params;
};

/**
 * The URL Manager is responsible for synchronizing state between
 * CatalogDriver and the URL. There are 3 main cases we handle when
 * synchronizing:
 *
 * 1. When the app loads, CatalogDriver will need to
 * read the current state from the URL, in order to perform the search
 * expressed by the query string. `getStateFromURL` is used for this case.
 *
 * 2. When the URL changes as a result of `pushState` or `replaceState`,
 * CatalogDriver will need to be notified and given the updated state, so that
 * it can re-run the current search. `onURLStateChange` is used for this case.
 *
 * 3. When state changes internally in the CatalogDriver, as a result of an
 * Action, it will need to notify the URLManager of the change. `pushStateToURL`
 * is used for this case.
 *
 * Note that only CatalogDriver relevant query params are synchronized with URL.
 * For non-relevant query params, upon `pushStateToURL`, URL will be synchronized and
 * discard these params.
 */

export default class URLManager {
  private readonly _history;
  private _lastPushSearchString;
  private _unlisten!: VoidFunction;

  constructor({ history }: { history?: BrowserHistory } = {}) {
    this._history = history || createHistory();
    this._lastPushSearchString = '';
  }

  /**
   * Parse the current URL into application state
   *
   * @returns URL state
   */
  getStateFromURL(): Partial<CatalogDriverRequestURLState> {
    const params = new URLSearchParams(this._history.location.search);
    return paramsToState(params);
  }

  /**
   * Push the current state of the application to the URL
   *
   * @param state - the request state from the CatalogDriver
   * @param options - when pushing state to the URL, use history 'replace'
   * rather than 'push' to avoid adding a new history entry
   */
  pushStateToURL(
    state: CatalogDriverRequestURLState,
    { replaceUrl = false }: { replaceUrl?: boolean } = {}
  ) {
    const paramsToString = stateToParams(state).toString();
    this._lastPushSearchString = paramsToString;
    const navigationFunction = replaceUrl ? this._history.replace : this._history.push;
    navigationFunction({
      search: `?${paramsToString}`
    });
  }

  /**
   * Add an event handler to be executed whenever state is pushed to the URL
   *
   * @callback requestCallback
   * @param {Object} state - Updated application state parsed from the new URL
   *
   * @param {requestCallback} callback
   */
  onURLStateChange(callback: (state: Partial<CatalogDriverRequestURLState>) => void) {
    this._unlisten = this._history.listen(({ location }) => {
      // If this URL is updated as a result of a pushState request, we don't
      // want to notify that the URL changed.
      if (`?${this._lastPushSearchString}` === location.search) return;

      // Once we've decided to return based on lastPushSearchString, reset
      // it so that we don't break back / forward button.
      this._lastPushSearchString = '';

      callback(paramsToState(new URLSearchParams(location.search)));
    });
  }

  tearDown() {
    this._unlisten();
  }
}
