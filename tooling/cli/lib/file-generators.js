const fs = require('fs-extra');
const path = require('path');

const initProject = async (dir, instances) => {
  await fs.mkdir(dir);
  const basePath = path.resolve(__dirname, './../template_base');
  await fs.copy(basePath, dir);
  await generateEnvFile(dir, instances);
  return generateConfigFile(dir, instances);
};

const generateEnvFile = async (dir, instances) => {
  const fileName = path.resolve(dir, '.env');
  let data = '';

  instances.forEach(instance => {
    data += `TI_${instance.nickname}_API_KEY=${instance.apiKey}\n`;
  });

  return fs.writeFile(fileName, data);
};

const generateConfigFile = async (dir, instances) => {
  const fileName = path.resolve(dir, 'ti-config.json');
  const data = [];

  for (const instance of instances) {
    data.push({
      nickname: instance.nickname,
      instanceUrl: instance.instanceUrl,
      email: instance.testUserEmail,
      apiKey: instance.apiKey
    });
  }

  return fs.writeFile(fileName, JSON.stringify({ instances: data }));
};

module.exports = { initProject };
