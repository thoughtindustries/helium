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
  AbsoluteOrRelativeURL: string;
  Date: string;
  HexColor: string;
  JSON: any;
  RelativeURL: string;
  Slug: string;
  URL: string;
  UUID: string;
};

export enum AccessLevel {
  EmailCaptureOpen = 'emailCaptureOpen',
  Open = 'open',
  StudentsOnly = 'studentsOnly'
}

export type AllocatedLearningPath = {
  __typename?: 'AllocatedLearningPath';
  learningPath?: Maybe<LearningPath>;
  learningPathId: Scalars['ID'];
  status?: Maybe<Scalars['String']>;
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
  favicon?: Maybe<Scalars['URL']>;
  font?: Maybe<Scalars['String']>;
  globalNavigationLinks?: Maybe<Array<Maybe<GlobalNavigationLink>>>;
  id: Scalars['ID'];
  linkColor?: Maybe<Scalars['HexColor']>;
  logoAsset?: Maybe<Scalars['URL']>;
  retinaLogo?: Maybe<Scalars['Boolean']>;
  secondaryColor?: Maybe<Scalars['HexColor']>;
};

export type ArticlePage = PageEntity & {
  __typename?: 'ArticlePage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  languages: Array<ArticlePageLanguage>;
  lessonId: Scalars['ID'];
  publishDate?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
  videoAsset?: Maybe<Scalars['String']>;
};

