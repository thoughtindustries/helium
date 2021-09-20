const childProcess = require('child_process');

exports.command = 'deploy';
exports.describe = 'Compile and deploy a specified instance';
exports.builder = cmd => {
  cmd.option('i', {
    alias: 'instance',
    type: 'string',
    describe: 'Nickname of instance to deploy'
  });
};
exports.handler = function () {
  const exec = childProcess.exec;
  //TODO: Replace w/ Deploy Process when created
  const devProcess = exec('npm run deploy');
  devProcess.stdout.pipe(process.stdout);
  devProcess.stderr.pipe(process.stderr);
  devProcess.on('exit', code => console.log(`Child process exited with code ${code.toString()}`));
};
