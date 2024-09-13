const { readdir, stat } = require('fs/promises');
const path = require('path');
const { access, readFile } = require('fs/promises');

const getFilePaths = async (dir, filePaths = [], skipNodeModules = true) => {
  const newFilePaths = filePaths;

  try {
    const contents = await readdir(dir);

    for (const content of contents) {
      const filePath = path.join(dir, content);
      const fileStat = await stat(filePath);

      if (fileStat.isFile()) {
        newFilePaths.push(filePath);
      } else {
        if (skipNodeModules) {
          if (filePath.includes('node_modules') && !filePath.includes('@thoughtindustries')) {
            continue;
          }
        }

        await getFilePaths(filePath, newFilePaths);
      }
    }
  } catch (error) {
    console.log(error);
  }
  return newFilePaths;
};

const filePathIsValid = filePath => {
  return (
    filePath.endsWith('.js') ||
    filePath.endsWith('.jsx') ||
    filePath.endsWith('.ts') ||
    filePath.endsWith('.tsx') ||
    filePath.endsWith('.mjs')
  );
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

module.exports = { getFilePaths, filePathIsValid, getFileContents };
