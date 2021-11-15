#!/usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const createCli = argv => {
  const cli = yargs(hideBin(argv)).parserConfiguration({
    'boolean-negation': false
  });

  cli
    .scriptName('helium')
    .usage(`Usage: $0 <command> [options]`)
    .alias(`h`, `help`)
    .alias(`v`, `version`);

  return cli.commandDir('command-modules').wrap(cli.terminalWidth()).parse();
};

createCli(process.argv);
