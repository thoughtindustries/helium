import { CatalogContentQueryVariables } from '@thoughtindustries/content';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from './constants';
import {
  CatalogDriverConfig,
  CatalogDriverMakeRequestFn,
  CatalogDriverState,
  CatalogDriverSubscriptionFn,
  CatalogDriverUpdateResultsFn
} from './types';
import { stateToSearchParams, shouldUpdateContentTypes, searchResultsToState } from './utilities';

export const DEFAULT_STATE: CatalogDriverState = {
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

/**
 * Base class for CatalogDriver
 */
export default class CatalogDriverBase {
  private _state: CatalogDriverState = DEFAULT_STATE;
  private readonly _onSearch;
  private _subscriptions: CatalogDriverSubscriptionFn[];
  private _prevSearchParams: CatalogContentQueryVariables;

  constructor({ initialState, onSearch }: CatalogDriverConfig) {
    this._onSearch = onSearch;
    this._subscriptions = [];

    // Initialize the state without calling setState, because we don't
    // want to trigger an update callback, we're just initializing the state
    // to the correct default values for the initial UI render
    this._state = {
      ...this._state,
      ...initialState
    };
    const searchParams = stateToSearchParams(this._state);
    this._prevSearchParams = searchParams;
  }

  /**
   * Exposed to actions to update results. We want to leverage
   * the `isLoading` state to limit one server request in flight at a
   * time. It serves as the stop gate to validate the action request.
   * Once validated, it will flow to update state as well as making the
   * server request.
   *
   * @param requestParams - request state to be merged with current state for making the server reqest
   */
  protected updateResults: CatalogDriverUpdateResultsFn = async requestParams => {
    // Skip when a server request is in-flight
    const { isLoading } = this._state;
    if (isLoading) {
      return;
    }

    // Extract request state
    const {
      page,
      pageSize,
      aggregationFilters,
      searchTerm,
      sort,
      displayType,
      token,
      contentTypes
    } = {
      ...this._state,
      ...requestParams
    };

    // update state
    this.setState({
      page,
      pageSize,
      aggregationFilters,
      searchTerm,
      sort,
      displayType,
      token,
      contentTypes
    });

    await this._makeRequest();
  };

  /**
   * This method is continued from updateResults.
   *
   * Application state updates from actions are performed in updateResults.
   * The state will be updated after the API calls.
   */
  private _makeRequest: CatalogDriverMakeRequestFn = async () => {
    this.setState({
      isLoading: true
    });

    const searchParams = stateToSearchParams(this._state);
    const { data, error } = await this._onSearch(searchParams);

    this.setState({
      isLoading: false
    });

    const newState = searchResultsToState(data, error);

    // transform result meta to result content types
    if (!error) {
      const shouldUpdate = shouldUpdateContentTypes(searchParams, this._prevSearchParams);
      const { resultContentTypes: currentContentTypes } = this._state;
      const { resultContentTypes: newContentTypes = [] } = newState;
      if (!shouldUpdate && currentContentTypes.length >= newContentTypes.length) {
        delete newState.resultContentTypes;
      }
    }

    this.setState(newState);
    this._prevSearchParams = { ...searchParams };
  };

  /**
   * Any time state is updated in this CatalogDriver, the provided callback
   * will be executed with the updated state.
   *
   * @param onStateChange - callback when state changes
   */
  subscribeToStateChanges(onStateChange: CatalogDriverSubscriptionFn) {
    this._subscriptions.push(onStateChange);
  }

  /**
   * Remove a state update subscriber from this CatalogDriver
   *
   * @param onStateChange - callback when state changes
   */
  unsubscribeToStateChanges(onStateChange: CatalogDriverSubscriptionFn) {
    this._subscriptions = this._subscriptions.filter(sub => sub !== onStateChange);
  }

  /**
   * Tear down resources for this CatalogDriver
   */
  tearDown() {
    this._subscriptions = [];
  }

  getState() {
    return this._state;
  }

  protected setState(newState: Partial<CatalogDriverState>) {
    const state = { ...this._state, ...newState };
    this._state = state;
    this._subscriptions.forEach(subscription => subscription(state));
  }
}
