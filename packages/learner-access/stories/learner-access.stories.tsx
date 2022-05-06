import { Meta, Story } from '@storybook/react';
import React from 'react';
import {} from '../src';
import { LearnerAccess, LearnerAccessProps } from '../src';
import {
  UserContentItemsDocument,
  ArchivesDocument,
  CertificatesDocument,
  BookmarksDocument,
  WaitlistDocument,
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
            kind: ['courseGroup', 'article', 'video', 'shareableContentObject', 'xApiObject']
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
            sort: null
          }
        },
        result: {
          data: {
            availableCoursesCount: 1200,
            startedCoursesCount: 5,
            completedCoursesCount: 10,
            certificatesCount: 3,
            collaborationsCount: 1
          }
        }
      },
      {
        request: {
          query: UserContentItemsDocument,
          variables: {
            query: '',
            kind: ['learningPath'],
            sort: null
          }
        },
        result: {
          data: {
            availableCoursesCount: 1200,
            startedCoursesCount: 5,
            completedCoursesCount: 10,
            certificatesCount: 3,
            collaborationsCount: 1
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
            sort: null
          }
        },
        result: {
          data: {
            availableCoursesCount: 1200
          }
        }
      },
      {
        request: {
          query: ArchivesDocument,
          variables: {}
        },
        result: {
          data: {
            id: 1,
            company: {
              id: 1,
              name: '',
              subdomain: '',
              catalogBlock: {
                id: 1
              },
              organization: {
                id: 1,
                name: ''
              },
              catalogVisibilityEmails: 'foo@bar.com'
            },
            user: 1,
            resource: 1,
            resourceTye: 'Course',
            status: 'completed',
            archivedAt: Date,
            name: 'this course',
            reinstatable: true,
            waitlistActive: false
          }
        }
      },
      {
        request: {
          query: CertificatesDocument,
          variables: {
            query: ''
          },
          includeExpiredCertificates: defaultProps.displayExpiredCertificateInformation
        },
        result: {
          data: {
            url: 'https://www.google.com/',
            title: 'My certificate',
            isExternalCertificate: true,
            expirationDate: Date
          }
        }
      },
      {
        request: {
          query: WaitlistDocument,
          variables: {
            query: ''
          },
          includeExpiredCertificates: defaultProps.displayExpiredCertificateInformation
        },
        result: {
          data: {
            id: 1,
            slug: '',
            contentTypeLabel: '',
            title: 'title',
            asset: 'https://www.google.com/',
            description: '',
            source: '',
            displayCourse: 1,
            displayCourseSlug: '',
            embeddedEnabled: false,
            courseStartDate: Date,
            coursePresold: false,
            courseGracePeriodEnded: false,
            currentUserUnmetCoursePrerequisites: [1, 2, 3],
            currentUserUnmetLearningPathPrerequisites: [1, 2, 3],
            kind: GlobalTypes.ContentKind,
            authors: ['first auther', 'second aurhter', 'third aurhter'],
            rating: 60,
            timeZone: '2019-08-24T23:11:02.376Z',
            publishDate: Date,
            canAddToQueue: true,
            bulkPurchasingEnabled: false
          }
        }
      },
      {
        request: {
          query: BookmarksDocument,
          variables: {
            query: ''
          },
          includeExpiredCertificates: defaultProps.displayExpiredCertificateInformation
        },
        result: {
          data: {}
        }
      }
    ]
  }
};
