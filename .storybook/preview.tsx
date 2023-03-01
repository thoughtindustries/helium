import React, { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import './style.css';
import { MockedProvider } from '@apollo/client/testing';
import { i18n } from '../i18n/i18n';
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

const withI18next = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
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
  }
};

export const decorators = [cookieDecorator, withI18next];
