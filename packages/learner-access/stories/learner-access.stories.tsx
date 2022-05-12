import { Meta, Story } from '@storybook/react';
import React from 'react';
import {} from '../src';
import { LearnerAccess, LearnerAccessProps } from '../src';
import {
  UserContentItemsDocument,
  UserArchivesDocument,
  UserCertificatesDocument,
  UserBookmarksDocument,
  UserWaitlistDocument,
  GlobalTypes
} from '@thoughtindustries/content';
export default {
  title: 'Example/LearnerAccess',
  component: LearnerAccess,
  argTypes: {
    allowCollapse: {
      name: 'allowCollapse',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Determines if the learner access widget should collapse',
      control: { type: 'boolean' }
    },
    allowContentArchive: {
      name: 'allowContentArchive',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Allows archived content',
      control: { type: 'boolean' }
    },
    classNames: {
      name: 'classNames',
      type: { name: 'string', required: false },
      description: 'Space separated classnames provided as string',
      control: { type: 'string' }
    },
    collapseDefault: {
      name: 'collapseDefault',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Determines if learner access widget is collapsible by default',
      control: { type: 'boolean' }
    },
    displayExpiredCertificateInformation: {
      name: 'displayExpiredCertificateInformation',
      type: { name: 'boolean', required: false },
      description: 'Determines if we should display expired certificates',
      control: { type: 'boolean' }
    }
  }
} as Meta;

const defaultProps = {
  allowCollapse: false,
  allowContentArchive: false,
  classNames: '',
  collapseDefault: false,
  displayExpiredCertificateInformation: false,
  query: ''
};

const Template: Story<LearnerAccessProps> = () => <LearnerAccess {...defaultProps} />;

export const Base = Template.bind({});

const mockContent = {
  asset:
    'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
  authors: ['Test Author'],
  availabilityStatus: '',
  contentTypeLabel: 'Course',
  courseEndDate: new Date(2020, 1, 1).toISOString(),
  courseGracePeriodEnded: false,
  coursePresold: false,
  courseStartDate: new Date(2020, 0, 1).toISOString(),
  currentUserMayReschedule: false,
  description: 'description',
  id: 'uuid',
  kind: GlobalTypes.ContentKind.Course,
  slug: 'test-content',
  source: 'Test source',
  title: 'Test title',
  timeZone: 'America/Los_Angeles'
};
const mockCertificateData = {
  id: 'uuid',
  resourceId: 'uuid',
  expirationDate: new Date(2020, 0, 1).toISOString(),
  isExpired: false,
  externalResourceTitle: 'externalResourceTitle',
  url: 'https://www.google.com',
  source: 'source',
  contentItem: {
    asset:
      'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
    authors: ['Test Author'],
    availabilityStatus: '',
    contentTypeLabel: 'Course',
    courseEndDate: new Date(2020, 1, 1).toISOString(),
    courseGracePeriodEnded: false,
    coursePresold: false,
    courseStartDate: new Date(2020, 0, 1).toISOString(),
    currentUserMayReschedule: false,
    description: 'description',
    id: 'uuid',
    kind: GlobalTypes.ContentKind.Course,
    slug: 'test-content',
    source: 'Test source',
    title: 'Test title',
    timeZone: 'America/Los_Angeles'
  }
};
// use the options to bypass mocking full payload of responses
const mockedApolloProviderOptions = {
  watchQuery: { fetchPolicy: 'no-cache' as const },
  query: { fetchPolicy: 'no-cache' as const }
};
const apolloBaseParams = {
  addTypename: false,
  defaultOptions: mockedApolloProviderOptions
};
Base.parameters = {
  apolloClient: {
    ...apolloBaseParams,
    mocks: [
      {
        request: {
          query: UserContentItemsDocument,
          variables: {
            query: '',
            kind: ['courseGroup', 'article', 'video', 'shareableContentObject', 'xApiObject'],
            sort: ''
          }
        },
        result: {
          data: {
            UserContentItems: [mockContent]
          }
        },
        newData: () => ({
          data: {
            UserContentItems: [mockContent]
          }
        })
      },
      {
        request: {
          query: UserContentItemsDocument,
          variables: {
            query: '',
            kind: ['webinar', 'webinarCourse', 'inPersonEvent', 'inPersonEventCourse'],
            sort: 'displayDate'
          }
        },
        result: {
          data: {
            UserContentItems: [mockContent]
          }
        }
      },
      {
        request: {
          query: UserContentItemsDocument,
          variables: {
            query: '',
            kind: ['learningPath'],
            sort: ''
          }
        },
        result: {
          data: {
            UserContentItems: [mockContent]
          }
        }
      },
      {
        request: {
          query: UserContentItemsDocument,
          variables: {
            query: '',
            kind: [
              'learningPath',
              'courseGroup',
              'article',
              'video',
              'shareableContentObject',
              'xApiObject',
              'webinar',
              'webinarCourse',
              'inPersonEvent',
              'inPersonEventCourse'
            ],
            sort: ''
          }
        },
        result: {
          data: {
            UserContentItems: [mockContent]
          }
        }
      },
      {
        request: {
          query: UserArchivesDocument,
          variables: {}
        },
        result: {
          data: {
            id: 1,
            name: 'name',
            user: 1,
            resource: 1,
            resourceTye: 'Course',
            status: 'completed',
            archivedAt: Date,
            reinstatable: true,
            waitlistActive: false
          }
        }
      },
      {
        request: {
          query: UserCertificatesDocument,
          variables: {
            query: defaultProps.query,
            includeExpiredCertificates: defaultProps.displayExpiredCertificateInformation
          }
        },
        result: {
          data: {
            ...mockCertificateData
          }
        },
        newData: () => ({
          data: {
            ...mockCertificateData
          }
        })
      },
      {
        request: {
          query: UserWaitlistDocument,
          variables: {}
        },
        result: {
          data: {
            id: 'uuid',
            contentTypeLabel: 'waitlist',
            title: 'title',
            kind: GlobalTypes.ContentKind.Course,
            slug: 'test-content',
            displayCourse: 'my course',
            displayCourseSlug: 'test course'
          }
        }
      },
      {
        request: {
          query: UserBookmarksDocument,
          variables: {}
        },
        result: {
          data: {
            id: 'uuid',
            name: 'name',
            defaultFolder: 'defaultFolder',
            bookmarkCount: 3
          }
        }
      }
    ]
  }
};
