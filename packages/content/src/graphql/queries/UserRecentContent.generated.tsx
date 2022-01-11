import * as Types from '../global-types';

import { gql } from '@apollo/client';
import { ContentFragmentFragmentDoc } from './ContentFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
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

export const UserRecentContentDocument = gql`
  query UserRecentContent($limit: Int) {
    UserRecentContent(limit: $limit) {
      ...ContentFragment
    }
  }
  ${ContentFragmentFragmentDoc}
`;

/**
 * __useUserRecentContentQuery__
 *
 * To run a query within a React component, call `useUserRecentContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserRecentContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserRecentContentQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useUserRecentContentQuery(
  baseOptions?: Apollo.QueryHookOptions<UserRecentContentQuery, UserRecentContentQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserRecentContentQuery, UserRecentContentQueryVariables>(
    UserRecentContentDocument,
    options
  );
}
export function useUserRecentContentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserRecentContentQuery, UserRecentContentQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserRecentContentQuery, UserRecentContentQueryVariables>(
    UserRecentContentDocument,
    options
  );
}
export type UserRecentContentQueryHookResult = ReturnType<typeof useUserRecentContentQuery>;
export type UserRecentContentLazyQueryHookResult = ReturnType<typeof useUserRecentContentLazyQuery>;
export type UserRecentContentQueryResult = Apollo.QueryResult<
  UserRecentContentQuery,
  UserRecentContentQueryVariables
>;
