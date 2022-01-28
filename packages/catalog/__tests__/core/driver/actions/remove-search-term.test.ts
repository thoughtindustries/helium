import { GlobalTypes } from '@thoughtindustries/content';
import { SortDirection, SortField } from '../../../../src';
import { setupDriver } from '../helper';

// We mock this so no state is actually written to the URL
jest.mock('../../../../src/core/driver/url-manager');
import URLManager from '../../../../src/core/driver/url-manager';
const mockURLManager = URLManager as jest.MockedClass<typeof URLManager>;

describe('@thoughtindustries/catalog/CatalogDriver#getActions#removeSearchTerm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should push state to url', async () => {
    const initialState = {
      searchTerm: 'query'
    };
    const { driver } = setupDriver({
      initialState,
      skipInit: true
    });
    const actions = driver.getActions();

    await driver.init();
    await actions.removeSearchTerm();

    expect(mockURLManager.mock.instances[0].pushStateToURL).toHaveBeenCalledTimes(2);
    expect(mockURLManager.mock.instances[0].pushStateToURL).toHaveBeenLastCalledWith(
      expect.objectContaining({ searchTerm: undefined }),
      expect.objectContaining({ replaceUrl: undefined })
    );
  });

  it('should update state', async () => {
    const initialState = {
      searchTerm: 'query'
    };
    const { driver, stateAfterAction } = setupDriver({
      initialState,
      skipInit: true
    });
    const actions = driver.getActions();

    await driver.init();
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
      },
      skipInit: true
    });
    const actions = driver.getActions();

    await driver.init();
    await actions.removeSearchTerm();

    expect(stateAfterAction.state).toEqual(expect.objectContaining(initialState));
  });
});
