export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A valid absolute (starting with either a valid protocol or a leading www) or relative (with a leading slash) URL string */
  AbsoluteOrRelativeURL: any;
  /** Date scalar type */
  Date: any;
  /** Hex Color scalar type */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A valid relative URL string with a leading slash (/) */
  RelativeURL: any;
  /** Slug scalar type */
  Slug: any;
  /** A valid absolute URL string starting with either a valid protocol or a leading www */
  URL: any;
};

export enum AlternativePricingType {
  Membership = 'membership'
}

export enum ContentKind {
  Article = 'article',
  Bundle = 'bundle',
  Course = 'course',
  CourseGroup = 'courseGroup',
  DiscountGroup = 'discountGroup',
  InPersonEvent = 'inPersonEvent',
  InPersonEventCourse = 'inPersonEventCourse',
  LearningPath = 'learningPath',
  PickableGroup = 'pickableGroup',
  Product = 'product',
  Sellable = 'sellable',
  ShareableContentObject = 'shareableContentObject',
  Video = 'video',
  Webinar = 'webinar',
  WebinarCourse = 'webinarCourse',
  XApiObject = 'xApiObject'
}

export enum Status {
  Archived = 'archived',
  Authoring = 'authoring',
  Deleted = 'deleted',
  Draft = 'draft',
  LoginRestriction = 'loginRestriction',
  Pending = 'pending',
  Published = 'published'
}

export type Content = {
  __typename?: 'Content';
  altDescriptionBody?: Maybe<Scalars['String']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorsAndInstructors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  bulkPurchasingEnabled?: Maybe<Scalars['Boolean']>;
  canAddToQueue?: Maybe<Scalars['Boolean']>;
  contentTypeAssetAspectRatio?: Maybe<Scalars['String']>;
  contentTypeLabel?: Maybe<Scalars['String']>;
  courseEndDate?: Maybe<Scalars['Date']>;
  courseGracePeriodEnded: Scalars['Boolean'];
  courseGroup?: Maybe<Scalars['String']>;
  coursePresold: Scalars['Boolean'];
  courseStartDate?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  currentUserMayReschedule: Scalars['Boolean'];
  currentUserUnmetCoursePrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currentUserUnmetLearningPathPrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  customFields?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  displayCourse?: Maybe<Scalars['ID']>;
  displayCourseSlug?: Maybe<Scalars['Slug']>;
  displayDate?: Maybe<Scalars['Date']>;
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  enrollmentCount?: Maybe<Scalars['Int']>;
  expiresAt?: Maybe<Scalars['Date']>;
  hasChildren: Scalars['Boolean'];
  hideCourseDescription: Scalars['Boolean'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  kind?: Maybe<ContentKind>;
  language?: Maybe<Scalars['String']>;
  meetingStartDate?: Maybe<Scalars['Date']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  ribbon?: Maybe<Ribbon>;
  seatsLimit?: Maybe<Scalars['Int']>;
  sessionTitle?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  waitlistCount?: Maybe<Scalars['Int']>;
  waitlistingEnabled: Scalars['Boolean'];
  waitlistingTriggered: Scalars['Boolean'];
};

export type Ribbon = {
  __typename?: 'Ribbon';
  color?: Maybe<Scalars['String']>;
  contrastColor?: Maybe<Scalars['String']>;
  darkerColor?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};
