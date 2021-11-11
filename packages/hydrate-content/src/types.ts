export enum AvailabilityStatus {
    Completed = "completed",
    Available = "available",
    Started = "started",
    NotStarted = "not-started",
    NotCompleted = "not-completed",
}

export enum ContentKind {
    CourseGroup = "courseGroup",
    Article = "article",
    Webinar = "webinar",
    WebinarCourse = "webinarCourse",
    Video = "video",
    ShareableContentObject = "shareableContentObject",
    XApiObject = "xApiObject",
    Course = "course",
    Bundle = "bundle",
    DiscountGroup = "discountGroup",
    PickableGroup = "pickableGroup",
    Product = "product",
    LearningPath = "learningPath",
    InPersonEvent = "inPersonEvent",
    InPersonEventCourse = "inPersonEventCourse",
    Sellable = "sellable",
}

export enum AlternativePricingType {
    Membership = "membership"
}

export type Ribbon = {
    /** background color */
    bgColor?: string;
    /** text color */
    contrastColor?: string;
    /** corner color */
    darkerColor?: string;
    /** label */
    label?: string;
    /** slug */
    slug: string;
}

export interface ContentItem {
    id: string;
    asset?: string;
    authors?: string[];
    currentUserUnmetCoursePrerequisites?: string[];
    currentUserUnmetLearningPathPrerequisites?: string[];
    coursePresold: boolean;
    courseGracePeriodEnded: boolean;
    timeZone: string;
    meetingStartDate?: Date;
    courseStartDate: Date;
    courseEndDate?: Date;
    courseGracePeriodEndDate?: Date;
    availabilityStatus?: AvailabilityStatus;
    kind: ContentKind;
    waitlistingTriggered: boolean;
    bulkPurchasingEnabled?: boolean;
    contentTypeLabel: string;
    waitlistingEnabled: boolean;
    slug: string;
    displayCourse?: string;
    displayCourseSlug?: string;
    alternativePricingType?: AlternativePricingType;
    priceInCents?: number;
    suggestedRetailPriceInCents?: number;
    canAddToQueue?: boolean;
    description?: string;
    rating?: number;
    title?: string;
    source?: string;
    ribbon?: Ribbon;
}

export interface HydratedContentItem extends ContentItem {
    hasUnmetPrerequisites: boolean;
    isActive: boolean;
    hasAvailability: boolean;
    isCompleted?: boolean;
    isAvailable?: boolean;
    isStarted?: boolean;
    isNotStarted?: boolean;
    isNotCompleted?: boolean;
    kindIsScormOrXApi?: boolean;
    locationIsOnline?: boolean;
    locationIsInPerson?: boolean;
    usesContentAccessText?: boolean;
    callToAction: string;
    href: string;
    priceInCents?: number;
    suggestedRetailPriceInCents?: number;
}
