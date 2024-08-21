const childProcess = require('child_process');
const path = require('path');

exports.command = 'update-translations [i] [-k]';
exports.describe = 'Update local translations file based on translations from provided instance';

exports.builder = cmd => {
  cmd
    .option('i', {
      alias: 'instance',
      type: 'string',
      describe: 'Nickname of instance to develop against'
    })
    .option('k', {
      alias: 'insecure',
      type: 'boolean',
      describe: 'Accept untrusted SSL certificates'
    });
};

exports.handler = argv => {
  const exec = childProcess.exec;
  const env = {
    ...process.env,
    INSTANCE_NAME: argv.instance,
    NODE_TLS_REJECT_UNAUTHORIZED: argv.insecure ? '0' : '1'
  };

  const updateScriptPath = path.resolve(__dirname, './../update-translations.js');
  const updateProcess = exec(`node -e "require('${updateScriptPath}').updateTranslations()"`, {
    env
  });

  updateProcess.stdout.pipe(process.stdout);
  updateProcess.stderr.pipe(process.stderr);

  updateProcess.on('exit', code => {
    console.log(`updateTranslationsProcess exited with code ${code.toString()}`);
  });
};
