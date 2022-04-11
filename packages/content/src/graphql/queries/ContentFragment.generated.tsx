import * as Types from '../global-types';

import { gql } from '@apollo/client';
export type ContentFragmentFragment = {
  __typename?: 'Content';
  alternativePricingType?: Types.AlternativePricingType;
  asset?: string;
  authors?: Array<string>;
  availabilityStatus?: string;
  bulkPurchasingEnabled?: boolean;
  canAddToQueue?: boolean;
  contentTypeLabel?: string;
  courseEndDate?: string;
  courseGracePeriodEnded: boolean;
  courseGroup?: string;
  coursePresold: boolean;
  courseStartDate?: string;
  currentUserMayReschedule: boolean;
  currentUserUnmetCoursePrerequisites?: Array<string>;
  currentUserUnmetLearningPathPrerequisites?: Array<string>;
  description?: string;
  displayCourse?: string;
  displayCourseSlug?: string;
  embeddedEnabled?: boolean;
  kind?: Types.ContentKind;
  hasChildren: boolean;
  hideCourseDescription: boolean;
  id: string;
  isActive: boolean;
  priceInCents?: number;
  publishDate?: string;
  rating?: number;
  slug: string;
  source?: string;
  suggestedRetailPriceInCents?: number;
  timeZone?: string;
  title?: string;
  waitlistingEnabled: boolean;
  waitlistingTriggered: boolean;
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
    authors
    availabilityStatus
    bulkPurchasingEnabled
    canAddToQueue
    contentTypeLabel
    courseEndDate
    courseGracePeriodEnded
    courseGroup
    coursePresold
    courseStartDate
    currentUserMayReschedule
    currentUserUnmetCoursePrerequisites
    currentUserUnmetLearningPathPrerequisites
    description
    displayCourse
    displayCourseSlug
    embeddedEnabled
    kind
    hasChildren
    hideCourseDescription
    id
    isActive
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
    slug
    source
    suggestedRetailPriceInCents
    timeZone
    title
    waitlistingEnabled
    waitlistingTriggered
  }
`;
