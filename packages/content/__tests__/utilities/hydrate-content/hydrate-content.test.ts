import { hydrateContent } from '../../../src/utilities/hydrate-content';
import { GlobalTypes } from '../../../src/graphql';
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

describe('@thoughtindustries/content/hydrateContent', () => {
  const courseStartDateISO = new Date(2020, 0, 1, 12).toISOString();
  const laTimeZone = 'America/Los_Angeles';
  const chiTimeZone = 'America/Chicago';
  const baseContentItem = {
    id: 'test-item',
    coursePresold: false,
    courseGracePeriodEnded: false,
    courseStartDate: courseStartDateISO,
    timeZone: laTimeZone,
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
        kind: GlobalTypes.ContentKind.Product,
        slug: 'test-product'
      },
      companyTimeZone: chiTimeZone,
      customFields: undefined,
      expected: {
        isActive: true,
        hasAvailability: false,
        callToAction: 'View Details',
        href: '/products/test-product',
        timeZone: chiTimeZone
      }
    },
    {
      contentItem: {
        ...baseContentItem,
        availabilityStatus: 'available',
        coursePresold: true,
        kind: GlobalTypes.ContentKind.Bundle,
        slug: 'test-bundle'
      },
      companyTimeZone: undefined,
      customFields: undefined,
      expected: {
        isActive: false,
        hasAvailability: true,
        callToAction: 'test type Runs: Jan 1st 2020',
        href: '/bundles/test-bundle',
        timeZone: laTimeZone
      }
    }
  ];
  it.each(testCases)(
    'should hydrate content item',
    ({ contentItem, companyTimeZone, customFields, expected }) => {
      const hydrated = hydrateContent(i18n, contentItem, companyTimeZone, customFields);
      expect(hydrated.isActive).toEqual(expected.isActive);
      expect(hydrated.hasAvailability).toEqual(expected.hasAvailability);
      expect(hydrated.callToAction).toEqual(expected.callToAction);
      expect(hydrated.href).toEqual(expected.href);
      expect(hydrated.timeZone).toEqual(expected.timeZone);
    }
  );
});
