import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  },

  resources: {
    en: {
      translation: {
        'course-add-to-queue': 'Add to Queue',
        'course-added-to-queue': 'Added to Queue',
        'course-completed-decal': 'Completed!',
        'course-view-details': 'View Details',
        more: 'more'
      }
    }
  }
});

export { i18n };
