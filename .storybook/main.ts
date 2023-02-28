import type { StorybookConfig } from '@storybook/types';
const config: StorybookConfig = {
  stories: ['../packages/'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-controls',
    'storybook-addon-apollo-client'
  ],
  framework: '@storybook/react-vite',
  docs: {
    autodocs: true
  }
};
export default config;
