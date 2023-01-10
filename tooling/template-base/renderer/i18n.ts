import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationResources from '../locales/translations.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['lms'],
  defaultNS: 'lms',
  interpolation: {
    prefix: '%{',
    suffix: '}'
  },
  resources: translationResources,
  react: { useSuspense: false }
});

export default i18n;
