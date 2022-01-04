import * as Types from '@thoughtindustries/data';

export type CatalogQueryVariables = Types.Exact<{
  query?: Types.InputMaybe<Types.Scalars['String']>;
  querySignature?: Types.InputMaybe<Types.Scalars['String']>;
  querySort?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type CatalogQuery = {
  __typename?: 'Query';
  CatalogQuery: {
    __typename?: 'CatalogContent';
    contentItems?: Array<{
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
};
