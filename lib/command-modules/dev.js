const childProcess = require('child_process');

exports.command = 'dev';
exports.describe = 'Start a local dev server';
exports.handler = function () {
  const exec = childProcess.exec;
  const devProcess = exec('npm run build && npm run dev');
  devProcess.stdout.pipe(process.stdout);
  devProcess.stderr.pipe(process.stderr);
  devProcess.on('exit', code => console.log(`Child process exited with code ${code.toString()}`));
};
