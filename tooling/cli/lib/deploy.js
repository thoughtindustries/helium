const path = require('path');
const fs = require('fs-extra');
const fetch = require('isomorphic-unfetch');
const FormData = require('form-data');
const { gqlPluckFromCodeString } = require('@graphql-tools/graphql-tag-pluck');
const { print } = require('graphql/language/printer');
const { parse } = require('graphql/language');
const crypto = require('crypto');

const OP_DIR = process.cwd();
const configPath = path.join(OP_DIR, '/ti-config');
const config = require(configPath);

const INSTANCE_NAME = process.env.INSTANCE_NAME;
const BUCKET = 'ti-helium-deploy';

const KEY_QUERY = `
  query CompanyDetailsQuery {
    HeliumLaunchData {
      key
      AWSAccessKeyId
      signature
      policy
      acl
      success_action_status
    }
  }
`;

const LAMBDA_QUERY = `
  query HeliumLambdaQuery($key: String!, $nickname: String!) {
    HeliumLambda(key: $key, nickname: $nickname)
  }
`;

(async function () {
  const instance = findTIInstance();

  if (!instance) {
    throw new Error('Could not locate instance in configuration file.');
  }

  const policyData = await getHeliumUploadData(instance);
  const { key } = policyData;

  if (!policyData.key || !policyData.AWSAccessKeyId || !policyData.signature) {
    throw new Error('Could not retrieve helium keys.');
  }

  try {
    await writeGraphqlManifest();
    await uploadHeliumProject(policyData);
    await triggerLambda(instance, key);
  } catch (e) {
    throw new Error(e);
  }
})()
  .then(() => {
    console.log('>>> Deploy successful!');
    process.exit(0);
  })
  .catch(err => {
    console.error('>>> Error deploying: ', err);
    process.exit(1);
  });

async function writeGraphqlManifest() {
  const queryHashMap = await hashGraphqlQueries();
  const distDir = path.join(OP_DIR, 'dist/client');
  await fs.writeFile(path.join(distDir, 'graphql-manifest.json'), JSON.stringify(queryHashMap));
  return;
}

async function hashGraphqlQueries() {
  const pagesFilePaths = await getFilePaths(path.join(OP_DIR, 'pages'));
  const queryHashMap = {};

  for (const filePath of pagesFilePaths) {
    if (filePathIsValid(filePath)) {
      const querySources = await gqlPluckFromCodeString(
        filePath,
        fs.readFileSync(filePath, 'utf8')
      );

      if (querySources && querySources.length > 0) {
        for (const querySource of querySources) {
          const { hash, query } = hashQuery(querySource);
          queryHashMap[hash] = query;
        }
      }
    }
  }

  return queryHashMap;
}

function hashQuery(querySource) {
  const query = print(parse(querySource));
  const hash = crypto.createHash('sha256').update(query).digest('hex');

  return { hash, query };
}

function filePathIsValid(filePath) {
  return (
    filePath.endsWith('.js') ||
    filePath.endsWith('.jsx') ||
    filePath.endsWith('.ts') ||
    filePath.endsWith('.tsx')
  );
}

async function uploadHeliumProject(policyData) {
  const filePaths = await getFilePaths(OP_DIR);
  const chunkedFilePaths = chunkArray(filePaths, 5);
  let i = 0;

  for (const chunkOfFilePaths of chunkedFilePaths) {
    i = i + 1;
    const uploadPromises = chunkOfFilePaths.map(filePath => uploadToS3(filePath, policyData));
    await Promise.all(uploadPromises);
    console.log(
      '>>> uploaded:: ',
      Math.floor((parseInt(i) / parseInt(chunkedFilePaths.length)) * 100),
      '%'
    );
  }

  return true;
}

async function triggerLambda(instance, key) {
  return new Promise((resolve, reject) => {
    const endpoint = `${instance.instanceUrl}/helium?apiKey=${instance.apiKey}`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: LAMBDA_QUERY,
        variables: { key, nickname: instance.nickname }
      })
    };

    fetch(endpoint, options)
      .then(r => r.json())
      .then(res => {
        const resObj = res[0];
        if (resObj.data) {
          resolve(resObj.data);
        } else {
          const err = resObj.errors[0];
          reject(err.message);
        }
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

async function getHeliumUploadData(instance) {
  const endpoint = `${instance.instanceUrl}/helium?apiKey=${instance.apiKey}`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: KEY_QUERY })
  };

  let responseData = {};
  const launchData = await fetch(endpoint, options).then(r => r.json());

  if (launchData && launchData[0] && launchData[0].data) {
    const {
      data: {
        HeliumLaunchData: { key, AWSAccessKeyId, signature, policy, acl, success_action_status }
      }
    } = launchData[0];

    responseData = {
      key,
      AWSAccessKeyId,
      signature,
      policy,
      acl,
      success_action_status
    };
  }

  return responseData;
}

function uploadToS3(filePath, policyData) {
  return new Promise((resolve, reject) => {
    const { key } = policyData;
    const sanitizedFilePath = filePath.split(OP_DIR)[1];
    const fullFileKey = path.join(key, sanitizedFilePath);

    const objPolicy = Object.assign({}, policyData, { key: fullFileKey });
    const form = buildFormData(objPolicy, filePath);

    const endpoint = `https://${BUCKET}.s3.amazonaws.com/`;
    const options = {
      method: 'POST',
      headers: form.getHeaders(),
      body: form
    };

    fetch(endpoint, options)
      .then(res => {
        if (res.status && res.status === 201) {
          resolve();
        } else {
          reject(new Error('Could not upload to S3.'));
        }
        resolve();
      })
      .catch(err => {
        console.error('error fetching: ', err.message);
        reject(err);
      });
  });
}

function buildFormData(policyData, filePath) {
  const form = new FormData();
  for (const prop in policyData) {
    form.append(prop, policyData[prop]);
  }

  form.append('file', fs.readFileSync(filePath, 'utf8'));

  return form;
}

async function getFilePaths(dir, filePaths = []) {
  const newFilePaths = filePaths;
  const contents = await fs.readdir(dir);

  for (const content of contents) {
    const filePath = path.join(dir, content);
    const stat = await fs.stat(filePath);

    if (stat.isFile()) {
      newFilePaths.push(filePath);
    } else {
      const baseDir = filePath.split(`${process.cwd()}/`)[1];
      if (!['pages', 'renderer', 'server', 'node_modules'].includes(baseDir)) {
        await getFilePaths(filePath, newFilePaths);
      }
    }
  }

  return newFilePaths;
}

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

function chunkArray(array, size) {
  const chunkedArray = [];

  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }

  return chunkedArray;
}
