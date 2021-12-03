const configJson = require('./../ti-config');

module.exports = { findTiInstance };

function findTiInstance(instanceName) {
  const { instances = [] } = configJson;
  let instance = instances[0];

  if (instanceName) {
    const possibleMatch = instances.find(instance => instance.nickname === instanceName);
    if (possibleMatch && possibleMatch.apiKey) {
      instance = possibleMatch;
    }
  }

  return instance;
}
