import { CatalogContentQueryVariables } from '@thoughtindustries/content';
import { ContentKind } from '@thoughtindustries/content/src/graphql/global-types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from './constants';
import {
  CatalogDriverConfig,
  CatalogDriverMakeRequestFn,
  CatalogDriverState,
  CatalogDriverSubscriptionFn,
  CatalogDriverUpdateResultsFn
} from './types';
import URLManager from './url-manager';
import {
  stateToSearchParams,
  toEnabledDisplayTypes,
  toEnabledSorts,
  shouldUpdateContentTypes
} from './utilities';

const filterSearchParameters = ({
  page,
  aggregationFilters,
  searchTerm,
  sort,
  displayType,
  token,
  contentTypes
}: CatalogDriverState) => ({
  page,
  aggregationFilters,
  searchTerm,
  sort,
  displayType,
  token,
  contentTypes
});

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
  private _initialized = false;
  private _state: CatalogDriverState = DEFAULT_STATE;
  private readonly _onSearch;
  private _subscriptions: CatalogDriverSubscriptionFn[];
  private readonly _layoutId;
  private readonly _widgetId;
  private readonly _trackUrlState;
  private readonly _urlManager: URLManager | undefined;
  private readonly _alwaysSearchOnInitialLoad;
  private _prevSearchParams: CatalogContentQueryVariables | undefined = undefined;

  constructor({
    initialState,
    onSearch,
    layoutId,
    widgetId,
    trackUrlState = true,
    alwaysSearchOnInitialLoad = false
  }: CatalogDriverConfig) {
    this._onSearch = onSearch;
    this._subscriptions = [];
    this._layoutId = layoutId;
    this._widgetId = widgetId;
    this._trackUrlState = trackUrlState;
    this._alwaysSearchOnInitialLoad = alwaysSearchOnInitialLoad;

    let urlState = {};
    if (trackUrlState) {
      this._urlManager = new URLManager();
      urlState = this._urlManager.getStateFromURL();
      this._urlManager.onURLStateChange(urlState => {
        this.updateResults({ ...urlState }, { skipPushToUrl: true });
      });
    }

    // We filter these here to disallow anything other than valid search
    // parameters to be passed in initial state, or url state. `results`, etc,
    // should not be allowed to be passed in, that should be generated based on
    // the results of the query
    const searchParameters = filterSearchParameters({
      ...this._state,
      ...initialState,
      ...urlState
    });

    // Initialize the state without calling setState, because we don't
    // want to trigger an update callback, we're just initializing the state
    // to the correct default values for the initial UI render
    this._state = {
      ...this._state,
      ...searchParameters
    };
  }

  /**
   * After creating new instance of the CatalogDriver and before triggering
   * any action, will call this to initialize some resources (Like: trigger
   * initial search).
   */
  init = async () => {
    if (this._initialized) {
      return;
    }

    this._initialized = true;

    const searchParameters = filterSearchParameters(this._state);

    // We'll trigger an initial search if initial parameters contain a search term,
    // aggregation filters or token, or if alwaysSearchOnInitialLoad is set.
    // Otherwise, we'll just save their selections in state as initial values.
    if (
      searchParameters.searchTerm ||
      searchParameters.aggregationFilters.length > 0 ||
      searchParameters.token ||
      this._alwaysSearchOnInitialLoad
    ) {
      await this.updateResults(searchParameters, { replaceUrl: true });
    }
  };

  /**
   * Exposed to actions to update results. We want to leverage
   * the `isLoading` state to limit one server request in flight at a
   * time. It serves as the stop gate to validate the action request.
   * Once validated, it will flow to update state as well as making the
   * server request. We also want to make sure the instance should be
   * initialized first, otherwise actions will be discarded.
   *
   * @param requestParams - request state to be merged with current state for making the server reqest
   * @param options - determine how url tracking is handled after server request
   */
  protected updateResults: CatalogDriverUpdateResultsFn = async (
    requestParams,
    { skipPushToUrl, replaceUrl } = {}
  ) => {
    // Skip if not initialized
    if (!this._initialized) {
      return;
    }

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

    await this._makeRequest({
      skipPushToUrl,
      replaceUrl
    });
  };

  /**
   * This method is continued from updateResults.
   *
   * Application state updates from actions are performed in updateResults.
   * The state will be updated after the API calls.
   *
   * @param {Object} options - determine how url tracking is handled after server request
   */
  private _makeRequest: CatalogDriverMakeRequestFn = async ({ skipPushToUrl, replaceUrl }) => {
    this.setState({
      isLoading: true
    });

    const searchParams = stateToSearchParams(this._state);
    // check if there is custom settings
    if (this._layoutId && this._widgetId) {
      searchParams.layoutId = this._layoutId;
      searchParams.widgetId = this._widgetId;
    }
    const { data, error } = await this._onSearch({
      variables: searchParams
    });

    this.setState({
      isLoading: false
    });

    if (error || !data) {
      this.setState({
        error: `An unexpected error occurred: ${error ? error.message : 'empty data'}`
      });
      return;
    }

    const {
      meta: {
        displayBundle,
        tokenLabel,
        total,
        hasMore,
        isCurated,
        aggregations,
        contentTypes = [],
        resultsDisplayType,
        sortUpdatedAtEnabled,
        sortCreatedAtEnabled,
        sortTitleEnabled,
        sortPublishDateEnabled,
        sortCourseStartDateEnabled,
        sortRelevanceEnabled,
        displayTypeListEnabled,
        displayTypeGridEnabled,
        displayTypeCalendarEnabled,
        displayStartDateEnabled,
        displayAuthorsEnabled,
        displayDescriptionOnCalendar,
        contentTypeFilterEnabled,
        queryCustomFields
      },
      contentItems
    } = data.CatalogContent;

    // transform result meta to enabled sorts
    const enabledSorts = toEnabledSorts({
      sortUpdatedAtEnabled,
      sortCreatedAtEnabled,
      sortTitleEnabled,
      sortPublishDateEnabled,
      sortCourseStartDateEnabled,
      sortRelevanceEnabled
    });

    // transform result meta to enabled display types
    const enabledDisplayTypes = toEnabledDisplayTypes({
      displayTypeListEnabled,
      displayTypeGridEnabled,
      displayTypeCalendarEnabled
    });

    // transform result meta to result content types
    const shouldUpdate = shouldUpdateContentTypes(searchParams, this._prevSearchParams);
    const { resultContentTypes: currentContentTypes } = this._state;
    let resultContentTypes = [...currentContentTypes];
    if (shouldUpdate || currentContentTypes.length < contentTypes.length) {
      resultContentTypes = [...contentTypes] as ContentKind[];
    }

    this.setState({
      error: undefined,
      results: contentItems,
      queryCustomFields,
      aggregations,
      total,
      hasMore,
      isCurated,
      tokenLabel,
      resultsDisplayType,
      enabledSorts,
      enabledDisplayTypes,
      resultContentTypes,
      displayStartDateEnabled,
      displayAuthorsEnabled,
      displayDescriptionOnCalendar,
      contentTypeFilterEnabled,
      displayBundle
    });

    this._prevSearchParams = { ...searchParams };

    // (optional) push state to url
    if (!skipPushToUrl && this._trackUrlState && this._urlManager) {
      const { page, aggregationFilters, searchTerm, token } = this._state;
      this._urlManager.pushStateToURL(
        {
          page,
          aggregationFilters,
          searchTerm,
          token
        },
        { replaceUrl }
      );
    }
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
    this._urlManager && this._urlManager.tearDown();
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
