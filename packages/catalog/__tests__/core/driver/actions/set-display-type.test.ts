import { GlobalTypes } from '@thoughtindustries/content';
import { SortDirection, SortField } from '../../../../src';
import { setupDriver } from '../helper';

describe('@thoughtindustries/catalog/CatalogDriver#getActions#setDisplayType', () => {
  it('should update state', async () => {
    const initialState = {
      displayType: GlobalTypes.ContentItemDisplayType.List
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState
    });
    const actions = driver.getActions();
    const newDisplayType = GlobalTypes.ContentItemDisplayType.Grid;

    await actions.setDisplayType(newDisplayType);

    expect(stateAfterAction.state?.displayType).toEqual(newDisplayType);
  });

  it('should not update other request state', async () => {
    const initialState = {
      searchTerm: 'test',
      aggregationFilters: [{ label: 'label', value: 'value' }],
      page: 3,
      token: 'abc',
      sort: { field: SortField.Title, direction: SortDirection.Asc },
      contentTypes: []
    };
    const initialDisplayType = GlobalTypes.ContentItemDisplayType.List;
    const { driver, stateAfterAction } = setupDriver({
      initialState: {
        ...initialState,
        displayType: initialDisplayType
      }
    });
    const actions = driver.getActions();
    const newDisplayType = GlobalTypes.ContentItemDisplayType.Grid;

    await actions.setDisplayType(newDisplayType);

    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });

  it('should reset content types and not update other request state for calendar', async () => {
    const initialState = {
      searchTerm: 'test',
      aggregationFilters: [{ label: 'label', value: 'value' }],
      page: 3,
      token: 'abc',
      sort: { field: SortField.Title, direction: SortDirection.Asc },
      contentTypes: [GlobalTypes.ContentKind.CourseGroup]
    };
    const initialDisplayType = GlobalTypes.ContentItemDisplayType.List;
    const { driver, stateAfterAction } = setupDriver({
      initialState: {
        ...initialState,
        displayType: initialDisplayType
      }
    });
    const actions = driver.getActions();
    const newDisplayType = GlobalTypes.ContentItemDisplayType.Calendar;

    await actions.setDisplayType(newDisplayType);

    expect(stateAfterAction.state).toEqual(
      expect.objectContaining({
        ...initialState,
        contentTypes: []
      })
    );
  });
});
