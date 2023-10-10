jest.mock('../../cli/lib/helpers/translations', () => ({
  fetchTranslations: jest.fn(),
  writeTranslationFile: jest.fn()
}));

jest.mock('../../cli/lib/update-translations.js', () => ({
  //requireActual prevents mainFunction from being mocked
  ...jest.requireActual('../../cli/lib/update-translations.js'),
  findTIInstance: jest.fn()
}));

const { updateTranslations } = require('../../cli/lib/update-translations.js');
const { fetchTranslations, writeTranslationFile } = require('../../cli/lib/helpers/translations');
const { instanceTranslations } = require('./locales/instance-translations');

describe('updateTranslations', () => {
  it('should update translations successfully', async () => {
    const writeFileMock = writeTranslationFile;

    //mock the response of fetchTranslations
    fetchTranslations.mockResolvedValue(instanceTranslations);

    //mock the exit to stop the process.exit from terminating the test
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    await updateTranslations(__dirname);
    expect(mockExit).toHaveBeenCalledWith(0);

    //ensure writeTranslationsFile was called with the correct arguments
    expect(writeFileMock).toHaveBeenCalledWith(__dirname, instanceTranslations);
  });
});
