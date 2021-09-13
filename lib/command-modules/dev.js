const childProcess = require('child_process');

exports.command = 'dev [i]';
exports.describe = 'Start a local dev server';

exports.builder = cmd => {
  cmd.option('i', {
    alias: 'instance',
    type: 'string',
    describe: 'Nickname of instance to develop against'
  });
};

exports.handler = function (argv) {
  const exec = childProcess.exec;
  const env = { ...process.env, INSTANCE: argv.instance };
  const devProcess = exec('npm run build && npm run dev', { env });

  devProcess.stdout.pipe(process.stdout);
  devProcess.stderr.pipe(process.stderr);
  devProcess.on('exit', code => console.log(`Child process exited with code ${code.toString()}`));
};
