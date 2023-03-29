import React, { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '../i18n/i18n';

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

export default withI18next;
