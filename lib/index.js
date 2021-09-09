#!/usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const inquirer = require('inquirer');
const childProcess = require('child_process');

const { TARGET_DIR_QUESTION, INSTANCE_QUESTIONS } = require('./prompts');
const { isInstance } = require('./validations');
const {
  initProjectDirectory,
  generateEnvFile,
  generateConfigFile,
  generatePackageFile,
  generateGitIgnore
} = require('./file-generators');

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

const createCli = argv => {
  const cli = yargs(hideBin(argv)).parserConfiguration({
    'boolean-negation': false
  });

  cli
    .scriptName('ti')
    .usage(`Usage: $0 <command> [options]`)
    .alias(`h`, `help`)
    .alias(`v`, `version`);

  return cli
    .command({
      command: 'init',
      describe: 'Create new TI Template Project',
      handler: async () => {
        const { dir } = await promptQuestions(TARGET_DIR_QUESTION);
        const instances = await gatherInstances();

        if (instances.length) {
          await initProjectDirectory(dir);
          await generateEnvFile(dir, instances);
          await generateConfigFile(dir, instances);
          await generatePackageFile(dir);
          await generateGitIgnore(dir);
        }
      }
    })
    .command({
      command: 'dev',
      describe: 'Start a local dev server',
      handler: () => {
        childProcess.fork('./dev.js');
      }
    })
    .command({
      command: 'deploy',
      describe: 'Compile and deploy a specified instance',
      builder: cmd => {
        cmd.option('i', {
          alias: 'instance',
          type: 'string',
          describe: 'Nickname of instance to deploy'
        });
      },
      handler: () => {
        childProcess.fork('./deploy.js');
      }
    })
    .wrap(cli.terminalWidth())
    .parse();
};

createCli(process.argv);
