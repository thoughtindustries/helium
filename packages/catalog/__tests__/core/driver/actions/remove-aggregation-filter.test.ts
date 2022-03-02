import { GlobalTypes } from '@thoughtindustries/content';
import { DEFAULT_STATE, SortDirection, SortField } from '../../../../src';
import { setupDriver } from '../helper';

describe('@thoughtindustries/catalog/CatalogDriver#getActions#removeAggregationFilter', () => {
  it('should update state and reset page', async () => {
    const filterToKeep = { label: 'label1', value: 'value1' };
    const filterToRemove = { label: 'label2', value: 'value2' };
    const initialState = {
      aggregationFilters: [{ ...filterToKeep }, { ...filterToRemove }],
      page: 3
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState
    });
    const actions = driver.getActions();

    await actions.removeAggregationFilter(filterToRemove);

    expect(stateAfterAction.state?.aggregationFilters).toEqual([filterToKeep]);
    expect(stateAfterAction.state?.page).toEqual(DEFAULT_STATE.page);
  });

  it('should not update other request state', async () => {
    const initialState = {
      searchTerm: 'test',
      token: 'abc',
      sort: { field: SortField.Title, direction: SortDirection.Asc },
      displayType: GlobalTypes.ContentItemDisplayType.Grid,
      contentTypes: [GlobalTypes.ContentKind.Article]
    };
    const filterToKeep = { label: 'label1', value: 'value1' };
    const filterToRemove = { label: 'label2', value: 'value2' };
    const aggregationFilters = [{ ...filterToKeep }, { ...filterToRemove }];
    const { driver, stateAfterAction } = setupDriver({
      initialState: {
        ...initialState,
        aggregationFilters
      }
    });
    const actions = driver.getActions();

    await actions.removeAggregationFilter(filterToRemove);

    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });

  it('should skip action when provided filter does not exist', async () => {
    const initialState = {
      aggregationFilters: [{ label: 'label1', value: 'value1' }]
    };
    const { driver, mockOnSearch } = setupDriver({
      initialState
    });
    const actions = driver.getActions();
    const filterNonExist = { label: 'foo', value: 'bar' };

    await actions.removeAggregationFilter(filterNonExist);

    expect(mockOnSearch).toHaveBeenCalledTimes(0);
  });
});
