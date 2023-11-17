const { writeFile } = require('fs/promises');
const path = require('path');
const { fetchTranslations, writeTranslationFile } = require('./helpers/translations');
const { DEFAULT_GRAPHQL_SOURCE_PATHS } = require('./helpers/constants');

const initProject = async (dir, instances) => {
  console.log('Generating env file...');
  await generateEnvFile(dir);
  await generateEnvFile(dir, true);

  console.log('Generating translations file...');
  await generateTranslationFile(dir, instances);

  console.log('Generating config file...');
  return generateConfigFile(dir, instances);
};

const generateEnvFile = async (dir, development = false) => {
  const fileName = path.resolve(dir, development ? '.env.development' : '.env');
  const data = `NODE_ENV=${development ? 'development' : 'production'}`;

  return writeFile(fileName, data);
};

const generateTranslationFile = async (dir, instances, generateBackup = false) => {
  // just fetch translations from the first instances
  // if user wants translations from another instance, they can run update script
  const instance = instances[0];
  const instanceTranslations = await fetchTranslations(instance);

  if (instanceTranslations && instanceTranslations.length) {
    await writeTranslationFile(dir, instanceTranslations, generateBackup);
  }

  return;
};

const generateConfigFile = async (dir, instances) => {
  const fileName = path.resolve(dir, 'ti-config.json');
  const data = [];

  for (let instance of instances) {
    if (instance.instanceUrl.endsWith('/')) {
      instance.instanceUrl = instance.instanceUrl.slice(0, -1);
    }

    data.push({
      nickname: instance.nickname,
      instanceUrl: instance.instanceUrl,
      email: instance.testUserEmail,
      apiKey: instance.apiKey
    });
  }

  return writeFile(
    fileName,
    JSON.stringify(
      {
        content: DEFAULT_GRAPHQL_SOURCE_PATHS,
        instances: data
      },
      null,
      2
    )
  );
};

module.exports = { initProject, generateTranslationFile };
