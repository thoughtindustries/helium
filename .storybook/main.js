const path = require('path');

const config = {
  stories: ['../packages'],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-links',
    '@storybook/addon-controls',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    },
    'storybook-addon-apollo-client',
    'storybook-react-i18next'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  typescript: {
    check: true,
    checkOptions: {
      tsconfig: path.resolve('./tsconfig.stories.json')
    },
    reactDocgen: false
  }
};

export default config;
