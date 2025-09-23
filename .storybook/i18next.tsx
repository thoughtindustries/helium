import React, { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '../i18n/i18n';

const I18nextWrapper = ({ children, locale }) => {
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Suspense>
  );
};

const withI18next = (Story, context) => {
  const { locale } = context.globals;

  return (
    <I18nextWrapper locale={locale}>
      <Story />
    </I18nextWrapper>
  );
};

export default withI18next;
