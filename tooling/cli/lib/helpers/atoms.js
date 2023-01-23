const { getFilePaths } = require('./filepaths');
const path = require('path');
const { access, readFile, writeFile } = require('fs/promises');

const dirHasAtoms = async dir => {
  const contents = await getFilePaths(dir);
  const hasAtomsDir = contents.some(name => /\/atoms\//.test(name));
  const hasAtomsConfig = contents.some(name => /\/vite.atoms.config.(ts|tsx|js|jsx)$/.test(name));

  return hasAtomsDir && hasAtomsConfig;
};

const getAtomsHash = async (dir, type) => {
  const hashedAssets = (await getFilePaths(path.join(dir, '/dist/assets'))) || [];
  if (!hashedAssets.length) {
    throw new Error('No compiled Atoms found.');
  }

  const regex =
    type === 'script' ? /\/?index-([a-zA-Z]|\d)+.(ts|tsx|js|jsx)$/ : /\/?style-([a-zA-Z]|\d)+.css$/;

  const idx = hashedAssets.find(asset => regex.test(asset));

  if (!idx) {
    throw new Error('No Atoms index found.');
  }

  const idxHash = idx.match(/-(([a-zA-Z]|\d)+\.)/)[0].replace(/(-|\.)/g, '');

  if (!idxHash) {
    throw new Error('No Atoms index hash found.');
  }

  return idxHash;
};

const compileStyles = async (dir, atomsStyleHash) => {
  let styles = '';

  const atomsStylePath = path.join(dir, `dist/assets/style-${atomsStyleHash}.css`);
  const atomsStyleContents = await getFileContents(atomsStylePath);
  if (atomsStyleContents) {
    styles += atomsStyleContents;
  }

  const heliumTailwindPath = path.join(dir, '/renderer/tailwind.css');
  const tailwindContents = await getFileContents(heliumTailwindPath);
  if (tailwindContents) {
    styles += `\n${tailwindContents}`;
  }

  await writeFile(atomsStylePath, styles, { encoding: 'utf-8' });

  return;
};

const getFileContents = async path => {
  try {
    await access(path);
    const contents = await readFile(path);
    return contents;
  } catch {
    return null;
  }
};

module.exports = { dirHasAtoms, getAtomsHash, compileStyles };
