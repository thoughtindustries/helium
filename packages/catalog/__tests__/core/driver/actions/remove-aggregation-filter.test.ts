import { GlobalTypes } from '@thoughtindustries/content';
import { SortDirection, SortField } from '../../../../src';
import { setupDriver } from '../helper';

// We mock this so no state is actually written to the URL
jest.mock('../../../../src/core/driver/url-manager');
import URLManager from '../../../../src/core/driver/url-manager';
const mockURLManager = URLManager as jest.MockedClass<typeof URLManager>;

describe('@thoughtindustries/catalog/CatalogDriver#getActions#removeAggregationFilter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should push state to url', async () => {
    const filterToKeep = { label: 'label1', value: 'value1' };
    const filterToRemove = { label: 'label2', value: 'value2' };
    const initialState = {
      aggregationFilters: [{ ...filterToKeep }, { ...filterToRemove }]
    };
    const { driver } = setupDriver({
      initialState,
      skipInit: true
    });
    const actions = driver.getActions();

    await driver.init();
    await actions.removeAggregationFilter(filterToRemove);

    expect(mockURLManager.mock.instances[0].pushStateToURL).toHaveBeenCalledTimes(2);
    expect(mockURLManager.mock.instances[0].pushStateToURL).toHaveBeenLastCalledWith(
      expect.objectContaining({ aggregationFilters: [filterToKeep] }),
      expect.objectContaining({ replaceUrl: undefined })
    );
  });

  it('should update state', async () => {
    const filterToKeep = { label: 'label1', value: 'value1' };
    const filterToRemove = { label: 'label2', value: 'value2' };
    const initialState = {
      aggregationFilters: [{ ...filterToKeep }, { ...filterToRemove }]
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState,
      skipInit: true
    });
    const actions = driver.getActions();

    await driver.init();
    await actions.removeAggregationFilter(filterToRemove);

    expect(stateAfterAction.state?.aggregationFilters).toEqual([filterToKeep]);
  });

  it('should not update other request state', async () => {
    const initialState = {
      searchTerm: 'test',
      page: 3,
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
      },
      skipInit: true
    });
    const actions = driver.getActions();

    await driver.init();
    await actions.removeAggregationFilter(filterToRemove);

    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });

  it('should skip action when provided filter does not exist', async () => {
    const initialState = {
      aggregationFilters: [{ label: 'label1', value: 'value1' }]
    };
    const { driver, stateAfterAction, mockOnSearch } = setupDriver({
      initialState,
      skipInit: true
    });
    const actions = driver.getActions();
    const filterNonExist = { label: 'foo', value: 'bar' };

    await driver.init();
    await actions.removeAggregationFilter(filterNonExist);

    expect(mockOnSearch).toHaveBeenLastCalledWith(
      expect.objectContaining({
        variables: expect.objectContaining({
          labels: ['label1'],
          values: ['value1']
        })
      })
    );
    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });
});
