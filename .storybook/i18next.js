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
        'bundle.learn-button': 'Learn More',
        'catalog.date-time': 'Date & Time',
        'catalog.location': 'Location',
        'catalog.location-in-person': 'In Person',
        'catalog.location-online': 'Online',
        'catalog.price': 'Price',
        'catalog.sort-by': 'Sort by',
        'catalog.sort-course-start-date': 'Start Date',
        'catalog.sort-created': 'Most Recent',
        'catalog.sort-publish-date': 'Publish Date',
        'catalog.sort-relevance': 'Relevance',
        'catalog.sort-title': 'Title',
        'catalog.sort-updated': 'Last Updated',
        'catalog-search-header': 'Browse',
        'catalog-search-placeholder': 'Search for content',
        'course.per-month': 'per month',
        'course.per-year': 'per year',
        'course-add-to-queue': 'Add to Queue',
        'course-added-to-queue': 'Added to Queue',
        'course-completed-decal': 'Completed!',
        'course-view-details': 'View Details',
        course: 'Course',
        'filter-by': 'Filter by',
        'filter-no-courses':
          'Sorry, we were unable to find a match for that search term or category, please try again.',
        more: 'more',
        'primary-bundle-intro': 'All courses only'
      }
    }
  }
});

export { i18n };
