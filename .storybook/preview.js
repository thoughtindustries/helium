import './style.css';
import { MockedProvider } from '@apollo/client/testing';
import { i18n } from './i18next';
import { cookieDecorator } from 'storybook-addon-cookie';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  apolloClient: {
    MockedProvider
  },
  i18n,
  locale: 'en'
};

export const decorators = [cookieDecorator];
