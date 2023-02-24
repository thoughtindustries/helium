const path = require('path');
const {
  createReadStream,
  promises: { stat, writeFile, unlink, rename }
} = require('fs');
const fetch = require('isomorphic-unfetch');
const childProcess = require('child_process');
const tar = require('tar');
const os = require('os');

const { getFilePaths } = require('./helpers/filepaths');
const { instanceEndpoint } = require('./helpers/urls');
const { generateTranslationFile } = require('./file-generators');
const {
  gatherQuerySources,
  buildFragmentMap,
  transformDoc,
  hashQuery
} = require('./helpers/graphql');
const { dirHasAtoms, getAtomsHash, compileStyles } = require('./helpers/atoms');

const OP_DIR = process.cwd();
const TMP_DIR = os.tmpdir();
const configPath = path.join(OP_DIR, '/ti-config');
const config = require(configPath);

const INSTANCE_NAME = process.env.INSTANCE_NAME;

const KEY_QUERY = /* GraphQL */ `
  query CompanyDetailsQuery($nickname: String!) {
    HeliumLaunchData(nickname: $nickname) {
      key
      signedUrl
    }
  }
`;

const BATCH_QUERY = /* GraphQL */ `
  query HeliumBatchQuery($key: String!, $nickname: String!) {
    HeliumBatch(key: $key, nickname: $nickname)
  }
`;

const JOB_QUERY = /* GraphQL */ `
  query HeliumDeploymentStatusQuery(
    $jobId: ID!
    $key: String
    $atomsScriptHash: String
    $atomsStyleHash: String
  ) {
    HeliumDeploymentStatus(
      jobId: $jobId
      key: $key
      atomsScriptHash: $atomsScriptHash
      atomsStyleHash: $atomsStyleHash
    )
  }
`;

class DeploymentError extends Error {
  #payload;
  constructor(message, payload) {
    super(message);
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
    this.#payload = { ...payload };
  }
  getPayload() {
    return this.#payload;
  }
}

(async function () {
  const instance = findTIInstance();

  if (!instance) {
    throw new Error('Could not locate instance in configuration file.');
  }

  const policyData = await getHeliumUploadData(instance);
  const { key } = policyData;

  if (!policyData.key || !policyData.signedUrl) {
    throw new Error('Could not retrieve helium keys.');
  }
  // ensure translations are up to date
  await generateTranslationFile(OP_DIR, [instance], true);
  // trim translations file down to only keys used in project
  await gatherUsedTranslations();
  // build project
  const hasAtoms = await dirHasAtoms(OP_DIR);
  await buildProject(hasAtoms);

  let atomsScriptHash;
  let atomsStyleHash;
  if (hasAtoms) {
    atomsScriptHash = await getAtomsHash(OP_DIR, 'script');
    const possibleStyleHash = (await getAtomsHash(OP_DIR, 'style')) || atomsScriptHash;
    atomsStyleHash = await compileStyles(OP_DIR, possibleStyleHash);
  }

  // hash queries for whitelisting
  await writeGraphqlManifest();
  await uploadHeliumProject(policyData);
  // reset translations file to include all keys for local development
  await resetTranslationFile();
  const batchJobId = await triggerBatch(instance, key);

  const fetchStatus = () =>
    checkDeploymentJobStatus(instance, batchJobId, key, atomsScriptHash, atomsStyleHash);

  const processing = result => {
    if (result === 'FAILED') {
      throw new DeploymentError('Batch deployment failed', { jobId: batchJobId, instance });
    }

    return result !== 'SUCCEEDED';
  };

  await poll(fetchStatus, processing, 3000);
})()
  .then(() => {
    console.log('>>> Deploy successful!');
    process.exit(0);
  })
  .catch(err => {
    console.error('>>> Error deploying: ', err);
    if (err instanceof DeploymentError) {
      process.send(err.getPayload());
    } else {
      process.exit(1);
    }
  });

// Add message event handler to keep the process running until manually closed
process.on('message', message => {
  console.log('>>> Deploy process receive message', message);
});

async function buildProject(hasAtoms) {
  return new Promise((resolve, reject) => {
    const exec = childProcess.exec;
    const buildCommandSuffix = hasAtoms ? 'atoms' : 'vite';
    const parseProcess = exec(`npm run build:css && npm run build:${buildCommandSuffix}`);

    parseProcess.stdout.pipe(process.stdout);
    parseProcess.stderr.pipe(process.stderr);

    parseProcess.on('error', err => reject(err)).on('exit', () => resolve());
  });
}

async function gatherUsedTranslations() {
  return new Promise((resolve, reject) => {
    const parserScript = path.join(__dirname, 'parse-translations.js');
    const exec = childProcess.exec;

    const parseProcess = exec(`node ${parserScript}`);

    parseProcess.stdout.pipe(process.stdout);
    parseProcess.stderr.pipe(process.stderr);

    parseProcess.on('error', err => reject(err)).on('exit', () => resolve());
  });
}

