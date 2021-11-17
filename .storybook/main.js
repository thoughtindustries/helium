const path = require('path');

module.exports = {
  stories: ['../packages/**/stories/*.stories.mdx', '../packages/**/stories/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    'storybook-addon-apollo-client',
    'storybook-react-i18next'
  ],
  typescript: {
    check: true,
    checkOptions: {
      tsconfig: path.resolve('./tsconfig.stories.json')
    },
    reactDocgen: false
  }
};
