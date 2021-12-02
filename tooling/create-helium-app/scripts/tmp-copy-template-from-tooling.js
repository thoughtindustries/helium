/**
 * This is a temporary script meant to copy `tooling/template-base` to `./template-base`
 * while we are actively developing Helium in 'tooling'. Eventually, the template will just
 * live in this folder.
 */

const path = require('path');
const fs = require('fs');
const { copy } = require('./utils');

const devPath = path.resolve(__dirname, '..', '..', '..', 'tooling', 'template-base');
const templatePath = path.resolve(__dirname, '..', './template-base');
const skipFiles = ['node_modules', 'dist'];

// Remove the symlink and replace it with a folder
fs.unlinkSync(templatePath);
fs.mkdirSync(templatePath, { recursive: true });

copy(devPath, templatePath, skipFiles);
