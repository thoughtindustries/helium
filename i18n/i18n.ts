import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';

export const resources = {
  en: {
    translation: en
  }
} as const;

i18n.use(initReactI18next).init({
  resources
});

export { i18n };
