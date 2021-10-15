const path = require('path');
const fs = require('fs-extra');
const AWS = require('aws-sdk');
const fetch = require('isomorphic-unfetch');

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
      heliumSecretKey
      heliumAccessKey
    }
  }
`;

(async function() {
  const instance = findTIInstance();

  if (!instance) {
    throw new Error('Could not locate instance in configuration file.');
  }

  const { heliumAccessKey, heliumSecretKey, subdomain } = await getHeliumKeys(instance);

  if (!heliumAccessKey || !heliumSecretKey) {
    throw new Error('Could not retrieve helium keys.');
  }

  const prefixTime = new Date();
  const projectKey = `${prefixTime.getTime()}_${instance.id}/`;

  try {
    await uploadHeliumProject(heliumAccessKey, heliumSecretKey, projectKey);
    await triggerLambda(heliumAccessKey, heliumSecretKey, projectKey, subdomain, instance.nickname);
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

async function uploadHeliumProject(heliumAccessKey, heliumSecretKey, projectKey) {
  const s3 = new AWS.S3({
    region: 'us-east-1',
    accessKeyId: heliumAccessKey,
    secretAccessKey: heliumSecretKey
  });

  let expiration = new Date();
  expiration.setMinutes(expiration.getMinutes() + 15);
  expiration = expiration.toISOString();

  const filePaths = await getFilePaths(OP_DIR);
  const uploadPromises = filePaths.map(filePath => uploadToS3(s3, projectKey, filePath));

  return Promise.all(uploadPromises);
}

async function triggerLambda(heliumAccessKey, heliumSecretKey, projectKey, subdomain, nickname) {
  return new Promise((resolve, reject) => {
    const lambdaPayload = { projectKey, subdomain, nickname };
    const lambdaParams = { FunctionName: LAMBDA_FUNCTION, Payload: JSON.stringify(lambdaPayload) };
    const lambda = new AWS.Lambda({
      region: 'us-east-1',
      apiVersion: '2015-03-31',
      accessKeyId: heliumAccessKey,
      secretAccessKey: heliumSecretKey
    });

    lambda.invoke(lambdaParams, (err, res) => {
      if (err) {
        reject(err);
      } else {
        if (res.StatusCode === 202) {
          resolve(res.Payload);
        } else {
          const payload = JSON.parse(res.Payload);
          if (payload.errorMessage) {
            reject(payload.errorMessage);
          } else {
            resolve(payload);
          }
        }
      }
    });
  });
}

async function getHeliumKeys(instance) {
  const endpoint = `${instance.instanceUrl}/helium?apiKey=${instance.apiKey}`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: KEY_QUERY })
  };

  const resp = await fetch(endpoint, options);
  const companyData = JSON.parse(resp)[0];

  let heliumAccessKey;
  let heliumSecretKey;
  let subdomain;

  if (companyData) {
    const {
      data: { CompanyDetails }
    } = companyData;

    heliumAccessKey = CompanyDetails.heliumAccessKey;
    heliumSecretKey = CompanyDetails.heliumSecretKey;
    subdomain = CompanyDetails.subdomain;
  }

  return { heliumAccessKey, heliumSecretKey, subdomain };
}

function uploadToS3(s3, projectKey, filePath) {
  return new Promise((resolve, reject) => {
    const sanitizedFilePath = filePath.split(OP_DIR)[1];
    const key = path.join(projectKey, sanitizedFilePath);
    const params = {
      Bucket: BUCKET,
      Key: key,
      Body: fs.readFileSync(filePath)
    };

    s3.putObject(params, err => {
      if (err) {
        reject(err);
      } else {
        resolve(filePath);
      }
    });
  });
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
