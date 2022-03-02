import { GlobalTypes } from '@thoughtindustries/content';
import { SortDirection, SortField } from '../../../../src';
import { setupDriver } from '../helper';

describe('@thoughtindustries/catalog/CatalogDriver#getActions#removeSearchTerm', () => {
  it('should update state', async () => {
    const initialState = {
      searchTerm: 'query'
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState
    });
    const actions = driver.getActions();

    await actions.removeSearchTerm();

    expect(stateAfterAction.state?.searchTerm).toBe(undefined);
  });

  it('should not update other request state', async () => {
    const initialState = {
      page: 3,
      aggregationFilters: [{ label: 'label', value: 'value' }],
      token: 'abc',
      sort: { field: SortField.Title, direction: SortDirection.Asc },
      displayType: GlobalTypes.ContentItemDisplayType.Grid,
      contentTypes: [GlobalTypes.ContentKind.Article]
    };
    const initialSearchTerm = 'query';
    const { driver, stateAfterAction } = setupDriver({
      initialState: {
        ...initialState,
        searchTerm: initialSearchTerm
      }
    });
    const actions = driver.getActions();

    await actions.removeSearchTerm();

    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });
});
