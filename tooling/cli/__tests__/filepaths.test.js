const { filePathIsValid } = require('./../lib/helpers/filepaths');

describe('@thoughtindustries/tooling/cli/helpers/filepaths', () => {
  describe('filePathIsValid', () => {
    it.each([
      ['component.js'],
      ['component.jsx'],
      ['component.ts'],
      ['component.tsx'],
      ['src/pages/Home.tsx'],
      ['node_modules/@thoughtindustries/content/src/index.ts']
    ])('returns true for runtime source file %s', filePath => {
      expect(filePathIsValid(filePath)).toBe(true);
    });

    it.each([
      ['index.d.ts'],
      ['types.d.tsx'],
      ['node_modules/@apollo/client/index.d.ts'],
      ['node_modules/vike/dist/types.d.ts'],
      ['node_modules/@thoughtindustries/content/dist/index.d.ts']
    ])('returns false for declaration file %s', filePath => {
      expect(filePathIsValid(filePath)).toBe(false);
    });

    it.each([['styles.css'], ['image.png'], ['data.json'], ['README.md'], ['config.yaml']])(
      'returns false for non-script file %s',
      filePath => {
        expect(filePathIsValid(filePath)).toBe(false);
      }
    );
  });
});
