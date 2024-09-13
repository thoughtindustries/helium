jest.mock('../../cli/lib/helpers/filepaths', () => ({
  //requireActual prevents mainFunction from being mocked
  ...jest.requireActual('../../cli/lib/helpers/filepaths'),
  getFilePaths: jest.fn()
}));
const { getFilePaths } = require('../../cli/lib/helpers/filepaths');
const {
  readTranslations,
  processTranslations,
  writeTranslations
} = require('../../cli/lib/parse-translations');
const { readFile } = require('fs/promises');
const path = require('path');
const { writeFile } = require('fs/promises');

describe('readTranslations', () => {
  it('should read translations file correctly', async () => {
    const instanceTranslations = await readTranslations(__dirname);

    const translationsFilePath = path.join(__dirname, 'locales/translations.json');
    const fileContent = await readFile(translationsFilePath, 'utf8');
    const expectedTranslations = JSON.parse(fileContent);

    expect(instanceTranslations).toEqual(expectedTranslations);
  });
});

describe('processTranslations', () => {
  it('should process translations correctly', async () => {
    const expectedProcessedPath = path.join(__dirname, 'processed-translations.json');
    const fileContent = await readFile(expectedProcessedPath, 'utf8');
    const processedTranslations = JSON.parse(fileContent);

    getFilePaths.mockResolvedValue([
      path.join(__dirname, 'mock-files-with-translations/translation-example-1.js'),
      path.join(__dirname, 'mock-files-with-translations/translation-example-2.mjs')
    ]);

    const instanceTranslations = await readTranslations(__dirname);

    const proccessedResults = await processTranslations(instanceTranslations, __dirname);

    expect(proccessedResults).toEqual(processedTranslations);
  });
});

describe('writeTranslations', () => {
  it('should write translations to a file', async () => {
    const translationsFilePath = path.join(__dirname, 'locales/translations.json');

    try {
      const translationFilePath = path.join(__dirname, 'processed-translations.json');
      const fileContent = await readFile(translationFilePath, 'utf8');
      const processedTranslations = JSON.parse(fileContent);

      await writeFile(translationsFilePath, '');

      await writeTranslations(processedTranslations, __dirname);

      const writtenContent = await readFile(translationsFilePath, 'utf8');
      const parsedContent = JSON.parse(writtenContent);

      expect(parsedContent).toEqual(processedTranslations);
    } catch (error) {
      console.log(error.message);
    } finally {
      const backupTranslationFilePath = path.join(__dirname, 'locales/backup-translations.json');
      const backUpTranslations = await readFile(backupTranslationFilePath, 'utf8');

      await writeFile(translationsFilePath, backUpTranslations);
    }
  });
});
