const childProcess = require('child_process');

exports.command = 'dev [i] [p]';
exports.describe = 'Start a local dev server';

exports.builder = cmd => {
  cmd
    .option('i', {
      alias: 'instance',
      type: 'string',
      describe: 'Nickname of instance to develop against'
    })
    .option('p', {
      alias: 'port',
      type: 'number',
      describe: 'Port number that server should listen on',
      default: 3000
    })
    .option('a', {
      alias: 'accept',
      type: 'boolean',
      describe: 'Accept unauthorized requests'
    });
};

exports.handler = function (argv) {
  const exec = childProcess.exec;
  const env = {
    ...process.env,
    INSTANCE: argv.instance,
    PORT: argv.port,
    NODE_TLS_REJECT_UNAUTHORIZED: argv.a ? '0' : '1'
  };
  const devProcess = exec('npm run build && npm run dev', { env });

  devProcess.stdout.pipe(process.stdout);
  devProcess.stderr.pipe(process.stderr);
  devProcess.on('exit', code => console.log(`Child process exited with code ${code.toString()}`));
};
