import { Meta, Story } from '@storybook/react';
import React from 'react';
import {} from '../src';
import { LearnerAccess, LearnerAccessProps } from '../src';
import {
  UserContentItemsDocument,
  UserArchivesDocument,
  UserCertificatesDocument,
  UserBookmarksDocument,
  UserBookmarksByFolderDocument,
  UserWaitlistDocument,
  UpdateBookmarkFolderDocument,
  UpdateBookmarkDocument,
  ContentGroupsDocument,
  ArchiveUserCourseDocument,
  UnenrollFromWaitlistDocument,
  ArchiveUserLearningPathDocument,
  GlobalTypes,
  ReinstateUserCourseDocument,
  UserCourseCompletionProgressDocument,
  UserCourseProgressDocument,
  UserCourseAwardCountsDocument,
  UserCourseCollaborationsDocument,
  DestroyBookmarkFolderDocument,
  DestroyBookmarkDocument
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
const mockData = [
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
    asset: null,
    title: 'LL Video ',
    sessionTitle: null,
    kind: 'video',
    id: '8b505267-82c5-48a6-b35a-a4945e9b2efa',
    slug: 'll-video-0422',
    meetingStartDate: null,
    contentTypeLabel: 'Video',
    availabilityStatus: 'not-started',
    courseStartDate: '2022-04-22T13:15:09.748Z',
    courseEndDate: null,
    coursePresold: false,
    description: null,
    displayCourse: '8b505267-82c5-48a6-b35a-a4945e9b2efa',
    displayCourseSlug: 'll-video-0422',
    displayDate: '2022-04-22T13:15:09.748Z',
    courseGracePeriodEnded: false,
    authors: [],
    publishDate: '2022-04-22T13:15:09.748Z',
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
  },
  {
    __typename: 'Content',
    asset: null,
    title: 'sp lp test',
    sessionTitle: null,
    kind: 'learningPath',
    id: '6fb0fbb0-a9c4-4f19-9fb7-38577d61aea3',
    slug: 'sp-lp-test',
    meetingStartDate: null,
    contentTypeLabel: 'Learning Path',
    availabilityStatus: 'not-started',
    courseStartDate: '2022-02-07T08:00:00.000Z',
    courseEndDate: null,
    coursePresold: false,
    description: null,
    displayCourse: null,
    displayCourseSlug: null,
    displayDate: '2022-02-07T08:00:00.000Z',
    courseGracePeriodEnded: false,
    authors: [],
    publishDate: null,
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
    title: 'sp learning path percentage completed Copy',
    sessionTitle: null,
    kind: 'learningPath',
    id: '3e7b156e-7597-4a23-ab01-da7be45f8dfb',
    slug: 'sp-learning-path-percentage-completed-copy',
    meetingStartDate: null,
    contentTypeLabel: 'Learning Path',
    availabilityStatus: 'not-started',
    courseStartDate: '2022-03-03T05:00:00.000Z',
    courseEndDate: null,
    coursePresold: false,
    description: null,
    displayCourse: null,
    displayCourseSlug: null,
    displayDate: '2022-03-03T05:00:00.000Z',
    courseGracePeriodEnded: false,
    authors: [],
    publishDate: null,
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
    title: 'LP Custom Detail',
    sessionTitle: null,
    kind: 'learningPath',
    id: 'c3e050c5-88a0-467a-b352-b5ea73a13186',
    slug: 'lp-custom-detail',
    meetingStartDate: null,
    contentTypeLabel: 'Learning Path',
    availabilityStatus: 'not-started',
    courseStartDate: '2022-03-10T09:00:00.000Z',
    courseEndDate: null,
    coursePresold: false,
    description: null,
    displayCourse: null,
    displayCourseSlug: null,
    displayDate: '2022-03-10T09:00:00.000Z',
    courseGracePeriodEnded: false,
    authors: [],
    publishDate: null,
    source: null,
    expiresAt: null,
    currentUserMayReschedule: false,
    timeZone: 'America/Chicago',
    embeddedEnabled: false,
    currentUserUnmetCoursePrerequisites: [],
    currentUserUnmetLearningPathPrerequisites: []
  }
];

const Template: Story<LearnerAccessProps> = () => <LearnerAccess {...defaultProps} />;

export const Base = Template.bind({});

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

