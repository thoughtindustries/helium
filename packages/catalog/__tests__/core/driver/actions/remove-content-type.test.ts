import { GlobalTypes } from '@thoughtindustries/content';
import { SortDirection, SortField } from '../../../../src';
import { setupDriver } from '../helper';

describe('@thoughtindustries/catalog/CatalogDriver#getActions#removeContentType', () => {
  it('should update state', async () => {
    const contentTypeToRemove = GlobalTypes.ContentKind.Bundle;
    const initialState = {
      contentTypes: [contentTypeToRemove]
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState
    });
    const actions = driver.getActions();

    await actions.removeContentType(contentTypeToRemove);

    expect(stateAfterAction.state?.contentTypes).toHaveLength(0);
  });

  it('should not update other request state', async () => {
    const contentTypeToRemove = GlobalTypes.ContentKind.Bundle;
    const initialState = {
      searchTerm: 'test',
      aggregationFilters: [{ label: 'label', value: 'value' }],
      page: 3,
      token: 'abc',
      sort: { field: SortField.Title, direction: SortDirection.Asc },
      displayType: GlobalTypes.ContentItemDisplayType.Grid
    };
    const contentTypes = [contentTypeToRemove];
    const { driver, stateAfterAction } = setupDriver({
      initialState: {
        ...initialState,
        contentTypes
      }
    });
    const actions = driver.getActions();

    await actions.removeContentType(contentTypeToRemove);

    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });

  it('should skip action when provided content type does not exist', async () => {
    const initialState = {
      searchTerm: 'test',
      contentTypes: [GlobalTypes.ContentKind.Course, GlobalTypes.ContentKind.CourseGroup]
    };
    const { driver, mockOnSearch } = setupDriver({
      initialState
    });
    const actions = driver.getActions();
    const contentTypeNonExist = GlobalTypes.ContentKind.Bundle;

    await actions.removeContentType(contentTypeNonExist);

    expect(mockOnSearch).toHaveBeenCalledTimes(0);
  });
});
