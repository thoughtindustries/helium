import * as Types from '../global-types';

import { gql } from '@apollo/client';
export type ContentFragmentFragment = {
  __typename?: 'Content';
  alternativePricingType?: Types.AlternativePricingType;
  asset?: string;
  altDescriptionBody?: string;
  alternativePricingRef?: number;
  authors?: Array<string>;
  authorsAndInstructors?: Array<string>;
  availabilityStatus?: string;
  bulkPurchasingEnabled?: boolean;
  canAddToQueue?: boolean;
  contentTypeAssetAspectRatio?: string;
  contentTypeLabel?: string;
  courseEndDate?: string;
  courseGracePeriodEnded: boolean;
  courseGroup?: string;
  coursePresold: boolean;
  courseStartDate?: string;
  createdAt?: string;
  currentUserMayReschedule: boolean;
  currentUserUnmetCoursePrerequisites?: Array<string>;
  currentUserUnmetLearningPathPrerequisites?: Array<string>;
  customFields?: JSON;
  description?: string;
  displayCourse?: string;
  displayCourseSlug?: string;
  displayDate?: string;
  embeddedEnabled?: boolean;
  enrollmentCount?: number;
  expiresAt?: string;
  kind?: Types.ContentKind;
  hasChildren: boolean;
  hideCourseDescription: boolean;
  id: string;
  isActive: boolean;
  language?: string;
  meetingStartDate?: string;
  metaDescription?: string;
  metaTitle?: string;
  priceInCents?: number;
  publishDate?: string;
  rating?: number;
  seatsLimit?: number;
  sessionTitle?: string;
  status?: Types.Status;
  sku?: string;
  slug: string;
  source?: string;
  suggestedRetailPriceInCents?: number;
  timeZone?: string;
  title?: string;
  updatedAt?: string;
  waitlistCount?: number;
  waitlistingEnabled: boolean;
  waitlistingTriggered: boolean;
  location?: {
    __typename?: 'Location';
    id: string;
    name: string;
    room?: string;
    address1: string;
    address2?: string;
    city: string;
    state?: string;
    zipCode?: string;
    country?: string;
    timeZone?: string;
  };
  ribbon?: {
    __typename?: 'Ribbon';
    color?: string;
    contrastColor?: string;
    darkerColor?: string;
    label?: string;
    slug: string;
  };
};

export const ContentFragmentFragmentDoc = gql`
  fragment ContentFragment on Content {
    alternativePricingType
    asset
    altDescriptionBody
    alternativePricingRef
    alternativePricingType
    authors
    authorsAndInstructors
    availabilityStatus
    bulkPurchasingEnabled
    canAddToQueue
    contentTypeAssetAspectRatio
    contentTypeLabel
    courseEndDate
    courseGracePeriodEnded
    courseGroup
    coursePresold
    courseStartDate
    createdAt
    currentUserMayReschedule
    currentUserUnmetCoursePrerequisites
    currentUserUnmetLearningPathPrerequisites
    customFields
    description
    displayCourse
    displayCourseSlug
    displayDate
    embeddedEnabled
    enrollmentCount
    expiresAt
    kind
    hasChildren
    hideCourseDescription
    id
    isActive
    language
    location {
      id
      name
      room
      address1
      address2
      city
      state
      zipCode
      country
      timeZone
    }
    meetingStartDate
    metaDescription
    metaTitle
    priceInCents
    publishDate
    rating
    ribbon {
      color
      contrastColor
      darkerColor
      label
      slug
    }
    seatsLimit
    sessionTitle
    status
    sku
    slug
    source
    suggestedRetailPriceInCents
    timeZone
    title
    updatedAt
    waitlistCount
    waitlistingEnabled
    waitlistingTriggered
  }
`;
