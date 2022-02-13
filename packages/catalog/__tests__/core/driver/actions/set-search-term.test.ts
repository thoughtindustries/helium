import { GlobalTypes } from '@thoughtindustries/content';
import { DEFAULT_STATE, SortDirection, SortField } from '../../../../src';
import { setupDriver } from '../helper';

describe('@thoughtindustries/catalog/CatalogDriver#getActions#setSearchTerm', () => {
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
      aggregationFilters: [{ label: 'label1', value: 'value1' }],
      isCurated: true
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState
    });
    const actions = driver.getActions();
    const newSearchTerm = 'new test';

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
      initialState
    });
    const actions = driver.getActions();

    await actions.setSearchTerm('foo');

    expect(stateAfterAction.state).toEqual(
      expect.objectContaining({
        ...initialState,
        page: DEFAULT_STATE.page
      })
    );
  });
});
