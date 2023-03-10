import './style.css';
import { MockedProvider } from '@apollo/client/testing';
import { cookieDecorator } from 'storybook-addon-cookie';
import withI18next from './i18next';
import { i18n } from '../i18n/i18n';

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

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [{ value: 'en', right: '🇺🇸', title: 'English' }]
    }
  },
  ['addon-apolloClient/queries']: {
    name: 'Apollo client addon queries',
    description: 'Apollo client addon queries',
    defaultValue: []
  }
};

export const decorators = [cookieDecorator, withI18next];
