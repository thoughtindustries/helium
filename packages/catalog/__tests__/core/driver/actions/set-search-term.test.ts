import { GlobalTypes } from '@thoughtindustries/content';
import { DEFAULT_STATE, SortDirection, SortField } from '../../../../src';
import { getMockSearchResponse, setupDriver } from '../helper';

// We mock this so no state is actually written to the URL
jest.mock('../../../../src/core/driver/url-manager');
import URLManager from '../../../../src/core/driver/url-manager';
const mockURLManager = URLManager as jest.MockedClass<typeof URLManager>;

describe('@thoughtindustries/catalog/CatalogDriver#getActions#setSearchTerm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should push state to url', async () => {
    const { driver } = setupDriver();
    const actions = driver.getActions();

    await actions.setSearchTerm('foo');

    expect(mockURLManager.mock.instances[0].pushStateToURL).toHaveBeenCalledTimes(1);
    expect(mockURLManager.mock.instances[0].pushStateToURL).toHaveBeenCalledWith(
      expect.objectContaining({ searchTerm: 'foo' }),
      expect.objectContaining({ replaceUrl: undefined })
    );
  });

  it('should update state', async () => {
    const { driver, stateAfterAction } = setupDriver();
    const actions = driver.getActions();

    await actions.setSearchTerm('foo');

    expect(stateAfterAction.state?.searchTerm).toBe('foo');
  });

  it('should reset and update state when is curated', async () => {
    const initialState = {
      searchTerm: 'test',
      page: 3,
      token: 'foo',
      contentTypes: [GlobalTypes.ContentKind.Article],
      aggregationFilters: [{ label: 'label1', value: 'value1' }]
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState,
      mockSearchResponse: getMockSearchResponse({
        isCurated: true
      }),
      skipInit: true
    });
    const actions = driver.getActions();
    const newSearchTerm = 'new test';

    await driver.init();
    await actions.setSearchTerm(newSearchTerm);

    const { contentTypes, token, tokenLabel, page, aggregationFilters } = DEFAULT_STATE;
    expect(stateAfterAction.state).toEqual(
      expect.objectContaining({
        contentTypes,
        token,
        tokenLabel,
        page,
        aggregationFilters,
        searchTerm: newSearchTerm
      })
    );
  });

  it('should reset page and not update other request state', async () => {
    const initialState = {
      page: 3,
      aggregationFilters: [{ label: 'label', value: 'value' }],
      token: 'abc',
      sort: { field: SortField.Title, direction: SortDirection.Asc },
      displayType: GlobalTypes.ContentItemDisplayType.Grid,
      contentTypes: [GlobalTypes.ContentKind.Article]
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState,
      skipInit: true
    });
    const actions = driver.getActions();

    await driver.init();
    await actions.setSearchTerm('foo');

    expect(stateAfterAction.state).toEqual(
      expect.objectContaining({
        ...initialState,
        page: DEFAULT_STATE.page
      })
    );
  });
});
