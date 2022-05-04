import * as Types from '../global-types';

import { CourseFragmentFragment } from './CourseFragment.generated';
import { gql } from '@apollo/client';
import { CourseFragmentFragmentDoc } from './CourseFragment.generated';
export type UserFragmentFragment = {
  __typename?: 'User';
  id: string;
  email?: string;
  firstName?: string;
  abbreviatedName?: string;
  asset?: string;
  lastName?: string;
  name?: string;
  lastActiveAt?: string;
  bio?: string;
  twoFactorEnabled?: boolean;
  lastInitial?: string;
  invitedByName?: string;
  shouldHighlight: boolean;
  roleKey?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  telephone?: string;
  stripeCustomerId?: string;
  externalCustomerId?: string;
  createdAt?: string;
  updatedAt?: string;
  sfAccountId?: string;
  sfContactId?: string;
  shippingName?: string;
  clientId?: string;
  ref1?: string;
  ref2?: string;
  ref3?: string;
  ref4?: string;
  ref5?: string;
  ref6?: string;
  ref7?: string;
  ref8?: string;
  ref9?: string;
  ref10?: string;
  lang?: string;
  customFields?: JSON;
  accessedFlows?: Array<string>;
  disabled: boolean;
  learnerUserId?: string;
  managerUserId?: string;
  balance?: number;
  totalCreditBalance?: number;
  mustVerifyEmail: boolean;
  certificatesCount: number;
  collaborationsCount: number;
  availableCoursesCount: number;
  startedCoursesCount: number;
  completedCoursesCount: number;
  purchasedCourses?: Array<{
    __typename?: 'PurchasedCourse';
    courseId: string;
    certificate?: string;
    certificateIssuedAt?: string;
    instructorAccessPurchased?: boolean;
    status: string;
    course?: { __typename?: 'Course' } & CourseFragmentFragment;
  }>;
  activeLicense?: {
    __typename?: 'License';
    id: string;
    name: string;
    label?: string;
    sku?: string;
    createdAt?: string;
    updatedAt?: string;
    accessDays?: number;
    expirationDate?: string;
    seatsLimit?: number;
    dashboardLayoutId?: string;
    enableBranding?: boolean;
    schoolName?: string;
    isDefault?: boolean;
  };
};

export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    id
    email
    firstName
    abbreviatedName
    asset
    lastName
    name
    lastActiveAt
    bio
    twoFactorEnabled
    lastInitial
    invitedByName
    shouldHighlight
    purchasedCourses {
      course {
        ...CourseFragment
      }
      courseId
      certificate
      certificateIssuedAt
      instructorAccessPurchased
      status
    }
    activeLicense {
      id
      name
      label
      sku
      createdAt
      updatedAt
      accessDays
      expirationDate
      seatsLimit
      dashboardLayoutId
      enableBranding
      schoolName
      isDefault
    }
    roleKey
    address1
    address2
    city
    state
    zipCode
    country
    telephone
    stripeCustomerId
    externalCustomerId
    createdAt
    updatedAt
    sfAccountId
    sfContactId
    shippingName
    clientId
    ref1
    ref2
    ref3
    ref4
    ref5
    ref6
    ref7
    ref8
    ref9
    ref10
    lang
    customFields
    accessedFlows
    disabled
    learnerUserId
    managerUserId
    balance
    totalCreditBalance
    mustVerifyEmail
    certificatesCount
    collaborationsCount
    availableCoursesCount
    startedCoursesCount
    completedCoursesCount
  }
  ${CourseFragmentFragmentDoc}
`;
