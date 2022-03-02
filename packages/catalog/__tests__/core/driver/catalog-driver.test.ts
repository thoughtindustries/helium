import { GlobalTypes } from '@thoughtindustries/content';
import { CatalogDriver, DEFAULT_STATE, SortDirection, SortField } from '../../../src';
import { getMockSearchResponse, setupDriver } from './helper';

describe('@thoughtindustries/catalog/CatalogDriver', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create new instance', () => {
    const { driver } = setupDriver();
    expect(driver).toBeInstanceOf(CatalogDriver);
  });

  it('should use initialState when provided', () => {
    const initialState = {
      page: 3,
      sort: { field: SortField.PublishedDate, direction: SortDirection.Desc },
      displayType: GlobalTypes.ContentItemDisplayType.List,
      contentTypes: [GlobalTypes.ContentKind.Article]
    };

    const { stateAfterCreation } = setupDriver({ initialState });
    expect(stateAfterCreation).toEqual({
      ...DEFAULT_STATE,
      ...initialState
    });
  });

  describe('getState', () => {
    it('should return the current state', () => {
      const { stateAfterCreation } = setupDriver();
      expect(stateAfterCreation).toEqual(DEFAULT_STATE);
    });
  });

  describe('getActions', () => {
    it('should return actions', () => {
      const { driver } = setupDriver();
      const actions = driver.getActions();
      expect(Object.keys(actions).length).toBe(10);
      expect(actions.addAggregationFilter).toBeInstanceOf(Function);
      expect(actions.addContentType).toBeInstanceOf(Function);
      expect(actions.removeAggregationFilter).toBeInstanceOf(Function);
      expect(actions.removeContentType).toBeInstanceOf(Function);
      expect(actions.removeSearchTerm).toBeInstanceOf(Function);
      expect(actions.removeToken).toBeInstanceOf(Function);
      expect(actions.setDisplayType).toBeInstanceOf(Function);
      expect(actions.setPage).toBeInstanceOf(Function);
      expect(actions.setSearchTerm).toBeInstanceOf(Function);
      expect(actions.setSort).toBeInstanceOf(Function);
    });

    it('should handle one async action at a time', () => {
      const { driver, mockOnSearch } = setupDriver();
      const actions = driver.getActions();
      actions.setSearchTerm('term');
      actions.addAggregationFilter({ label: 'label', value: 'value' });
      expect(mockOnSearch).toHaveBeenCalledTimes(1);
      expect(mockOnSearch).toHaveBeenCalledWith(
        expect.objectContaining({
          query: 'term',
          labels: [],
          values: []
        })
      );
    });

    it('should handle synchronized actions', async () => {
      const { driver, mockOnSearch } = setupDriver();
      const actions = driver.getActions();
      await actions.setSearchTerm('term');
      await actions.addAggregationFilter({ label: 'label', value: 'value' });
      expect(mockOnSearch).toHaveBeenCalledTimes(2);
      expect(mockOnSearch).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          query: 'term',
          labels: [],
          values: []
        })
      );
      expect(mockOnSearch).toHaveBeenNthCalledWith(
        2,
        expect.objectContaining({
          query: 'term',
          labels: ['label'],
          values: ['value']
        })
      );
    });
  });

  describe('subscribeToStateChanges', () => {
    it('should add a subscription', () => {
      const { driver } = setupDriver();
      const actions = driver.getActions();

      let called = false;
      driver.subscribeToStateChanges(() => (called = true));
      actions.setSearchTerm('test');

      expect(called).toBeTruthy();
    });

    it('should add multiple subscriptions', () => {
      const { driver } = setupDriver();
      const actions = driver.getActions();

      let called1 = false;
      let called2 = false;
      driver.subscribeToStateChanges(() => (called1 = true));
      driver.subscribeToStateChanges(() => (called2 = true));
      actions.setSearchTerm('test');

      expect(called1).toBeTruthy();
      expect(called2).toBeTruthy();
    });

    it('should update own state before notifying subscribers', () => {
      const { driver } = setupDriver();
      const actions = driver.getActions();

      let searchTermFromDriver,
        searchTermFromSubscription,
        called = false;
      driver.subscribeToStateChanges(state => {
        // So that this subscription does not run multiple times
        if (called) return;
        called = true;
        searchTermFromDriver = driver.getState().searchTerm;
        searchTermFromSubscription = state.searchTerm;
      });
      const expectedSearchTerm = 'new value';
      actions.setSearchTerm(expectedSearchTerm);

      expect(searchTermFromDriver).toBe(expectedSearchTerm);
      expect(searchTermFromSubscription).toBe(expectedSearchTerm);
    });
  });

  describe('unsubscribeToStateChanges', () => {
    it('should remove subscription', async () => {
      const { driver } = setupDriver();
      const actions = driver.getActions();

      let called1 = false;
      let called2 = false;
      const sub1 = () => (called1 = true);
      const sub2 = () => (called2 = true);
      driver.subscribeToStateChanges(sub1);
      driver.subscribeToStateChanges(sub2);
      await actions.setSearchTerm('test');

      expect(called1).toBeTruthy();
      expect(called2).toBeTruthy();

      called1 = false;
      called2 = false;
      driver.unsubscribeToStateChanges(sub1);
      await actions.setSearchTerm('test');

      expect(called1).toBeFalsy();
      expect(called2).toBeTruthy();
    });
  });

  describe('tearDown', () => {
    it('should remove subscriptions', async () => {
      const { driver } = setupDriver();
      const actions = driver.getActions();

      let called1 = false;
      let called2 = false;
      const sub1 = () => (called1 = true);
      const sub2 = () => (called2 = true);
      driver.subscribeToStateChanges(sub1);
      driver.subscribeToStateChanges(sub2);
      await actions.setSearchTerm('test');

      expect(called1).toBeTruthy();
      expect(called2).toBeTruthy();

      called1 = false;
      called2 = false;
      driver.tearDown();
      await actions.setSearchTerm('test');

      expect(called1).toBeFalsy();
      expect(called2).toBeFalsy();
    });
  });

  describe('updateResults', () => {
    it('should set error state from response', async () => {
      const error = new Error('mock error');
      const mockOnSearch = jest.fn().mockResolvedValue({ error });
      const { driver } = setupDriver({
        mockOnSearch
      });
      const actions = driver.getActions();
      await actions.setSearchTerm('test');
      const updatedState = driver.getState();
      expect(updatedState.error).toContain(error.message);
    });

    it('should transform enabled sorts from response', async () => {
      const { driver } = setupDriver({
        mockSearchResponse: getMockSearchResponse({
          sortTitleEnabled: false,
          sortCourseStartDateEnabled: false,
          sortCreatedAtEnabled: false
        })
      });
      const actions = driver.getActions();
      await actions.setSearchTerm('test');
      const updatedState = driver.getState();
      expect(updatedState.enabledSorts).toHaveLength(3);
      expect(updatedState.enabledSorts).toEqual(
        expect.arrayContaining([
          { field: SortField.PublishedDate, direction: SortDirection.Desc },
          { field: SortField.Relevance },
          { field: SortField.UpdatedAt, direction: SortDirection.Desc }
        ])
      );
    });

    it('should transform enabled display types from response', async () => {
      const { driver } = setupDriver({
        mockSearchResponse: getMockSearchResponse({
          displayTypeCalendarEnabled: false,
          displayTypeListEnabled: false
        })
      });
      const actions = driver.getActions();
      await actions.setSearchTerm('test');
      const updatedState = driver.getState();
      expect(updatedState.enabledDisplayTypes).toHaveLength(1);
      expect(updatedState.enabledDisplayTypes).toContain(GlobalTypes.ContentItemDisplayType.Grid);
    });

    it('should transform content types from response', async () => {
      // mock search response for each call
      const mockOnSearch = jest.fn();
      const mockSearchResponseContentTypes1 = [
        GlobalTypes.ContentKind.Article,
        GlobalTypes.ContentKind.Course
      ];
      const mockSearchResponseContentTypes2 = [GlobalTypes.ContentKind.DiscountGroup];
      const mockSearchResponseContentTypes3 = [
        GlobalTypes.ContentKind.LearningPath,
        GlobalTypes.ContentKind.Video
      ];
      const mockSearchResponseContentTypes4 = [
        GlobalTypes.ContentKind.LearningPath,
        GlobalTypes.ContentKind.Video,
        GlobalTypes.ContentKind.Sellable
      ];
      const mockSearchResponseContentTypes5 = [
        GlobalTypes.ContentKind.LearningPath,
        GlobalTypes.ContentKind.Video
      ];
      mockOnSearch.mockResolvedValueOnce({
        data: getMockSearchResponse({
          contentTypes: mockSearchResponseContentTypes1
        })
      });
      mockOnSearch.mockResolvedValueOnce({
        data: getMockSearchResponse({
          contentTypes: mockSearchResponseContentTypes2
        })
      });
      mockOnSearch.mockResolvedValueOnce({
        data: getMockSearchResponse({
          contentTypes: mockSearchResponseContentTypes3
        })
      });
      mockOnSearch.mockResolvedValueOnce({
        data: getMockSearchResponse({
          contentTypes: mockSearchResponseContentTypes4
        })
      });
      mockOnSearch.mockResolvedValueOnce({
        data: getMockSearchResponse({
          contentTypes: mockSearchResponseContentTypes5
        })
      });

      const { driver } = setupDriver({
        mockOnSearch,
        initialState: {
          searchTerm: 'test 1',
          aggregationFilters: [{ label: 'label 1', value: 'value 1' }]
        }
      });
      const actions = driver.getActions();

      // initial search
      // should always use response data for 1st search
      await actions.setSearchTerm('test');
      expect(driver.getState().resultContentTypes).toEqual(mockSearchResponseContentTypes1);

      // 2nd search - use different filters
      // should use response data since the aggregation filters are different
      await actions.addAggregationFilter({ label: 'label 2', value: 'value 2' });
      expect(driver.getState().resultContentTypes).toEqual(mockSearchResponseContentTypes2);

      // 3rd search - use different search term
      // should use response data since search term is different
      await actions.setSearchTerm('test 2');
      expect(driver.getState().resultContentTypes).toEqual(mockSearchResponseContentTypes3);

      // 4th search - use different page
      // should use response data since more items are returned
      await actions.setPage(2);
      expect(driver.getState().resultContentTypes).toEqual(mockSearchResponseContentTypes4);

      // 5th search - use different page
      // should not use response data since less items are returned
      await actions.setPage(3);
      expect(driver.getState().resultContentTypes).toEqual(mockSearchResponseContentTypes4);
    });
  });
});
