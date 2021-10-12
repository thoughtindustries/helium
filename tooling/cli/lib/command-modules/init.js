const inquirer = require('inquirer');
const { TARGET_DIR_QUESTION, INSTANCE_QUESTIONS } = require('./../prompts');
const { isInstance } = require('./../validations');
const { initProject } = require('./../file-generators');

const promptQuestions = async questions => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt(questions)
      .then(resolve)
      .catch(reject);
  });
};

const gatherInstances = async (instances = []) => {
  const newInstanceAnswers = await promptQuestions(INSTANCE_QUESTIONS);
  const instanceIsValid = await isInstance(newInstanceAnswers);

  if (instanceIsValid) {
    instances.push(newInstanceAnswers);
  }

  if (newInstanceAnswers.addInstance) {
    instances = await gatherInstances(instances);
  }

  return instances;
};

exports.builder = cmd => {
  cmd.option('k', {
    alias: 'insecure',
    type: 'boolean',
    describe: 'Accept untrusted SSL certificates'
  });
};

exports.command = 'init [k]';
exports.describe = 'Create new TI Template Project';
exports.handler = async function(argv) {
  const { dir } = await promptQuestions(TARGET_DIR_QUESTION);

  if (argv.insecure) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  }

  const instances = await gatherInstances();

  if (instances.length) {
    await initProject(dir, instances);
  }
};
