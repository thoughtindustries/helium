const { instanceEndpoint } = require('./helpers/urls');
const fetch = require('isomorphic-unfetch');
const fs = require('fs');
const path = require('path');
const OP_DIR = process.cwd();
const { pipeline } = require('stream');

const BATCH_LOGS_QUERY = /* GraphQL */ `
  query HeliumDeploymentLogQuery($jobId: ID!, $filters: HeliumDeploymentLogFiltersInput) {
    HeliumDeploymentLog(jobId: $jobId, filters: $filters) {
      events {
        timestamp
        message
      }
      nextForwardToken
    }
  }
`;
const BATCH_LOG_LIMIT = 10000;

function fetchDeploymentLogs(endpoint, jobId, filters) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: BATCH_LOGS_QUERY,
        variables: { jobId, filters }
      })
    };

    fetch(endpoint, options)
      .then(r => r.json())
      .then(res => {
        const resObj = res;

        if (resObj.data) {
          resolve(resObj.data.HeliumDeploymentLog);
        } else {
          const err = resObj.errors[0];
          reject(err.message);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

async function* deploymentLogsGenerator(jobId, instance) {
  // prepare for log fetch iterations
  const endpoint = instanceEndpoint(instance);
  let nextForwardToken;
  let hasMoreLog = true;
  const baseFilters = {
    limit: BATCH_LOG_LIMIT,
    startFromHead: true
  };

  // paging through log events
  while (hasMoreLog) {
    console.log(`>>> Fetching ${!nextForwardToken ? 'first' : 'next'} batch of log events`);
    const filters = { ...baseFilters, nextToken: nextForwardToken };
    const { events, nextForwardToken: nextForwardTokenNew } = await fetchDeploymentLogs(
      endpoint,
      jobId,
      filters
    );

    const chunk = events.map(({ timestamp, message }) => `(${timestamp}) ${message}\n`).join('');
    yield chunk;

    if (!events.length || !nextForwardTokenNew || nextForwardTokenNew === nextForwardToken) {
      hasMoreLog = false;
    } else {
      nextForwardToken = nextForwardTokenNew;
    }
  }

  return;
}

process.on('message', ({ jobId, instance }) => {
  // create fs write stream
  const logFilePath = path.join(OP_DIR, `deploy-log-${Date.now()}.log`);
  const writableStream = fs.createWriteStream(logFilePath);

  // use pipeline from async iterator to write stream
  pipeline(deploymentLogsGenerator(jobId, instance), writableStream, error => {
    if (error) {
      console.error('>>> Error fetching deployment log: ', error);
      console.log(`>>> Partial deployment log events are saved to file ${logFilePath}`);
      process.exit(1);
    } else {
      console.log(`>>> Deployment log events are saved to file ${logFilePath}`);
      process.exit(0);
    }
  });
});
