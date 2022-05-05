import * as Types from '../global-types';

import { gql } from '@apollo/client';
export type CourseFragmentFragment = {
  __typename?: 'Course';
  id: string;
  createdAt?: string;
  updatedAt?: string;
  slug: string;
  status?: Types.Status;
  title?: string;
  sessionIsTitled: boolean;
  sampleLessonId?: string;
  appearanceBlock?: string;
  appearanceHash?: string;
  paywallsBlock?: string;
  termsBlock?: string;
  confirmationBlock?: string;
  courseStartDate?: string;
  courseEndDate?: string;
  enrollmentStartDate?: string;
  enrollmentEndDate?: string;
  gracePeriodEndDate?: string;
  seatsLimit?: number;
  waitlistCount?: number;
  seatsLimitMet: boolean;
  waitlistingEnabled: boolean;
  waitlistingTriggered: boolean;
  taxable?: boolean;
  purchasable: boolean;
  taxCategory?: string;
  fulfillmentCenter?: string;
  syllabusTitlesEnabled?: boolean;
  galleryEnabled?: boolean;
  workbookEnabled?: boolean;
  linkedWorkbookEnabled?: boolean;
  linkedWorkbookSkipEnabled?: boolean;
  superquizEnabled?: boolean;
  discussionsEnabled?: boolean;
  resourcesEnabled?: boolean;
  meetingsOverviewEnabled?: boolean;
  instructorAccessEnabled?: boolean;
  instructorEmails?: Array<string>;
  freeWithRegistration?: boolean;
  priceInCents?: number;
  instructorAccessPriceInCents?: number;
  suggestedRetailPriceInCents?: number;
  alternativePricingRef?: number;
  accessDays?: number;
  showProgress?: boolean;
  forceLinearProgress?: boolean;
  completionTimePerPage?: number;
  askLearnerPassword?: boolean;
  roster?: boolean;
  topicGroup?: string;
  sku?: string;
  parentCourseId?: string;
  isChild?: boolean;
  enrollmentActive?: boolean;
  waitlistActive?: boolean;
  webinarTimeZone?: string;
  currentUserHasAccess: boolean;
  displayMap: boolean;
  publishDate?: string;
  isActive: boolean;
  futurePublishDate?: string;
  balanceRequirement?: number;
  availabilityStatus?: string;
  embeddedEnabled?: boolean;
  displayResults: boolean;
  bulkPurchasingEnabled: boolean;
  lastTierPriceInCents?: number;
  webinarId?: string;
  hasChildren: boolean;
  customFields?: any;
  rosterSubmittedDate?: string;
  finalAssessment?: string;
  scormCollectUserDetails?: boolean;
  seatsUsedCount: number;
  seatsAllocatedCount: number;
  sampleLesson?: {
    __typename?: 'Lesson';
    id: string;
    title?: string;
    slug: string;
    accessLevel?: Types.AccessLevel;
    slugOrId?: string;
    section?: {
      __typename?: 'Section';
      id: string;
      title?: string;
      slug: string;
      lessons?: Array<{
        __typename?: 'Lesson';
        id: string;
        title?: string;
        slug: string;
        accessLevel?: Types.AccessLevel;
        slugOrId?: string;
      }>;
    };
  };
  sections?: Array<{
    __typename?: 'Section';
    id: string;
    title?: string;
    slug: string;
    lessons?: Array<{
      __typename?: 'Lesson';
      id: string;
      title?: string;
      slug: string;
      accessLevel?: Types.AccessLevel;
      slugOrId?: string;
    }>;
  }>;
};

export const CourseFragmentFragmentDoc = gql`
  fragment CourseFragment on Course {
    id
    createdAt
    updatedAt
    slug
    status
    title
    sessionIsTitled
    sampleLesson {
      id
      title
      slug
      accessLevel
      section {
        id
        title
        lessons {
          id
          title
          slug
          accessLevel
          slugOrId
        }
        slug
      }
      slugOrId
    }
    sampleLessonId
    sections {
      id
      title
      lessons {
        id
        title
        slug
        accessLevel
        slugOrId
      }
      slug
    }
    appearanceBlock
    appearanceHash
    paywallsBlock
    termsBlock
    confirmationBlock
    courseStartDate
    courseEndDate
    enrollmentStartDate
    enrollmentEndDate
    gracePeriodEndDate
    seatsLimit
    waitlistCount
    seatsLimitMet
    waitlistingEnabled
    waitlistingTriggered
    taxable
    purchasable
    taxCategory
    fulfillmentCenter
    syllabusTitlesEnabled
    galleryEnabled
    workbookEnabled
    linkedWorkbookEnabled
    linkedWorkbookSkipEnabled
    superquizEnabled
    discussionsEnabled
    resourcesEnabled
    meetingsOverviewEnabled
    instructorAccessEnabled
    instructorEmails
    freeWithRegistration
    priceInCents
    instructorAccessPriceInCents
    suggestedRetailPriceInCents
    alternativePricingRef
    accessDays
    showProgress
    forceLinearProgress
    completionTimePerPage
    askLearnerPassword
    roster
    topicGroup
    sku
    parentCourseId
    isChild
    enrollmentActive
    waitlistActive
    webinarTimeZone
    currentUserHasAccess
    displayMap
    publishDate
    isActive
    futurePublishDate
    balanceRequirement
    availabilityStatus
    embeddedEnabled
    displayResults
    bulkPurchasingEnabled
    lastTierPriceInCents
    webinarId
    hasChildren
    customFields
    rosterSubmittedDate
    finalAssessment
    scormCollectUserDetails
    seatsUsedCount
    seatsAllocatedCount
  }
`;
