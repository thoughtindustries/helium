const inquirer = require('inquirer');
const { TARGET_DIR_QUESTION, INSTANCE_QUESTIONS } = require('./../prompts');
const { isInstance } = require('./../validations');
const { initProject } = require('./../file-generators');

const promptQuestions = async questions => {
  return new Promise((resolve, reject) => {
    inquirer.prompt(questions).then(resolve).catch(reject);
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

exports.command = 'init';
exports.describe = 'Create new TI Template Project';
exports.handler = async function () {
  const { dir } = await promptQuestions(TARGET_DIR_QUESTION);
  const instances = await gatherInstances();

  if (instances.length) {
    await initProject(dir, instances);
  }
};
