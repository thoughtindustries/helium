const fs = require('fs').promises;
const path = require('path');

const DEFAULT_PACKAGE_JSON = {
  private: true,
  scripts: {
    dev: 'stub',
    deploy: 'stub'
  },
  dependencies: {}
};

const DEFAULT_GIT_IGNORE = `
# dependencies
/node_modules

# env
.env

# misc
.DS_Store`;

const initProjectDirectory = async (dir) => {
  await fs.mkdir(dir);
  const pagesDir = path.resolve(dir, '/pages');
  await fs.mkdir(pagesDir);
  return fs.writeFile(path.resolve(pagesDir, '/index.mdx'), 'hello');
}

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
  const data = instances.map(instance => ({
    nickname: instance.nickname,
    url: instance.instanceUrl,
    email: instance.testUserEmail
  }));

  return fs.writeFile(fileName, JSON.stringify({ instances: data }));
};

const generatePackageFile = async dir => {
  const fileName = path.resolve(dir, 'package.json');
  return fs.writeFile(fileName, JSON.stringify(DEFAULT_PACKAGE_JSON));
};

const generateGitIgnore = async dir => {
  const fileName = path.resolve(dir, '.gitignore');
  return fs.writeFile(fileName, DEFAULT_GIT_IGNORE);
};

module.exports = { initProjectDirectory, generateEnvFile, generateConfigFile, generatePackageFile, generateGitIgnore };
