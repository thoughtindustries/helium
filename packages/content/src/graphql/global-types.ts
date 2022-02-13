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
  AbsoluteOrRelativeURL: string;
  /** Date scalar type */
  Date: Date;
  /** Hex Color scalar type */
  HexColor: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: JSON;
  /** A valid relative URL string with a leading slash (/) */
  RelativeURL: string;
  /** Slug scalar type */
  Slug: string;
  /** A valid absolute URL string starting with either a valid protocol or a leading www */
  URL: string;
};

export type Aggregation = {
  __typename?: 'Aggregation';
  buckets?: Maybe<Array<Maybe<AggregationBucket>>>;
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type AggregationBucket = {
  __typename?: 'AggregationBucket';
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum AlternativePricingType {
  Membership = 'membership'
}

export type Bundle = {
  __typename?: 'Bundle';
  annualPlanId?: Maybe<Scalars['ID']>;
  annualPriceInCents?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  needShippingAddress?: Maybe<Scalars['Boolean']>;
  planId?: Maybe<Scalars['ID']>;
  priceInCents?: Maybe<Scalars['Int']>;
  purchasable?: Maybe<Scalars['Boolean']>;
  slug: Scalars['Slug'];
  taxable?: Maybe<Scalars['Boolean']>;
  variations?: Maybe<Array<Maybe<BundleVariation>>>;
  weight?: Maybe<Scalars['Float']>;
};

export type BundleVariation = {
  __typename?: 'BundleVariation';
  label?: Maybe<Scalars['String']>;
};

export type CatalogContent = {
  __typename?: 'CatalogContent';
  contentItems?: Maybe<Array<Content>>;
  meta: CatalogMeta;
};

export type CatalogMeta = {
  __typename?: 'CatalogMeta';
  aggregations?: Maybe<Array<Aggregation>>;
  contentTypeFilterEnabled: Scalars['Boolean'];
  contentTypes?: Maybe<Array<Scalars['String']>>;
  debug?: Maybe<Scalars['Boolean']>;
  displayAuthorsEnabled: Scalars['Boolean'];
  displayBundle?: Maybe<Bundle>;
  displayDescriptionOnCalendar: Scalars['Boolean'];
  displayStartDateEnabled: Scalars['Boolean'];
  displayTypeCalendarEnabled: Scalars['Boolean'];
  displayTypeGridEnabled: Scalars['Boolean'];
  displayTypeListEnabled: Scalars['Boolean'];
  hasMore: Scalars['Boolean'];
  isCurated: Scalars['Boolean'];
  queryCustomFields: Scalars['JSON'];
  resultsDisplayType: ContentItemDisplayType;
  selectedSort: Scalars['String'];
  sortCourseStartDateEnabled: Scalars['Boolean'];
  sortCreatedAtEnabled: Scalars['Boolean'];
  sortPublishDateEnabled: Scalars['Boolean'];
  sortRelevanceEnabled: Scalars['Boolean'];
  sortTitleEnabled: Scalars['Boolean'];
  sortUpdatedAtEnabled: Scalars['Boolean'];
  tokenLabel?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

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

export enum ContentItemDisplayType {
  Calendar = 'calendar',
  Grid = 'grid',
  List = 'list'
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

export type Mutation = {
  __typename?: 'Mutation';
  AddResourceToQueue: Scalars['Boolean'];
  UpdateLearningPathAccess: Scalars['Boolean'];
};

export type MutationAddResourceToQueueArgs = {
  resourceId: Scalars['ID'];
  resourceType?: InputMaybe<ContentKind>;
};

export type MutationUpdateLearningPathAccessArgs = {
  slug: Scalars['Slug'];
  status: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  CatalogContent: CatalogContent;
  CatalogQuery: CatalogContent;
  QueryContent?: Maybe<Content>;
  QueryContents: Array<Content>;
  RssItems: Array<RssItem>;
  UserContentItems?: Maybe<Array<Content>>;
  UserRecentContent: Array<Content>;
};

export type QueryCatalogContentArgs = {
  contentTypes?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  layoutId?: InputMaybe<Scalars['ID']>;
  page: Scalars['Int'];
  query?: InputMaybe<Scalars['String']>;
  resultsDisplayType?: InputMaybe<ContentItemDisplayType>;
  sort?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['String']>>;
  widgetId?: InputMaybe<Scalars['ID']>;
};

export type QueryCatalogQueryArgs = {
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  queryExclusions?: InputMaybe<Array<Scalars['String']>>;
  queryLimit?: InputMaybe<Scalars['Int']>;
  querySignature?: InputMaybe<Scalars['String']>;
  querySort?: InputMaybe<Scalars['String']>;
};

export type QueryQueryContentsArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryRssItemsArgs = {
  feedUrl: Scalars['String'];
};

export type QueryUserContentItemsArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QueryUserRecentContentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Ribbon = {
  __typename?: 'Ribbon';
  color?: Maybe<Scalars['String']>;
  contrastColor?: Maybe<Scalars['String']>;
  darkerColor?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
};

export type RssItem = {
  __typename?: 'RssItem';
  author?: Maybe<Scalars['String']>;
  categories: Array<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageAltTitle?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export enum Status {
  Archived = 'archived',
  Authoring = 'authoring',
  Deleted = 'deleted',
  Draft = 'draft',
  LoginRestriction = 'loginRestriction',
  Pending = 'pending',
  Published = 'published'
}

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};
