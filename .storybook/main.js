const path = require('path');

module.exports = {
  stories: ['../packages/**/stories/*.stories.mdx', '../packages/**/stories/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  typescript: {
    check: true,
    checkOptions: {
      tsconfig: path.resolve('./tsconfig.stories.json')
    },
    reactDocgen: false
  }
};