const mockCourseProgress: object[] = [
  {
    company: '3a131ac3-1a74-420d-b4da-ae10b18b2c68',
    course: 'a5767b09-2e47-49a4-a188-bfd8b8adb6d1',
    id: ['6f0dea03-c37a-49d0-8056-551d291e7d22', 'a5767b09-2e47-49a4-a188-bfd8b8adb6d1'],
    percentComplete: 60,
    percentPagesViewed: 40,
    totalTime: 111,
    totalViews: 4,
    updatedAt: '2022-06-09T00:02:17.547Z',
    user: '6f0dea03-c37a-49d0-8056-551d291e7d22'
  },
  {
    percentComplete: 0,
    totalTime: 0,
    totalViews: 0
  }
];

const mockAwardCounts: any = [];

const mockCourseCompletionProgress: any = [
  {
    required: [
      'f4404250-3851-41b6-83a8-b538e0576380',
      '0ad1d4b9-0b1e-4585-9252-ced095d92e87',
      'ae04e1c9-8e55-4f5d-ac20-b499ca1ef1aa',
      '4e1a6562-8b03-449e-9005-2f333b430f10',
      '933572bb-0ce9-4908-8953-813b51a5aea0'
    ],
    completed: [
      '0ad1d4b9-0b1e-4585-9252-ced095d92e87',
      'ae04e1c9-8e55-4f5d-ac20-b499ca1ef1aa',
      'f4404250-3851-41b6-83a8-b538e0576380'
    ],
    percent: 60,
    type: 'coursePercentViewed'
  },
  {
    completed: [],
    percent: 1,
    required: [{ item: 0 }],
    type: 'coursePercentViewed'
  }
];

const mockCourseCollaborations = 0;

const mockBookmarks: any = [
  {
    __typename: 'Bookmark',
    id: 'db95d894-d7cb-4751-b0cf-e15544de9d14',
    course: {
      __typename: 'Course',
      id: 'f6cf2da9-29ee-4cb9-8494-3becf3274833',
      title: 'Epsilon Course',
      slug: 'epsilon-course',
      status: 'published',
      courseGroup: {
        __typename: 'CourseGroup',
        id: '94d67abd-e94a-40d2-b54c-5eec537fa24a',
        authors: [],
        source: null,
        asset:
          'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/3a131ac3-1a74-420d-b4da-ae10b18b2c68/5e88naxlo3py-manwritinginnotebookandlookingatcomputer.jpg',
        kind: 'courseGroup',
        contentType: { __typename: 'ContentType', label: 'Course' }
      }
    },
    topicId: '8385dc27-6072-4fde-8a8a-24f4d7f84a03',
    note: 'Section 1, Lesson 1, Page 1',
    createdAt: '2022-06-11T14:48:05.943Z'
  },
  {
    __typename: 'Bookmark',
    id: 'cfd68793-2280-4a17-8916-23474e31c03f',
    course: {
      __typename: 'Course',
      id: '7c920aa2-51e0-59c4-93de-adf74ea47b88',
      title: 'Action Handgun Fighter',
      slug: 'action-handgun-fighter',
      status: 'published',
      courseGroup: {
        __typename: 'CourseGroup',
        id: '99f4e8b6-ee0b-58b0-9795-0214f8dd442e',
        authors: [],
        source: null,
        asset:
          'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1483194374/unsplash/eW9H6Udi2Cw/800x450',
        kind: 'courseGroup',
        contentType: { __typename: 'ContentType', label: 'Course' }
      }
    },
    topicId: '410fb0b5-a7f2-475f-ad16-8d8fc1af4df9',
    note: 'Section 2',
    createdAt: '2022-06-11T18:55:20.424Z'
  }
];

