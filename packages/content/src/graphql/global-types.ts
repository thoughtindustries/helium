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
  Date: string;
  /** Hex Color scalar type */
  HexColor: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A valid relative URL string with a leading slash (/) */
  RelativeURL: string;
  /** Slug scalar type */
  Slug: string;
  /** A valid absolute URL string starting with either a valid protocol or a leading www */
  URL: string;
};

export enum AccessLevel {
  EmailCaptureOpen = 'emailCaptureOpen',
  Open = 'open',
  StudentsOnly = 'studentsOnly'
}

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

export type AllocatedLearningPath = {
  __typename?: 'AllocatedLearningPath';
  learningPath?: Maybe<LearningPath>;
  learningPathId: Scalars['ID'];
};

export type AllocatedLicense = {
  __typename?: 'AllocatedLicense';
  license?: Maybe<License>;
  licenseId: Scalars['ID'];
  licenseRole: AllocatedLicenseRole;
  status?: Maybe<Scalars['String']>;
};

export enum AllocatedLicenseRole {
  Manager = 'manager',
  Student = 'student'
}

export enum AlternativePricingType {
  Membership = 'membership'
}

export type AppearanceSettings = {
  __typename?: 'AppearanceSettings';
  accentColor?: Maybe<Scalars['HexColor']>;
  altFont?: Maybe<Scalars['String']>;
  backgroundAsset?: Maybe<Scalars['String']>;
  backgroundAssetTiled?: Maybe<Scalars['Boolean']>;
  company?: Maybe<Company>;
  customCss?: Maybe<Scalars['String']>;
  font?: Maybe<Scalars['String']>;
  globalNavigationLinks?: Maybe<Array<Maybe<GlobalNavigationLink>>>;
  id: Scalars['ID'];
  linkColor?: Maybe<Scalars['HexColor']>;
  logoAsset?: Maybe<Scalars['URL']>;
  retinaLogo?: Maybe<Scalars['Boolean']>;
  secondaryColor?: Maybe<Scalars['HexColor']>;
};

export type ArchivedContent = {
  __typename?: 'ArchivedContent';
  archivedAt?: Maybe<Scalars['Date']>;
  company?: Maybe<Company>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  reinstatable: Scalars['Boolean'];
  resource?: Maybe<Scalars['ID']>;
  resourceType?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  waitlistActive: Scalars['Boolean'];
};

export type AwardType = {
  __typename?: 'AwardType';
  deleted?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<AwardTypeIcon>;
  id: Scalars['ID'];
  includeOnDashboard?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  pluralLabel?: Maybe<Scalars['String']>;
};

export enum AwardTypeIcon {
  Businessuser = 'businessuser',
  Check = 'check',
  Checkfile = 'checkfile',
  Flag = 'flag',
  FullStar = 'fullStar',
  Gift = 'gift',
  Globe = 'globe',
  HalfStar = 'halfStar',
  Heart = 'heart',
  Lightbulb = 'lightbulb',
  Like = 'like',
  Loading = 'loading',
  Signpost = 'signpost',
  Star = 'star',
  Stopwatch = 'stopwatch',
  Tag = 'tag'
}

export type BackgroundJob = {
  __typename?: 'BackgroundJob';
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  repeatable: Scalars['Boolean'];
  status: BackgroundJobStatus;
  type: Scalars['String'];
};

export enum BackgroundJobStatus {
  Complete = 'complete',
  Failed = 'failed',
  Processing = 'processing',
  Queued = 'queued'
}

export type Block = {
  __typename?: 'Block';
  id: Scalars['ID'];
};

export type Bookmark = {
  __typename?: 'Bookmark';
  bookmarkFolder: BookmarkFolder;
  course: Course;
  createdAt: Scalars['Date'];
  deleted: Scalars['Boolean'];
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  topic?: Maybe<Topic>;
  topicId?: Maybe<Scalars['ID']>;
  user: User;
};

export type BookmarkFolder = {
  __typename?: 'BookmarkFolder';
  bookmarkCount?: Maybe<Scalars['Int']>;
  bookmarks?: Maybe<Array<Bookmark>>;
  defaultFolder?: Maybe<Scalars['Boolean']>;
  deleted: Scalars['Boolean'];
  externalResourceId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  user: User;
};

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

