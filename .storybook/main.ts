import type { StorybookConfig } from '@storybook/types';
const config: StorybookConfig = {
  stories: ['../packages/'],
  staticDirs: ['./public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@thoughtindustries/storybook-addon-apollo-client',
    '@storybook/addon-toolbars'
  ],
  framework: '@storybook/react-vite',
  docs: {
    autodocs: true
  }
};
export default config;