const mockBookmarkFoldersByUserAndCompany: any = [
  {
    __typename: 'BookmarkFolder',
    id: '4f7520aa-82b4-48c3-ba7c-b36c3e89f11a',
    name: 'My Bookmarks',
    defaultFolder: true,
    bookmarkCount: mockBookmarks.length
  },
  {
    __typename: 'BookmarkFolder',
    id: '3f7520aa-82b4-48c3-ba7c-b36c3e89f11b',
    name: 'My Bookmarks 2',
    defaultFolder: true,
    bookmarkCount: mockBookmarks.length
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

const mockCurrentUserContentItems = mockData.filter(e =>
  [
    'courseGroup',
    'article',
    'video',
    'shareableContentObject',
    'xApiObject',
    'microCourse',
    'course'
  ].includes(e.kind)
);

const mockLearningPaths = mockData.filter(e => e.kind === 'learningPath');

const mockCompletedItems = mockCurrentUserContentItems.filter(
  e => e.availabilityStatus === 'completed'
);

const mockEvents = [
  {
    __typename: 'Content',
    asset: null,
    title: 'Learner Notifications',
    sessionTitle: null,
    kind: 'webinar',
    id: '55694ecf-1f95-44a9-8ec3-81dafd685d62',
    slug: 'learner-notifications',
    meetingStartDate: '2022-06-02T16:00:00.000Z',
    contentTypeLabel: 'VILT / Webinar',
    availabilityStatus: 'not-started',
    courseStartDate: '2022-05-13T16:00:00.000Z',
    courseEndDate: '2022-06-02T16:30:00.000Z',
    coursePresold: false,
    description: 'A description',
    displayCourse: '55694ecf-1f95-44a9-8ec3-81dafd685d62',
    displayCourseSlug: 'learner-notifications',
    displayDate: '2022-06-02T16:00:00.000Z',
    courseGracePeriodEnded: false,
    authors: [],
    publishDate: '2022-05-13T16:00:00.000Z',
    source: null,
    expiresAt: null,
    currentUserMayReschedule: false,
    timeZone: 'America/New_York',
    embeddedEnabled: false,
    currentUserUnmetCoursePrerequisites: [],
    currentUserUnmetLearningPathPrerequisites: []
  },
  {
    __typename: 'Content',
    asset: null,
    title: 'Why does bulk import hate me?: A course with a therapy session at the end',
    sessionTitle: 'Why does bulk import hate me?: A course with a therapy session at the end',
    kind: 'inPersonEventCourse',
    id: 'd4af2684-5005-4741-960e-d6acc24fb105',
    slug: 'why-does-bulk-import-hate-me-a-course-with-a-therapy-session-at-the-end-wiab',
    meetingStartDate: '2022-06-01T14:30:00.000Z',
    contentTypeLabel: 'In-Person Event',
    availabilityStatus: 'started',
    courseStartDate: '2022-05-04T18:59:45.759Z',
    courseEndDate: null,
    coursePresold: false,
    description: null,
    displayCourse: 'd4af2684-5005-4741-960e-d6acc24fb105',
    displayCourseSlug:
      'why-does-bulk-import-hate-me-a-course-with-a-therapy-session-at-the-end-wiab',
    displayDate: '2022-06-01T14:30:00.000Z',
    courseGracePeriodEnded: false,
    authors: [],
    publishDate: '2022-05-04T18:59:45.759Z',
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
    title: 'LL ILT with PP and Zoom Webinar for Bulk Import',
    sessionTitle: null,
    kind: 'inPersonEventCourse',
    id: '911c597d-ec29-43c1-8ec6-30e8a8e7887a',
    slug: 'll-ilt-with-pp-and-zoom-webinar-for-bulk-import',
    meetingStartDate: '2022-05-13T17:00:00.000Z',
    contentTypeLabel: 'In-Person Event',
    availabilityStatus: 'not-started',
    courseStartDate: '2022-05-05T17:55:37.301Z',
    courseEndDate: null,
    coursePresold: false,
    description: null,
    displayCourse: '911c597d-ec29-43c1-8ec6-30e8a8e7887a',
    displayCourseSlug: 'll-ilt-with-pp-and-zoom-webinar-for-bulk-import',
    displayDate: '2022-05-13T17:00:00.000Z',
    courseGracePeriodEnded: false,
    authors: [],
    publishDate: '2022-05-05T17:55:37.301Z',
    source: null,
    expiresAt: null,
    currentUserMayReschedule: false,
    timeZone: 'America/Chicago',
    embeddedEnabled: false,
    currentUserUnmetCoursePrerequisites: [],
    currentUserUnmetLearningPathPrerequisites: []
  }
];

const mockExternal = [
  {
    id: 'uuid' + Math.random(),
    type: 'Course',
    label: 'Course certificate',
    awardTypeId: 'uuid' + Math.random(),
    awardType: {
      __typename: 'Certificate',
      id: 'uuid' + Math.random(),
      pluralLabel: 'award label'
    }
  },
  {
    id: 'uuid' + Math.random(),
    type: 'Course',
    label: 'Course certificate',
    awardTypeId: 'uuid' + Math.random(),
    awardType: {
      __typename: 'Certificate',
      id: 'uuid' + Math.random(),
      pluralLabel: 'award label'
    }
  }
];

const mockUserContentGroups = [
  { kind: 'contentItems', count: mockCurrentUserContentItems.length },
  { kind: 'eventItems', count: mockEvents.length },
  { kind: 'learningPaths', count: mockLearningPaths.length },
  { kind: 'completedItems', count: mockCompletedItems.length },
  { kind: 'certificates', count: mockCurrentUserCertificates.length },
  { kind: 'bookmarkFolders', count: mockBookmarkFoldersByUserAndCompany.length },
  { kind: 'archivedContentItems', count: mockCurrentUserArchives.length },
  { kind: 'waitlistedCourses', count: mockWaitlistedData.length }
];

const mockArchiveUserCourseFunc = (id: any, object: any) => {
  const filteredItem = object.filter((item: any) => item.id === id)[0];
  mockCurrentUserArchives.unshift({
    __typename: 'ArchivedContent',
    id: filteredItem.id,
    user: filteredItem + '-' + Math.random(),
    resource: Math.random().toString(),
    resourceType: filteredItem.kind,
    status: filteredItem.availabilityStatus,
    archivedAt: new Date().toString(),
    name: filteredItem.displayCourseSlug || '',
    reinstatable: true,
    waitlistActive: false
  });
  object.shift();
};
const mockUnenrollFromWaitlistFunc = (id: string) => {
  const filtered = mockWaitlistedData.filter((item: any) => item.id !== id);
  mockWaitlistedData.splice(0, mockWaitlistedData.length, ...filtered);
};

const destroyBookmarkFolderFunc = (id: string) => {
  const filtered = mockBookmarkFoldersByUserAndCompany.filter((item: any) => item.id != id);
  mockBookmarkFoldersByUserAndCompany.splice(
    0,
    mockBookmarkFoldersByUserAndCompany.length,
    ...filtered
  );
};

const updateBookmarkFolderFunc = (id: string, name: string) => {
  const updatedData = mockBookmarkFoldersByUserAndCompany.map((item: any) =>
    item.id == id ? { ...item, name } : item
  );
  console.log('updated folder', updatedData);
  mockBookmarkFoldersByUserAndCompany.splice(
    0,
    mockBookmarkFoldersByUserAndCompany.length,
    ...updatedData
  );
};

const destroyBookmarkFunc = (id: string) => {
  const filtered = mockBookmarks.filter((item: any) => item.id != id);
  mockBookmarks.splice(0, mockBookmarks.length, ...filtered);
};

const updateBookmarkFunc = (id: string, note: string, bookmarkFolder: string) => {
  const updatedData = mockBookmarks.map((item: any) =>
    item.id == id ? { ...item, note: note, bookmarkFolder: bookmarkFolder } : item
  );
  console.log('updated bookmark', updatedData);
  mockBookmarks.splice(0, mockBookmarks.length, ...updatedData);
};

const mockReinstateUserCourseFunc = (id: any) => {
  const itemsToReinstate = mockCurrentUserArchives.filter(item => item.id == id);

  const remainingData: any = mockCurrentUserArchives.filter(item => item.id !== id);
  console.log('itemsToReinstate', itemsToReinstate);
  mockCurrentUserContentItems.push({
    __typename: 'Content',
    asset: null,
    title: itemsToReinstate[0].name,
    sessionTitle: null,
    kind: 'video',
    id: itemsToReinstate[0].id,
    slug: 'll-video-0422',
    meetingStartDate: null,
    contentTypeLabel: 'Video',
    availabilityStatus: 'not-started',
    courseStartDate: '2022-04-22T13:15:09.748Z',
    courseEndDate: null,
    coursePresold: false,
    description: null,
    displayCourse: '7b505267-82c5-48a6-b35a-a4945e9b2efa',
    displayCourseSlug: 'll-video-0422',
    displayDate: '2022-04-22T13:15:09.748Z',
    courseGracePeriodEnded: false,
    authors: [],
    publishDate: '2022-04-22T13:15:09.748Z',
    source: null,
    expiresAt: null,
    currentUserMayReschedule: false,
    timeZone: 'America/Chicago',
    embeddedEnabled: false,
    currentUserUnmetCoursePrerequisites: [],
    currentUserUnmetLearningPathPrerequisites: []
  });

  mockCurrentUserArchives.splice(0, mockCurrentUserArchives.length, ...remainingData);
};
// use the options to bypass mocking full payload of responses
const mockedApolloProviderOptions = {
  watchQuery: { fetchPolicy: 'no-cache' as const },
  query: { fetchPolicy: 'no-cache' as const }
};

const mockApolloResultsFactoryQuery = (
  documents: any,
  mockDataSet: any,
  key: string,
  variables: object
) => ({
  request: {
    query: documents,
    variables
  },
  result: {
    data: {
      [key]: mockDataSet || []
    }
  },
  newData: () => ({
    data: {
      [key]: mockDataSet || []
    }
  })
});

const mockApolloResults = [
  mockApolloResultsFactoryQuery(
    UserContentItemsDocument,
    mockCurrentUserContentItems,
    'UserContentItems',
    {
      query: '',
      kind: ['courseGroup', 'article', 'video', 'shareableContentObject', 'xApiObject'],
      sort: ''
    }
  ),
  mockApolloResultsFactoryQuery(UserContentItemsDocument, mockEvents, 'UserContentItems', {
    query: '',
    kind: ['webinar', 'webinarCourse', 'inPersonEvent', 'inPersonEventCourse'],
    sort: 'displayDate'
  }),
  mockApolloResultsFactoryQuery(UserContentItemsDocument, mockLearningPaths, 'UserContentItems', {
    query: '',
    kind: ['learningPath'],
    sort: ''
  }),
  mockApolloResultsFactoryQuery(UserContentItemsDocument, mockCompletedItems, 'UserContentItems', {
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
  }),
  mockApolloResultsFactoryQuery(
    UserArchivesDocument,
    mockCurrentUserArchives,
    'CurrentUserArchives',
    {}
  ),
  mockApolloResultsFactoryQuery(
    UserCertificatesDocument,
    mockCurrentUserCertificates,
    'CurrentUserCertificates',
    {
      query: defaultProps.query,
      includeExpiredCertificates: defaultProps.displayExpiredCertificateInformation
    }
  ),
  mockApolloResultsFactoryQuery(
    UserWaitlistDocument,
    mockWaitlistedData,
    'WaitlistedContentForCurrentUser',
    {}
  ),
  mockApolloResultsFactoryQuery(
    UserBookmarksDocument,
    mockBookmarkFoldersByUserAndCompany,
    'UserBookmarks',
    {}
  ),
  mockApolloResultsFactoryQuery(
    UserBookmarksByFolderDocument,
    mockBookmarks,
    'UserBookmarksByFolder',
    { id: '' }
  ),
  mockApolloResultsFactoryQuery(ContentGroupsDocument, mockUserContentGroups, 'UserContentGroups', {
    query: '',
    includeExpiredCertificates: defaultProps.displayExpiredCertificateInformation
  }),
  mockApolloResultsFactoryQuery(
    UserCourseCompletionProgressDocument,
    mockCourseCompletionProgress,
    'UserCourseCompletionProgress',
    { id: '' }
  ),
  mockApolloResultsFactoryQuery(UserCourseAwardCountsDocument, mockAwardCounts, 'awardCounts', {
    id: ''
  }),
  mockApolloResultsFactoryQuery(
    UserCourseCollaborationsDocument,
    mockCourseCollaborations,
    'courseCollaborations',
    { id: '' }
  ),
  {
    request: {
      query: UserCourseProgressDocument,
      variables: {
        id: ''
      },
      result: {
        data: {
          ...mockCourseProgress
        }
      }
    },
    newData: () => ({
      data: {
        ...mockCourseProgress
      }
    })
  },

  // ArchiveUserCourse mockCurrentUserContentItems Mutations
  {
    request: {
      query: ArchiveUserCourseDocument,
      variables: {
        id: mockCurrentUserContentItems[0].id
      }
    },
    result: () => ({
      data: {
        ArchiveUserCourse: 'uuid-' + Math.random()
      },
      return: mockArchiveUserCourseFunc(
        mockCurrentUserContentItems[0].id,
        mockCurrentUserContentItems
      )
    })
  },
  {
    request: {
      query: ArchiveUserCourseDocument,
      variables: {
        id: mockCurrentUserContentItems[1].id
      }
    },
    result: () => ({
      data: {
        ArchiveUserCourse: 'uuid-' + Math.random()
      },
      return: mockArchiveUserCourseFunc(
        mockCurrentUserContentItems[1].id,
        mockCurrentUserContentItems
      )
    })
  },
  {
    request: {
      query: ArchiveUserCourseDocument,
      variables: {
        id: mockCurrentUserContentItems[2].id
      }
    },
    result: () => ({
      data: {
        ArchiveUserCourse: 'uuid-' + Math.random()
      },
      return: mockArchiveUserCourseFunc(
        mockCurrentUserContentItems[2].id,
        mockCurrentUserContentItems
      )
    })
  },
  {
    request: {
      query: ArchiveUserCourseDocument,
      variables: {
        id: mockCurrentUserContentItems[3].id
      }
    },
    result: () => ({
      data: {
        ArchiveUserCourse: 'uuid-' + Math.random()
      },
      return: mockArchiveUserCourseFunc(
        mockCurrentUserContentItems[3].id,
        mockCurrentUserContentItems
      )
    })
  },
  // ArchiveUserCourse mockLearningPaths Mutations
  {
    request: {
      query: ArchiveUserLearningPathDocument,
      variables: {
        id: mockLearningPaths[0].id
      }
    },
    result: () => ({
      data: {
        ArchiveUserLearningPath: 'uuid-' + Math.random()
      },
      return: mockArchiveUserCourseFunc(mockLearningPaths[0].id, mockLearningPaths)
    })
  },
  {
    request: {
      query: ArchiveUserLearningPathDocument,
      variables: {
        id: mockLearningPaths[1].id
      }
    },
    result: () => ({
      data: {
        ArchiveUserLearningPath: 'uuid-' + Math.random()
      },
      return: mockArchiveUserCourseFunc(mockLearningPaths[1].id, mockLearningPaths)
    })
  },
  {
    request: {
      query: ArchiveUserLearningPathDocument,
      variables: {
        id: mockLearningPaths[2].id
      }
    },
    result: () => ({
      data: {
        ArchiveUserLearningPath: 'uuid-' + Math.random()
      },
      return: mockArchiveUserCourseFunc(mockLearningPaths[2].id, mockLearningPaths)
    })
  },
  // ReinstateUserCourse Mutation
  {
    request: {
      query: ReinstateUserCourseDocument,
      variables: {
        id: mockCurrentUserArchives[0].id
      }
    },
    result: () => ({
      data: {
        ReinstateUserCourse: 'uuid-' + Math.random()
      },
      return: mockReinstateUserCourseFunc(mockCurrentUserArchives[0].id)
    })
  },
  // ArchiveUserCourse mockEvents Mutations
  {
    request: {
      query: ArchiveUserCourseDocument,
      variables: {
        id: mockEvents[0].id
      }
    },
    result: () => ({
      data: {
        ArchiveUserCourse: 'uuid-' + Math.random()
      },
      return: mockArchiveUserCourseFunc(mockEvents[0].id, mockEvents)
    })
  },
  {
    request: {
      query: ArchiveUserCourseDocument,
      variables: {
        id: mockEvents[1].id
      }
    },
    result: () => ({
      data: {
        ArchiveUserCourse: 'uuid-' + Math.random()
      },
      return: mockArchiveUserCourseFunc(mockEvents[1].id, mockEvents)
    })
  },
  {
    request: {
      query: ArchiveUserCourseDocument,
      variables: {
        id: mockEvents[2].id
      }
    },
    result: () => ({
      data: {
        ArchiveUserCourse: 'uuid-' + Math.random()
      },
      return: mockArchiveUserCourseFunc(mockEvents[2].id, mockEvents)
    })
  },
  // waitlist mutation
  {
    request: {
      query: UnenrollFromWaitlistDocument,
      variables: {
        id: mockWaitlistedData[0].id
      }
    },
    result: () => ({
      data: { UnenrollFromWaitlist: true },
      return: mockUnenrollFromWaitlistFunc(mockWaitlistedData[0].id)
    })
  },
  {
    request: {
      query: UnenrollFromWaitlistDocument,
      variables: {
        id: mockWaitlistedData[1].id
      }
    },
    result: () => ({
      data: { UnenrollFromWaitlist: true },
      return: mockUnenrollFromWaitlistFunc(mockWaitlistedData[1].id)
    })
  },
  {
    request: {
      query: UnenrollFromWaitlistDocument,
      variables: {
        id: mockWaitlistedData[2].id
      }
    },
    result: () => ({
      data: { UnenrollFromWaitlist: true },
      return: mockUnenrollFromWaitlistFunc(mockWaitlistedData[2].id)
    })
  },
  // DestroyBookmarkFolder mutation
  {
    request: {
      query: DestroyBookmarkFolderDocument,
      variables: {
        id: mockBookmarkFoldersByUserAndCompany[0].id
      }
    },
    result: () => ({
      data: { DestroyBookmarkFolder: 'test-id' },
      return: destroyBookmarkFolderFunc(mockBookmarkFoldersByUserAndCompany[0].id)
    })
  },
  {
    request: {
      query: DestroyBookmarkFolderDocument,
      variables: {
        id: mockBookmarkFoldersByUserAndCompany[1].id
      }
    },
    result: () => ({
      data: { DestroyBookmarkFolder: 'test-id' },
      return: destroyBookmarkFolderFunc(mockBookmarkFoldersByUserAndCompany[1].id)
    })
  },
  // DestroyBookmark mutation
  {
    request: {
      query: DestroyBookmarkDocument,
      variables: {
        id: mockBookmarks[0].id
      }
    },
    result: () => ({
      data: { DestroyBookmark: 'test-id' },
      return: destroyBookmarkFunc(mockBookmarks[0].id)
    })
  },
  {
    request: {
      query: DestroyBookmarkDocument,
      variables: {
        id: mockBookmarks[1].id
      }
    },
    result: () => ({
      data: { DestroyBookmark: 'test-id' },
      return: destroyBookmarkFunc(mockBookmarks[1].id)
    })
  },
  // UpdateBookmarkFolder mutation
  {
    request: {
      query: UpdateBookmarkFolderDocument,
      variables: {
        id: mockBookmarkFoldersByUserAndCompany[0].id,
        name: 'test-name'
      }
    },
    result: () => ({
      data: { UpdateBookmarkFolder: { id: 'test-id', __typename: 'BookmarkFolder' } },
      return: updateBookmarkFolderFunc(mockBookmarkFoldersByUserAndCompany[0].id, 'test name')
    })
  },
  {
    request: {
      query: UpdateBookmarkFolderDocument,
      variables: {
        id: mockBookmarkFoldersByUserAndCompany[1].id,
        name: 'test-name'
      }
    },
    result: () => ({
      data: { UpdateBookmarkFolder: { id: 'test-id', __typename: 'BookmarkFolder' } },
      return: updateBookmarkFolderFunc(mockBookmarkFoldersByUserAndCompany[1].id, 'test name')
    })
  },
  // UpdateBookmark mutation
  {
    request: {
      query: UpdateBookmarkDocument,
      variables: {
        id: mockBookmarks[0].id,
        note: 'test note',
        bookmarkFolder: mockBookmarks[0].course.courseGroup.id
      }
    },
    result: () => ({
      data: { UpdateBookmark: { id: 'test-id', __typename: 'Bookmark' } },
      return: updateBookmarkFunc(
        mockBookmarks[0].id,
        'test-note',
        mockBookmarks[0].course.courseGroup.id
      )
    })
  },
  {
    request: {
      query: UpdateBookmarkDocument,
      variables: {
        id: mockBookmarks[1].id,
        note: 'test note',
        bookmarkFolder: mockBookmarks[1].course.courseGroup.id
      }
    },
    result: () => ({
      data: { UpdateBookmark: { id: 'test-id', __typename: 'Bookmark' } },
      return: updateBookmarkFunc(
        mockBookmarks[1].id,
        'test-note',
        mockBookmarks[1].course.courseGroup.id
      )
    })
  }
];

Base.parameters = {
  apolloClient: {
    addTypename: false,
    defaultOptions: mockedApolloProviderOptions,
    mocks: mockApolloResults
  }
};
