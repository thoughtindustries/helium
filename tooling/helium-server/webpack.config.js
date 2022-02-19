const path = require('path');

module.exports = {
  entry: './worker/index.js',
  target: 'webworker',
  resolve: {
    mainFields: ['main', 'module'],
    alias: {
      tiConfig: path.resolve(__dirname, './ti-config.json')
    }
  },
  node: { fs: 'empty' }
};
