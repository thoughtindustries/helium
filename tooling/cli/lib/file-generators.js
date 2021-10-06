const fs = require('fs-extra');
const path = require('path');
const rp = require('request-promise');

const SETTINGS_QUERY = `
  query CompanyDetailsQuery {
    CompanyDetails {
      settings {
        backgroundAsset
        backgroundAssetTiled
        logoAsset
        retinaLogo
        altFont
        font
        accentColor
        secondaryColor
        linkColor
      }
    }
  }
`;

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
    const endpoint = `${instance.instanceUrl}/helium?apiKey=${instance.apiKey}`;
    const options = {
      method: 'POST',
      url: endpoint,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: SETTINGS_QUERY })
    };

    const resp = await rp(options);
    const companyData = JSON.parse(resp)[0];

    let appearanceData = {};
    if (companyData) {
      const {
        data: { CompanyDetails }
      } = companyData;
      appearanceData = CompanyDetails && CompanyDetails.settings ? CompanyDetails.settings : {};
    }

    data.push({
      nickname: instance.nickname,
      url: instance.instanceUrl,
      email: instance.testUserEmail,
      ...appearanceData
    });
  }

  return fs.writeFile(fileName, JSON.stringify({ instances: data }));
};

module.exports = { initProject };
