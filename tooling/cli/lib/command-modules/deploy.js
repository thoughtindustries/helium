const childProcess = require('child_process');
const path = require('path');

exports.command = 'deploy <instance> [-k]';
exports.describe = 'Compile and deploy a specified instance';

exports.builder = cmd => {
  cmd
    .positional('i', {
      alias: 'instance',
      type: 'string',
      describe: 'Nickname of instance to deploy'
    })
    .option('k', {
      alias: 'insecure',
      type: 'boolean',
      describe: 'Accept untrusted SSL certificates'
    });
};

exports.handler = function (argv) {
  const exec = childProcess.exec;
  const env = {
    ...process.env,
    INSTANCE_NAME: argv.instance,
    NODE_TLS_REJECT_UNAUTHORIZED: argv.insecure ? '0' : '1'
  };

  const deployScriptPath = path.resolve(__dirname, './../deploy.js');
  const deployProcess = exec(`node ${deployScriptPath}`, { env });

  deployProcess.stdout.pipe(process.stdout);
  deployProcess.stderr.pipe(process.stderr);

  deployProcess.on('exit', code =>
    console.log(`deployProcess process exited with code ${code.toString()}`)
  );
};