export type CatalogCategory = {
  __typename?: 'CatalogCategory';
  id: Scalars['ID'];
  label: Scalars['String'];
  slug: Scalars['Slug'];
  subcategories?: Maybe<Array<Maybe<CatalogSubcategory>>>;
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

export type CatalogSettings = {
  __typename?: 'CatalogSettings';
  boostRibbon?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<CatalogCategory>>;
  contentTypeFilterEnabled?: Maybe<Scalars['Boolean']>;
  defaultQuery?: Maybe<Scalars['String']>;
  defaultSort?: Maybe<Scalars['String']>;
  displayAuthorsEnabled?: Maybe<Scalars['Boolean']>;
  displayBundle?: Maybe<Array<Bundle>>;
  displayBundleId?: Maybe<Scalars['ID']>;
  displayStartDateEnabled?: Maybe<Scalars['Boolean']>;
  displayTypeCalendarEnabled?: Maybe<Scalars['Boolean']>;
  displayTypeGridEnabled?: Maybe<Scalars['Boolean']>;
  displayTypeListEnabled?: Maybe<Scalars['Boolean']>;
  hidePastEvents?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  onlyDisplayAccessibleContent?: Maybe<Scalars['Boolean']>;
  resultsDisplayType: ContentItemDisplayType;
  sortCourseStartDateEnabled?: Maybe<Scalars['Boolean']>;
  sortCreatedAtEnabled?: Maybe<Scalars['Boolean']>;
  sortPublishDateEnabled?: Maybe<Scalars['Boolean']>;
  sortRelevanceEnabled?: Maybe<Scalars['Boolean']>;
  sortTitleEnabled?: Maybe<Scalars['Boolean']>;
  sortUpdatedAtEnabled?: Maybe<Scalars['Boolean']>;
};

export type CatalogSubcategory = {
  __typename?: 'CatalogSubcategory';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label: Scalars['String'];
  query: Scalars['String'];
  slug: Scalars['Slug'];
};

export type Certificate = {
  __typename?: 'Certificate';
  certificateTemplate?: Maybe<CertificateTemplate>;
  contentItem?: Maybe<Content>;
  deleted: Scalars['Boolean'];
  didExpire: Scalars['Boolean'];
  expirationDate?: Maybe<Scalars['Date']>;
  externalResourceTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifier?: Maybe<Scalars['String']>;
  isExpired: Scalars['Boolean'];
  isExternal: Scalars['Boolean'];
  issuedAt: Scalars['Date'];
  pdfAsset?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  progressWasReset: Scalars['Boolean'];
  recertificationDate?: Maybe<Scalars['Date']>;
  resource?: Maybe<CertificateResource>;
  resourceId?: Maybe<Scalars['ID']>;
  resourceType?: Maybe<CertificateResourceType>;
  resourceTypeLabel?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  url: Scalars['AbsoluteOrRelativeURL'];
  user: User;
};

export enum CertificateDateFormatType {
  /** DD-MM-YYYY (ex. 25-07-2019) */
  EuroShort = 'euroShort',
  /** YYYY-MM-DD (ex. 2019-07-25) */
  Iso8601 = 'iso8601',
  /** MMMM DD, YYYY (ex. July 25, 2019) */
  UsLong = 'usLong',
  /** MM-DD-YYYY (ex. 07-25-2019) */
  UsShort = 'usShort'
}

export type CertificateField = {
  __typename?: 'CertificateField';
  awardType?: Maybe<AwardType>;
  awardTypeId?: Maybe<Scalars['ID']>;
  customField?: Maybe<CustomField>;
  customFieldSlug?: Maybe<Scalars['Slug']>;
  dateFormat?: Maybe<CertificateDateFormatType>;
  hasIdentifierPrefix?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  identifierBodyLength?: Maybe<Scalars['Int']>;
  identifierPrefix?: Maybe<Scalars['String']>;
  includeOnExternalCertificate: Scalars['Boolean'];
  includeOnTranscript: Scalars['Boolean'];
  label: Scalars['String'];
  sessionCustomContentFieldSlug?: Maybe<Scalars['Slug']>;
  text?: Maybe<Scalars['String']>;
  type: CertificateFieldType;
  userCustomField?: Maybe<UserCustomField>;
  userCustomFieldSlug?: Maybe<Scalars['Slug']>;
};

export enum CertificateFieldType {
  /** Award Type */
  AwardLabel = 'awardLabel',
  /** Content Completion Date */
  ContentCompletionDate = 'contentCompletionDate',
  /** Custom Content Field */
  ContentFieldLabel = 'contentFieldLabel',
  /** Content Start Date */
  ContentStartDate = 'contentStartDate',
  /** Content Title */
  CourseLabel = 'courseLabel',
  /** Certificate Issued Date */
  DateLabel = 'dateLabel',
  /** Certificate Expiration Date */
  ExpirationDateLabel = 'expirationDateLabel',
  /** Unique Identifier */
  Identifier = 'identifier',
  /** Learner Client Name */
  LearnerClientNameLabel = 'learnerClientNameLabel',
  /** Learner Name */
  NameLabel = 'nameLabel',
  /** Session Custom Content Field */
  SessionCustomContentField = 'sessionCustomContentField',
  /** Short Text */
  TextLabel = 'textLabel',
  /** Custom Learner Field */
  UserFieldLabel = 'userFieldLabel',
  /** Learner Ref 1 */
  UserRef1Label = 'userRef1Label',
  /** Learner Ref 2 */
  UserRef2Label = 'userRef2Label',
  /** Learner Ref 3 */
  UserRef3Label = 'userRef3Label',
  /** Learner Ref 4 */
  UserRef4Label = 'userRef4Label',
  /** Learner Ref 5 */
  UserRef5Label = 'userRef5Label',
  /** Learner Ref 6 */
  UserRef6Label = 'userRef6Label',
  /** Learner Ref 7 */
  UserRef7Label = 'userRef7Label',
  /** Learner Ref 8 */
  UserRef8Label = 'userRef8Label',
  /** Learner Ref 9 */
  UserRef9Label = 'userRef9Label',
  /** Learner Ref 10 */
  UserRef10Label = 'userRef10Label',
  /** Link to View Certificate */
  ViewCertificateLink = 'viewCertificateLink'
}

export type CertificateResource = Course | LearningPath;

export enum CertificateResourceType {
  Course = 'course',
  LearningPath = 'learningPath'
}

export type CertificateTemplate = {
  __typename?: 'CertificateTemplate';
  asset?: Maybe<Scalars['URL']>;
  customCss?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['Date']>;
  expirationDays?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isExpired: Scalars['Boolean'];
  labels?: Maybe<Array<Maybe<CertificateTemplateLabel>>>;
  recertificationAction?: Maybe<CertificateTemplateRecertificationActionType>;
  recertificationActionText?: Maybe<Scalars['String']>;
  recertificationActionUrl?: Maybe<Scalars['URL']>;
  recertificationAfterDays?: Maybe<Scalars['Int']>;
  recertificationAutoReset?: Maybe<Scalars['Boolean']>;
  recertificationInstructions?: Maybe<Scalars['String']>;
  resource: CertificateTemplateResource;
  resourceType: CertificateTemplateResourceType;
  supplementalAssets?: Maybe<Array<Scalars['URL']>>;
  title?: Maybe<Scalars['String']>;
  userCustomField?: Maybe<UserCustomField>;
  userCustomFieldSlug?: Maybe<Scalars['Slug']>;
  userCustomFieldValue?: Maybe<Scalars['String']>;
};

export type CertificateTemplateLabel = {
  __typename?: 'CertificateTemplateLabel';
  certificateField?: Maybe<CertificateField>;
  certificateFieldId: Scalars['ID'];
  fontColor: Scalars['HexColor'];
  fontSize: Scalars['Int'];
  id: Scalars['ID'];
  textAlign: TextAlignment;
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export enum CertificateTemplateRecertificationActionType {
  /** Custom action text & URL */
  ActionUrl = 'actionUrl',
  /** Recertify in current Session */
  RecertifyInSession = 'recertifyInSession',
  /** Reset progress in Content */
  ResetProgress = 'resetProgress'
}

export type CertificateTemplateResource = Course | LearningPath;

export enum CertificateTemplateResourceType {
  Course = 'course',
  LearningPath = 'learningPath'
}

export type CertificateUploadField = {
  awardAmount?: InputMaybe<Scalars['Float']>;
  awardTypeId?: InputMaybe<Scalars['ID']>;
  certificateFieldId: Scalars['ID'];
  date?: InputMaybe<Scalars['Date']>;
  type: CertificateFieldType;
  value?: InputMaybe<Scalars['String']>;
};

export type Client = {
  __typename?: 'Client';
  allocatedCredits?: Maybe<Scalars['Float']>;
  appearance?: Maybe<AppearanceSettings>;
  autoFilterForSelectedLanguage?: Maybe<Scalars['Boolean']>;
  catalog?: Maybe<CatalogSettings>;
  clientSubscriptionNeedsSetup?: Maybe<Scalars['Boolean']>;
  courseIds?: Maybe<Array<Scalars['ID']>>;
  courseTagIds?: Maybe<Array<Scalars['ID']>>;
  courseTags?: Maybe<Array<Tag>>;
  courses?: Maybe<Array<Course>>;
  createdAt?: Maybe<Scalars['Date']>;
  currentBalance?: Maybe<Scalars['Float']>;
  currentUserManagerAllocatedLicenseTree?: Maybe<Array<LicenseNode>>;
  customHost?: Maybe<Scalars['String']>;
  dashboardLayoutId?: Maybe<Scalars['ID']>;
  defaultLanguage?: Maybe<Scalars['String']>;
  disabled: Scalars['Boolean'];
  emailLayout?: Maybe<EmailLayoutSettings>;
  enableBranding: Scalars['Boolean'];
  enableCommunitiesSegmentation?: Maybe<Scalars['Boolean']>;
  enableContentDetailPage?: Maybe<Scalars['Boolean']>;
  enableCreditPurchasing?: Maybe<Scalars['Boolean']>;
  enableCustomEmailSettings?: Maybe<Scalars['Boolean']>;
  enableDiscussions?: Maybe<Scalars['Boolean']>;
  enableEcommerce: Scalars['Boolean'];
  enableGlobalLinks: Scalars['Boolean'];
  enableLicenseDashboards?: Maybe<Scalars['Boolean']>;
  enableNavLinks: Scalars['Boolean'];
  enableOnboardingSurvey: Scalars['Boolean'];
  enableRecommendationAssessment?: Maybe<Scalars['Boolean']>;
  enableSegmentation: Scalars['Boolean'];
  id: Scalars['ID'];
  languageSelectorEnabled?: Maybe<Scalars['Boolean']>;
  languages?: Maybe<Array<Scalars['String']>>;
  learningPathIds?: Maybe<Array<Scalars['ID']>>;
  learningPaths?: Maybe<Array<LearningPath>>;
  licenseEndDate?: Maybe<Scalars['Date']>;
  licenseTree?: Maybe<Array<LicenseNode>>;
  licenses?: Maybe<Array<License>>;
  name: Scalars['String'];
  notificationEmails?: Maybe<Scalars['String']>;
  panorama: Scalars['Boolean'];
  pendingJobs?: Maybe<Array<Maybe<BackgroundJob>>>;
  primaryLicense?: Maybe<License>;
  purchasableContentIds?: Maybe<Array<Scalars['ID']>>;
  purchasableTags?: Maybe<Array<Tag>>;
  redemptionLayoutId?: Maybe<Scalars['ID']>;
  schoolName?: Maybe<Scalars['String']>;
  seatsAllocatedCount?: Maybe<Scalars['Int']>;
  seatsLimit?: Maybe<Scalars['Int']>;
  seatsUsedCount?: Maybe<Scalars['Int']>;
  secretKey?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  sso?: Maybe<SsoSettings>;
  startingBalance?: Maybe<Scalars['Float']>;
  tags?: Maybe<Array<Tag>>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Company = {
  __typename?: 'Company';
  catalogBlock?: Maybe<Block>;
  catalogVisibilityEmails?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  subdomain?: Maybe<Scalars['String']>;
};

export type CompetencyAssessment = {
  __typename?: 'CompetencyAssessment';
  continueAfterTimerExpires: Scalars['Boolean'];
  createdAt: Scalars['Date'];
  failMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isGraded: Scalars['Boolean'];
  minimumPassingPercentage?: Maybe<Scalars['Int']>;
  passMessage?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<CompetencyAssessmentQuestion>>;
  resourceItems?: Maybe<Array<CompetencyAssessmentResource>>;
  resources?: Maybe<Array<Resource>>;
  sku?: Maybe<Scalars['String']>;
  timeLimitInSeconds?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type CompetencyAssessmentQuestion = {
  __typename?: 'CompetencyAssessmentQuestion';
  body: Scalars['String'];
  choices?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  mustSelectAllCorrectChoices: Scalars['Boolean'];
  type: CompetencyAssessmentQuestionType;
};

export enum CompetencyAssessmentQuestionType {
  DropDown = 'dropDown',
  MultipleChoice = 'multipleChoice',
  SelectBoxes = 'selectBoxes'
}

export type CompetencyAssessmentResource = Layout | LearningPath;

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
  location?: Maybe<Location>;
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

export type ContentGroup = {
  __typename?: 'ContentGroup';
  count: Scalars['Int'];
  kind: ContentGroupKind;
};

export enum ContentGroupKind {
  ArchivedContentItems = 'archivedContentItems',
  BookmarkFolders = 'bookmarkFolders',
  Certificates = 'certificates',
  CompletedItems = 'completedItems',
  ContentItems = 'contentItems',
  EventItems = 'eventItems',
  LearningPaths = 'learningPaths',
  WaitlistedCourses = 'waitlistedCourses'
}

export type ContentItem = {
  __typename?: 'ContentItem';
  asset?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  authors?: Maybe<Array<Scalars['String']>>;
  bulkPurchasingEnabled?: Maybe<Scalars['Boolean']>;
  canAddToQueue?: Maybe<Scalars['Boolean']>;
  contentTypeLabel?: Maybe<Scalars['String']>;
  courseGracePeriodEnded?: Maybe<Scalars['Boolean']>;
  coursePresold?: Maybe<Scalars['Boolean']>;
  courseStartDate?: Maybe<Scalars['Date']>;
  currentUserUnmetCoursePrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currentUserUnmetLearningPathPrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
  displayCourse?: Maybe<Scalars['ID']>;
  displayCourseSlug?: Maybe<Scalars['String']>;
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  kind?: Maybe<ContentKind>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
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
  MicroCourse = 'microCourse',
  PickableGroup = 'pickableGroup',
  Product = 'product',
  Sellable = 'sellable',
  ShareableContentObject = 'shareableContentObject',
  Video = 'video',
  Webinar = 'webinar',
  WebinarCourse = 'webinarCourse',
  XApiObject = 'xApiObject'
}

export type ContentType = {
  __typename?: 'ContentType';
  assetAspectRatio?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type Course = {
  __typename?: 'Course';
  accessDays?: Maybe<Scalars['Int']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  appearanceBlock?: Maybe<Scalars['ID']>;
  appearanceHash?: Maybe<Scalars['String']>;
  askLearnerPassword?: Maybe<Scalars['Boolean']>;
  availabilityStatus?: Maybe<Scalars['String']>;
  awardClaimingOptions?: Maybe<Array<CourseAwardClaimingOption>>;
  balanceRequirement?: Maybe<Scalars['Float']>;
  bulkPurchasingEnabled: Scalars['Boolean'];
  completionTimePerPage?: Maybe<Scalars['Int']>;
  confirmationBlock?: Maybe<Scalars['ID']>;
  courseEndDate?: Maybe<Scalars['Date']>;
  courseGroup?: Maybe<CourseGroup>;
  courseStartDate?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  currentUserHasAccess: Scalars['Boolean'];
  customFields?: Maybe<Scalars['JSON']>;
  discussionsEnabled?: Maybe<Scalars['Boolean']>;
  displayMap: Scalars['Boolean'];
  displayResults: Scalars['Boolean'];
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  enrollmentActive?: Maybe<Scalars['Boolean']>;
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  finalAssessment?: Maybe<Scalars['String']>;
  forceLinearProgress?: Maybe<Scalars['Boolean']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  fulfillmentCenter?: Maybe<Scalars['ID']>;
  futurePublishDate?: Maybe<Scalars['Date']>;
  galleryEnabled?: Maybe<Scalars['Boolean']>;
  gracePeriodEndDate?: Maybe<Scalars['Date']>;
  hasChildren: Scalars['Boolean'];
  hasMultipleCurrencies: Scalars['Boolean'];
  id: Scalars['ID'];
  inPersonEventInfo?: Maybe<InPersonEventInfo>;
  instructorAccessEnabled?: Maybe<Scalars['Boolean']>;
  instructorAccessPriceInCents?: Maybe<Scalars['Int']>;
  instructorEmails?: Maybe<Array<Maybe<Scalars['String']>>>;
  isActive: Scalars['Boolean'];
  isChild?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<CourseGroupKind>;
  lastTierPriceInCents?: Maybe<Scalars['Int']>;
  linkedWorkbookEnabled?: Maybe<Scalars['Boolean']>;
  linkedWorkbookSkipEnabled?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  meetings?: Maybe<Array<Meeting>>;
  meetingsOverviewEnabled?: Maybe<Scalars['Boolean']>;
  parentCourseId?: Maybe<Scalars['ID']>;
  paywallsBlock?: Maybe<Scalars['ID']>;
  prerequisiteCourses?: Maybe<Array<Maybe<Course>>>;
  prerequisiteLearningPaths?: Maybe<Array<Maybe<LearningPath>>>;
  priceInCents?: Maybe<Scalars['Int']>;
  prices: Array<ItemPrice>;
  publishDate?: Maybe<Scalars['Date']>;
  purchasable: Scalars['Boolean'];
  resourcesEnabled?: Maybe<Scalars['Boolean']>;
  roster?: Maybe<Scalars['Boolean']>;
  rosterSubmittedDate?: Maybe<Scalars['Date']>;
  sampleLesson?: Maybe<Lesson>;
  sampleLessonId?: Maybe<Scalars['ID']>;
  scormCollectUserDetails?: Maybe<Scalars['Boolean']>;
  seatPackages?: Maybe<Array<SeatPackage>>;
  seatTiers?: Maybe<Array<SeatTier>>;
  seatsAllocatedCount: Scalars['Int'];
  seatsLimit?: Maybe<Scalars['Int']>;
  seatsLimitMet: Scalars['Boolean'];
  seatsUsedCount: Scalars['Int'];
  sections?: Maybe<Array<Maybe<Section>>>;
  sessionIsTitled: Scalars['Boolean'];
  showProgress?: Maybe<Scalars['Boolean']>;
  showSyllabusWhileUnenrolled?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  superquizEnabled?: Maybe<Scalars['Boolean']>;
  syllabusTitlesEnabled?: Maybe<Scalars['Boolean']>;
  taxCategory?: Maybe<Scalars['ID']>;
  taxable?: Maybe<Scalars['Boolean']>;
  termsBlock?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  topicGroup?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  waitlistActive?: Maybe<Scalars['Boolean']>;
  waitlistCount?: Maybe<Scalars['Int']>;
  waitlistingEnabled: Scalars['Boolean'];
  waitlistingTriggered: Scalars['Boolean'];
  webinarDates?: Maybe<Array<Maybe<DateRange>>>;
  webinarDetails?: Maybe<WebinarBlock>;
  webinarId?: Maybe<Scalars['String']>;
  webinarTimeZone?: Maybe<Scalars['String']>;
  workbookEnabled?: Maybe<Scalars['Boolean']>;
};

export type CourseAwardClaimingOption = {
  __typename?: 'CourseAwardClaimingOption';
  awardAmounts?: Maybe<Array<Scalars['Float']>>;
  awardType: AwardType;
  awardTypeId: Scalars['ID'];
  range: Scalars['String'];
};

export type CourseCompletionCriteriaProgress = {
  __typename?: 'CourseCompletionCriteriaProgress';
  completed?: Maybe<Array<Maybe<Scalars['ID']>>>;
  percent: Scalars['Int'];
  required?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<CourseCompletionCriteriaType>;
};

export enum CourseCompletionCriteriaType {
  /** Percentage of Page Viewed */
  ArticlePercentViewed = 'articlePercentViewed',
  /** Time Spent Viewing Page */
  ArticleTimeViewedInSeconds = 'articleTimeViewedInSeconds',
  /** Bongo Assignment Completed */
  BongoAssignmentCompleted = 'bongoAssignmentCompleted',
  /** Assessment Passed */
  CourseAssessmentPassed = 'courseAssessmentPassed',
  /** Assignment Completed */
  CourseAssignmentComplete = 'courseAssignmentComplete',
  /** Meeting Attended */
  CourseMeetingAttended = 'courseMeetingAttended',
  /** Percentage of Pages Viewed */
  CoursePercentViewed = 'coursePercentViewed',
  /** Page Viewed */
  CourseTopicViewed = 'courseTopicViewed',
  /** SCORM Complete */
  ScormComplete = 'scormComplete',
  /** Survey Gizmo Complete */
  SurveyGizmoComplete = 'surveyGizmoComplete',
  /** Percentage of Video Viewed */
  VideoPercentViewed = 'videoPercentViewed',
  /** Video topic of viewed */
  VideoTopicId = 'videoTopicId',
  /** xAPI Complete */
  XApiComplete = 'xApiComplete'
}

export type CourseGroup = {
  __typename?: 'CourseGroup';
  allowRescheduling?: Maybe<Scalars['Boolean']>;
  archived?: Maybe<Scalars['Boolean']>;
  asset?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  contentType?: Maybe<ContentType>;
  courses?: Maybe<Array<Maybe<Course>>>;
  createdAt?: Maybe<Scalars['Date']>;
  currentUserMayReschedule?: Maybe<Scalars['Boolean']>;
  customFields?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  detailAsset?: Maybe<Scalars['String']>;
  displayBundle?: Maybe<DisplayBundle>;
  displayCourse?: Maybe<Course>;
  externalDetailUrl?: Maybe<Scalars['String']>;
  externalPurchaseUrl?: Maybe<Scalars['String']>;
  hasParentCourseGroup?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isbn?: Maybe<Scalars['String']>;
  kind?: Maybe<CourseGroupKind>;
  language?: Maybe<Scalars['String']>;
  layout?: Maybe<Layout>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  ownedByActiveScope: Scalars['Boolean'];
  rating?: Maybe<Scalars['Int']>;
  relatedCourseGroups?: Maybe<Array<Maybe<CourseGroup>>>;
  relatedQuery?: Maybe<Scalars['String']>;
  relatedQueryLimit?: Maybe<Scalars['Int']>;
  relatedQuerySignature?: Maybe<Scalars['String']>;
  relatedQuerySort?: Maybe<Scalars['String']>;
  relatedShowDescription?: Maybe<Scalars['Boolean']>;
  relatedShowImageAsset?: Maybe<Scalars['Boolean']>;
  ribbon?: Maybe<Scalars['Slug']>;
  slug: Scalars['Slug'];
  source?: Maybe<Scalars['String']>;
  tabs?: Maybe<Array<Maybe<CourseTab>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']>;
  videoAsset?: Maybe<Scalars['String']>;
};

export enum CourseGroupKind {
  Article = 'article',
  CourseGroup = 'courseGroup',
  InPersonEvent = 'inPersonEvent',
  InPersonEventCourse = 'inPersonEventCourse',
  MicroCourse = 'microCourse',
  ShareableContentObject = 'shareableContentObject',
  Video = 'video',
  Webinar = 'webinar',
  WebinarCourse = 'webinarCourse',
  XApiObject = 'xApiObject'
}

export type CourseTab = {
  __typename?: 'CourseTab';
  body?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  instructors?: Maybe<Array<Maybe<Instructor>>>;
  label?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Product>>>;
  sections?: Maybe<Array<Maybe<Section>>>;
  tabType?: Maybe<Scalars['String']>;
  testimonials?: Maybe<Array<Maybe<Testimonial>>>;
};

export type CustomField = {
  __typename?: 'CustomField';
  id: Scalars['ID'];
  includeLabelOnContent: Scalars['Boolean'];
  includeValueOnContent: Scalars['Boolean'];
  indexed: Scalars['Boolean'];
  label: Scalars['String'];
  multiple: Scalars['Boolean'];
  slug: Scalars['Slug'];
  sort?: Maybe<Scalars['String']>;
};

export type DateRange = {
  __typename?: 'DateRange';
  endDate?: Maybe<Scalars['Date']>;
  startDate?: Maybe<Scalars['Date']>;
};

export type DisplayBundle = {
  __typename?: 'DisplayBundle';
  annualPlanId?: Maybe<Scalars['ID']>;
  annualPriceInCents?: Maybe<Scalars['Int']>;
  asset?: Maybe<Scalars['URL']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['ID']>;
  priceInCents?: Maybe<Scalars['Int']>;
  slug: Scalars['Slug'];
};

export type EmailLayoutSettings = {
  __typename?: 'EmailLayoutSettings';
  bccAddress?: Maybe<Scalars['String']>;
  emailCaptureTerms?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  fromAddress?: Maybe<Scalars['String']>;
  fromName?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type GlobalNavigationLink = {
  __typename?: 'GlobalNavigationLink';
  href?: Maybe<Scalars['String']>;
  label: Scalars['String'];
};

export type InPersonEventInfo = {
  __typename?: 'InPersonEventInfo';
  heroAsset?: Maybe<Scalars['URL']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type Instructor = {
  __typename?: 'Instructor';
  asset?: Maybe<Scalars['URL']>;
  bio?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
};

export type ItemPrice = {
  __typename?: 'ItemPrice';
  annualPriceInCents?: Maybe<Scalars['Int']>;
  currencyCode: Scalars['String'];
  id: Scalars['ID'];
  instructorAccessPriceInCents?: Maybe<Scalars['Int']>;
  priceInCents?: Maybe<Scalars['Int']>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  variations: Array<ItemPriceVariation>;
};

export type ItemPriceVariation = {
  __typename?: 'ItemPriceVariation';
  label: Scalars['String'];
  priceInCents: Scalars['Int'];
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  isCustom?: Maybe<Scalars['Boolean']>;
  label: Scalars['String'];
  selectorLabel?: Maybe<Scalars['String']>;
};

export type Layout = {
  __typename?: 'Layout';
  hasEnrollmentWidget: Scalars['Boolean'];
  id: Scalars['ID'];
  kind?: Maybe<LayoutKind>;
  scripts?: Maybe<Scalars['String']>;
  widgets?: Maybe<Scalars['JSON']>;
};

export enum LayoutKind {
  InPersonEventLayout = 'InPersonEventLayout',
  ArticleLayout = 'articleLayout',
  BundleSidebarLayout = 'bundleSidebarLayout',
  CatalogLayout = 'catalogLayout',
  CourseDetailSidebarLayout = 'courseDetailSidebarLayout',
  DashboardLayout = 'dashboardLayout',
  DiscountGroupSidebarLayout = 'discountGroupSidebarLayout',
  HomepageLayout = 'homepageLayout',
  LearningPathLearnerLayout = 'learningPathLearnerLayout',
  LearningPathSidebarLayout = 'learningPathSidebarLayout',
  PageLayout = 'pageLayout',
  PickableGroupSidebarLayout = 'pickableGroupSidebarLayout',
  ProductSidebarLayout = 'productSidebarLayout',
  RedemptionLayout = 'redemptionLayout',
  RegistrationLayout = 'registrationLayout',
  SupportLayout = 'supportLayout',
  TranscriptLayout = 'transcriptLayout'
}

export type LearningPath = {
  __typename?: 'LearningPath';
  accessDays?: Maybe<Scalars['Int']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['URL']>;
  authors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  bulkPurchasingEnabled: Scalars['Boolean'];
  client?: Maybe<Client>;
  confirmationHtml?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  currentUserEarnedCertificate: Scalars['Boolean'];
  currentUserPendingCertificate: Scalars['Boolean'];
  currentUserStartActionDate?: Maybe<Scalars['Date']>;
  customFields?: Maybe<Scalars['JSON']>;
  detailAsset?: Maybe<Scalars['URL']>;
  endDate?: Maybe<Scalars['Date']>;
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  externalDetailUrl?: Maybe<Scalars['String']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  fulfillmentCenter?: Maybe<Scalars['ID']>;
  futurePublishDate?: Maybe<Scalars['Date']>;
  hasMultipleCurrencies: Scalars['Boolean'];
  heroAsset?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  isPayAsYouGo?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  lastTierPriceInCents?: Maybe<Scalars['Int']>;
  layout?: Maybe<Layout>;
  layoutId?: Maybe<Scalars['ID']>;
  learnerLayout?: Maybe<Layout>;
  learnerLayoutId?: Maybe<Scalars['ID']>;
  longDescription?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  milestones?: Maybe<Array<Maybe<Milestone>>>;
  name: Scalars['String'];
  prerequisiteCourses?: Maybe<Array<Maybe<Course>>>;
  prerequisiteLearningPaths?: Maybe<Array<Maybe<LearningPath>>>;
  priceInCents?: Maybe<Scalars['Int']>;
  prices: Array<ItemPrice>;
  publishDate?: Maybe<Scalars['Date']>;
  purchasable: Scalars['Boolean'];
  relatedQuery?: Maybe<Scalars['String']>;
  relatedQuerySignature?: Maybe<Scalars['String']>;
  resourceType: Scalars['String'];
  ribbon?: Maybe<Ribbon>;
  seatPackages?: Maybe<Array<SeatPackage>>;
  seatTiers?: Maybe<Array<SeatTier>>;
  seatsLimit?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  source?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  status: Status;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  tabs?: Maybe<LearningPathTabs>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  taxCategory?: Maybe<Scalars['ID']>;
  taxable?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Date']>;
  videoAsset?: Maybe<Scalars['ID']>;
};

export type LearningPathTab = {
  __typename?: 'LearningPathTab';
  body?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  instructors?: Maybe<Array<Maybe<Instructor>>>;
  label?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Product>>>;
  tabType?: Maybe<Scalars['String']>;
};

export type LearningPathTabs = {
  __typename?: 'LearningPathTabs';
  generated?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  tabs?: Maybe<Array<LearningPathTab>>;
};

export type Lesson = {
  __typename?: 'Lesson';
  accessLevel?: Maybe<AccessLevel>;
  id: Scalars['ID'];
  section?: Maybe<Section>;
  slug: Scalars['Slug'];
  slugOrId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type License = {
  __typename?: 'License';
  accessDays?: Maybe<Scalars['Int']>;
  appearance?: Maybe<AppearanceSettings>;
  childLicenses?: Maybe<Array<License>>;
  client?: Maybe<Client>;
  courseIds?: Maybe<Array<Scalars['ID']>>;
  courseTagIds?: Maybe<Array<Scalars['ID']>>;
  courseTags?: Maybe<Array<Tag>>;
  courses?: Maybe<Array<Course>>;
  createdAt?: Maybe<Scalars['Date']>;
  dashboardLayoutId?: Maybe<Scalars['ID']>;
  enableBranding?: Maybe<Scalars['Boolean']>;
  expirationDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  isDefault?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  learningPathIds?: Maybe<Array<Scalars['ID']>>;
  learningPaths?: Maybe<Array<LearningPath>>;
  name: Scalars['String'];
  parentLicense?: Maybe<License>;
  parentLicenseId?: Maybe<Scalars['ID']>;
  ref1?: Maybe<Scalars['String']>;
  ref2?: Maybe<Scalars['String']>;
  ref3?: Maybe<Scalars['String']>;
  ref4?: Maybe<Scalars['String']>;
  ref5?: Maybe<Scalars['String']>;
  ref6?: Maybe<Scalars['String']>;
  ref7?: Maybe<Scalars['String']>;
  ref8?: Maybe<Scalars['String']>;
  ref9?: Maybe<Scalars['String']>;
  ref10?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
  seatsLimit?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type LicenseNode = {
  __typename?: 'LicenseNode';
  ancestorIds?: Maybe<Array<Scalars['ID']>>;
  createdAt?: Maybe<Scalars['Date']>;
  depth: Scalars['Int'];
  hierarchicalName: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  parentLicenseId?: Maybe<Scalars['ID']>;
};

export type Location = {
  __typename?: 'Location';
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  room?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type Meeting = {
  __typename?: 'Meeting';
  attendeeInfo?: Maybe<Scalars['String']>;
  attendees?: Maybe<Array<User>>;
  course: Course;
  courseId: Scalars['ID'];
  endDate: Scalars['Date'];
  id: Scalars['ID'];
  instructors?: Maybe<Array<Scalars['String']>>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  startDate: Scalars['Date'];
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Milestone = {
  __typename?: 'Milestone';
  completionCriteria?: Maybe<Array<MilestoneCompletionCriteria>>;
  completionCriteriaDescription?: Maybe<Scalars['String']>;
  contentItems?: Maybe<Array<Content>>;
  id: Scalars['ID'];
  kind: MilestoneKind;
  learningPath: LearningPath;
  milestoneCompetencyAssessment?: Maybe<MilestoneCompetencyAssessment>;
  milestoneCourses?: Maybe<Array<MilestoneCourse>>;
  name: Scalars['String'];
  releaseDate?: Maybe<Scalars['Date']>;
  releaseDays?: Maybe<Scalars['Int']>;
  requirement: MilestoneRequirement;
};

export type MilestoneCompetencyAssessment = {
  __typename?: 'MilestoneCompetencyAssessment';
  allowRetakes?: Maybe<Scalars['Boolean']>;
  asset?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  competencyAssessment?: Maybe<CompetencyAssessment>;
  competencyAssessmentId: Scalars['ID'];
  displayType: MilestoneCompetencyAssessmentDisplayType;
  id: Scalars['ID'];
  largeAsset?: Maybe<Scalars['String']>;
  passingScoreRequired?: Maybe<Scalars['Boolean']>;
  requirement?: Maybe<MilestoneRequirement>;
  smallAsset?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: MilestoneCompetencyAssessmentType;
};

export enum MilestoneCompetencyAssessmentDisplayType {
  Image = 'image',
  Text = 'text'
}

export enum MilestoneCompetencyAssessmentType {
  Assessment = 'assessment',
  DynamicContent = 'dynamicContent'
}

export type MilestoneCompletionCriteria = {
  __typename?: 'MilestoneCompletionCriteria';
  awardType?: Maybe<AwardType>;
  id: Scalars['ID'];
  threshold: Scalars['Int'];
  type: MilestoneCompletionCriteriaType;
};

export enum MilestoneCompletionCriteriaType {
  /** Require learner to earn an award */
  Award = 'award',
  /** Require learner to complete a certain number of electives */
  Electives = 'electives',
  /** Required Competency Assessment */
  RequiredCompetencyAssessmentsAssessment = 'requiredCompetencyAssessmentsAssessment',
  /** Required Competency Assessment with dynamic content */
  RequiredCompetencyAssessmentsDynamicContent = 'requiredCompetencyAssessmentsDynamicContent',
  /** Required Competency Assessment with passing score */
  RequiredCompetencyAssessmentsPassingScore = 'requiredCompetencyAssessmentsPassingScore',
  /** Required Content (auto-generated, not selectable) */
  RequiredCourses = 'requiredCourses'
}

export enum MilestoneContentGrouping {
  Course = 'course',
  CourseGroup = 'courseGroup'
}

export type MilestoneCourse = {
  __typename?: 'MilestoneCourse';
  altDescriptionBody?: Maybe<Scalars['String']>;
  contentGrouping: MilestoneContentGrouping;
  contentId: Scalars['ID'];
  contentTitle: Scalars['String'];
  hideCourseDescription: Scalars['Boolean'];
  id: Scalars['ID'];
  requirement: MilestoneRequirement;
};

export enum MilestoneKind {
  CompetencyAssessment = 'competencyAssessment',
  Content = 'content'
}

export enum MilestoneRequirement {
  /** Elective */
  Elective = 'elective',
  /** Required */
  Required = 'required'
}

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['URL']>;
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  purchasable?: Maybe<Scalars['Boolean']>;
  relatedProducts?: Maybe<Array<Maybe<Product>>>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
};

export type PurchasedBundle = {
  __typename?: 'PurchasedBundle';
  bundle?: Maybe<Bundle>;
  bundleId: Scalars['ID'];
};

export type PurchasedCourse = {
  __typename?: 'PurchasedCourse';
  certificate?: Maybe<Scalars['ID']>;
  certificateIssuedAt?: Maybe<Scalars['Date']>;
  course?: Maybe<Course>;
  courseId: Scalars['ID'];
  instructorAccessPurchased?: Maybe<Scalars['Boolean']>;
  status: Scalars['String'];
};

export type Resource = {
  __typename?: 'Resource';
  id: Scalars['ID'];
  type: Scalars['String'];
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

export type SsoAttributeMapping = {
  __typename?: 'SSOAttributeMapping';
  keyAttribute?: Maybe<Scalars['String']>;
  keyName: Scalars['String'];
};

export type SsoSettings = {
  __typename?: 'SSOSettings';
  bundle?: Maybe<Bundle>;
  bundleId?: Maybe<Scalars['ID']>;
  casAttributeMappings?: Maybe<Array<Maybe<SsoAttributeMapping>>>;
  casServerUrl?: Maybe<Scalars['URL']>;
  externalEcommerceUrl?: Maybe<Scalars['URL']>;
  externalLoginUrl?: Maybe<Scalars['URL']>;
  externalLogoutUrl?: Maybe<Scalars['URL']>;
  externalProfileUrl?: Maybe<Scalars['URL']>;
  externalRegisterUrl?: Maybe<Scalars['URL']>;
  hasOpenIdClientSecret: Scalars['Boolean'];
  id: Scalars['ID'];
  openIdAttributeMappings?: Maybe<Array<Maybe<SsoAttributeMapping>>>;
  openIdAuthorizationParameters?: Maybe<Scalars['JSON']>;
  openIdAuthorizationUrl?: Maybe<Scalars['URL']>;
  openIdClientId?: Maybe<Scalars['String']>;
  openIdClientSecret?: Maybe<Scalars['String']>;
  openIdEndSessionUrl?: Maybe<Scalars['URL']>;
  openIdIssuer?: Maybe<Scalars['URL']>;
  openIdSigningAlgorithm?: Maybe<Scalars['String']>;
  openIdTokenUrl?: Maybe<Scalars['URL']>;
  openIdUserInfoUrl?: Maybe<Scalars['URL']>;
  openIdWellKnownUrl?: Maybe<Scalars['URL']>;
  samlAllowUnencryptedAssertions?: Maybe<Scalars['Boolean']>;
  samlAttributeMappings?: Maybe<Array<Maybe<SsoAttributeMapping>>>;
  samlForceReAuth?: Maybe<Scalars['Boolean']>;
  samlIdpCertificate?: Maybe<Scalars['String']>;
  samlSignRequests?: Maybe<Scalars['Boolean']>;
  samlSingleLogoutUrl?: Maybe<Scalars['URL']>;
  samlSingleSignonUrl?: Maybe<Scalars['URL']>;
};

export type SeatPackage = {
  __typename?: 'SeatPackage';
  seats: Scalars['Int'];
};

export type SeatTier = {
  __typename?: 'SeatTier';
  priceInCents: Scalars['Int'];
  seats: Scalars['Int'];
};

export type Section = {
  __typename?: 'Section';
  id: Scalars['ID'];
  lessons?: Maybe<Array<Maybe<Lesson>>>;
  slug: Scalars['Slug'];
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

export type Testimonial = {
  __typename?: 'Testimonial';
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export enum TextAlignment {
  Center = 'center',
  Left = 'left'
}

export type Topic = {
  __typename?: 'Topic';
  failMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  originalId?: Maybe<Scalars['ID']>;
  passMessage?: Maybe<Scalars['String']>;
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  questionSkipEnabled?: Maybe<Scalars['Boolean']>;
  quizQuestions?: Maybe<Array<Scalars['ID']>>;
  resultsMessage?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt?: Maybe<Scalars['Date']>;
};

export enum TopicType {
  Ad = 'ad',
  Article = 'article',
  Assignment = 'assignment',
  Audio = 'audio',
  Bongo = 'bongo',
  DiscussionBoard = 'discussionBoard',
  Embed = 'embed',
  FlipCardSet = 'flipCardSet',
  HighlightZoneQuiz = 'highlightZoneQuiz',
  HighlightZoneSet = 'highlightZoneSet',
  Image = 'image',
  InPersonEvent = 'inPersonEvent',
  ListRoll = 'listRoll',
  Lti = 'lti',
  MatchPairSet = 'matchPairSet',
  MeetingInfo = 'meetingInfo',
  Notebook = 'notebook',
  PdfViewer = 'pdfViewer',
  Presentation = 'presentation',
  Quiz = 'quiz',
  Recipe = 'recipe',
  ShareableContentObject = 'shareableContentObject',
  Slideshow = 'slideshow',
  SocialShareCardSet = 'socialShareCardSet',
  Survey = 'survey',
  SurveyGizmo = 'surveyGizmo',
  Tally = 'tally',
  Test = 'test',
  Text = 'text',
  Video = 'video',
  Workbook = 'workbook',
  XApiObject = 'xApiObject'
}

export type User = {
  __typename?: 'User';
  abbreviatedName?: Maybe<Scalars['String']>;
  accessedFlows?: Maybe<Array<Scalars['String']>>;
  activeLicense?: Maybe<License>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  adminClients?: Maybe<Array<Maybe<Client>>>;
  allocatedLearningPaths?: Maybe<Array<AllocatedLearningPath>>;
  allocatedLicenses?: Maybe<Array<AllocatedLicense>>;
  asset?: Maybe<Scalars['String']>;
  attendedMeetings?: Maybe<Array<UserAttendedMeeting>>;
  availableCoursesCount: Scalars['Int'];
  balance?: Maybe<Scalars['Float']>;
  bio?: Maybe<Scalars['String']>;
  certificatesCount: Scalars['Int'];
  city?: Maybe<Scalars['String']>;
  client?: Maybe<Client>;
  clientId?: Maybe<Scalars['ID']>;
  collaborationsCount: Scalars['Int'];
  completedCoursesCount: Scalars['Int'];
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  customFields?: Maybe<Scalars['JSON']>;
  disabled: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  externalCustomerId?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invitedByName?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  lastActiveAt?: Maybe<Scalars['Date']>;
  lastInitial?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  learnerUserId?: Maybe<Scalars['ID']>;
  managerUserId?: Maybe<Scalars['ID']>;
  mustVerifyEmail: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  purchasedBundles?: Maybe<Array<PurchasedBundle>>;
  purchasedCourses?: Maybe<Array<PurchasedCourse>>;
  recommendedTags?: Maybe<Array<UserRecommendedTag>>;
  ref1?: Maybe<Scalars['String']>;
  ref2?: Maybe<Scalars['String']>;
  ref3?: Maybe<Scalars['String']>;
  ref4?: Maybe<Scalars['String']>;
  ref5?: Maybe<Scalars['String']>;
  ref6?: Maybe<Scalars['String']>;
  ref7?: Maybe<Scalars['String']>;
  ref8?: Maybe<Scalars['String']>;
  ref9?: Maybe<Scalars['String']>;
  ref10?: Maybe<Scalars['String']>;
  roleKey?: Maybe<Scalars['String']>;
  sfAccountId?: Maybe<Scalars['ID']>;
  sfContactId?: Maybe<Scalars['ID']>;
  shippingName?: Maybe<Scalars['String']>;
  shouldHighlight: Scalars['Boolean'];
  startedCoursesCount: Scalars['Int'];
  state?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['ID']>;
  telephone?: Maybe<Scalars['String']>;
  twoFactorEnabled?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Date']>;
  waitlistedCourses?: Maybe<Array<WaitlistedCourse>>;
  zipCode?: Maybe<Scalars['String']>;
};

export type UserAttendedMeeting = {
  __typename?: 'UserAttendedMeeting';
  attendanceDate: Scalars['Date'];
  meeting?: Maybe<Meeting>;
  user: User;
};

export type UserAwardCount = {
  __typename?: 'UserAwardCount';
  count?: Maybe<Scalars['Int']>;
  icon?: Maybe<AwardTypeIcon>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};

export type UserCustomField = {
  __typename?: 'UserCustomField';
  choices?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  label: Scalars['String'];
  ref?: Maybe<Scalars['Int']>;
  required: Scalars['Boolean'];
  slug: Scalars['Slug'];
  type: UserCustomFieldType;
};

export enum UserCustomFieldType {
  /** Drop Down */
  DropDown = 'dropDown',
  /** Text Field */
  SingleField = 'singleField',
  /** Phone Number */
  Telephone = 'telephone'
}

export type UserProgress = {
  __typename?: 'UserProgress';
  course: Scalars['ID'];
  percentComplete?: Maybe<Scalars['Int']>;
  totalTime?: Maybe<Scalars['Int']>;
  totalViews?: Maybe<Scalars['Int']>;
  user: Scalars['ID'];
};

export type UserRecommendedTag = {
  __typename?: 'UserRecommendedTag';
  boost: Scalars['Int'];
  label: Scalars['String'];
};

export type WaitlistedCourse = {
  __typename?: 'WaitlistedCourse';
  course?: Maybe<Course>;
  courseId: Scalars['ID'];
};

export type WebinarBlock = {
  __typename?: 'WebinarBlock';
  attendeeDialIn?: Maybe<Scalars['String']>;
  coOrganizers?: Maybe<Array<Scalars['String']>>;
  enableAutoRecording?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  joinUrl?: Maybe<Scalars['String']>;
  organizerDialIn?: Maybe<Scalars['String']>;
  originalWebinarDates?: Maybe<Array<WebinarDate>>;
  recurrence?: Maybe<Scalars['JSON']>;
  retrieveRecording?: Maybe<Scalars['Boolean']>;
  timeZone?: Maybe<Scalars['String']>;
  webexDescription?: Maybe<Scalars['String']>;
  webexLabName?: Maybe<Scalars['String']>;
  webexNumComputers?: Maybe<Scalars['Int']>;
  webexReserveHOL?: Maybe<Scalars['Boolean']>;
  webexSessionPassword?: Maybe<Scalars['String']>;
  webinarDates?: Maybe<Array<WebinarDate>>;
  webinarProvider: Scalars['String'];
  webinarType?: Maybe<Scalars['String']>;
};

export type WebinarDate = {
  __typename?: 'WebinarDate';
  endTime: Scalars['Date'];
  goToTrainingKey?: Maybe<Scalars['String']>;
  goToWebinarKey?: Maybe<Scalars['String']>;
  meeting?: Maybe<Scalars['ID']>;
  startTime: Scalars['Date'];
  webexTrainingSessionKey?: Maybe<Scalars['String']>;
  zoomOccurrenceKey?: Maybe<Scalars['String']>;
};
