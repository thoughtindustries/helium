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

const mockCurrentUserContentItems = [
  {
    __typename: 'Content',
    asset:
      'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/3a131ac3-1a74-420d-b4da-ae10b18b2c68/n2h0yafsqsbq-British_Isles.jpg',
    title: 'LL MIcroCourse 0422',
    sessionTitle: null,
    kind: 'microCourse',
    id: '0585157b-40b7-4e82-8c7f-9cb6fb510a9e',
    slug: 'll-microcourse-0422',
    meetingStartDate: null,
    contentTypeLabel: 'MicroCourse',
    availabilityStatus: 'started',
    courseStartDate: '2022-04-22T11:57:37.534Z',
    courseEndDate: '2023-04-23T05:59:59.999Z',
    coursePresold: false,
    description: 'Best MicroCourse ever!!',
    displayCourse: '0585157b-40b7-4e82-8c7f-9cb6fb510a9e',
    displayCourseSlug: 'll-microcourse-0422',
    displayDate: '2022-04-22T11:57:37.534Z',
    courseGracePeriodEnded: false,
    authors: ['Agatha Christie'],
    publishDate: '2022-04-22T04:00:00.000Z',
    source: 'Ortiz Group',
    expiresAt: null,
    currentUserMayReschedule: false,
    timeZone: 'America/Chicago',
    embeddedEnabled: false,
    currentUserUnmetCoursePrerequisites: [],
    currentUserUnmetLearningPathPrerequisites: []
  },
  {
    __typename: 'Content',
    asset:
      'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/3a131ac3-1a74-420d-b4da-ae10b18b2c68/5e88naxlo3py-manwritinginnotebookandlookingatcomputer.jpg',
    title: 'Epsilon Course',
    sessionTitle: null,
    kind: 'courseGroup',
    id: 'f6cf2da9-29ee-4cb9-8494-3becf3274833',
    slug: 'epsilon-course',
    meetingStartDate: null,
    contentTypeLabel: 'Course',
    availabilityStatus: 'started',
    courseStartDate: '2020-02-12T20:52:52.453Z',
    courseEndDate: null,
    coursePresold: false,
    description: 'Beta Course Description',
    displayCourse: 'f6cf2da9-29ee-4cb9-8494-3becf3274833',
    displayCourseSlug: 'epsilon-course',
    displayDate: '2020-02-12T20:52:52.453Z',
    courseGracePeriodEnded: false,
    authors: [],
    publishDate: '2020-02-12T20:52:52.453Z',
    source: null,
    expiresAt: null,
    currentUserMayReschedule: false,
    timeZone: 'America/Chicago',
    embeddedEnabled: false,
    currentUserUnmetCoursePrerequisites: [],
    currentUserUnmetLearningPathPrerequisites: []
  },
  {
    __typename: 'Content',
    asset: null,
    title: 'Blockbuster 2',
    sessionTitle: null,
    kind: 'courseGroup',
    id: '84c9a21e-8797-4694-9ede-ec5dbb8008b3',
    slug: 'blockbuster',
    meetingStartDate: null,
    contentTypeLabel: 'Course',
    availabilityStatus: 'started',
    courseStartDate: '2022-04-01T04:00:00.000Z',
    courseEndDate: null,
    coursePresold: false,
    description: null,
    displayCourse: '84c9a21e-8797-4694-9ede-ec5dbb8008b3',
    displayCourseSlug: 'blockbuster-2',
    displayDate: '2022-04-01T04:00:00.000Z',
    courseGracePeriodEnded: false,
    authors: [],
    publishDate: '2022-04-01T04:00:00.000Z',
    source: null,
    expiresAt: null,
    currentUserMayReschedule: false,
    timeZone: 'America/Chicago',
    embeddedEnabled: false,
    currentUserUnmetCoursePrerequisites: [],
    currentUserUnmetLearningPathPrerequisites: []
  },
  {
    __typename: 'Content',
    asset: null,
    title: 'sp alchemer servey',
    sessionTitle: null,
    kind: 'courseGroup',
    id: '93499291-853a-4d2e-9dcd-bea84e39ae24',
    slug: 'sp-alchemer-servey',
    meetingStartDate: null,
    contentTypeLabel: 'Course',
    availabilityStatus: 'completed',
    courseStartDate: '2022-04-27T20:56:39.104Z',
    courseEndDate: null,
    coursePresold: false,
    description: null,
    displayCourse: '93499291-853a-4d2e-9dcd-bea84e39ae24',
    displayCourseSlug: 'sp-alchemer-servey',
    displayDate: '2022-04-27T20:56:39.104Z',
    courseGracePeriodEnded: false,
    authors: [],
    publishDate: '2022-04-27T20:56:39.104Z',
    source: null,
    expiresAt: null,
    currentUserMayReschedule: false,
    timeZone: 'America/Chicago',
    embeddedEnabled: false,
    currentUserUnmetCoursePrerequisites: [],
    currentUserUnmetLearningPathPrerequisites: []
  }
];
const mockCurrentUserCertificates = [
  {
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
  }
];

