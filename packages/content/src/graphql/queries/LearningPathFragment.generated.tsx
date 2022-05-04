import * as Types from '../global-types';

import { CourseFragmentFragment } from './CourseFragment.generated';
import { gql } from '@apollo/client';
import { CourseFragmentFragmentDoc } from './CourseFragment.generated';
export type LearningPathFragmentFragment = {
  __typename?: 'LearningPath';
  id: string;
  layoutId?: string;
  learnerLayoutId?: string;
  name: string;
  sku?: string;
  slug: string;
  createdAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  asset?: string;
  detailAsset?: string;
  heroAsset?: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  alternativePricingType?: Types.AlternativePricingType;
  alternativePricingRef?: number;
  accessDays?: number;
  shortDescription?: string;
  longDescription?: string;
  status: Types.Status;
  freeWithRegistration?: boolean;
  customFields?: JSON;
  contentType?: string;
  confirmationHtml?: string;
  startDate?: string;
  endDate?: string;
  enrollmentStartDate?: string;
  enrollmentEndDate?: string;
  availabilityStatus?: string;
  currentUserStartActionDate?: string;
  isPayAsYouGo?: boolean;
  language?: string;
  futurePublishDate?: string;
  purchasable: boolean;
  taxable?: boolean;
  fulfillmentCenter?: string;
  taxCategory?: string;
  currentUserPendingCertificate: boolean;
  currentUserEarnedCertificate: boolean;
  bulkPurchasingEnabled: boolean;
  resourceType: string;
  seatsLimit?: number;
  videoAsset?: string;
  relatedQuery?: string;
  relatedQuerySignature?: string;
  source?: string;
  authors?: Array<string>;
  publishDate?: string;
  externalDetailUrl?: string;
  kind?: string;
  updatedAt?: string;
  layout?: {
    __typename?: 'Layout';
    id: string;
    kind?: Types.LayoutKind;
    scripts?: string;
    widgets?: JSON;
    hasEnrollmentWidget: boolean;
  };
  ribbon?: {
    __typename?: 'Ribbon';
    label?: string;
    slug: string;
    color?: string;
    contrastColor?: string;
    darkerColor?: string;
  };
  tags?: Array<{ __typename?: 'Tag'; id: string; label?: string }>;
  prerequisiteCourses?: Array<{ __typename?: 'Course' } & CourseFragmentFragment>;
  tabs?: { __typename?: 'LearningPathTabs'; id: string; generated?: boolean };
};

export const LearningPathFragmentFragmentDoc = gql`
  fragment LearningPathFragment on LearningPath {
    id
    layoutId
    layout {
      id
      kind
      scripts
      widgets
      hasEnrollmentWidget
    }
    learnerLayoutId
    name
    sku
    ribbon {
      label
      slug
      color
      contrastColor
      darkerColor
    }
    slug
    createdAt
    metaTitle
    metaDescription
    asset
    detailAsset
    heroAsset
    priceInCents
    suggestedRetailPriceInCents
    alternativePricingType
    alternativePricingRef
    accessDays
    shortDescription
    longDescription
    tags {
      id
      label
    }
    status
    freeWithRegistration
    customFields
    contentType
    confirmationHtml
    startDate
    endDate
    enrollmentStartDate
    enrollmentEndDate
    availabilityStatus
    currentUserStartActionDate
    isPayAsYouGo
    language
    futurePublishDate
    purchasable
    taxable
    fulfillmentCenter
    taxCategory
    currentUserPendingCertificate
    currentUserEarnedCertificate
    bulkPurchasingEnabled
    prerequisiteCourses {
      ...CourseFragment
    }
    resourceType
    seatsLimit
    videoAsset
    relatedQuery
    relatedQuerySignature
    source
    authors
    publishDate
    externalDetailUrl
    kind
    tabs {
      id
      generated
    }
    updatedAt
  }
  ${CourseFragmentFragmentDoc}
`;
