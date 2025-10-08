import type { StorybookConfig } from '@storybook/types';
const config: StorybookConfig = {
  stories: ['../packages/'],
  staticDirs: ['./public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@thoughtindustries/storybook-addon-apollo-client/preset',
    '@storybook/addon-toolbars',
    '@storybook/addon-storysource',
    'storybook-addon-cookie'
  ],
  framework: '@storybook/react-vite',
  docs: {
    autodocs: true
  }
};
export default config;
