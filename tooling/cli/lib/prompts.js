const { hasInput, isAbsoluteUrl, containsOnlyLetters, isEmail } = require('./validations');

const INSTANCE_QUESTIONS = [
  {
    type: 'input',
    name: 'instanceUrl',
    message: 'What is the instance URL?',
    validate: isAbsoluteUrl
  },
  {
    type: 'password',
    name: 'apiKey',
    message: 'What is the API Key for this instance?',
    validate: hasInput
  },
  {
    type: 'input',
    name: 'nickname',
    message: 'What is the nickname for this instance?',
    validate: containsOnlyLetters
  },
  {
    type: 'input',
    name: 'testUserEmail',
    message: 'What is the email of a test user in this instance?',
    validate: isEmail
  },
  {
    type: 'confirm',
    name: 'addInstance',
    message: 'Would you like to add another instance?'
  }
];

const DEPLOYMENT_LOG_FETCH_QUESTION = {
  type: 'confirm',
  name: 'shouldFetchLogs',
  message: 'Would you like to fetch logs for the deployment?'
};

const DEPLOYMENT_LOG_FETCH_MORE_QUESTION = {
  type: 'confirm',
  name: 'shouldFetchMoreLogs',
  message: 'Would you like to fetch next batch of logs for the deployment?'
};

module.exports = {
  INSTANCE_QUESTIONS,
  DEPLOYMENT_LOG_FETCH_QUESTION,
  DEPLOYMENT_LOG_FETCH_MORE_QUESTION
};
