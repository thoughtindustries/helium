import { GlobalTypes } from '@thoughtindustries/content';
import { SortDirection, SortField } from '../../../../src';
import { setupDriver } from '../helper';

describe('@thoughtindustries/catalog/CatalogDriver#getActions#addContentType', () => {
  it('should update state', async () => {
    const initialState = {
      contentTypes: [GlobalTypes.ContentKind.Course]
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState,
      trackUrlState: false
    });
    const actions = driver.getActions();
    const newContentType = GlobalTypes.ContentKind.Bundle;

    await actions.addContentType(newContentType);

    expect(stateAfterAction.state?.contentTypes).toEqual([
      ...initialState.contentTypes,
      newContentType
    ]);
  });

  it('should not update other request state', async () => {
    const initialState = {
      searchTerm: 'test',
      aggregationFilters: [{ label: 'label', value: 'value' }],
      page: 3,
      token: 'abc',
      sort: { field: SortField.Title, direction: SortDirection.Asc },
      displayType: GlobalTypes.ContentItemDisplayType.Grid
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState,
      skipInit: true,
      trackUrlState: false
    });
    const actions = driver.getActions();
    const newContentType = GlobalTypes.ContentKind.Bundle;

    await driver.init();
    await actions.addContentType(newContentType);

    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });
});
