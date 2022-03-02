import { GlobalTypes } from '@thoughtindustries/content';
import { SortDirection, SortField } from '../../../../src';
import { setupDriver } from '../helper';

describe('@thoughtindustries/catalog/CatalogDriver#getActions#setPage', () => {
  it('should update state', async () => {
    const { driver, stateAfterAction } = setupDriver();
    const actions = driver.getActions();

    await actions.setPage(3);

    expect(stateAfterAction.state?.page).toBe(3);
  });

  it('should not update other request state', async () => {
    const initialState = {
      searchTerm: 'test',
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

    await actions.setPage(3);

    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });
});
