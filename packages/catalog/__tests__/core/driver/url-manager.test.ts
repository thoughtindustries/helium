import URLManager from '../../../src/core/driver/url-manager';
import { DEFAULT_STATE } from '../../../src/core/driver/catalog-driver-base';
import { createMemoryHistory } from 'history';

const setup = () => {
  const mockHistory = createMemoryHistory();
  const manager = new URLManager({ history: mockHistory });
  return {
    manager,
    mockHistory
  };
};

const baseUrlState = {
  page: 2,
  aggregationFilters: [{ label: 'label', value: 'value' }],
  token: 'abc',
  searchTerm: 'test'
};

const baseState = {
  ...DEFAULT_STATE,
  ...baseUrlState
};

const baseStateAsUrl =
  '?page=2&query=test&labels=%5B%22label%22%5D&values=%5B%22value%22%5D&token=abc';

describe('@thoughtindustries/catalog/CatalogDriver#URLManager', () => {
  it('should create new instance', () => {
    const urlManager = new URLManager();
    expect(urlManager).toBeInstanceOf(URLManager);
  });

  describe('getStateFromURL', () => {
    it('should parse the current state from the URL', () => {
      const { manager, mockHistory } = setup();
      mockHistory.push(
        '/?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&query=test&token=abc'
      );

      const state = manager.getStateFromURL();
      expect(state).toMatchSnapshot();
    });

    it('should ignore unrecognized parameters', () => {
      const { manager, mockHistory } = setup();
      mockHistory.push('/?query=test&foo=bar&anything');

      const state = manager.getStateFromURL();
      expect(state).toMatchSnapshot();
    });

    it('should correctly handle multiple instances of the same parameter (take first instance)', () => {
      const { manager, mockHistory } = setup();
      mockHistory.push(
        '/?query=test&query=bad&token=abc&token=badtoken&page=3&page=1&labels=%5B%22label%22%5D&labels=%5B%22badlabel%22%5D&values=%5B%22value%22%5D&values=%5B%22badvalue%22%5D'
      );

      const state = manager.getStateFromURL();
      expect(state).toMatchSnapshot();
    });
  });

  describe('pushStateToURL', () => {
    it('should push the url from state', () => {
      const { manager, mockHistory } = setup();
      const spyPush = jest.spyOn(mockHistory, 'push');
      const spyReplace = jest.spyOn(mockHistory, 'replace');
      manager.pushStateToURL(baseState);
      expect(spyPush).toHaveBeenCalledWith({
        search: baseStateAsUrl
      });
      expect(spyReplace).toHaveBeenCalledTimes(0);
    });

    it('should replace the url from state', () => {
      const { manager, mockHistory } = setup();
      const spyPush = jest.spyOn(mockHistory, 'push');
      const spyReplace = jest.spyOn(mockHistory, 'replace');
      manager.pushStateToURL(baseState, { replaceUrl: true });
      expect(spyPush).toHaveBeenCalledTimes(0);
      expect(spyReplace).toHaveBeenCalledWith({
        search: baseStateAsUrl
      });
    });
  });

  describe('onURLStateChange', () => {
    it('should call provided callback with updated state when url changes', () => {
      const { manager, mockHistory } = setup();
      let newState;

      // Provide url state change handler
      manager.onURLStateChange(state => {
        newState = state;
      });

      // change url location
      mockHistory.push(baseStateAsUrl);

      // Verify it is called when url state changes
      expect(newState).toEqual(expect.objectContaining(baseUrlState));
    });

    /*
      If we triggered the callback every time we pushed state to the url,
      we would have an infinite loop.

      pushStateToURL -> UpdateUrl -> HistoryEvent -> Handler -> pushstateToURL

      Instead, we just want:
      pushStateToURL -> UpdateUrl -> HistoryEvent -> Handler

    */
    it('should not trigger callback as a result of pushStateToURL', () => {
      const { manager } = setup();
      let newState;

      // Provide url state change handler
      manager.onURLStateChange(state => {
        newState = state;
      });

      // Push state to the url
      manager.pushStateToURL(baseState);

      // Verify handler is not called
      expect(newState).toBe(undefined);
    });

    it('should trigger callback if navigating back to a url with browser buttons', () => {
      const { manager, mockHistory } = setup();
      let newState;

      // Provide url state change handler
      manager.onURLStateChange(state => {
        newState = state;
      });

      // Push state to the url
      manager.pushStateToURL(baseState);

      // Back button to default state
      mockHistory.back();
      expect(newState).toEqual({});

      // Forward button to double back to the original "newUrl"
      mockHistory.forward();
      expect(newState).toEqual(expect.objectContaining(baseUrlState));
    });
  });
});
