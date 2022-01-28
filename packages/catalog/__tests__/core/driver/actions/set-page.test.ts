import { GlobalTypes } from '@thoughtindustries/content';
import { SortDirection, SortField } from '../../../../src';
import { setupDriver } from '../helper';

// We mock this so no state is actually written to the URL
jest.mock('../../../../src/core/driver/url-manager');
import URLManager from '../../../../src/core/driver/url-manager';
const mockURLManager = URLManager as jest.MockedClass<typeof URLManager>;

describe('@thoughtindustries/catalog/CatalogDriver#getActions#setPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should push state to url', async () => {
    const { driver } = setupDriver();
    const actions = driver.getActions();

    await actions.setPage(3);

    expect(mockURLManager.mock.instances[0].pushStateToURL).toHaveBeenCalledTimes(1);
    expect(mockURLManager.mock.instances[0].pushStateToURL).toHaveBeenCalledWith(
      expect.objectContaining({ page: 3 }),
      expect.objectContaining({ replaceUrl: undefined })
    );
  });

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
      initialState,
      skipInit: true
    });
    const actions = driver.getActions();

    await driver.init();
    await actions.setPage(3);

    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });
});
