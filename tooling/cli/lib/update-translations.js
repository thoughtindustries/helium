const { fetchTranslations, writeTranslationFile } = require('./helpers/translations');
const path = require('path');

const OP_DIR = process.cwd();
const configPath = path.join(OP_DIR, '/ti-config');
const config = require(configPath);
const INSTANCE_NAME = process.env.INSTANCE_NAME;

(async function () {
  const instance = findTIInstance();
  const instanceTranslations = await fetchTranslations(instance);

  if (instanceTranslations && instanceTranslations.length) {
    await writeTranslationFile(OP_DIR, instanceTranslations);
  }
})()
  .then(() => {
    console.log('>>> Translations updated successfully');
    process.exit(0);
  })
  .catch(err => {
    console.error('>>> Error updating translations: ', err);
    process.exit(1);
  });

function findTIInstance() {
  const { instances = [] } = config;
  let instance;

  if (INSTANCE_NAME) {
    const possibleMatch = instances.find(instance => instance.nickname === INSTANCE_NAME);
    if (possibleMatch && possibleMatch.apiKey) {
      instance = possibleMatch;
    }
  }

  return instance;
}
