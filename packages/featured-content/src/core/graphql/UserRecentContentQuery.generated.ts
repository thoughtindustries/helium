import * as Types from '@thoughtindustries/data';

export type UserRecentContentQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type UserRecentContentQuery = {
  __typename?: 'Query';
  UserRecentContent: Array<{
    __typename?: 'Content';
    asset?: string;
    authors?: Array<string>;
    availabilityStatus?: string;
    canAddToQueue?: boolean;
    contentTypeLabel?: string;
    courseGracePeriodEnded: boolean;
    coursePresold: boolean;
    courseStartDate?: any;
    currentUserMayReschedule: boolean;
    currentUserUnmetCoursePrerequisites?: Array<string>;
    currentUserUnmetLearningPathPrerequisites?: Array<string>;
    description?: string;
    displayCourse?: string;
    kind?: Types.ContentKind;
    hasChildren: boolean;
    hideCourseDescription: boolean;
    id: string;
    isActive: boolean;
    priceInCents?: number;
    rating?: number;
    slug: any;
    source?: string;
    suggestedRetailPriceInCents?: number;
    title?: string;
    waitlistingEnabled: boolean;
    waitlistingTriggered: boolean;
    ribbon?: {
      __typename?: 'Ribbon';
      color?: string;
      contrastColor?: string;
      darkerColor?: string;
      label?: string;
      slug: any;
    };
  }>;
};
