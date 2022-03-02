import { GlobalTypes } from '@thoughtindustries/content';
import { SortDirection, SortField } from '../../../../src';
import { getMockSearchResponse, setupDriver } from '../helper';

describe('@thoughtindustries/catalog/CatalogDriver#getActions#removeToken', () => {
  it('should update state', async () => {
    // mock search response for each call
    const mockOnSearch = jest.fn();
    const mockSearchResponseTokenLabel = undefined;
    mockOnSearch.mockResolvedValueOnce({
      data: getMockSearchResponse({
        tokenLabel: mockSearchResponseTokenLabel
      })
    });

    const initialState = {
      token: 'foo',
      tokenLabel: 'bar'
    };
    const { driver, stateAfterAction } = setupDriver({
      mockOnSearch,
      initialState
    });
    const actions = driver.getActions();

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
      }
    });
    const actions = driver.getActions();

    await actions.removeToken();

    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });
});
