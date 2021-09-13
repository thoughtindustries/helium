#!/usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

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
    .command(require('./command-modules/init'))
    .command(require('./command-modules/dev'))
    .command(require('./command-modules/deploy'))
    .wrap(cli.terminalWidth())
    .parse();
};

createCli(process.argv);
