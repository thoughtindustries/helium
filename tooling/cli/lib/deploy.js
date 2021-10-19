const path = require('path');
const fs = require('fs-extra');
const AWS = require('aws-sdk');
const fetch = require('isomorphic-unfetch');
const FormData = require('form-data');

const OP_DIR = process.cwd();
const configPath = path.join(OP_DIR, '/ti-config');
const config = require(configPath);

const INSTANCE_NAME = process.env.INSTANCE_NAME;
const BUCKET = 'ti-helium-deploy';
const LAMBDA_FUNCTION = 'helium-deploy';

const KEY_QUERY = `
  query CompanyDetailsQuery {
    CompanyDetails {
      subdomain
    }
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
  query HeliumLambdaQuery($subdomain: String!, $key: String!, $nickname: String!) {
    HeliumLambda(subdomain: $subdomain, key: $key, nickname: $nickname)
  }
`;

(async function() {
  const instance = findTIInstance();

  if (!instance) {
    throw new Error('Could not locate instance in configuration file.');
  }

  const policyData = await getHeliumUploadData(instance);
  const { subdomain, key } = policyData;

  if (!policyData.key || !policyData.AWSAccessKeyId || !policyData.signature) {
    throw new Error('Could not retrieve helium keys.');
  }

  try {
    await uploadHeliumProject(policyData);
    await triggerLambda(instance, key, subdomain, instance.nickname);
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

async function uploadHeliumProject(policyData) {
  const filePaths = await getFilePaths(OP_DIR);
  const chunkedFilePaths = chunkArray(filePaths, 1);

  for (const chunkOfFilePaths of chunkedFilePaths) {
    const uploadPromises = chunkOfFilePaths.map(filePath => uploadToS3(filePath, policyData));
    await Promise.all(uploadPromises);
  }

  return true;
}

async function triggerLambda(instance, key, subdomain, nickname) {
  return new Promise((resolve, reject) => {
    const endpoint = `${instance.instanceUrl}/helium?apiKey=${instance.apiKey}`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: LAMBDA_QUERY, variables: { subdomain, key, nickname } })
    };

    fetch(endpoint, options)
      .then(r => r.json())
      .then(res => {
        console.log('>>> lambda: ', res);
        resolve(res);
      })
      .catch(err => {
        console.error('>>> lambda err: ', err.message);
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

  const resp = await fetch(endpoint, options).then(r => r.json());
  const launchData = resp[0];
  let responseData = {};

  if (launchData) {
    const {
      data: {
        CompanyDetails: { subdomain },
        HeliumLaunchData: { key, AWSAccessKeyId, signature, policy, acl, success_action_status }
      }
    } = launchData;

    responseData = {
      subdomain,
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
    if (prop !== 'subdomain') {
      form.append(prop, policyData[prop]);
    }
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
      if (!['pages', 'renderer', 'server'].includes(baseDir)) {
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
