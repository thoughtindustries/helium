import { hydrateContent, ContentKind } from '../src';
import i18n from 'i18next';

i18n.init({
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  },

  resources: {
    en: {
      translation: {
        'content-access': 'Content Access:',
        'continue-course': 'Continue',
        'course.prerequisites': 'You have not met the prerequisites.',
        'course-ended': 'Course ended:',
        'course-view-details': 'View Details',
        'join-waitlist': 'Join Waitlist',
        'learning-path.continue': 'Continue Learning Path',
        'learning-path.start': 'Start Learning Path',
        'learning-path.view': 'View Learning Path',
        'not-completed-course': 'Not Completed',
        runs: 'Runs:',
        'start-course': 'Start {{contentType}}',
        'view-course': 'View {{contentType}}'
      }
    }
  }
});

describe('@thoughtindustries/hydrate-content/hydrateContent', () => {
  const courseStartDate = new Date(2020, 0, 1, 12);
  const baseContentItem = {
    id: 'test-item',
    coursePresold: false,
    courseGracePeriodEnded: false,
    courseStartDate,
    timeZone: '',
    waitlistingTriggered: false,
    waitlistingEnabled: false,
    contentTypeLabel: 'test type',
    currentUserMayReschedule: false,
    hasChildren: false,
    hideCourseDescription: false,
    isActive: false
  };
  const testCases = [
    {
      contentItem: {
        ...baseContentItem,
        kind: ContentKind.Product,
        slug: 'test-product'
      },
      customFields: undefined,
      expected: {
        isActive: true,
        hasAvailability: false,
        callToAction: 'View Details',
        href: '/products/test-product'
      }
    }
  ];
  it.each(testCases)('should hydrate content item', ({ contentItem, customFields, expected }) => {
    const hydrated = hydrateContent(i18n, contentItem, customFields);
    expect(hydrated.isActive).toEqual(expected.isActive);
    expect(hydrated.hasAvailability).toEqual(expected.hasAvailability);
    expect(hydrated.callToAction).toEqual(expected.callToAction);
    expect(hydrated.href).toEqual(expected.href);
  });
});
