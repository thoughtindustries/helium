import loadScript from 'load-script';
import { getSdk } from '../src';

/**
 *
 * loadScript... loads a script, and that script should set
 * a property/function on the window object, so we're mocking
 * the return from the requested URL as well as setting the window property
 *
 * */
jest.mock('load-script', () => {
  return {
    __esModule: true,
    default: jest.fn((...args) => {
      const [, cb] = args;
      window.MockedSDK = true;
      return cb(null);
    })
  };
});

describe('@thoughtindustries/utilities', () => {
  describe('getSdk', () => {
    it('returns global if it already exists', async () => {
      window.TestSDK = true;
      window.exports = { ExportedSDK: true };
      window.module = { ...window.module, exports: { ModuleSDK: true } };

      const windowResult = await getSdk('https://thoughtindustries.com', 'TestSDK');
      const exportedResult = await getSdk('https://thoughtindustries.com', 'ExportedSDK');
      const moduleresult = await getSdk('https://thoughtindustries.com', 'ModuleSDK');

      expect(windowResult).toEqual(true);
      expect(exportedResult).toEqual(true);
      expect(moduleresult).toEqual(true);
    });

    it('requests url passed and sets result to document head if global does not exist', async () => {
      expect(window.MockedSDK).toBeUndefined();

      await getSdk('https://thoughtindustries.com', 'MockedSDK');

      expect(loadScript).toHaveBeenCalled();
      expect(window.MockedSDK).toEqual(true);
    });
  });
});
