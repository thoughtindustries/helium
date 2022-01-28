import { GlobalTypes } from '@thoughtindustries/content';
import { SortDirection, SortField } from '../../../../src';
import { getMockSearchResponse, setupDriver } from '../helper';

// We mock this so no state is actually written to the URL
jest.mock('../../../../src/core/driver/url-manager');
import URLManager from '../../../../src/core/driver/url-manager';
const mockURLManager = URLManager as jest.MockedClass<typeof URLManager>;

describe('@thoughtindustries/catalog/CatalogDriver#getActions#removeToken', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should push state to url', async () => {
    const initialState = {
      token: 'foo'
    };
    const { driver } = setupDriver({
      initialState,
      mockSearchResponse: getMockSearchResponse({ tokenLabel: 'bar' }),
      skipInit: true
    });
    const actions = driver.getActions();

    await driver.init();
    await actions.removeToken();

    expect(mockURLManager.mock.instances[0].pushStateToURL).toHaveBeenCalledTimes(2);
    expect(mockURLManager.mock.instances[0].pushStateToURL).toHaveBeenLastCalledWith(
      expect.objectContaining({ token: undefined }),
      expect.objectContaining({ replaceUrl: undefined })
    );
  });

  it('should update state', async () => {
    // mock search response for each call
    const mockOnSearch = jest.fn();
    const mockSearchResponseTokenLabel1 = 'bar';
    const mockSearchResponseTokenLabel2 = undefined;
    mockOnSearch.mockResolvedValueOnce({
      data: getMockSearchResponse({
        tokenLabel: mockSearchResponseTokenLabel1
      })
    });
    mockOnSearch.mockResolvedValueOnce({
      data: getMockSearchResponse({
        tokenLabel: mockSearchResponseTokenLabel2
      })
    });

    const initialState = {
      token: 'foo'
    };
    const { driver, stateAfterAction } = setupDriver({
      mockOnSearch,
      initialState,
      skipInit: true
    });
    const actions = driver.getActions();

    await driver.init();
    await actions.removeToken();

    expect(stateAfterAction.state).toEqual(
      expect.objectContaining({
        token: undefined,
        tokenLabel: undefined
      })
    );
  });

  it('should not update other request state', async () => {
    const initialState = {
      searchTerm: 'query',
      page: 3,
      aggregationFilters: [{ label: 'label', value: 'value' }],
      sort: { field: SortField.Title, direction: SortDirection.Asc },
      displayType: GlobalTypes.ContentItemDisplayType.Grid,
      contentTypes: [GlobalTypes.ContentKind.Article]
    };
    const initialToken = 'foo';
    const { driver, stateAfterAction } = setupDriver({
      initialState: {
        ...initialState,
        token: initialToken
      },
      skipInit: true
    });
    const actions = driver.getActions();

    await driver.init();
    await actions.removeToken();

    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });
});
