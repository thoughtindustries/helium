#!/usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const inquirer = require('inquirer');
const childProcess = require('child_process');

const { TARGET_DIR_QUESTION, INSTANCE_QUESTIONS } = require('./prompts');
const { isInstance } = require('./validations');
const { initProject } = require('./file-generators');

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
          await initProject(dir, instances);
        }
      }
    })
    .command({
      command: 'dev',
      describe: 'Start a local dev server',
      handler: () => {
        const exec = childProcess.exec;
        const devProcess = exec('npm run build && npm run dev');
        devProcess.stdout.pipe(process.stdout);
        devProcess.stderr.pipe(process.stderr);
        devProcess.on('exit', code =>
          console.log(`Child process exited with code ${code.toString()}`)
        );
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
