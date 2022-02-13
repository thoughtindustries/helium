import { GlobalTypes } from '@thoughtindustries/content';
import { SortDirection, SortField } from '../../../../src';
import { setupDriver } from '../helper';

describe('@thoughtindustries/catalog/CatalogDriver#getActions#setSort', () => {
  it('should update state', async () => {
    const initialState = {
      sort: {
        field: SortField.CourseStartDate,
        direction: SortDirection.Asc
      }
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState
    });
    const actions = driver.getActions();
    const newSort = {
      field: SortField.CreatedAt,
      direction: SortDirection.Desc
    };

    await actions.setSort(newSort);

    expect(stateAfterAction.state?.sort).toEqual(newSort);
  });

  it('should not update other request state', async () => {
    const initialState = {
      searchTerm: 'test',
      aggregationFilters: [{ label: 'label', value: 'value' }],
      page: 3,
      token: 'abc',
      contentTypes: [GlobalTypes.ContentKind.Video],
      displayType: GlobalTypes.ContentItemDisplayType.List
    };
    const initialSort = {
      field: SortField.CourseStartDate,
      direction: SortDirection.Asc
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState: {
        ...initialState,
        sort: initialSort
      }
    });
    const actions = driver.getActions();
    const newSort = {
      field: SortField.CreatedAt,
      direction: SortDirection.Desc
    };

    await actions.setSort(newSort);

    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });
});
