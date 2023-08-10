const { INSTANCE_QUESTIONS } = require('../prompts');
const { isInstance } = require('../validations');
const { initProject } = require('../file-generators');
const { promptQuestions } = require('../helpers/prompts');

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

exports.command = 'authenticate [-k]';
exports.describe = 'Create new TI Template Project';
exports.handler = async function (argv) {
  if (argv.insecure) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  }

  console.log('Gathering instances...');
  const instances = await gatherInstances();

  if (instances.length) {
    console.log('Initializing project...');
    await initProject(process.cwd(), instances);

    const pkgManager = /yarn/.test(process.env.npm_execpath) ? 'yarn' : 'npm';

    console.log('\nReady to get started? Just run:\n');
    console.log(`$ ${pkgManager} run dev`);
  }
};