export type ArticlePageLanguage = {
  __typename?: 'ArticlePageLanguage';
  allowAudioDownload?: Maybe<Scalars['Boolean']>;
  audioAsset?: Maybe<Scalars['String']>;
  audioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  body?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  externalUrlCallToAction?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  pdfAsset?: Maybe<Scalars['String']>;
  pdfAssetSecondary?: Maybe<Scalars['String']>;
  pdfAssetSecondaryUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  pdfAssetTitle?: Maybe<Scalars['String']>;
  pdfAssetTitleSecondary?: Maybe<Scalars['String']>;
  pdfAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AssessmentPageEntity = {
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  instructorAssessment?: Maybe<Scalars['Boolean']>;
  lessonId: Scalars['ID'];
  questions: Array<QuizQuestion>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
};

export type AssignmentPage = PageEntity & {
  __typename?: 'AssignmentPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  allowExternalActivity?: Maybe<Scalars['Boolean']>;
  allowVideoSubmission?: Maybe<Scalars['Boolean']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  dueAt?: Maybe<Scalars['Date']>;
  editableByChildren?: Maybe<Scalars['Boolean']>;
  enableDiscussionAssignment?: Maybe<Scalars['Boolean']>;
  externalActivityButtonText?: Maybe<Scalars['String']>;
  externalActivityButtonUrl?: Maybe<Scalars['String']>;
  hideDiscussionUntilCommentPost?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  preventProgression?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
};

export type AudioPage = PageEntity & {
  __typename?: 'AudioPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  audioAsset?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  sidebarIsHidden?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
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

export type Client = {
  __typename?: 'Client';
  allocatedCredits?: Maybe<Scalars['Float']>;
  appearance?: Maybe<AppearanceSettings>;
  autoFilterForSelectedLanguage?: Maybe<Scalars['Boolean']>;
  catalog?: Maybe<CatalogSettings>;
  clientAdminAllocatableLearningPaths: Array<Scalars['ID']>;
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
  appearanceSettings?: Maybe<AppearanceSettings>;
  catalogBlock?: Maybe<Block>;
  catalogVisibilityEmails?: Maybe<Array<Scalars['String']>>;
  copyrightName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  micrositeFooter?: Maybe<MicrositeBlock>;
  micrositeHeader?: Maybe<MicrositeBlock>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  rootLayout?: Maybe<RootLayout>;
  schoolName?: Maybe<Scalars['String']>;
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
  acceptBadgeUrl?: Maybe<Scalars['String']>;
  altDescriptionBody?: Maybe<Scalars['String']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorsAndInstructors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  badgeName?: Maybe<Scalars['String']>;
  badgeUrl?: Maybe<Scalars['String']>;
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
  credlyBadgeExpiresAt?: Maybe<Scalars['Date']>;
  currentUserDueDate?: Maybe<Scalars['Date']>;
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
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  expiresAt?: Maybe<Scalars['Date']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  hasChildren: Scalars['Boolean'];
  hideCourseDescription: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  issuedAt?: Maybe<Scalars['Date']>;
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
  state?: Maybe<Scalars['String']>;
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
  description?: Maybe<Scalars['String']>;
  kind: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  templateName?: Maybe<Scalars['String']>;
  usageCount?: Maybe<Scalars['Int']>;
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
  courseGroupTitle?: Maybe<Scalars['String']>;
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
  topicGroup?: Maybe<TopicGroup>;
  topicGroupId?: Maybe<Scalars['ID']>;
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
  ratingsCount?: Maybe<Scalars['Int']>;
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
  /** @deprecated No longer supported. */
  sections?: Maybe<Array<Maybe<Section>>>;
  tabType?: Maybe<Scalars['String']>;
  /** @deprecated Use query `CourseGroupTestimonials` */
  testimonials?: Maybe<Array<Maybe<Testimonial>>>;
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

export type ExpandableList = {
  __typename?: 'ExpandableList';
  expandableListItems: Array<ExpandableListItem>;
  title: Scalars['String'];
};

export type ExpandableListItem = {
  __typename?: 'ExpandableListItem';
  altText?: Maybe<Scalars['String']>;
  asset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dropdownIcon?: Maybe<Scalars['String']>;
  externalResourceIcon?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  topicId?: Maybe<Scalars['ID']>;
};

export type FlipCardPage = PageEntity & {
  __typename?: 'FlipCardPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  caption?: Maybe<Scalars['String']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  flipCards: Array<FlipCards>;
  gridLayout?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  sidebarIsHidden?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
};

export type FlipCards = {
  __typename?: 'FlipCards';
  altText?: Maybe<Scalars['String']>;
  asset: Scalars['String'];
  backgroundColor?: Maybe<Scalars['String']>;
  cardType?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  frontText?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FulfillmentCenter = {
  __typename?: 'FulfillmentCenter';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type GeneralPage = PageEntity & {
  __typename?: 'GeneralPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
};

export type GlobalNavigationLink = {
  __typename?: 'GlobalNavigationLink';
  href?: Maybe<Scalars['String']>;
  label: Scalars['String'];
};

export type HighlightZone = {
  __typename?: 'HighlightZone';
  altText?: Maybe<Scalars['String']>;
  asset?: Maybe<Scalars['String']>;
  caption: Scalars['String'];
  height: Scalars['Int'];
  title: Scalars['String'];
  width: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type HighlightZonePage = PageEntity & {
  __typename?: 'HighlightZonePage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  altText?: Maybe<Scalars['String']>;
  asset?: Maybe<Scalars['String']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  editableByChildren?: Maybe<Scalars['Boolean']>;
  highlightZones?: Maybe<Array<Maybe<HighlightZone>>>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  sidebarIsHidden?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
};

export type InPersonEventInfo = {
  __typename?: 'InPersonEventInfo';
  heroAsset?: Maybe<Scalars['URL']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type IngredientGroup = {
  __typename?: 'IngredientGroup';
  ingredients: Array<Ingredient>;
  label: Scalars['String'];
};

export type IngredientStep = {
  __typename?: 'IngredientStep';
  body: Scalars['String'];
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
  authoringClient?: Maybe<Scalars['ID']>;
  authors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  bulkPurchasingEnabled: Scalars['Boolean'];
  client?: Maybe<Client>;
  confirmationHtml?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  currentUserDueDate?: Maybe<Scalars['Date']>;
  currentUserEarnedCertificate: Scalars['Boolean'];
  currentUserPendingCertificate: Scalars['Boolean'];
  currentUserStartActionDate?: Maybe<Scalars['Date']>;
  customFields?: Maybe<Scalars['JSON']>;
  detailAsset?: Maybe<Scalars['URL']>;
  dueDate?: Maybe<Scalars['Date']>;
  dueDateDays?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Date']>;
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  externalDetailUrl?: Maybe<Scalars['String']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  fulfillmentCenter?: Maybe<FulfillmentCenter>;
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
  topics: Array<PageResource>;
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

export type ListRollPage = PageEntity & {
  __typename?: 'ListRollPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  editableByChildren?: Maybe<Scalars['Boolean']>;
  expandableLists: Array<ExpandableList>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
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

export type Marker = {
  __typename?: 'Marker';
  seconds: Scalars['Int'];
  text: Scalars['String'];
};

export type MatchPairPage = PageEntity & {
  __typename?: 'MatchPairPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  matchPairs: Array<MatchPairs>;
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  sidebarIsHidden?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
};

export type MatchPairs = {
  __typename?: 'MatchPairs';
  asset: Scalars['String'];
  caption: Scalars['String'];
  clue: Scalars['String'];
  label: Scalars['String'];
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

export type MeetingPage = PageEntity & {
  __typename?: 'MeetingPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  meeting?: Maybe<Scalars['String']>;
  meetingAttendeeInfo?: Maybe<Scalars['String']>;
  meetingSubtitle?: Maybe<Scalars['String']>;
  meetingTitle?: Maybe<Scalars['String']>;
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  preventProgression?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
};

export type MicrositeBlock = {
  __typename?: 'MicrositeBlock';
  html?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  links?: Maybe<Array<MicrositeBlockLink>>;
};

export type MicrositeBlockLink = {
  __typename?: 'MicrositeBlockLink';
  asset?: Maybe<Scalars['String']>;
  href: Scalars['String'];
  label: Scalars['String'];
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

export type NotebookPage = PageEntity & {
  __typename?: 'NotebookPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  body?: Maybe<Scalars['String']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type PdfViewerPage = PageEntity & {
  __typename?: 'PDFViewerPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  asset?: Maybe<Scalars['String']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  fileDownloadDisabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  printDisabled?: Maybe<Scalars['Boolean']>;
  searchDisabled?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
};

export type PageEntity = {
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
};

export type PageResource =
  | ArticlePage
  | AssignmentPage
  | AudioPage
  | FlipCardPage
  | GeneralPage
  | HighlightZonePage
  | ListRollPage
  | MatchPairPage
  | MeetingPage
  | NotebookPage
  | PdfViewerPage
  | PresentationPage
  | QuizPage
  | RecipePage
  | ScormPage
  | SlideshowPage
  | SurveyPage
  | TallyPage
  | TestPage
  | TextPage
  | VideoPage
  | WorkbookPage;

export type PresentationPage = PageEntity & {
  __typename?: 'PresentationPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  catalogAsset?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  company: Scalars['String'];
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lesson?: Maybe<Scalars['String']>;
  lessonId: Scalars['ID'];
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  showSidebar?: Maybe<Scalars['Boolean']>;
  slides: Array<Slides>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
};

export type Product = {
  __typename?: 'Product';
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
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

export enum QuestionDisplayOption {
  Always = 'always',
  AssessmentOnly = 'assessmentOnly',
  ResultsOnly = 'resultsOnly'
}

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

export type QuizPage = AssessmentPageEntity &
  PageEntity & {
    __typename?: 'QuizPage';
    accessibilityAudioAsset?: Maybe<Scalars['String']>;
    accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
    accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
    allowToResume?: Maybe<Scalars['Boolean']>;
    catalogAsset?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['ID']>;
    companyId: Scalars['ID'];
    completionTimeSeconds?: Maybe<Scalars['Int']>;
    contentDescription?: Maybe<Scalars['String']>;
    contentEstimate?: Maybe<Scalars['String']>;
    contentTime?: Maybe<Scalars['String']>;
    continueAfterTimerExpires?: Maybe<Scalars['Boolean']>;
    createdAt: Scalars['Date'];
    displayAllHints?: Maybe<Scalars['Boolean']>;
    displayAttemptNumbers?: Maybe<Scalars['Int']>;
    editableByChildren?: Maybe<Scalars['Boolean']>;
    failMessage?: Maybe<Scalars['String']>;
    hintControlEnabled?: Maybe<Scalars['Boolean']>;
    id: Scalars['ID'];
    indentationLevel?: Maybe<Scalars['Int']>;
    instructorAssessment?: Maybe<Scalars['Boolean']>;
    isGraded?: Maybe<Scalars['Boolean']>;
    lessonId: Scalars['ID'];
    maxAttempts?: Maybe<Scalars['Int']>;
    minPassingPercent?: Maybe<Scalars['Int']>;
    navigationDisabled?: Maybe<Scalars['Boolean']>;
    passMessage?: Maybe<Scalars['String']>;
    preventProgression?: Maybe<Scalars['Boolean']>;
    questionSkipEnabled?: Maybe<Scalars['Boolean']>;
    /** This field has an additional cost of 3 points. */
    questions: Array<QuizQuestion>;
    showAnswerAfterPass?: Maybe<Scalars['Boolean']>;
    startMessage?: Maybe<Scalars['String']>;
    timeLimitInSeconds?: Maybe<Scalars['Int']>;
    timePerQuestionInSeconds?: Maybe<Scalars['Int']>;
    timerEnabled?: Maybe<Scalars['Boolean']>;
    title?: Maybe<Scalars['String']>;
    type: TopicType;
    updatedAt: Scalars['Date'];
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

export type RecipePage = PageEntity & {
  __typename?: 'RecipePage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  asset?: Maybe<Scalars['String']>;
  catalogAsset?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  ingredientGroups: Array<IngredientGroup>;
  lessonId: Scalars['ID'];
  nutrition?: Maybe<Scalars['String']>;
  pairing?: Maybe<Scalars['String']>;
  pairingIcon?: Maybe<Scalars['String']>;
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  steps: Array<IngredientStep>;
  time?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
  yield?: Maybe<Scalars['String']>;
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

export type RootLayout = {
  __typename?: 'RootLayout';
  favicon?: Maybe<Scalars['String']>;
  footerScripts?: Maybe<Scalars['String']>;
  headerScripts?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
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

export type ScormPage = PageEntity & {
  __typename?: 'ScormPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  catalogAsset?: Maybe<Scalars['String']>;
  centralLibraryItemId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  directoryEntryPoint?: Maybe<Scalars['String']>;
  editableByChildren?: Maybe<Scalars['Boolean']>;
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  enabledRevertProgress?: Maybe<Scalars['Boolean']>;
  fullscreenEmbed?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  isCentralLibraryItem?: Maybe<Scalars['Boolean']>;
  lessonId: Scalars['ID'];
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  preventProgression?: Maybe<Scalars['Boolean']>;
  resetSessionAfterComplete?: Maybe<Scalars['Boolean']>;
  scoTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
  useProxy?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
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
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
};

export type Slides = {
  __typename?: 'Slides';
  altText?: Maybe<Scalars['String']>;
  asset: Scalars['String'];
  audioAsset?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  timeSeconds?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  unrestrictedHeight: Scalars['Boolean'];
};

export type SlideshowPage = PageEntity & {
  __typename?: 'SlideshowPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  postTextBlock?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  showSidebar?: Maybe<Scalars['Boolean']>;
  slides: Array<Slides>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
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

export type SurveyPage = AssessmentPageEntity &
  PageEntity & {
    __typename?: 'SurveyPage';
    accessibilityAudioAsset?: Maybe<Scalars['String']>;
    accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
    accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
    catalogAsset?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['ID']>;
    companyId: Scalars['ID'];
    completionTimeSeconds?: Maybe<Scalars['Int']>;
    contentDescription?: Maybe<Scalars['String']>;
    contentEstimate?: Maybe<Scalars['String']>;
    contentTime?: Maybe<Scalars['String']>;
    createdAt: Scalars['Date'];
    editableByChildren?: Maybe<Scalars['Boolean']>;
    id: Scalars['ID'];
    indentationLevel?: Maybe<Scalars['Int']>;
    instructorAssessment?: Maybe<Scalars['Boolean']>;
    isGraded?: Maybe<Scalars['Boolean']>;
    lessonId: Scalars['ID'];
    preventProgression?: Maybe<Scalars['Boolean']>;
    /** This field has an additional cost of 3 points. */
    questions: Array<QuizQuestion>;
    resultsMessage?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    type: TopicType;
    updatedAt: Scalars['Date'];
  };

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  isFolder: Scalars['Boolean'];
  label?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type TallyPage = AssessmentPageEntity &
  PageEntity & {
    __typename?: 'TallyPage';
    accessibilityAudioAsset?: Maybe<Scalars['String']>;
    accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
    accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
    altText?: Maybe<Scalars['String']>;
    asset: Scalars['String'];
    audioAsset?: Maybe<Scalars['String']>;
    caption?: Maybe<Scalars['String']>;
    catalogAsset?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['ID']>;
    companyId: Scalars['ID'];
    completionTimeSeconds?: Maybe<Scalars['Int']>;
    contentDescription?: Maybe<Scalars['String']>;
    contentEstimate?: Maybe<Scalars['String']>;
    contentTime?: Maybe<Scalars['String']>;
    createdAt: Scalars['Date'];
    displayAllHints?: Maybe<Scalars['Boolean']>;
    editableByChildren?: Maybe<Scalars['Boolean']>;
    id: Scalars['ID'];
    indentationLevel?: Maybe<Scalars['Int']>;
    instructorAssessment?: Maybe<Scalars['Boolean']>;
    lessonId: Scalars['ID'];
    questionSkipEnabled?: Maybe<Scalars['Boolean']>;
    /** This field has an additional cost of 3 points. */
    questions: Array<QuizQuestion>;
    resultsMessage?: Maybe<Scalars['String']>;
    scoreTiers: Array<TallyPageScoreTier>;
    startMessage?: Maybe<Scalars['String']>;
    timeSeconds?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    type: TopicType;
    unrestrictedHeight: Scalars['Boolean'];
    updatedAt: Scalars['Date'];
  };

export type TallyPageScoreTier = {
  __typename?: 'TallyPageScoreTier';
  body?: Maybe<Scalars['String']>;
  lowerBound: Scalars['Int'];
  title: Scalars['String'];
  upperBound: Scalars['Int'];
};

export type TestPage = AssessmentPageEntity &
  PageEntity & {
    __typename?: 'TestPage';
    accessibilityAudioAsset?: Maybe<Scalars['String']>;
    accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
    accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
    allowToResume?: Maybe<Scalars['Boolean']>;
    catalogAsset?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['ID']>;
    companyId: Scalars['ID'];
    completionTimeSeconds?: Maybe<Scalars['Int']>;
    contentDescription?: Maybe<Scalars['String']>;
    contentEstimate?: Maybe<Scalars['String']>;
    contentTime?: Maybe<Scalars['String']>;
    continueAfterTimerExpires?: Maybe<Scalars['Boolean']>;
    createdAt: Scalars['Date'];
    editableByChildren?: Maybe<Scalars['Boolean']>;
    failMessage?: Maybe<Scalars['String']>;
    hideQuestionResults?: Maybe<Scalars['Boolean']>;
    id: Scalars['ID'];
    indentationLevel?: Maybe<Scalars['Int']>;
    instructorAssessment?: Maybe<Scalars['Boolean']>;
    isGraded?: Maybe<Scalars['Boolean']>;
    lessonId: Scalars['ID'];
    maxAttempts?: Maybe<Scalars['Int']>;
    minPassingPercent?: Maybe<Scalars['Int']>;
    passMessage?: Maybe<Scalars['String']>;
    preventProgression?: Maybe<Scalars['Boolean']>;
    questionSkipEnabled?: Maybe<Scalars['Boolean']>;
    /** This field has an additional cost of 3 points. */
    questions: Array<QuizQuestion>;
    randomizeChoices: Scalars['Boolean'];
    startMessage?: Maybe<Scalars['String']>;
    subsetSize?: Maybe<Scalars['Int']>;
    timeLimitInSeconds?: Maybe<Scalars['Int']>;
    timePerQuestionInSeconds?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    type: TopicType;
    updatedAt: Scalars['Date'];
  };

/** Contains data for a testimonial. */
export type Testimonial = {
  __typename?: 'Testimonial';
  /** The body of the testimonial. */
  body?: Maybe<Scalars['String']>;
  /** The time the testimonial was created. */
  createdAt?: Maybe<Scalars['Date']>;
  /** The id of the testimonial. */
  id?: Maybe<Scalars['ID']>;
  /** The rating of the testimonial. */
  rating?: Maybe<Scalars['Int']>;
  /** The user who submits the testimonial. */
  user?: Maybe<User>;
};

export type TextPage = PageEntity & {
  __typename?: 'TextPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  body?: Maybe<Scalars['String']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  sidebarIsHidden: Scalars['Boolean'];
  sidebarItems: Array<TextPageSidebar>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
};

export type TextPageSidebar = {
  __typename?: 'TextPageSidebar';
  adDimensions?: Maybe<Scalars['String']>;
  adTargeting?: Maybe<Scalars['String']>;
  adUnitId?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  asset?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  videoAsset?: Maybe<Scalars['String']>;
};

export type TopicGroup = {
  __typename?: 'TopicGroup';
  categories: Array<TopicGroupCategory>;
  companyId: Scalars['ID'];
  id: Scalars['ID'];
};

export type TopicGroupCategory = {
  __typename?: 'TopicGroupCategory';
  kind: Scalars['String'];
  label: Scalars['String'];
  subcategories: Array<TopicGroupSubcategory>;
};

export type TopicGroupFile = {
  __typename?: 'TopicGroupFile';
  asset: Scalars['String'];
  isCentralLibraryItem?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type TopicGroupSubcategory = {
  __typename?: 'TopicGroupSubcategory';
  files: Array<TopicGroupFile>;
  label: Scalars['String'];
  topics: Array<TopicGroupTopic>;
};

export type TopicGroupTopic = {
  __typename?: 'TopicGroupTopic';
  id: Scalars['ID'];
  type: TopicType;
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
  /** This field has an additional cost of 3 points. */
  allocatedLearningPaths?: Maybe<Array<AllocatedLearningPath>>;
  allocatedLicenses?: Maybe<Array<AllocatedLicense>>;
  asset?: Maybe<Scalars['String']>;
  /** This field has an additional cost of 3 points. */
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
  /** This field has an additional cost of 3 points. */
  purchasedBundles?: Maybe<Array<PurchasedBundle>>;
  /** This field has an additional cost of 3 points. */
  purchasedCourses?: Maybe<Array<PurchasedCourse>>;
  recommendedSlugs?: Maybe<Array<UserRecommendedSlug>>;
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

export type UserRecommendedSlug = {
  __typename?: 'UserRecommendedSlug';
  boost: Scalars['Int'];
  slug: Scalars['String'];
};

export type UserRecommendedTag = {
  __typename?: 'UserRecommendedTag';
  boost: Scalars['Int'];
  label: Scalars['String'];
};

export type VideoPage = PageEntity & {
  __typename?: 'VideoPage';
  accessibilityAudioAsset?: Maybe<Scalars['String']>;
  accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
  accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  asset?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  catalogAsset?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['ID']>;
  companyId: Scalars['ID'];
  completionTimeSeconds?: Maybe<Scalars['Int']>;
  contentDescription?: Maybe<Scalars['String']>;
  contentEstimate?: Maybe<Scalars['String']>;
  contentTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  editableByChildren?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  indentationLevel?: Maybe<Scalars['Int']>;
  lessonId: Scalars['ID'];
  markers: Array<Marker>;
  postAsset?: Maybe<Scalars['String']>;
  posterImageAsset?: Maybe<Scalars['String']>;
  preAsset?: Maybe<Scalars['String']>;
  preTextBlock?: Maybe<Scalars['String']>;
  sidebarIsHidden?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type: TopicType;
  updatedAt: Scalars['Date'];
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
  connection?: Maybe<Scalars['ID']>;
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

export type WorkbookPage = AssessmentPageEntity &
  PageEntity & {
    __typename?: 'WorkbookPage';
    accessibilityAudioAsset?: Maybe<Scalars['String']>;
    accessibilityAudioAssetTitle?: Maybe<Scalars['String']>;
    accessibilityAudioAssetUrl?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
    catalogAsset?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['ID']>;
    companyId: Scalars['ID'];
    completionTimeSeconds?: Maybe<Scalars['Int']>;
    contentDescription?: Maybe<Scalars['String']>;
    contentEstimate?: Maybe<Scalars['String']>;
    contentTime?: Maybe<Scalars['String']>;
    createdAt: Scalars['Date'];
    editableByChildren?: Maybe<Scalars['Boolean']>;
    id: Scalars['ID'];
    indentationLevel?: Maybe<Scalars['Int']>;
    instructorAssessment?: Maybe<Scalars['Boolean']>;
    lessonId: Scalars['ID'];
    linked?: Maybe<Scalars['Boolean']>;
    preventProgression?: Maybe<Scalars['Boolean']>;
    /** This field has an additional cost of 3 points. */
    questions: Array<QuizQuestion>;
    resultsMessage?: Maybe<Scalars['String']>;
    startMessage?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    type: TopicType;
    updatedAt: Scalars['Date'];
  };
