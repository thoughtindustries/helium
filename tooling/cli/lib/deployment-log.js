const { instanceEndpoint } = require('./helpers/urls');
const fetch = require('isomorphic-unfetch');

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

function fetchDeploymentLogs(instance, jobId, filters) {
  return new Promise((resolve, reject) => {
    const endpoint = instanceEndpoint(instance);
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

process.on('message', async ({ jobId, nextForwardToken, instance }) => {
  try {
    const filters = {
      limit: BATCH_LOG_LIMIT,
      startFromHead: true,
      nextToken: nextForwardToken
    };
    const { events, nextForwardToken: nextForwardTokenNew } = await fetchDeploymentLogs(
      instance,
      jobId,
      filters
    );
    events.forEach(({ timestamp, message }) => console.log(`>>> (${timestamp}) ${message}`));
    if (
      !events.length ||
      events.length < BATCH_LOG_LIMIT ||
      !nextForwardTokenNew ||
      nextForwardTokenNew === nextForwardToken
    ) {
      console.log('>>> You have reached the end of the deployment log.');
      process.exit(0);
    } else {
      // Report back to parent process
      process.send({ jobId, nextForwardToken: nextForwardTokenNew, instance });
    }
  } catch (err) {
    console.error('>>> Error fetching deployment log: ', err);
    process.exit(1);
  }
});
