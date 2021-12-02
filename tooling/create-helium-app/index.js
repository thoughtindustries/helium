#!/usr/bin/env node

// Inspired by and borrowed from https://github.com/Shopify/hydrogen/blob/main/packages/create-hydrogen-app/index.js

const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const { prompt } = require('inquirer');
const { yellow } = require('kolorist');
const { copy } = require('./scripts/utils');

const cwd = process.cwd();

async function init() {
  let targetDir = argv._[0];
  if (!targetDir) {
    const { dir } = await prompt([
      {
        type: 'input',
        name: 'dir',
        message: 'What directory should this project live in?'
      }
    ]);

    targetDir = dir;
  }

  const packageName = await getValidPackageName(targetDir);
  const root = path.join(cwd, targetDir);
  console.log(`\nScaffolding Helium app in ${root}...`);

  if (!fs.existsSync(root)) {
    fs.mkdirSync(root, { recursive: true });
  } else {
    const existing = fs.readdirSync(root);
    if (existing.length) {
      const { yes } = await prompt({
        type: 'confirm',
        name: 'yes',
        message:
          `Target directory ${targetDir} is not empty.\n` + `Remove existing files and continue?`
      });
      if (yes) {
        emptyDir(root);
      } else {
        return;
      }
    }
  }

  const templateDir = path.join(__dirname, `template-base`);

  const write = (file, content) => {
    const targetPath = path.join(root, file);
    if (content) {
      fs.writeFileSync(targetPath, content);
    } else {
      copy(path.join(templateDir, file), targetPath);
    }
  };

  const files = fs.readdirSync(templateDir);
  const skipFiles = ['package.json', 'node_modules', 'dist'];
  for (const file of files.filter(f => !skipFiles.includes(f))) {
    write(file);
  }

  const pkg = require(path.join(templateDir, `package.json`));

  pkg.name = packageName;

  write('package.json', JSON.stringify(pkg, null, 2));

  const pkgManager = /yarn/.test(process.env.npm_execpath) ? 'yarn' : 'npm';

  console.log(`\nDone. Now run:\n`);
  if (root !== cwd) {
    console.log(`  cd ${path.relative(cwd, root)}`);
  }

  /**
   * The LOCAL option only works with Yarn due to issues with NPM
   * and symlinking yarn monorepos.
   */
  const usesYarn = pkgManager === 'yarn' || process.env.LOCAL;

  console.log(`  ${usesYarn ? `yarn` : `npm install --legacy-peer-deps`}`);
  console.log(
    `\n Finally, run ${yellow(
      'helium authenticate'
    )} to authenticate against your Thought Industries instance.`
  );
}

async function getValidPackageName(projectName) {
  const packageNameRegExp = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
  if (packageNameRegExp.test(projectName)) {
    return projectName;
  } else {
    const suggestedPackageName = projectName
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/^[._]/, '')
      .replace(/[^a-z0-9-~]+/g, '-');

    const { inputPackageName } = await prompt({
      type: 'input',
      name: 'inputPackageName',
      message: `Package name:`,
      default: suggestedPackageName,
      validate: input => (packageNameRegExp.test(input) ? true : 'Invalid package.json name')
    });

    return inputPackageName;
  }
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  for (const file of fs.readdirSync(dir)) {
    const abs = path.resolve(dir, file);
    if (fs.lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      fs.rmdirSync(abs);
    } else {
      fs.unlinkSync(abs);
    }
  }
}

init().catch(e => {
  console.error(e);
});
