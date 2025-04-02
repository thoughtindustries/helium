const { fetchTranslations, writeTranslationFile } = require('./helpers/translations');
const path = require('path');

function findTIInstance(config, INSTANCE_NAME) {
  const { instances = [] } = config;
  let instance;

  if (INSTANCE_NAME) {
    const possibleMatch = instances.find(instance => instance.nickname === INSTANCE_NAME);
    if (possibleMatch && possibleMatch.apiKey) {
      instance = possibleMatch;
    }
  }

  if (!instance) {
    instance = instances[0];
  }

  return instance;
}

async function updateTranslations(pathToWrite) {
  if (pathToWrite === undefined) {
    pathToWrite = process.cwd();
  }
  const configPath = path.resolve(pathToWrite, 'ti-config.json');
  const config = require(configPath);
  const INSTANCE_NAME = process.env.INSTANCE_NAME;
  try {
    const instance = findTIInstance(config, INSTANCE_NAME);
    const instanceTranslations = await fetchTranslations(instance);

    if (instanceTranslations && instanceTranslations.length) {
      await writeTranslationFile(pathToWrite, instanceTranslations);
      console.log('>>> Translations updated successfully');
      process.exit(0);
    }
  } catch (err) {
    console.error('>>> Error updating translations: ', err);
    process.exit(1);
  }
}

module.exports = { updateTranslations, findTIInstance };