async function resetTranslationFile() {
  const translationsPath = path.join(OP_DIR, 'locales/translations.json');
  const backupTranslationsPath = path.join(OP_DIR, 'locales/translations-backup.json');
  await unlink(translationsPath);
  await rename(backupTranslationsPath, translationsPath);
}

async function writeGraphqlManifest() {
  const queryHashMap = await hashGraphqlQueries();
  const distDir = path.join(OP_DIR, 'dist/client');
  await writeFile(path.join(distDir, 'graphql-manifest.json'), JSON.stringify(queryHashMap));
  return;
}

async function hashGraphqlQueries() {
  const pagesFilePaths = await getFilePaths(path.join(OP_DIR, 'pages'));
  const componentsFilePaths = await getFilePaths(path.join(OP_DIR, 'components'));
  const tiFilepaths = await getFilePaths(path.join(OP_DIR, 'node_modules/@thoughtindustries'));
  const filePaths = pagesFilePaths.concat(componentsFilePaths).concat(tiFilepaths);

  const queryHashMap = {};
  const querySources = await gatherQuerySources(filePaths, '__tests__');

  if (querySources.length > 0) {
    const fragmentMap = buildFragmentMap(querySources);

    for (const querySource of querySources) {
      const modifiedDoc = transformDoc(querySource, fragmentMap);
      const { hash, query } = hashQuery(modifiedDoc);

      queryHashMap[hash] = query;
    }
  }

  return queryHashMap;
}

async function uploadHeliumProject(policyData) {
  const filePath = path.join(TMP_DIR, INSTANCE_NAME + '.tgz');

  console.log('>>> Compressing project.');

  await tar.c(
    {
      gzip: true,
      file: filePath
    },
    ['.']
  );

  console.log('>>> Compressed!');

  const fileSize = (await stat(filePath)).size;
  await uploadToS3(filePath, fileSize, policyData);

  return true;
}

async function triggerBatch(instance, key) {
  return new Promise((resolve, reject) => {
    const endpoint = instanceEndpoint(instance);
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: BATCH_QUERY,
        variables: { key, nickname: instance.nickname }
      })
    };

    fetch(endpoint, options)
      .then(r => r.json())
      .then(res => {
        const resObj = res;
        if (resObj.data) {
          resolve(resObj.data.HeliumBatch);
        } else {
          const err = resObj.errors;
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
  return new Promise((resolve, reject) => {
    const endpoint = instanceEndpoint(instance);

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: KEY_QUERY, variables: { nickname: instance.nickname } })
    };

    fetch(endpoint, options)
      .then(r => r.json())
      .then(res => {
        const resObj = res;
        if (resObj && resObj.data.HeliumLaunchData) {
          //there is still a null object in the data
          const {
            data: {
              HeliumLaunchData: { key, signedUrl }
            }
          } = resObj;

          const responseData = {
            key,
            signedUrl
          };
          resolve(responseData);
        } else if (resObj && resObj.errors) {
          const err = resObj.errors[0];
          reject(err.message);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

const UPLOAD_TRIES = 3;
function uploadToS3(filePath, fileSize, policyData, tryCount = 0) {
  return new Promise((resolve, reject) => {
    const { signedUrl } = policyData;

    const options = {
      method: 'PUT',
      body: createReadStream(filePath),
      headers: { 'Content-Length': fileSize },
      duplex: 'half'
    };

    fetch(signedUrl, options)
      .then(res => {
        if (res.status && res.status === 200) {
          resolve();
        } else {
          reject(new Error('Could not upload to S3.'));
        }
        resolve();
      })
      .catch(err => {
        if (tryCount < UPLOAD_TRIES) {
          tryCount++;
          console.log('>>> Retrying upload...');
          uploadToS3(filePath, fileSize, policyData, tryCount).then(resolve).catch(reject);
        } else {
          console.error('error while uploading: ', err.message);
          reject(err);
        }
      });
  });
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

async function checkDeploymentJobStatus(instance, jobId, key, atomsScriptHash, atomsStyleHash) {
  return new Promise((resolve, reject) => {
    const endpoint = instanceEndpoint(instance);
    const variables = { jobId };

    if (key && atomsScriptHash && atomsStyleHash) {
      variables.key = key;
      variables.atomsScriptHash = atomsScriptHash;
      variables.atomsStyleHash = atomsStyleHash;
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: JOB_QUERY,
        variables
      })
    };

    fetch(endpoint, options)
      .then(r => r.json())
      .then(res => {
        const resObj = res;

        if (resObj.data) {
          resolve(resObj.data.HeliumDeploymentStatus);
        } else {
          const err = resObj.errors;
          reject(err.message);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

async function poll(fn, processingFn, ms) {
  let result = await fn();
  let status = result.toLowerCase();

  console.log(`>>> Deployment status: ${status}`);

  while (processingFn(result)) {
    await wait(ms);
    result = await fn();
    const latestStatus = result.toLowerCase();

    if (latestStatus !== status) {
      status = latestStatus;
      console.log(`>>> Deployment status: ${status}`);
    }
  }

  return result;
}

function wait(ms = 1000) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
