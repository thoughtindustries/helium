import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserContentItemsQueryVariables = Types.Exact<{
  query?: Types.InputMaybe<Types.Scalars['String']>;
  kind?: Types.InputMaybe<Array<Types.ContentKind> | Types.ContentKind>;
  sortColumn?: Types.InputMaybe<Types.SortColumn>;
  sortDirection?: Types.InputMaybe<Types.SortDirection>;
}>;

export type UserContentItemsQuery = {
  __typename?: 'Query';
  UserContentItems?: Array<{
    __typename?: 'Content';
    asset?: string;
    title?: string;
    sessionTitle?: string;
    kind?: Types.ContentKind;
    id: string;
    slug: string;
    meetingStartDate?: string;
    contentTypeLabel?: string;
    availabilityStatus?: string;
    courseStartDate?: string;
    courseEndDate?: string;
    coursePresold: boolean;
    description?: string;
    displayCourse?: string;
    displayCourseSlug?: string;
    displayDate?: string;
    courseGracePeriodEnded: boolean;
    authors?: Array<string>;
    publishDate?: string;
    source?: string;
    expiresAt?: string;
    currentUserMayReschedule: boolean;
    timeZone?: string;
    embeddedEnabled?: boolean;
    currentUserUnmetCoursePrerequisites?: Array<string>;
    currentUserUnmetLearningPathPrerequisites?: Array<string>;
    hasChildren: boolean;
    hideCourseDescription: boolean;
    isActive: boolean;
    waitlistingEnabled: boolean;
    waitlistingTriggered: boolean;
  }>;
};

export const UserContentItemsDocument = gql`
  query UserContentItems(
    $query: String
    $kind: [ContentKind!]
    $sortColumn: SortColumn
    $sortDirection: SortDirection
  ) {
    UserContentItems(
      query: $query
      kind: $kind
      sortColumn: $sortColumn
      sortDirection: $sortDirection
    ) {
      asset
      title
      sessionTitle
      kind
      id
      slug
      meetingStartDate
      contentTypeLabel
      availabilityStatus
      courseStartDate
      courseEndDate
      coursePresold
      description
      displayCourse
      displayCourseSlug
      displayDate
      courseGracePeriodEnded
      authors
      publishDate
      source
      expiresAt
      currentUserMayReschedule
      timeZone
      embeddedEnabled
      currentUserUnmetCoursePrerequisites
      currentUserUnmetLearningPathPrerequisites
      hasChildren
      hideCourseDescription
      isActive
      waitlistingEnabled
      waitlistingTriggered
    }
  }
`;

/**
 * __useUserContentItemsQuery__
 *
 * To run a query within a React component, call `useUserContentItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserContentItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserContentItemsQuery({
 *   variables: {
 *      query: // value for 'query'
 *      kind: // value for 'kind'
 *      sortColumn: // value for 'sortColumn'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useUserContentItemsQuery(
  baseOptions?: Apollo.QueryHookOptions<UserContentItemsQuery, UserContentItemsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserContentItemsQuery, UserContentItemsQueryVariables>(
    UserContentItemsDocument,
    options
  );
}
export function useUserContentItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserContentItemsQuery, UserContentItemsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserContentItemsQuery, UserContentItemsQueryVariables>(
    UserContentItemsDocument,
    options
  );
}
export type UserContentItemsQueryHookResult = ReturnType<typeof useUserContentItemsQuery>;
export type UserContentItemsLazyQueryHookResult = ReturnType<typeof useUserContentItemsLazyQuery>;
export type UserContentItemsQueryResult = Apollo.QueryResult<
  UserContentItemsQuery,
  UserContentItemsQueryVariables
>;
