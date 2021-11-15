const childProcess = require('child_process');
const path = require('path');

exports.command = 'dev [i] [p] [-k]';
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
    .option('k', {
      alias: 'insecure',
      type: 'boolean',
      describe: 'Accept untrusted SSL certificates'
    });
};

exports.handler = function (argv) {
  const exec = childProcess.exec;
  const instance = findTiInstance(argv.instance);
  const heliumUrl = `${instance.instanceUrl}/helium?apiKey=${instance.apiKey}`;

  const env = {
    ...process.env,
    INSTANCE: argv.instance,
    PORT: argv.port,
    NODE_TLS_REJECT_UNAUTHORIZED: argv.insecure ? '0' : '1',
    HELIUM_ENDPOINT: heliumUrl
  };

  const devProcess = exec('npm run build:vite && npm run dev', { env });

  devProcess.stdout.pipe(process.stdout);
  devProcess.stderr.pipe(process.stderr);
  devProcess.on('exit', code => console.log(`Child process exited with code ${code.toString()}`));
};

function findTiInstance(instanceName) {
  const instancePath = path.resolve(process.cwd(), './ti-config.json');
  const instances = require(instancePath);

  if (!instances) {
    throw new Error('No ti-config.json found');
  }

  const instanceArray = instances.instances;
  let instance = instanceArray.find(i => i.nickname === instanceName);

  if (!instance) {
    instance = instanceArray[0];
  }

  return instance;
}
