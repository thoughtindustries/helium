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

export type AccessExpiration = {
  __typename?: 'AccessExpiration';
  bundle?: Maybe<Bundle>;
  course?: Maybe<Course>;
  expiresAt: Scalars['Date'];
  id: Scalars['ID'];
  learningPath?: Maybe<LearningPath>;
  license?: Maybe<License>;
  resource: AccessExpirationResource;
  resourceType: AccessExpirationResourceType;
  userId?: Maybe<Scalars['String']>;
};

export type AccessExpirationResource = Bundle | Course | LearningPath | License;

export enum AccessExpirationResourceType {
  Bundle = 'bundle',
  Course = 'course',
  LearningPath = 'learningPath',
  License = 'license'
}

export type AccessExpirationsList = {
  __typename?: 'AccessExpirationsList';
  accessExpirations?: Maybe<Array<AccessExpiration>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum AccessLevel {
  EmailCaptureOpen = 'emailCaptureOpen',
  Open = 'open',
  StudentsOnly = 'studentsOnly'
}

export type AdobeConnectWebinarConnection = {
  __typename?: 'AdobeConnectWebinarConnection';
  adobeConnectDomain: Scalars['String'];
  adobeConnectLogin: Scalars['String'];
  adobeConnectPassword: Scalars['String'];
  id: Scalars['ID'];
  provider: Scalars['String'];
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

export type Assessment = {
  __typename?: 'Assessment';
  id: Scalars['ID'];
  minPassingPercent?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AssessmentAnswer = {
  __typename?: 'AssessmentAnswer';
  answer?: Maybe<Scalars['String']>;
  correct: Scalars['Boolean'];
  hasDefaultGrade?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  question?: Maybe<Scalars['String']>;
};

export type AssessmentAttempt = {
  __typename?: 'AssessmentAttempt';
  adminUpdatedGrade: Scalars['Boolean'];
  answeredQuestionsCount?: Maybe<Scalars['Int']>;
  answers?: Maybe<Array<AssessmentAnswer>>;
  assessment?: Maybe<Assessment>;
  assignmentSubmissionId?: Maybe<Scalars['ID']>;
  correctQuestionsCount?: Maybe<Scalars['Int']>;
  course?: Maybe<Course>;
  courseId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  forgiven: Scalars['Boolean'];
  grade?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  linkedWorkbook?: Maybe<Scalars['ID']>;
  originalGrade?: Maybe<Scalars['Int']>;
  passed: Scalars['Boolean'];
  poolLabelByQuestionId?: Maybe<Scalars['JSON']>;
  questions?: Maybe<Array<QuizQuestion>>;
  questionsWithChoicesCount?: Maybe<Scalars['Int']>;
  status: AssessmentAttemptStatus;
  timeElapsedInSeconds?: Maybe<Scalars['Int']>;
  topic?: Maybe<Topic>;
  topicId?: Maybe<Scalars['ID']>;
  topicType?: Maybe<TopicType>;
  unansweredQuestionsCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
};

export type AssessmentAttemptList = {
  __typename?: 'AssessmentAttemptList';
  assessmentAttempts?: Maybe<Array<AssessmentAttempt>>;
  pageInfo: CursorPageInfo;
};

export enum AssessmentAttemptStatus {
  Finished = 'finished',
  Pending = 'pending',
  Started = 'started'
}

export enum AssessmentQuestionType {
  BooleanChoice = 'booleanChoice',
  Essay = 'essay',
  FileSubmission = 'fileSubmission',
  ImageComparison = 'imageComparison',
  Likert = 'likert',
  MultipleChoice = 'multipleChoice',
  OpenEnded = 'openEnded',
  SelectBoxes = 'selectBoxes',
  Table = 'table'
}

export type AssetList = {
  __typename?: 'AssetList';
  aggregations?: Maybe<Array<Aggregation>>;
  assets?: Maybe<Array<CentralLibraryItem>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Assignment = {
  __typename?: 'Assignment';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type AssignmentSubmission = {
  __typename?: 'AssignmentSubmission';
  adminUpdatedGrade: Scalars['Boolean'];
  asset?: Maybe<Scalars['URL']>;
  assignment?: Maybe<Assignment>;
  body?: Maybe<Scalars['String']>;
  commentsCount: Scalars['Int'];
  course?: Maybe<Course>;
  courseId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  grade?: Maybe<AssignmentSubmissionGrade>;
  gradeFeedback?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  numericGrade?: Maybe<Scalars['Float']>;
  quizAttempt?: Maybe<AssessmentAttempt>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  videoAsset?: Maybe<Scalars['String']>;
};

export enum AssignmentSubmissionGrade {
  Completed = 'completed',
  Incomplete = 'incomplete'
}

export type AssignmentSubmissionList = {
  __typename?: 'AssignmentSubmissionList';
  aggregations?: Maybe<Array<Aggregation>>;
  assignmentSubmissions?: Maybe<Array<AssignmentSubmission>>;
  pageInfo: PageInfo;
};

export type AvalaraTaxSettings = {
  __typename?: 'AvalaraTaxSettings';
  accountId?: Maybe<Scalars['ID']>;
  companyCode?: Maybe<Scalars['ID']>;
  disableAddressValidation: Scalars['Boolean'];
  disableDocumentCommitting: Scalars['Boolean'];
  disableTaxCalculation: Scalars['Boolean'];
  licenseKey?: Maybe<Scalars['ID']>;
  sendEmail: Scalars['Boolean'];
  serviceUrl?: Maybe<Scalars['URL']>;
  taxInclusive: Scalars['Boolean'];
};

export type Award = {
  __typename?: 'Award';
  awardAmount?: Maybe<Scalars['Float']>;
  awardType?: Maybe<AwardType>;
  awardWhen?: Maybe<AwardWhen>;
  certificate?: Maybe<Certificate>;
  createdAt?: Maybe<Scalars['Date']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  resource?: Maybe<AwardResource>;
  user?: Maybe<User>;
};

export type AwardClaiming = {
  awardAmount?: InputMaybe<Scalars['Float']>;
  awardType: Scalars['ID'];
};

export type AwardQualification = {
  __typename?: 'AwardQualification';
  allResources?: Maybe<Scalars['Boolean']>;
  awardAmount?: Maybe<Scalars['Float']>;
  awardInterval?: Maybe<Scalars['Int']>;
  awardType?: Maybe<AwardType>;
  awardWhen?: Maybe<AwardWhen>;
  id: Scalars['ID'];
  resourceType?: Maybe<AwardResourceType>;
  resources?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type AwardResource = Course | LearningPath;

export enum AwardResourceType {
  /** Course(s) */
  Course = 'course',
  /** Learning Path(s) */
  LearningPath = 'learningPath'
}

export type AwardTotal = {
  __typename?: 'AwardTotal';
  awardType: AwardType;
  resource?: Maybe<AwardResource>;
  resourceId: Scalars['ID'];
  total: Scalars['Float'];
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

export enum AwardWhen {
  /** Can be claimed upon course completion */
  AwardClaim = 'awardClaim',
  /** Award upon course completion */
  CourseCompletion = 'courseCompletion',
  /** Awarded by third-party certificate (uploaded by learner) */
  ExternalCertificateUpload = 'externalCertificateUpload',
  /** Award upon learning path completion */
  LearningPathCompletion = 'learningPathCompletion',
  /** (internal) manual manager grant */
  ManagerGrant = 'managerGrant',
  /** Award after a number of pages are viewed */
  PageView = 'pageView',
  /** Award upon section completion */
  SectionCompletion = 'sectionCompletion',
  /** Award after an amount of time spent in content */
  TimeSpent = 'timeSpent'
}

export type AwardsList = {
  __typename?: 'AwardsList';
  awards?: Maybe<Array<Maybe<Award>>>;
  pageInfo?: Maybe<PageInfo>;
};

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

export type Badge = {
  __typename?: 'Badge';
  asset: Scalars['URL'];
  awardThreshold: Scalars['Int'];
  awardType?: Maybe<AwardType>;
  deleted?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type BadgeImage = {
  __typename?: 'BadgeImage';
  url?: Maybe<Scalars['String']>;
};

export type BadgeLeader = {
  __typename?: 'BadgeLeader';
  rank?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type BadgeLeaderboard = {
  __typename?: 'BadgeLeaderboard';
  awardType?: Maybe<AwardType>;
  currentUserPosition?: Maybe<BadgeLeader>;
  leaders?: Maybe<Array<Maybe<BadgeLeader>>>;
};

export enum BalanceContentType {
  Courses = 'courses',
  LearningPaths = 'learningPaths'
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

export enum BookmarkFolderResourceTypes {
  Bookmarks = 'bookmarks',
  LookerDashboards = 'lookerDashboards',
  LookerFavorites = 'lookerFavorites',
  LookerLooks = 'lookerLooks'
}

export type BulkImportSession = {
  __typename?: 'BulkImportSession';
  backgroundJob?: Maybe<BackgroundJob>;
  dryRun: Scalars['Boolean'];
  invalidRows?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  validRows?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type BulkOrder = {
  __typename?: 'BulkOrder';
  redeemedCodesCount: Scalars['Int'];
  redemptionCodeGroupId: Scalars['ID'];
  title: Scalars['String'];
  totalCodesCount: Scalars['Int'];
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

export type Campaign = {
  __typename?: 'Campaign';
  allResources?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  deleted?: Maybe<Scalars['Boolean']>;
  emails?: Maybe<Array<Maybe<CampaignEmail>>>;
  id: Scalars['ID'];
  resourceIds?: Maybe<Array<Scalars['ID']>>;
  resourceType: CampaignResourceType;
  resources?: Maybe<Array<CampaignResource>>;
  title: Scalars['String'];
  type: CampaignType;
};

export type CampaignEmail = {
  __typename?: 'CampaignEmail';
  actionText?: Maybe<Scalars['String']>;
  actionUrl?: Maybe<Scalars['URL']>;
  allMeetings?: Maybe<Scalars['Boolean']>;
  body: Scalars['String'];
  contentEndDaysAfter?: Maybe<Scalars['Int']>;
  contentEndDaysBefore?: Maybe<Scalars['Int']>;
  contentStartDaysAfter?: Maybe<Scalars['Int']>;
  contentStartDaysBefore?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  date?: Maybe<Scalars['Date']>;
  days?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  lang?: Maybe<Scalars['String']>;
  notWhen?: Maybe<CampaignUserAction>;
  notWhenSettings?: Maybe<Scalars['JSON']>;
  subject: Scalars['String'];
  trigger: CampaignEmailTrigger;
  userAction?: Maybe<CampaignUserAction>;
  userActionSettings?: Maybe<Scalars['JSON']>;
};

export type CampaignEmailTarget = {
  __typename?: 'CampaignEmailTarget';
  campaign: Campaign;
  meeting?: Maybe<Meeting>;
  resource: CampaignResource;
  resourceType: CampaignResourceType;
  user: User;
};

export enum CampaignEmailTrigger {
  /** Send days after the content end date */
  ContentEndDaysAfter = 'contentEndDaysAfter',
  /** Send days before the content end date */
  ContentEndDaysBefore = 'contentEndDaysBefore',
  /** Send days after the content start date */
  ContentStartDaysAfter = 'contentStartDaysAfter',
  /** Send days before the content start date */
  ContentStartDaysBefore = 'contentStartDaysBefore',
  /** Send on specific date */
  Date = 'date',
  /** Send days after a learner performs action */
  Days = 'days',
  /** Send immediately after enrollment */
  Realtime = 'realtime'
}

export type CampaignResource = Course | CourseGroup | LearningPath;

export enum CampaignResourceType {
  /** Individual Content Items */
  Course = 'course',
  /** Content Groups */
  CourseGroup = 'courseGroup',
  /** Learning Paths */
  LearningPath = 'learningPath'
}

export enum CampaignType {
  /** In-Person Event(s) */
  InPersonEvent = 'inPersonEvent',
  /** Content / Learning Path(s) */
  Standard = 'standard',
  /** vILT / Webinar(s) */
  Vilt = 'vilt'
}

export enum CampaignUserAction {
  /** failed the assessment */
  CourseAssessmentFailed = 'courseAssessmentFailed',
  /** passed the assessment */
  CourseAssessmentPassed = 'courseAssessmentPassed',
  /** completed the assignment */
  CourseAssignmentCompleted = 'courseAssignmentCompleted',
  /** submitted the assignment */
  CourseAssignmentSubmitted = 'courseAssignmentSubmitted',
  /** earned the certificate */
  CourseCertificateEarned = 'courseCertificateEarned',
  /** completed the content */
  CourseCompleted = 'courseCompleted',
  /** enrolled in the content */
  CourseEnrolled = 'courseEnrolled',
  /** received not-completed within the content */
  CourseNotCompleted = 'courseNotCompleted',
  /** completed a section within the content */
  CourseSectionCompleted = 'courseSectionCompleted',
  /** started the content */
  CourseStarted = 'courseStarted',
  /** completed the learning path */
  LearningPathCompleted = 'learningPathCompleted',
  /** enrolled in the learning path */
  LearningPathEnrolled = 'learningPathEnrolled',
  /** completed the learning path milestone */
  LearningPathMilestoneCompleted = 'learningPathMilestoneCompleted',
  /** received not-completed within the learning path */
  LearningPathNotCompleted = 'learningPathNotCompleted',
  /** started the learning path */
  LearningPathStarted = 'learningPathStarted'
}

export type CampaignUserActionOption = {
  __typename?: 'CampaignUserActionOption';
  label: Scalars['String'];
  params?: Maybe<Array<Maybe<Scalars['String']>>>;
  resourceType: Scalars['String'];
  value: Scalars['String'];
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

export enum CatalogVisibilityContentKind {
  /** CourseGroup(s) */
  CourseGroups = 'courseGroups',
  /** Learning Path(s) */
  LearningPaths = 'learningPaths'
}

export type CentralLibraryItem = {
  __typename?: 'CentralLibraryItem';
  body?: Maybe<Scalars['String']>;
  company: Scalars['ID'];
  contentType?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageAltText?: Maybe<Scalars['String']>;
  imageCaption?: Maybe<Scalars['String']>;
  imageLink?: Maybe<Scalars['String']>;
  imageNewTab: Scalars['Boolean'];
  imageTitle?: Maybe<Scalars['String']>;
  isNew?: Maybe<Scalars['Boolean']>;
  locations?: Maybe<Array<Maybe<Scalars['String']>>>;
  revisionOf?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  version?: Maybe<Scalars['Int']>;
};

export type Certificate = {
  __typename?: 'Certificate';
  certificateTemplate?: Maybe<CertificateTemplate>;
  contentItem?: Maybe<Content>;
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

export type Charge = {
  __typename?: 'Charge';
  amountRefundedInCents: Scalars['Int'];
  createdAt: Scalars['Date'];
  customer: Scalars['String'];
  customerEmail: Scalars['String'];
  failed: Scalars['Boolean'];
  id: Scalars['ID'];
  items?: Maybe<Array<ChargeItem>>;
  netInCents: Scalars['Int'];
  orderId?: Maybe<Scalars['ID']>;
  totalInCents: Scalars['Int'];
};

export type ChargeItem = {
  __typename?: 'ChargeItem';
  amountInCents: Scalars['Int'];
  amountRefundedInCents: Scalars['Int'];
  couponCode?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discountInCents: Scalars['Int'];
  giftRecipientEmail?: Maybe<Scalars['String']>;
  netAmountInCents: Scalars['Int'];
  planId?: Maybe<Scalars['ID']>;
  purchasableId?: Maybe<Scalars['ID']>;
  purchasableType?: Maybe<Scalars['String']>;
  refunded?: Maybe<Scalars['String']>;
  subscribableId?: Maybe<Scalars['ID']>;
  subscribableType?: Maybe<Scalars['String']>;
  variationLabel?: Maybe<Scalars['String']>;
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

export type ClientSubscription = {
  __typename?: 'ClientSubscription';
  id: Scalars['ID'];
  seatPackages?: Maybe<Array<SeatPackage>>;
  seatTiers?: Maybe<Array<SeatTier>>;
};

export type ClientSubscriptionInvoiceProration = {
  __typename?: 'ClientSubscriptionInvoiceProration';
  lineItems?: Maybe<Array<ClientSubscriptionInvoiceProrationLineItem>>;
  periodEnd: Scalars['Date'];
  periodStart: Scalars['Date'];
  priceInCentsAtRenewal: Scalars['Int'];
  priceInCentsDueNow: Scalars['Int'];
  prorationDate: Scalars['Date'];
  seats: Scalars['Int'];
};

export type ClientSubscriptionInvoiceProrationLineItem = {
  __typename?: 'ClientSubscriptionInvoiceProrationLineItem';
  description: Scalars['String'];
  priceInCents: Scalars['Int'];
};

export type ClientSubscriptionUpcomingInvoice = {
  __typename?: 'ClientSubscriptionUpcomingInvoice';
  periodEnd: Scalars['Date'];
  periodStart: Scalars['Date'];
  priceInCents: Scalars['Int'];
  seats: Scalars['Int'];
  subscriptionId: Scalars['ID'];
  subscriptionItemId: Scalars['ID'];
};

export enum ClientToggleType {
  EnableBranding = 'enableBranding',
  EnableCommunitiesSegmentation = 'enableCommunitiesSegmentation',
  EnableCreditPurchasing = 'enableCreditPurchasing',
  EnableDiscussions = 'enableDiscussions',
  EnableEcommerce = 'enableEcommerce',
  EnableGlobalLinks = 'enableGlobalLinks',
  EnableNavLinks = 'enableNavLinks',
  EnableOnboardingSurvey = 'enableOnboardingSurvey',
  EnableRecommendationAssessment = 'enableRecommendationAssessment',
  EnableSegmentation = 'enableSegmentation'
}

export type ClientsList = {
  __typename?: 'ClientsList';
  aggregations?: Maybe<Array<Aggregation>>;
  clients?: Maybe<Array<Client>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum CloudConvertStatus {
  Error = 'error',
  Finished = 'finished',
  Processing = 'processing'
}

export type CloudConvertStatusDetails = {
  __typename?: 'CloudConvertStatusDetails';
  convertedAssets?: Maybe<Array<Scalars['URL']>>;
  processingStatus?: Maybe<CloudConvertStatus>;
};

export type Comment = {
  __typename?: 'Comment';
  asset?: Maybe<Scalars['URL']>;
  assetFileName?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  childComments?: Maybe<CommentsList>;
  commentable: Commentable;
  commentableId: Scalars['ID'];
  commentableType: CommentableType;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  likesCount?: Maybe<Scalars['Int']>;
  notificationsEnabled: Scalars['Boolean'];
  parentComment?: Maybe<Comment>;
  updatedAt?: Maybe<Scalars['Date']>;
  user: User;
  userLikeId?: Maybe<Scalars['ID']>;
  videoAsset?: Maybe<Scalars['ID']>;
};

export type Commentable = Thread | Topic;

export enum CommentableType {
  Assignment = 'assignment',
  AssignmentSubmission = 'assignmentSubmission',
  DiscussionBoard = 'discussionBoard',
  Thread = 'thread',
  WidgetThread = 'widgetThread'
}

export type CommentsList = {
  __typename?: 'CommentsList';
  comments?: Maybe<Array<Comment>>;
  pageInfo: PageInfo;
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

export type CompanyDetails = {
  __typename?: 'CompanyDetails';
  name?: Maybe<Scalars['String']>;
  settings?: Maybe<AppearanceSettings>;
  subdomain?: Maybe<Scalars['String']>;
};

export type CompanySecuritySettings = {
  __typename?: 'CompanySecuritySettings';
  cspEnabled: Scalars['Boolean'];
  cspReportOnly: Scalars['Boolean'];
  cspReportUri?: Maybe<Scalars['URL']>;
  cspSrcs?: Maybe<Array<ContentSecurityPolicySrc>>;
  frameOptions?: Maybe<FrameOption>;
  id: Scalars['ID'];
  password?: Maybe<Scalars['String']>;
  secretKey?: Maybe<Scalars['String']>;
};

export type CompetencyAssessment = {
  __typename?: 'CompetencyAssessment';
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
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type CompetencyAssessmentList = {
  __typename?: 'CompetencyAssessmentList';
  competencyAssessments?: Maybe<Array<CompetencyAssessment>>;
  pageInfo: PageInfo;
};

export type CompetencyAssessmentQuestion = {
  __typename?: 'CompetencyAssessmentQuestion';
  body: Scalars['String'];
  choices?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  type: CompetencyAssessmentQuestionType;
};

export enum CompetencyAssessmentQuestionType {
  DropDown = 'dropDown',
  MultipleChoice = 'multipleChoice',
  SelectBoxes = 'selectBoxes'
}

export type CompetencyAssessmentResource = Layout | LearningPath;

export enum CompetencyAssessmentResourceResponseType {
  Milestone = 'milestone'
}

export type CompetencyAssessmentResponse = {
  __typename?: 'CompetencyAssessmentResponse';
  answeredCount?: Maybe<Scalars['Int']>;
  competencyAssessment: Scalars['ID'];
  correctAnswerCount?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  incorrectAnswerCount?: Maybe<Scalars['Int']>;
  passed: Scalars['Boolean'];
  questions?: Maybe<Array<CompetencyAssessmentResponseQuestion>>;
  resourceId: Scalars['ID'];
};

export type CompetencyAssessmentResponseQuestion = {
  __typename?: 'CompetencyAssessmentResponseQuestion';
  body: Scalars['String'];
  choices?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  type: CompetencyAssessmentQuestionType;
};

export type CompetencyAssessmentResponseQuestionInput = {
  body: Scalars['String'];
  choices?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  type: CompetencyAssessmentQuestionType;
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

export type ContentBody = {
  __typename?: 'ContentBody';
  body: Scalars['String'];
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
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
  PickableGroup = 'pickableGroup',
  Product = 'product',
  Sellable = 'sellable',
  ShareableContentObject = 'shareableContentObject',
  Video = 'video',
  Webinar = 'webinar',
  WebinarCourse = 'webinarCourse',
  XApiObject = 'xApiObject'
}

export type ContentList = {
  __typename?: 'ContentList';
  contentItems?: Maybe<Array<Maybe<Content>>>;
  pageInfo?: Maybe<CursorPageInfo>;
};

export type ContentReportLink = {
  __typename?: 'ContentReportLink';
  children?: Maybe<Array<Scalars['String']>>;
  label: Scalars['String'];
  legacyRoute?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
};

export enum ContentReportLinkResourceType {
  CompetencyAssessment = 'competencyAssessment',
  Course = 'course',
  LearningPath = 'learningPath',
  ShareableContentObject = 'shareableContentObject',
  XApiObject = 'xApiObject'
}

export type ContentSearchResults = {
  __typename?: 'ContentSearchResults';
  aggregations?: Maybe<Array<Maybe<Aggregation>>>;
  contentItems?: Maybe<Array<Maybe<Content>>>;
  displayBundle?: Maybe<DisplayBundle>;
  isCurated?: Maybe<Scalars['Boolean']>;
  pageInfo?: Maybe<PageInfo>;
  resultsDisplayType?: Maybe<ContentItemDisplayType>;
  selectedSort?: Maybe<Scalars['String']>;
  tokenLabel?: Maybe<Scalars['String']>;
};

export enum ContentSearchType {
  Bundles = 'bundles',
  CourseGroups = 'courseGroups',
  Courses = 'courses',
  DiscountGroups = 'discountGroups',
  LearningPaths = 'learningPaths',
  PickableGroups = 'pickableGroups',
  Products = 'products'
}

export type ContentSecurityPolicySrc = {
  __typename?: 'ContentSecurityPolicySrc';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ContentSecurityPolicySrcInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ContentSubscription = {
  __typename?: 'ContentSubscription';
  amountInCents?: Maybe<Scalars['Int']>;
  canceledAt?: Maybe<Scalars['Int']>;
  currentPeriodEnd?: Maybe<Scalars['Date']>;
  currentPeriodStart?: Maybe<Scalars['Date']>;
  humanPrice?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['String']>;
  variation?: Maybe<Scalars['String']>;
};

export type ContentSubscriptionInput = {
  id: Scalars['ID'];
  interval: Scalars['String'];
};

export type ContentType = {
  __typename?: 'ContentType';
  assetAspectRatio?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type Coupon = {
  __typename?: 'Coupon';
  active?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
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
  userGrantableCertificateTemplate?: Maybe<CertificateTemplate>;
  waitlistActive?: Maybe<Scalars['Boolean']>;
  waitlistCount?: Maybe<Scalars['Int']>;
  waitlistingEnabled: Scalars['Boolean'];
  waitlistingTriggered: Scalars['Boolean'];
  webinarDates?: Maybe<Array<Maybe<DateRange>>>;
  webinarId?: Maybe<Scalars['String']>;
  workbookEnabled?: Maybe<Scalars['Boolean']>;
};

export type CourseAwardClaimingOption = {
  __typename?: 'CourseAwardClaimingOption';
  awardAmounts?: Maybe<Array<Scalars['Float']>>;
  awardType: AwardType;
  awardTypeId: Scalars['ID'];
  range: Scalars['String'];
};

export type CourseCompletionCriteria = {
  __typename?: 'CourseCompletionCriteria';
  articlePercentViewed?: Maybe<Scalars['Int']>;
  articleTimeViewedInSeconds?: Maybe<Scalars['Int']>;
  course: Scalars['ID'];
  courseAssessmentPassed?: Maybe<Scalars['ID']>;
  courseAssignmentComplete?: Maybe<Scalars['ID']>;
  courseMeetingAttended?: Maybe<Scalars['ID']>;
  coursePercentViewed?: Maybe<Scalars['Int']>;
  courseTopicViewed?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  scormComplete?: Maybe<Scalars['ID']>;
  surveyGizmoComplete?: Maybe<Scalars['ID']>;
  type: CourseCompletionCriteriaType;
  videoPercentViewed?: Maybe<Scalars['Int']>;
  videoTopicId?: Maybe<Scalars['ID']>;
  xApiComplete?: Maybe<Scalars['ID']>;
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

export type CourseCompletionCriteriaTypeOption = {
  __typename?: 'CourseCompletionCriteriaTypeOption';
  descriptionTemplate: Scalars['String'];
  fieldHint: Scalars['String'];
  fieldLabel: Scalars['String'];
  multiple: Scalars['Boolean'];
  optionLabel: Scalars['String'];
  type: CourseCompletionCriteriaType;
};

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
  ShareableContentObject = 'shareableContentObject',
  Video = 'video',
  Webinar = 'webinar',
  WebinarCourse = 'webinarCourse',
  XApiObject = 'xApiObject'
}

export type CourseOrLearningPath = Course | LearningPath;

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

export type CreditBatch = {
  __typename?: 'CreditBatch';
  allocatedCredits: Scalars['Float'];
  clientId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['Date'];
  currentBalance: Scalars['Float'];
  expiresOn?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  startingBalance: Scalars['Float'];
  status: CreditBatchStatus;
  updatedAt: Scalars['Date'];
};

export type CreditBatchList = {
  __typename?: 'CreditBatchList';
  creditBatches?: Maybe<Array<CreditBatch>>;
  pageInfo?: Maybe<CursorPageInfo>;
  totalCredits: Scalars['Float'];
};

export enum CreditBatchStatus {
  Active = 'active',
  Archived = 'archived'
}

export type CreditCard = {
  __typename?: 'CreditCard';
  address_city?: Maybe<Scalars['String']>;
  address_country?: Maybe<Scalars['String']>;
  address_line1?: Maybe<Scalars['String']>;
  address_line1_check?: Maybe<Scalars['String']>;
  address_line2?: Maybe<Scalars['String']>;
  address_state?: Maybe<Scalars['String']>;
  address_zip?: Maybe<Scalars['String']>;
  address_zip_check?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  ccType?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  cvc_check?: Maybe<Scalars['String']>;
  dynamic_last4?: Maybe<Scalars['Int']>;
  exp_month?: Maybe<Scalars['Int']>;
  exp_year?: Maybe<Scalars['Int']>;
  fingerprint?: Maybe<Scalars['String']>;
  funding?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
  paymentMethodId?: Maybe<Scalars['String']>;
};

export type CursorPageInfo = {
  __typename?: 'CursorPageInfo';
  cursor?: Maybe<Scalars['String']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  perPage?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
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

export type CustomLanguage = {
  __typename?: 'CustomLanguage';
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  defaultCode: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
};

export enum DashboardReportType {
  CustomReport = 'customReport',
  EducationOverview = 'educationOverview'
}

export type DateFormat = {
  __typename?: 'DateFormat';
  format: Scalars['String'];
  id: Scalars['String'];
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

export type DualRoleStatus = {
  __typename?: 'DualRoleStatus';
  learnerId?: Maybe<Scalars['ID']>;
  managerId?: Maybe<Scalars['ID']>;
};

export type EarnedBadge = {
  __typename?: 'EarnedBadge';
  badge?: Maybe<Badge>;
  deleted?: Maybe<Scalars['Boolean']>;
  id: Array<Maybe<Scalars['ID']>>;
  user?: Maybe<User>;
};

export type EarnedBadgeBoard = {
  __typename?: 'EarnedBadgeBoard';
  earnedBadges?: Maybe<Array<Maybe<EarnedBadge>>>;
  unearnedBadges?: Maybe<Array<Maybe<Badge>>>;
};

export enum EcommerceItemType {
  Bundle = 'bundle',
  DiscountGroup = 'discountGroup',
  PickableGroup = 'pickableGroup',
  Product = 'product'
}

export type EcommerceSettings = {
  __typename?: 'EcommerceSettings';
  cookiePolicyText?: Maybe<Scalars['String']>;
  cookiePopupEnabled: Scalars['Boolean'];
  countries?: Maybe<Array<Scalars['String']>>;
  currency: Scalars['String'];
  disableAutomaticNonessentialCookies: Scalars['Boolean'];
  externalCookiePolicyUrl?: Maybe<Scalars['URL']>;
  externalTermsUrl?: Maybe<Scalars['String']>;
  globalTerms?: Maybe<Scalars['String']>;
  invoiceDueDays?: Maybe<Scalars['Int']>;
  needAddress: Scalars['Boolean'];
  newsletterSignupEnabled: Scalars['Boolean'];
  subscriptionExplicitOptIn: Scalars['Boolean'];
};

export type EmailAuthorization = {
  __typename?: 'EmailAuthorization';
  host: Scalars['String'];
  recordType: Scalars['String'];
  type: Scalars['String'];
  valid: Scalars['Boolean'];
  value: Scalars['String'];
};

export type EmailAuthorizationList = {
  __typename?: 'EmailAuthorizationList';
  authorizations?: Maybe<Array<EmailAuthorization>>;
  domain: Scalars['String'];
  emailProvider: Scalars['String'];
  id: Scalars['ID'];
  valid: Scalars['Boolean'];
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

export type EmbedPage = {
  __typename?: 'EmbedPage';
  id: Scalars['ID'];
  layoutId: Scalars['String'];
  slug: Scalars['Slug'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  variants: Array<EmbedPageVariant>;
};

export type EmbedPageLaunch = {
  __typename?: 'EmbedPageLaunch';
  authToken?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['JSON']>;
  currentUser?: Maybe<Scalars['JSON']>;
  embedPage: EmbedPage;
  layout?: Maybe<Layout>;
  variantId?: Maybe<Scalars['ID']>;
};

export type EmbedPageVariant = {
  __typename?: 'EmbedPageVariant';
  conditionApplicability: EmbedPageVariantConditionApplicability;
  conditionSummary?: Maybe<Scalars['String']>;
  conditions: Array<EmbedPageVariantCondition>;
  id: Scalars['ID'];
  layoutId?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type EmbedPageVariantCondition = {
  __typename?: 'EmbedPageVariantCondition';
  type: EmbedPageVariantConditionType;
  value: Scalars['String'];
};

export enum EmbedPageVariantConditionApplicability {
  All = 'all',
  Any = 'any'
}

export type EmbedPageVariantConditionInput = {
  type: EmbedPageVariantConditionType;
  value: Scalars['String'];
};

export enum EmbedPageVariantConditionType {
  Contains = 'contains',
  DoesNotContain = 'doesNotContain',
  DoesNotEndWith = 'doesNotEndWith',
  DoesNotEqual = 'doesNotEqual',
  DoesNotStartWith = 'doesNotStartWith',
  EndsWith = 'endsWith',
  Equals = 'equals',
  Regexp = 'regexp',
  StartsWith = 'startsWith'
}

export type EmbedPageVariantInput = {
  conditionApplicability: EmbedPageVariantConditionApplicability;
  conditions: Array<EmbedPageVariantConditionInput>;
  slug: Scalars['Slug'];
  title: Scalars['String'];
};

export type EmbedWidgetCourseStatus = {
  __typename?: 'EmbedWidgetCourseStatus';
  course: Course;
  status: Scalars['String'];
  user: Scalars['ID'];
};

export enum EmbedWidgetLayoutSection {
  /** Course status */
  CourseStatus = 'courseStatus',
  /** Earned Badges status */
  EarnedBadges = 'earnedBadges',
  /** Featured content */
  FeaturedContent = 'featuredContent',
  /** Learning Path status */
  LearningPathStatus = 'learningPathStatus'
}

export type EmbedWidgetLearningPathStatus = {
  __typename?: 'EmbedWidgetLearningPathStatus';
  learningPath: LearningPath;
  milestoneCompletePercent: Scalars['Int'];
  status: Scalars['String'];
  user: Scalars['ID'];
};

export type EmbedWidgetSettings = {
  __typename?: 'EmbedWidgetSettings';
  featuredContentQuery?: Maybe<Scalars['String']>;
  layoutSections: Array<Maybe<EmbedWidgetLayoutSection>>;
  translations: Scalars['JSON'];
};

export type EventList = {
  __typename?: 'EventList';
  events?: Maybe<Array<Scalars['JSON']>>;
  pageInfo: CursorPageInfo;
};

export type Feature = {
  __typename?: 'Feature';
  alwaysEnabled?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  labels?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  pricing?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type Forum = {
  __typename?: 'Forum';
  course: Course;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  isGeneral: Scalars['Boolean'];
  label?: Maybe<Scalars['String']>;
  sectionId?: Maybe<Scalars['ID']>;
  threadsCount: Scalars['Int'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export enum FrameOption {
  Allow = 'allow',
  Deny = 'deny',
  SameOrigin = 'sameOrigin'
}

export type FulfillmentCenter = {
  __typename?: 'FulfillmentCenter';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GlobalNavigationLink = {
  __typename?: 'GlobalNavigationLink';
  href?: Maybe<Scalars['String']>;
  label: Scalars['String'];
};

export type HeliumLaunchData = {
  __typename?: 'HeliumLaunchData';
  AWSAccessKeyId: Scalars['String'];
  acl: Scalars['String'];
  key: Scalars['String'];
  policy: Scalars['String'];
  signature: Scalars['String'];
  success_action_status: Scalars['String'];
};

export type ImisSettings = {
  __typename?: 'IMISSettings';
  activityTypeId: Scalars['String'];
  apiEndpoint: Scalars['URL'];
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type ImportedRedemptionCodeGroupCodesList = {
  __typename?: 'ImportedRedemptionCodeGroupCodesList';
  invalidCodes?: Maybe<Array<RedemptionCode>>;
  validCodes?: Maybe<Array<RedemptionCode>>;
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

export type KnowledgeCenterSettings = {
  __typename?: 'KnowledgeCenterSettings';
  clientSku?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type LabAvailability = {
  __typename?: 'LabAvailability';
  msg?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  time?: Maybe<Scalars['String']>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  isCustom?: Maybe<Scalars['Boolean']>;
  label: Scalars['String'];
  selectorLabel?: Maybe<Scalars['String']>;
};

export enum LanguageNamespace {
  Email = 'email',
  Lms = 'lms'
}

export enum LanguageSelectorDisplayOptions {
  Dark = 'dark',
  Light = 'light',
  Theme = 'theme'
}

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

export enum LayoutProperty {
  Layout = 'layout',
  LearnerLayout = 'learnerLayout'
}

export type LearnerDisplaySettings = {
  __typename?: 'LearnerDisplaySettings';
  discussionRulesHtml?: Maybe<Scalars['String']>;
  displayInlineNotes: Scalars['Boolean'];
  enableAddToQueue: Scalars['Boolean'];
  enableContentArchiving: Scalars['Boolean'];
  learnerNavOpenOnLoad: Scalars['Boolean'];
};

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
  userGrantableCertificateTemplate?: Maybe<CertificateTemplate>;
  videoAsset?: Maybe<Scalars['ID']>;
};

export type LearningPathAction = {
  __typename?: 'LearningPathAction';
  id: Scalars['ID'];
  learningPath: LearningPath;
  milestone?: Maybe<Milestone>;
  source?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Date']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type LearningPathStatusUserAccess = {
  __typename?: 'LearningPathStatusUserAccess';
  canAccess: Scalars['Boolean'];
  status?: Maybe<Scalars['String']>;
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

export type LinkedWorkbook = {
  __typename?: 'LinkedWorkbook';
  category?: Maybe<Scalars['String']>;
  course?: Maybe<Course>;
  createdAt: Scalars['Date'];
  hasSkippedTopics: Scalars['Boolean'];
  id: Scalars['ID'];
  label: Scalars['String'];
  quizAttemptId?: Maybe<Scalars['ID']>;
  skipToSummary: Scalars['Boolean'];
  slug: Scalars['Slug'];
  status: LinkedWorkbookStatus;
};

export type LinkedWorkbookCategory = {
  __typename?: 'LinkedWorkbookCategory';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type LinkedWorkbookList = {
  __typename?: 'LinkedWorkbookList';
  linkedWorkbooks?: Maybe<Array<LinkedWorkbook>>;
  meta: LinkedWorkbookMeta;
  pageInfo: PageInfo;
};

export type LinkedWorkbookMeta = {
  __typename?: 'LinkedWorkbookMeta';
  alternateTitleDisplay: Scalars['Boolean'];
  availableContentQuery?: Maybe<Scalars['String']>;
  classNames?: Maybe<Scalars['String']>;
  contentTypeFilterEnabled: Scalars['Boolean'];
  customSettings: Scalars['Boolean'];
  defaultQuery?: Maybe<Scalars['String']>;
  defaultSort?: Maybe<Scalars['String']>;
  defaultSortLabel?: Maybe<Scalars['String']>;
  defaultSortOrder: Scalars['String'];
  displayTypeGridEnabled: Scalars['Boolean'];
  displayTypeListEnabled: Scalars['Boolean'];
  linkText?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  numberOfItemsToDisplay: Scalars['Int'];
  resultsDisplayType: Scalars['String'];
  sortCreatedAtEnabled: Scalars['Boolean'];
  sortRelevanceEnabled: Scalars['Boolean'];
  sortTitleEnabled: Scalars['Boolean'];
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export enum LinkedWorkbookStatus {
  Deleted = 'deleted',
  Finished = 'finished',
  Started = 'started'
}

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

export type LocationsList = {
  __typename?: 'LocationsList';
  locations?: Maybe<Array<Location>>;
  pageInfo: PageInfo;
};

export type LookerEmbed = {
  __typename?: 'LookerEmbed';
  category?: Maybe<LookerEmbedCategory>;
  description?: Maybe<Scalars['String']>;
  folderId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isFavorited: Scalars['Boolean'];
  label?: Maybe<Scalars['String']>;
  legacyHref?: Maybe<Scalars['String']>;
  legacyRoute?: Maybe<Scalars['String']>;
  scope: LookerEmbedScope;
  segment?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  starred?: Maybe<Scalars['Boolean']>;
  subcategory?: Maybe<LookerEmbedSubcategory>;
  type: Scalars['String'];
  weight?: Maybe<Scalars['Int']>;
};

export type LookerEmbedCategory = {
  __typename?: 'LookerEmbedCategory';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<LookerEmbedCategoryIcon>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export enum LookerEmbedCategoryIcon {
  Barchart = 'barchart',
  Businessuser = 'businessuser',
  Cart = 'cart',
  Globe = 'globe',
  HalfStar = 'halfStar',
  Users = 'users'
}

export enum LookerEmbedScope {
  Client = 'client',
  Company = 'company',
  Custom = 'custom'
}

export type LookerEmbedSubcategory = {
  __typename?: 'LookerEmbedSubcategory';
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type LookerExplore = {
  __typename?: 'LookerExplore';
  category: LookerExploreCategory;
  id: Scalars['ID'];
  label: Scalars['String'];
  model: Scalars['String'];
};

export type LookerExploreCategory = {
  __typename?: 'LookerExploreCategory';
  id: Scalars['ID'];
  label: Scalars['String'];
  weight: Scalars['Int'];
};

export type LookerFolder = {
  __typename?: 'LookerFolder';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum LookerManagerDashboardWidgetType {
  AllViewsByDate = 'allViewsByDate',
  AllVisitsByDate = 'allVisitsByDate',
  ContentBreakdown = 'contentBreakdown',
  ContentCompletionsByDate = 'contentCompletionsByDate',
  NewUserIdsByDate = 'newUserIdsByDate',
  NewUsersByDate = 'newUsersByDate',
  PurchaseRevenue = 'purchaseRevenue',
  PurchaseType = 'purchaseType',
  SubscriptionRevenue = 'subscriptionRevenue',
  TimeSpentAverage = 'timeSpentAverage',
  TopContent = 'topContent',
  TopLearners = 'topLearners',
  UniqueVisitorsByDate = 'uniqueVisitorsByDate',
  UserContentViewCount = 'userContentViewCount',
  UserCount = 'userCount',
  UserVisitsByDate = 'userVisitsByDate'
}

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
  title?: Maybe<Scalars['String']>;
};

export type MeetingFields = {
  attendeeInfo?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  id?: InputMaybe<Scalars['ID']>;
  instructors?: InputMaybe<Array<Scalars['String']>>;
  location?: InputMaybe<Scalars['ID']>;
  startDate: Scalars['Date'];
  title?: InputMaybe<Scalars['String']>;
};

export type MeetingsList = {
  __typename?: 'MeetingsList';
  aggregations?: Maybe<Array<Aggregation>>;
  meetings?: Maybe<Array<Meeting>>;
  pageInfo?: Maybe<PageInfo>;
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

export type Note = {
  __typename?: 'Note';
  body: Scalars['String'];
  cleanTextSelection?: Maybe<Scalars['String']>;
  course: Course;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  lesson?: Maybe<Lesson>;
  lessonTitle?: Maybe<Scalars['String']>;
  section?: Maybe<Section>;
  textPosition?: Maybe<Scalars['Int']>;
  textSelection?: Maybe<Scalars['String']>;
  topic?: Maybe<Topic>;
  topicTitle?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  user: Scalars['ID'];
};

export type OnboardingSurvey = {
  __typename?: 'OnboardingSurvey';
  client?: Maybe<Client>;
  company?: Maybe<Company>;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  questions?: Maybe<Array<Maybe<OnboardingSurveyQuestion>>>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type OnboardingSurveyQuestion = {
  __typename?: 'OnboardingSurveyQuestion';
  body?: Maybe<Scalars['String']>;
  choices?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  openEndedResponse?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
  type?: Maybe<OnboardingSurveyQuestionType>;
};

export type OnboardingSurveyQuestionChoice = {
  __typename?: 'OnboardingSurveyQuestionChoice';
  selected: Scalars['Boolean'];
  value: Scalars['String'];
};

export type OnboardingSurveyQuestionChoiceInput = {
  selected: Scalars['Boolean'];
  value: Scalars['String'];
};

export enum OnboardingSurveyQuestionType {
  DropDown = 'dropDown',
  LongText = 'longText',
  SelectBoxes = 'selectBoxes',
  SingleField = 'singleField'
}

export type OnboardingSurveyResponse = {
  __typename?: 'OnboardingSurveyResponse';
  id: Scalars['ID'];
  questions?: Maybe<Array<Maybe<OnboardingSurveyQuestion>>>;
};

export type OnboardingSurveyResponseQuestion = {
  __typename?: 'OnboardingSurveyResponseQuestion';
  body?: Maybe<Scalars['String']>;
  choices?: Maybe<Array<Maybe<OnboardingSurveyQuestionChoice>>>;
  openEndedResponse?: Maybe<Scalars['String']>;
  required: Scalars['Boolean'];
  type?: Maybe<OnboardingSurveyQuestionType>;
};

export type OnboardingSurveyResponses = {
  __typename?: 'OnboardingSurveyResponses';
  questions?: Maybe<Array<Maybe<OnboardingSurveyResponseQuestion>>>;
};

export type OnboardingSurveyResponsesInput = {
  body: Scalars['String'];
  choices?: InputMaybe<Array<InputMaybe<OnboardingSurveyQuestionChoiceInput>>>;
  openEndedResponse?: InputMaybe<Scalars['String']>;
  ref?: InputMaybe<Scalars['Int']>;
  required?: InputMaybe<Scalars['Boolean']>;
  type: OnboardingSurveyQuestionType;
};

export enum OnboardingSurveyScope {
  Client = 'client',
  Company = 'company'
}

export type OrderInput = {
  gift: Scalars['Boolean'];
  giftDeliveryDate?: InputMaybe<Scalars['Date']>;
  giftMessage?: InputMaybe<Scalars['String']>;
  giftRecipientEmail?: InputMaybe<Scalars['String']>;
  giftRecipientFirstName?: InputMaybe<Scalars['String']>;
  giftRecipientLastName?: InputMaybe<Scalars['String']>;
  invoiceEnabled: Scalars['Boolean'];
  newsletterSignupChecked: Scalars['Boolean'];
  orderId: Scalars['ID'];
  orderItems?: InputMaybe<Array<OrderItemInput>>;
  paymentIntentId?: InputMaybe<Scalars['String']>;
  paymentMethodId?: InputMaybe<Scalars['String']>;
  shippingMethod?: InputMaybe<Scalars['String']>;
};

export type OrderItemInput = {
  alternativePricingRef?: InputMaybe<Scalars['Int']>;
  alternativePricingType?: InputMaybe<AlternativePricingType>;
  asset?: InputMaybe<Scalars['AbsoluteOrRelativeURL']>;
  confirmationHtml?: InputMaybe<Scalars['String']>;
  couponCode?: InputMaybe<Scalars['String']>;
  courses?: InputMaybe<Array<Scalars['ID']>>;
  gift?: InputMaybe<Scalars['Boolean']>;
  interval?: InputMaybe<Scalars['String']>;
  isBulkPurchase?: InputMaybe<Scalars['Boolean']>;
  membershipPriceInCents?: InputMaybe<Scalars['Int']>;
  needShippingAddress?: InputMaybe<Scalars['Boolean']>;
  needTelephone?: InputMaybe<Scalars['Boolean']>;
  planId?: InputMaybe<Scalars['ID']>;
  priceInCents?: InputMaybe<Scalars['Int']>;
  purchasableId: Scalars['ID'];
  purchasableType: Scalars['String'];
  quantity: Scalars['Int'];
  sku?: InputMaybe<Scalars['String']>;
  slug: Scalars['Slug'];
  taxable: Scalars['Boolean'];
  title: Scalars['String'];
  variationLabel?: InputMaybe<Scalars['String']>;
  variations?: InputMaybe<Array<Scalars['String']>>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['ID'];
  layoutId?: Maybe<Scalars['String']>;
  loginRestriction: Scalars['Boolean'];
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  prerequisiteCourses?: Maybe<Array<Maybe<Course>>>;
  prerequisiteLearningPaths?: Maybe<Array<Maybe<LearningPath>>>;
  published: Scalars['Boolean'];
  slug: Scalars['Slug'];
  title: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage?: Maybe<Scalars['Int']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  perPage?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type PaymentIntent = {
  __typename?: 'PaymentIntent';
  error?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  paymentIntentClientSecret?: Maybe<Scalars['String']>;
  requiresAction: Scalars['Boolean'];
  signedOrder?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum PrerequisiteResourceType {
  Course = 'course',
  LearningPath = 'learningPath'
}

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

export type Query = {
  __typename?: 'Query';
  CatalogContent: CatalogContent;
  CatalogQuery: CatalogContent;
  CompanyDetails?: Maybe<CompanyDetails>;
  CurrentUser?: Maybe<User>;
  HeliumLambda: Scalars['Boolean'];
  HeliumLaunchData?: Maybe<HeliumLaunchData>;
  QueryContent?: Maybe<Content>;
  QueryContents: Array<Content>;
  RssItems: Array<RssItem>;
  UserBookmarks?: Maybe<Array<BookmarkFolder>>;
  UserCertificates?: Maybe<Array<Maybe<Certificate>>>;
  UserContentItems?: Maybe<Array<Content>>;
  UserRecentContent: Array<Content>;
};

export type QueryCatalogContentArgs = {
  contentTypes?: InputMaybe<Array<ContentKind>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  layoutId: Scalars['ID'];
  page: Scalars['Int'];
  query?: InputMaybe<Scalars['String']>;
  resultsDisplayType?: InputMaybe<ContentItemDisplayType>;
  sort?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['String']>>;
  widgetId: Scalars['ID'];
};

export type QueryCatalogQueryArgs = {
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  queryExclusions?: InputMaybe<Array<Scalars['String']>>;
  queryLimit?: InputMaybe<Scalars['Int']>;
  querySignature?: InputMaybe<Scalars['String']>;
  querySort?: InputMaybe<Scalars['String']>;
};

export type QueryCompanyDetailsArgs = {
  user?: InputMaybe<Scalars['ID']>;
};

export type QueryHeliumLambdaArgs = {
  key: Scalars['String'];
  nickname: Scalars['String'];
};

export type QueryQueryContentsArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryRssItemsArgs = {
  feedUrl: Scalars['String'];
};

export type QueryUserCertificatesArgs = {
  includeExpiredCertificates?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryUserContentItemsArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QueryUserRecentContentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Question = {
  __typename?: 'Question';
  addAndDeleteRowsEnabled: Scalars['Boolean'];
  additionalContent?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  choices?: Maybe<Array<QuestionChoice>>;
  copyAnswerFromAssessmentId?: Maybe<Scalars['ID']>;
  copyAnswerFromQuestion?: Maybe<Question>;
  copyAnswerFromQuestionId?: Maybe<Scalars['ID']>;
  deleted?: Maybe<Scalars['Boolean']>;
  displayOption?: Maybe<QuestionDisplayOption>;
  fileSubmissionAsset?: Maybe<Scalars['String']>;
  gradedAsCorrect?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  mustSelectAllCorrectChoices: Scalars['Boolean'];
  openEndedResponse?: Maybe<Scalars['String']>;
  parentQuestion?: Maybe<Scalars['ID']>;
  placeholder?: Maybe<Scalars['String']>;
  postText?: Maybe<Scalars['String']>;
  postText2?: Maybe<Scalars['String']>;
  postTextDisplayOption?: Maybe<QuestionDisplayOption>;
  postTextDisplayOption2?: Maybe<QuestionDisplayOption>;
  preText?: Maybe<Scalars['String']>;
  preText2?: Maybe<Scalars['String']>;
  preTextDisplayOption?: Maybe<QuestionDisplayOption>;
  preTextDisplayOption2?: Maybe<QuestionDisplayOption>;
  preselectedChoices?: Maybe<Array<Scalars['String']>>;
  questionCategory?: Maybe<QuestionCategory>;
  questionCategoryId?: Maybe<Scalars['ID']>;
  questionId?: Maybe<Scalars['ID']>;
  required: Scalars['Boolean'];
  response?: Maybe<Scalars['String']>;
  selectedChoice?: Maybe<QuestionChoice>;
  table?: Maybe<QuestionTable>;
  tableResponse?: Maybe<QuestionTable>;
  type?: Maybe<Scalars['String']>;
};

export type QuestionCategory = {
  __typename?: 'QuestionCategory';
  defaultCategory: Scalars['Boolean'];
  deleted?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  questions?: Maybe<Scalars['Int']>;
};

export type QuestionCategoryInput = {
  defaultCategory: Scalars['Boolean'];
  deleted?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  questions?: InputMaybe<Scalars['Int']>;
};

export type QuestionChoice = {
  __typename?: 'QuestionChoice';
  altText?: Maybe<Scalars['String']>;
  asset?: Maybe<Scalars['String']>;
  choiceId?: Maybe<Scalars['String']>;
  correct: Scalars['Boolean'];
  points?: Maybe<Scalars['Int']>;
  response?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type QuestionChoiceInput = {
  altText?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['String']>;
  choiceId?: InputMaybe<Scalars['String']>;
  correct: Scalars['Boolean'];
  points?: InputMaybe<Scalars['Int']>;
  response?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  valueArray?: InputMaybe<Array<Scalars['String']>>;
};

export enum QuestionDisplayOption {
  Always = 'always',
  AssessmentOnly = 'assessmentOnly',
  ResultsOnly = 'resultsOnly'
}

export type QuestionInput = {
  addAndDeleteRowsEnabled?: InputMaybe<Scalars['Boolean']>;
  additionalContent?: InputMaybe<Scalars['String']>;
  body: Scalars['String'];
  choices?: InputMaybe<Array<QuestionChoiceInput>>;
  copyAnswerFromAssessmentId?: InputMaybe<Scalars['ID']>;
  copyAnswerFromQuestion?: InputMaybe<QuestionInput>;
  copyAnswerFromQuestionId?: InputMaybe<Scalars['ID']>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  displayOption?: InputMaybe<QuestionDisplayOption>;
  fileSubmissionAsset?: InputMaybe<Scalars['String']>;
  mustSelectAllCorrectChoices: Scalars['Boolean'];
  openEndedResponse?: InputMaybe<Scalars['String']>;
  parentQuestion?: InputMaybe<Scalars['ID']>;
  placeholder?: InputMaybe<Scalars['String']>;
  postText?: InputMaybe<Scalars['String']>;
  postText2?: InputMaybe<Scalars['String']>;
  postTextDisplayOption?: InputMaybe<QuestionDisplayOption>;
  postTextDisplayOption2?: InputMaybe<QuestionDisplayOption>;
  preText?: InputMaybe<Scalars['String']>;
  preText2?: InputMaybe<Scalars['String']>;
  preTextDisplayOption?: InputMaybe<QuestionDisplayOption>;
  preTextDisplayOption2?: InputMaybe<QuestionDisplayOption>;
  preselectedChoices?: InputMaybe<Array<Scalars['String']>>;
  questionCategory?: InputMaybe<QuestionCategoryInput>;
  questionCategoryId?: InputMaybe<Scalars['ID']>;
  questionId?: InputMaybe<Scalars['ID']>;
  response?: InputMaybe<Scalars['String']>;
  selectedChoice?: InputMaybe<QuestionChoiceInput>;
  table?: InputMaybe<QuestionTableInput>;
  tableResponse?: InputMaybe<QuestionTableInput>;
  type?: InputMaybe<Scalars['String']>;
};

export type QuestionPool = {
  __typename?: 'QuestionPool';
  id: Scalars['ID'];
  label: Scalars['String'];
  questions?: Maybe<Array<Question>>;
  subsetSize?: Maybe<Scalars['Int']>;
};

export type QuestionTable = {
  __typename?: 'QuestionTable';
  headers?: Maybe<Array<QuestionTableCell>>;
  rows?: Maybe<Array<Maybe<Array<QuestionTableCell>>>>;
};

export type QuestionTableCell = {
  __typename?: 'QuestionTableCell';
  locked: Scalars['Boolean'];
  value?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

export type QuestionTableCellInput = {
  locked: Scalars['Boolean'];
  value?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
};

export type QuestionTableInput = {
  headers?: InputMaybe<Array<QuestionTableCellInput>>;
  rows?: InputMaybe<Array<InputMaybe<Array<QuestionTableCellInput>>>>;
};

export type QuizQuestion = {
  __typename?: 'QuizQuestion';
  addAndDeleteRowsEnabled?: Maybe<Scalars['Boolean']>;
  additionalContent?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  choices?: Maybe<Array<QuestionChoice>>;
  copyAnswerFromAssessmentId?: Maybe<Scalars['String']>;
  copyAnswerFromQuestionId?: Maybe<Scalars['String']>;
  displayOption?: Maybe<QuestionDisplayOption>;
  fileSubmissionAsset?: Maybe<Scalars['String']>;
  gradedAsCorrect?: Maybe<Scalars['Boolean']>;
  hasChoices?: Maybe<Scalars['Boolean']>;
  isBooleanChoice?: Maybe<Scalars['Boolean']>;
  isBooleanChoiceOrMultipleChoice?: Maybe<Scalars['Boolean']>;
  isEssay?: Maybe<Scalars['Boolean']>;
  isFileSubmission?: Maybe<Scalars['Boolean']>;
  isImageComparison?: Maybe<Scalars['Boolean']>;
  isLikert?: Maybe<Scalars['Boolean']>;
  isMultipleChoice?: Maybe<Scalars['Boolean']>;
  isOpenEnded?: Maybe<Scalars['Boolean']>;
  isOpenEndedOrEssay: Scalars['Boolean'];
  isSelectBoxes?: Maybe<Scalars['Boolean']>;
  isTable?: Maybe<Scalars['Boolean']>;
  mustSelectAllCorrectChoices?: Maybe<Scalars['Boolean']>;
  openEndedResponse?: Maybe<Scalars['String']>;
  parentQuestion?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  postText?: Maybe<Scalars['String']>;
  postText2?: Maybe<Scalars['String']>;
  postTextDisplayOption?: Maybe<QuestionDisplayOption>;
  postTextDisplayOption2?: Maybe<QuestionDisplayOption>;
  preText?: Maybe<Scalars['String']>;
  preText2?: Maybe<Scalars['String']>;
  preTextDisplayOption?: Maybe<QuestionDisplayOption>;
  preTextDisplayOption2?: Maybe<QuestionDisplayOption>;
  preselectedChoices?: Maybe<Array<QuestionChoice>>;
  questionCategoryId?: Maybe<Scalars['ID']>;
  questionId?: Maybe<Scalars['String']>;
  questionType?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  response?: Maybe<Scalars['String']>;
  scormInteractionType?: Maybe<Scalars['String']>;
  selectedChoice?: Maybe<QuestionChoice>;
  selectedChoiceOrNoChoiceAvailable?: Maybe<Scalars['Boolean']>;
  shouldCheckAnswers?: Maybe<Scalars['Boolean']>;
  shouldDisplayOnResults?: Maybe<Scalars['Boolean']>;
  table?: Maybe<QuestionTable>;
  tableResponse?: Maybe<QuestionTable>;
  type?: Maybe<Scalars['String']>;
};

export type RecommendationAssessment = {
  __typename?: 'RecommendationAssessment';
  client?: Maybe<Client>;
  company?: Maybe<Company>;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  questions?: Maybe<Array<Maybe<RecommendationAssessmentQuestion>>>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type RecommendationAssessmentQuestion = {
  __typename?: 'RecommendationAssessmentQuestion';
  body: Scalars['String'];
  choices?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  type: RecommendationAssessmentQuestionType;
};

export enum RecommendationAssessmentQuestionType {
  DropDown = 'dropDown',
  MultipleChoice = 'multipleChoice',
  SelectBoxes = 'selectBoxes'
}

export type RecommendationAssessmentResponse = {
  __typename?: 'RecommendationAssessmentResponse';
  assessmentResponseId?: Maybe<Scalars['ID']>;
  company?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  questions?: Maybe<Array<RecommendationAssessmentResponseQuestion>>;
  recommendationAssessment?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
};

export type RecommendationAssessmentResponseQuestion = {
  __typename?: 'RecommendationAssessmentResponseQuestion';
  body: Scalars['String'];
  choices?: Maybe<Scalars['JSON']>;
  type: RecommendationAssessmentQuestionType;
};

export type RecommendationAssessmentResponseQuestionInput = {
  body: Scalars['String'];
  choices?: InputMaybe<Scalars['JSON']>;
  type: RecommendationAssessmentQuestionType;
};

export enum RecommendationAssessmentScope {
  Client = 'client',
  Company = 'company'
}

export type RedemptionCode = {
  __typename?: 'RedemptionCode';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['Int']>;
  redemptionCode: Scalars['String'];
};

export type RedemptionCodeGroup = {
  __typename?: 'RedemptionCodeGroup';
  accessDays?: Maybe<Scalars['Int']>;
  bundles?: Maybe<Array<Bundle>>;
  client?: Maybe<Client>;
  codeLength?: Maybe<Scalars['Int']>;
  courses?: Maybe<Array<Course>>;
  expirationDate?: Maybe<Scalars['Date']>;
  gift?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  label: Scalars['String'];
  learningPaths?: Maybe<Array<LearningPath>>;
  licenses?: Maybe<Array<License>>;
  redeemedCodesCount?: Maybe<Scalars['Int']>;
  totalCodesCount?: Maybe<Scalars['Int']>;
  uploaded?: Maybe<Scalars['Boolean']>;
};

export type RedemptionCodeGroupList = {
  __typename?: 'RedemptionCodeGroupList';
  pageInfo: PageInfo;
  redemptionCodeGroups?: Maybe<Array<RedemptionCodeGroup>>;
};

export type RegistrationCode = {
  __typename?: 'RegistrationCode';
  accessDays?: Maybe<Scalars['Int']>;
  bundles?: Maybe<Array<Bundle>>;
  client?: Maybe<Client>;
  code: Scalars['String'];
  courses?: Maybe<Array<Course>>;
  expirationDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  label: Scalars['String'];
  learningPaths?: Maybe<Array<LearningPath>>;
  licenses?: Maybe<Array<License>>;
  maxRedemptions?: Maybe<Scalars['Int']>;
  timesRedeemed?: Maybe<Scalars['Int']>;
};

export type RegistrationCodeList = {
  __typename?: 'RegistrationCodeList';
  pageInfo: PageInfo;
  registrationCodes?: Maybe<Array<RegistrationCode>>;
};

export enum ReleaseType {
  Release = 'release',
  Unrelease = 'unrelease'
}

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

export type Role = {
  __typename?: 'Role';
  activeUserCount?: Maybe<Scalars['Int']>;
  hasAccessToAllCourses: Scalars['Boolean'];
  hasManagerInterfaceAccess: Scalars['Boolean'];
  id: Scalars['ID'];
  keyName?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  passwordLength: Scalars['Int'];
  passwordNumbers: Scalars['Int'];
  passwordSummary?: Maybe<Scalars['String']>;
  passwordSymbols: Scalars['Int'];
  passwordUppercases: Scalars['Int'];
  permissions?: Maybe<Scalars['JSON']>;
  resetPasswordCount?: Maybe<Scalars['Int']>;
  resetPasswordUnit?: Maybe<Scalars['String']>;
  timeoutCount: Scalars['Int'];
  timeoutUnit: Scalars['String'];
  weight?: Maybe<Scalars['Int']>;
};

export enum RoleKind {
  Client = 'client'
}

export enum RoleTypeToDisable {
  Learner = 'learner',
  Manager = 'manager'
}

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

export type RusticiCourseLaunchResponse = {
  __typename?: 'RusticiCourseLaunchResponse';
  courseTitle?: Maybe<Scalars['String']>;
  fullscreenEmbed: Scalars['Boolean'];
  height?: Maybe<Scalars['Int']>;
  isRusticiCourse: Scalars['Boolean'];
  registrationCheckerJWT: Scalars['String'];
  registrationId: Scalars['ID'];
  url: Scalars['AbsoluteOrRelativeURL'];
  width?: Maybe<Scalars['Int']>;
};

export type RusticiImportJobStatus = {
  __typename?: 'RusticiImportJobStatus';
  entryPoint?: Maybe<Scalars['RelativeURL']>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type RusticiLaunch = {
  __typename?: 'RusticiLaunch';
  completionStatus?: Maybe<Scalars['String']>;
  exitTime?: Maybe<Scalars['Date']>;
  historyLog?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastRuntimeUpdate?: Maybe<Scalars['Date']>;
  launchTime?: Maybe<Scalars['Date']>;
  score?: Maybe<Scalars['Float']>;
  successStatus?: Maybe<Scalars['String']>;
  totalSecondsTracked?: Maybe<Scalars['Int']>;
};

export type RusticiRegistration = {
  __typename?: 'RusticiRegistration';
  activityAttempts?: Maybe<Scalars['Int']>;
  activityCompletionStatus?: Maybe<Scalars['String']>;
  activitySuccessStatus?: Maybe<Scalars['String']>;
  completedDate?: Maybe<Scalars['Date']>;
  courseVersion?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['Date']>;
  firstAccessDate?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  lastAccessDate?: Maybe<Scalars['Date']>;
  score?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  totalSecondsTracked?: Maybe<Scalars['Int']>;
};

export type RusticiRegistrationList = {
  __typename?: 'RusticiRegistrationList';
  pageInfo: CursorPageInfo;
  registrations?: Maybe<Array<RusticiRegistration>>;
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

export type SalesforceAgreement = {
  __typename?: 'SalesforceAgreement';
  displaySeatLimits: Scalars['Boolean'];
  panoramasContracted?: Maybe<Scalars['Int']>;
  tier1Volume?: Maybe<Scalars['Int']>;
  usageType?: Maybe<SalesforceAgreementUsageType>;
};

export enum SalesforceAgreementUsageType {
  AnnualSeats = 'annualSeats',
  AnnualUsers = 'annualUsers',
  MonthlySeats = 'monthlySeats',
  MonthlyUsers = 'monthlyUsers'
}

export type SalesforceConnection = {
  __typename?: 'SalesforceConnection';
  accountMatching: Scalars['Boolean'];
  domainBlacklist?: Maybe<Scalars['String']>;
  fallbackAccountId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identityURL?: Maybe<Scalars['URL']>;
  instanceURL?: Maybe<Scalars['URL']>;
  issuedAt?: Maybe<Scalars['Date']>;
  latestVersion?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  organizationName?: Maybe<Scalars['String']>;
  packageVersion?: Maybe<Scalars['String']>;
  packageVersions?: Maybe<Array<SalesforcePackageVersion>>;
  scope?: Maybe<Scalars['String']>;
  syncTime?: Maybe<Scalars['String']>;
  tokenType?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type SalesforceContact = {
  __typename?: 'SalesforceContact';
  accountId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
};

export type SalesforceInstanceSettings = {
  __typename?: 'SalesforceInstanceSettings';
  instanceId?: Maybe<Scalars['ID']>;
  status: SalesforceInstanceStatus;
};

export enum SalesforceInstanceStatus {
  /** Live Production (active) */
  Active = 'active',
  /** Trial (active) */
  ActiveTrial = 'activeTrial',
  /** Terminated: Data Deleted (inactive) */
  Deleted = 'deleted',
  /** Pending Instance Creation (active) */
  PendingCreation = 'pendingCreation',
  /** Terminated: Pending Data Deletion (inactive) */
  PendingDeletion = 'pendingDeletion',
  /** Terminated: Update URL (inactive) */
  PendingTermination = 'pendingTermination',
  /** Sandbox (active) */
  Sandbox = 'sandbox',
  /** Terminated: 30 Day Data Extract Period (inactive) */
  TerminationHold = 'terminationHold',
  /** Terminated: 45 Day Waiting Period (inactive) */
  TerminationWait = 'terminationWait',
  /** Trial Completed (inactive) */
  TrialCompleted = 'trialCompleted',
  /** Unknown */
  Unknown = 'unknown'
}

export type SalesforcePackageVersion = {
  __typename?: 'SalesforcePackageVersion';
  label: Scalars['String'];
  syncEligible: Scalars['Boolean'];
  value: Scalars['ID'];
};

export type SalesforceProvisionResult = {
  __typename?: 'SalesforceProvisionResult';
  newUser: Scalars['Boolean'];
  user: User;
};

export type ScormAttempt = {
  __typename?: 'ScormAttempt';
  completionStatus: Scalars['String'];
  course: Course;
  interactions?: Maybe<Array<ScormInteraction>>;
  maxScore?: Maybe<Scalars['Int']>;
  minScore?: Maybe<Scalars['Int']>;
  passed: Scalars['Boolean'];
  rawScore?: Maybe<Scalars['Int']>;
  topic: Topic;
  user: User;
};

export type ScormInteraction = {
  __typename?: 'ScormInteraction';
  questionDescription: Scalars['String'];
  questionId: Scalars['String'];
  result: Scalars['String'];
  studentResponse: Scalars['String'];
};

export type ScormInteractionInput = {
  questionDescription?: InputMaybe<Scalars['String']>;
  questionId: Scalars['String'];
  result?: InputMaybe<Scalars['String']>;
  studentResponse?: InputMaybe<Scalars['String']>;
};

export type ScormLaunchDetail = {
  __typename?: 'ScormLaunchDetail';
  courseDirectory?: Maybe<Scalars['String']>;
  courseId: Scalars['String'];
  studentId: Scalars['String'];
  studentName: Scalars['String'];
};

export type SeatPackage = {
  __typename?: 'SeatPackage';
  seats: Scalars['Int'];
};

export type SeatPackageInput = {
  seats: Scalars['Int'];
};

export type SeatTier = {
  __typename?: 'SeatTier';
  priceInCents: Scalars['Int'];
  seats: Scalars['Int'];
};

export type SeatTierInput = {
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

export type ShippingMethod = {
  __typename?: 'ShippingMethod';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
};

export enum SimilarContentType {
  CourseGroups = 'courseGroups',
  Courses = 'courses',
  LearningPaths = 'learningPaths'
}

export type Snippet = {
  __typename?: 'Snippet';
  body: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  label: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
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

export type StripeAccount = {
  __typename?: 'StripeAccount';
  chargeEnabled: Scalars['Boolean'];
  id: Scalars['ID'];
  mode: StripeAccountMode;
  name?: Maybe<Scalars['String']>;
  transferEnabled: Scalars['Boolean'];
};

export enum StripeAccountMode {
  Live = 'live',
  Test = 'test'
}

export type SuperQuiz = {
  __typename?: 'SuperQuiz';
  displayAllHints?: Maybe<Scalars['Boolean']>;
  navigationDisabled?: Maybe<Scalars['Boolean']>;
  questionSkipEnabled?: Maybe<Scalars['Boolean']>;
  questions?: Maybe<Array<QuizQuestion>>;
  quizzes?: Maybe<Array<Scalars['ID']>>;
  timePerQuestionInSeconds?: Maybe<Scalars['Int']>;
  timerEnabled?: Maybe<Scalars['Boolean']>;
  totalTimeInSeconds?: Maybe<Scalars['Int']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};

export type TaxCategory = {
  __typename?: 'TaxCategory';
  group?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label: Scalars['String'];
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

export type Thread = {
  __typename?: 'Thread';
  asset?: Maybe<Scalars['URL']>;
  assetFileName?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  bookmark?: Maybe<Scalars['ID']>;
  client?: Maybe<Client>;
  commentsCount: Scalars['Int'];
  course?: Maybe<Course>;
  createdAt?: Maybe<Scalars['Date']>;
  forum: Forum;
  forumId: Scalars['ID'];
  id: Scalars['ID'];
  matchCount?: Maybe<Scalars['Int']>;
  notificationsEnabled: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user: User;
  videoAsset?: Maybe<Scalars['ID']>;
};

export type ThreadsList = {
  __typename?: 'ThreadsList';
  discussionRules?: Maybe<Scalars['String']>;
  pageInfo: PageInfo;
  threads?: Maybe<Array<Thread>>;
};

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

export type TopicSearchAutocompleteResult = {
  __typename?: 'TopicSearchAutocompleteResult';
  value: Scalars['String'];
};

export type TopicSearchAutocompleteResultCategory = {
  __typename?: 'TopicSearchAutocompleteResultCategory';
  label: Scalars['String'];
  suggestions?: Maybe<Array<TopicSearchAutocompleteResult>>;
};

export type TopicSearchResult = {
  __typename?: 'TopicSearchResult';
  body?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lessonTitle?: Maybe<Scalars['String']>;
  sectionTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
};

export type TopicSearchResultList = {
  __typename?: 'TopicSearchResultList';
  pageInfo?: Maybe<PageInfo>;
  results?: Maybe<Array<TopicSearchResult>>;
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

export type Transcript = {
  __typename?: 'Transcript';
  headers?: Maybe<Array<Maybe<Scalars['String']>>>;
  rows?: Maybe<Scalars['JSON']>;
  totals?: Maybe<Scalars['JSON']>;
};

export type Translation = {
  __typename?: 'Translation';
  id?: Maybe<Scalars['ID']>;
  lang: Scalars['String'];
  namespace: Scalars['String'];
  translations?: Maybe<Scalars['JSON']>;
};

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
  balance?: Maybe<Scalars['Float']>;
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  client?: Maybe<Client>;
  clientId?: Maybe<Scalars['ID']>;
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
  state?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['ID']>;
  telephone?: Maybe<Scalars['String']>;
  totalCreditBalance?: Maybe<Scalars['Float']>;
  twoFactorEnabled?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Date']>;
  waitlistedCourses?: Maybe<Array<WaitlistedCourse>>;
  zipCode?: Maybe<Scalars['String']>;
};

export type UserAttendedMeetingsArgs = {
  courseId?: InputMaybe<Scalars['ID']>;
};

export type UserAttendedMeeting = {
  __typename?: 'UserAttendedMeeting';
  attendanceDate: Scalars['Date'];
  meeting: Meeting;
  user: User;
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

export type UserEmbedWidget = {
  __typename?: 'UserEmbedWidget';
  config: EmbedWidgetSettings;
  courseStatus: Array<Maybe<EmbedWidgetCourseStatus>>;
  earnedBadges: Array<Maybe<EarnedBadge>>;
  featuredContent: Array<Maybe<Content>>;
  learningPathStatus: Array<Maybe<EmbedWidgetLearningPathStatus>>;
  user: User;
};

export type UserGrantableCertificates = {
  __typename?: 'UserGrantableCertificates';
  certificates?: Maybe<Array<Certificate>>;
  resources?: Maybe<Array<Maybe<CertificateResource>>>;
};

export type UserProgress = {
  __typename?: 'UserProgress';
  course: Scalars['ID'];
  percentComplete?: Maybe<Scalars['Int']>;
  totalTime?: Maybe<Scalars['Int']>;
  totalViews?: Maybe<Scalars['Int']>;
  user: Scalars['ID'];
};

export type UserPurchase = {
  __typename?: 'UserPurchase';
  amountInCents?: Maybe<Scalars['Int']>;
  amountRefundedInCents?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Boolean']>;
  contentType: Scalars['String'];
  expiresAt?: Maybe<Scalars['String']>;
  kind: Scalars['String'];
  label: Scalars['String'];
  quantity: Scalars['Int'];
  redemptionCodeGroupId?: Maybe<Scalars['ID']>;
  refunded?: Maybe<Scalars['String']>;
  refunds?: Maybe<Array<UserPurchaseRefund>>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  transactionTime: Scalars['String'];
  transactionType: Scalars['String'];
};

export type UserPurchaseRefund = {
  __typename?: 'UserPurchaseRefund';
  amountInCents?: Maybe<Scalars['Int']>;
  transactionTime: Scalars['String'];
};

export type UserRecommendedTag = {
  __typename?: 'UserRecommendedTag';
  boost: Scalars['Int'];
  label: Scalars['String'];
};

export type UserRecommendedTagInput = {
  boost: Scalars['Int'];
  label: Scalars['String'];
};

export type UserRef = {
  __typename?: 'UserRef';
  ref: Scalars['Int'];
  value?: Maybe<Scalars['String']>;
};

export enum UserStatus {
  Active = 'active',
  Disabled = 'disabled'
}

export type UsersList = {
  __typename?: 'UsersList';
  aggregations?: Maybe<Array<Aggregation>>;
  debug?: Maybe<Scalars['JSON']>;
  pageInfo?: Maybe<PageInfo>;
  users?: Maybe<Array<User>>;
};

export type Waitlist = {
  __typename?: 'Waitlist';
  company: Scalars['ID'];
  course: Course;
  createdAt: Scalars['Date'];
  emailSent: Scalars['Boolean'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
  user: Scalars['ID'];
  waitlistStatus: Scalars['String'];
};

export type WaitlistedCourse = {
  __typename?: 'WaitlistedCourse';
  course?: Maybe<Course>;
  courseId: Scalars['ID'];
};

export type WebexLab = {
  __typename?: 'WebexLab';
  labID: Scalars['ID'];
  labName: Scalars['String'];
  totalComputers: Scalars['String'];
};

export type WebexWebinarConnection = {
  __typename?: 'WebexWebinarConnection';
  id: Scalars['ID'];
  provider: Scalars['String'];
  webexDomain: Scalars['String'];
  webexEmail: Scalars['String'];
  webexLogin: Scalars['String'];
  webexSiteName: Scalars['String'];
};

export type WebinarBlock = {
  __typename?: 'WebinarBlock';
  attendeeDialIn?: Maybe<Scalars['String']>;
  coOrganizers?: Maybe<Array<Scalars['String']>>;
  enableAutoRecording?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  organizerDialIn?: Maybe<Scalars['String']>;
  originalWebinarDates?: Maybe<Array<WebinarDate>>;
  recurrence?: Maybe<Scalars['JSON']>;
  retrieveRecording?: Maybe<Scalars['Boolean']>;
  webexDescription?: Maybe<Scalars['String']>;
  webexLabName?: Maybe<Scalars['String']>;
  webexNumComputers?: Maybe<Scalars['Int']>;
  webexReserveHOL?: Maybe<Scalars['Boolean']>;
  webexSessionPassword?: Maybe<Scalars['String']>;
  webinarDates?: Maybe<Array<WebinarDate>>;
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

export type WebinarDateRange = {
  endTime: Scalars['Date'];
  goToTrainingKey?: InputMaybe<Scalars['String']>;
  goToWebinarKey?: InputMaybe<Scalars['String']>;
  meeting?: InputMaybe<Scalars['ID']>;
  startTime: Scalars['Date'];
  webexTrainingSessionKey?: InputMaybe<Scalars['String']>;
  zoomOccurrenceKey?: InputMaybe<Scalars['String']>;
};

export type WebinarRecording = {
  __typename?: 'WebinarRecording';
  id: Scalars['ID'];
  label: Scalars['String'];
  meetingId?: Maybe<Scalars['ID']>;
  playUrl: Scalars['String'];
  recordingStart?: Maybe<Scalars['String']>;
  recordingType?: Maybe<Scalars['String']>;
};

export type ZendeskContent = {
  __typename?: 'ZendeskContent';
  certificate?: Maybe<Certificate>;
  endDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  kind: Scalars['String'];
  percentComplete?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  userId: Scalars['ID'];
};

export type QuizAttemptInput = {
  answeredQuestionsCount?: InputMaybe<Scalars['Int']>;
  assignmentSubmission?: InputMaybe<Scalars['ID']>;
  correctQuestionsCount?: InputMaybe<Scalars['Int']>;
  forgiven?: InputMaybe<Scalars['Boolean']>;
  grade?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  passed?: InputMaybe<Scalars['Boolean']>;
  poolLabelByQuestionId?: InputMaybe<Scalars['JSON']>;
  questions?: InputMaybe<Array<QuestionInput>>;
  questionsWithChoicesCount?: InputMaybe<Scalars['Int']>;
  status: AssessmentAttemptStatus;
  timeElapsedInSeconds?: InputMaybe<Scalars['Int']>;
  topicType?: InputMaybe<TopicType>;
  unansweredQuestionsCount?: InputMaybe<Scalars['Int']>;
};

export type TranscriptField = {
  dateGranted?: InputMaybe<Scalars['Date']>;
  expirationDate?: InputMaybe<Scalars['Date']>;
  providerName?: InputMaybe<Scalars['String']>;
};
