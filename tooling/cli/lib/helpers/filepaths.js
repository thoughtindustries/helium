const { readdir, stat } = require('fs/promises');
const path = require('path');

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
  } catch {}
  return newFilePaths;
};

const filePathIsValid = filePath => {
  return (
    filePath.endsWith('.js') ||
    filePath.endsWith('.jsx') ||
    filePath.endsWith('.ts') ||
    filePath.endsWith('.tsx')
  );
};

module.exports = { getFilePaths, filePathIsValid };
