const { writeFile } = require('fs/promises');
const path = require('path');
const { fetchTranslations, writeTranslationFile } = require('./helpers/translations');

const initProject = async (dir, instances) => {
  console.log('Generating env file...');
  await generateEnvFile(dir, instances);

  console.log('Generating translations file...');
  await generateTranslationFile(dir, instances);

  console.log('Generating config file...');
  return generateConfigFile(dir, instances);
};

const generateEnvFile = async (dir, instances) => {
  const fileName = path.resolve(dir, '.env');
  let data = '';

  instances.forEach(instance => {
    data += `TI_${instance.nickname}_API_KEY=${instance.apiKey}\n`;
  });

  return writeFile(fileName, data);
};

const generateTranslationFile = async (dir, instances) => {
  // just fetch translations from the first instances
  // if user wants translations from another instance, they can run update script
  const instance = instances[0];
  const instanceTranslations = await fetchTranslations(instance);

  if (instanceTranslations && instanceTranslations.length) {
    await writeTranslationFile(dir, instanceTranslations, true);
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

  return writeFile(fileName, JSON.stringify({ instances: data }));
};

module.exports = { initProject };
