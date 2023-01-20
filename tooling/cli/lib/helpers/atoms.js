const { getFilePaths } = require('./filepaths');
const path = require('path');
const { copyFile } = require('fs/promises');

const dirHasAtoms = async dir => {
  const contents = await getFilePaths(dir);
  const hasAtomsDir = contents.some(name => /\/atoms\//.test(name));
  const hasAtomsConfig = contents.some(name => /\/vite.atoms.config.(ts|tsx|js|jsx)$/.test(name));

  return hasAtomsDir && hasAtomsConfig;
};

const getAtomsHash = async dir => {
  const hashedAssets = (await getFilePaths(path.join(dir, '/dist/assets'))) || [];
  if (!hashedAssets.length) {
    throw new Error('No compiled Atoms found.');
  }

  const idx = hashedAssets.find(asset => /\/?index-([a-zA-Z]|\d)+.(ts|tsx|js|jsx)$/.test(asset));

  if (!idx) {
    throw new Error('No Atoms index found.');
  }

  const idxHash = idx.match(/-(([a-zA-Z]|\d)+\.)/)[0].replace(/(-|\.)/g, '');

  if (!idxHash) {
    throw new Error('No Atoms index hash found.');
  }

  return idxHash;
};

const copyCompiledTailwind = async (dir, atomsHash) => {
  const heliumTailwindPath = path.join(dir, '/renderer/tailwind.css');
  const atomsTailwindPath = path.join(dir, `dist/assets/tailwind-${atomsHash}.css`);

  await copyFile(heliumTailwindPath, atomsTailwindPath);

  return;
};

module.exports = { dirHasAtoms, getAtomsHash, copyCompiledTailwind };