const mockCurrentUserArchives = [
  {
    __typename: 'ArchivedContent',
    id: '67d8a83a-27ce-4c7b-bc3e-837d5c5e7374',
    user: 'ab3170ce-cea6-4250-9777-6be856ede274',
    resource: '7b505267-82c5-48a6-b35a-a4945e9b2efa',
    resourceType: 'video',
    status: 'not-completed',
    archivedAt: '2022-05-06T20:49:37.610Z',
    name: 'LL Video 0422',
    reinstatable: true,
    waitlistActive: false
  }
];
const mockBookmarkFoldersByUserAndCompany = [
  {
    __typename: 'BookmarkFolder',
    id: '4f7520aa-82b4-48c3-ba7c-b36c3e89f11a',
    name: 'My Bookmarks',
    defaultFolder: true,
    bookmarkCount: 1
  }
];
const mockBookmarksByFolder = [
  {
    __typename: 'Bookmark',
    id: '97139d8b-91b2-4102-ad30-02176989858e',
    course: {
      __typename: 'Course',
      id: '34dfd310-903c-4eac-9f16-545360a6d4aa',
      title: 'Lord of the Bugs',
      slug: 'lord-of-the-bugs',
      status: 'published',
      courseGroup: {
        __typename: 'CourseGroup',
        id: 'aebaccd7-b963-411e-a62b-c0d9399a8f09',
        authors: [],
        source: null,
        asset: null,
        kind: 'courseGroup',
        contentType: { __typename: 'ContentType', label: 'Course' }
      }
    },
    topicId: '61285240-b509-422c-a4b2-f4400250922a',
    note: 'Section 1, Lesson 1, Page 1',
    createdAt: '2022-05-12T18:35:02.105Z'
  }
];

const mockWaitlistedData = [
  {
    __typename: 'Content',
    id: '4c071d33-16fa-4e30-9779-96f8e5e583b7',
    contentTypeLabel: 'Program',
    title: 'WL - No Sessions Program Copy',
    kind: 'courseGroup',
    slug: 'wl-no-sessions-program-copy',
    displayCourse: '4c071d33-16fa-4e30-9779-96f8e5e583b7',
    displayCourseSlug: 'wl-no-sessions-program-copy'
  },
  {
    __typename: 'Content',
    id: '4c24fe6a-92fb-425d-a72a-7c4ef458f0d8',
    contentTypeLabel: 'In-Person Event',
    title: 'WL Import Q2',
    kind: 'inPersonEvent',
    slug: 'wl-import-q2april',
    displayCourse: '4c24fe6a-92fb-425d-a72a-7c4ef458f0d8',
    displayCourseSlug: 'wl-import-q2april'
  },
  {
    __typename: 'Content',
    id: '3c6fb674-59f1-4e28-95f0-d7e5b4866fc8',
    contentTypeLabel: 'Enhanced ILT ',
    title: 'Waitlisting Enhanced ILT',
    kind: 'inPersonEventCourse',
    slug: 'waitlisting-enhanced-ilt',
    displayCourse: '3c6fb674-59f1-4e28-95f0-d7e5b4866fc8',
    displayCourseSlug: 'waitlisting-enhanced-ilt'
  }
];
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
            UserContentItems: [...mockCurrentUserContentItems]
          }
        },
        newData: () => ({
          data: {
            UserContentItems: [...mockCurrentUserContentItems]
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
            UserContentItems: [...mockCurrentUserContentItems]
          }
        },
        newData: () => ({
          data: {
            UserContentItems: [...mockCurrentUserContentItems]
          }
        })
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
            UserContentItems: [...mockCurrentUserContentItems]
          }
        },
        newData: () => ({
          data: {
            UserContentItems: [...mockCurrentUserContentItems]
          }
        })
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
            UserContentItems: [...mockCurrentUserContentItems]
          }
        },
        newData: () => ({
          data: {
            UserContentItems: [...mockCurrentUserContentItems]
          }
        })
      },
      {
        request: {
          query: UserArchivesDocument,
          variables: {}
        },
        result: {
          data: {
            CurrentUserArchives: [...mockCurrentUserArchives]
          }
        },
        newData: () => ({
          data: {
            CurrentUserArchives: [...mockCurrentUserArchives]
          }
        })
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
          data: { CurrentUserCertificates: [...mockCurrentUserCertificates] }
        },
        newData: () => ({
          data: { CurrentUserCertificates: [...mockCurrentUserCertificates] }
        })
      },
      {
        request: {
          query: UserWaitlistDocument,
          variables: {}
        },
        result: {
          data: { WaitlistedContentForCurrentUser: [...mockWaitlistedData] }
        },
        newData: () => ({
          data: { WaitlistedContentForCurrentUser: [...mockWaitlistedData] }
        })
      },
      {
        request: {
          query: UserBookmarksDocument,
          variables: {}
        },
        result: {
          data: {
            BookmarkFoldersByUserAndCompany: [...mockBookmarkFoldersByUserAndCompany]
          }
        },
        newData: () => ({
          data: {
            BookmarkFoldersByUserAndCompany: [...mockBookmarkFoldersByUserAndCompany]
          }
        })
      }
    ]
  }
};
