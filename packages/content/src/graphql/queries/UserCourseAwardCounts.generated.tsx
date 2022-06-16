import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserCourseAwardCountsQueryVariables = Types.Exact<{
  courseId: Types.Scalars['ID'];
}>;

export type UserCourseAwardCountsQuery = {
  __typename?: 'Query';
  UserCourseAwardCounts: Array<{
    __typename: 'UserAwardCount';
    id: string;
    label?: string;
    icon?: Types.AwardTypeIcon;
    count?: number;
  }>;
};

export const UserCourseAwardCountsDocument = gql`
  query UserCourseAwardCounts($courseId: ID!) {
    UserCourseAwardCounts(courseId: $courseId) {
      __typename
      id
      label
      icon
      count
    }
  }
`;

/**
 * __useUserCourseAwardCountsQuery__
 *
 * To run a query within a React component, call `useUserCourseAwardCountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCourseAwardCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCourseAwardCountsQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useUserCourseAwardCountsQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserCourseAwardCountsQuery,
    UserCourseAwardCountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserCourseAwardCountsQuery, UserCourseAwardCountsQueryVariables>(
    UserCourseAwardCountsDocument,
    options
  );
}
export function useUserCourseAwardCountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserCourseAwardCountsQuery,
    UserCourseAwardCountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserCourseAwardCountsQuery, UserCourseAwardCountsQueryVariables>(
    UserCourseAwardCountsDocument,
    options
  );
}
export type UserCourseAwardCountsQueryHookResult = ReturnType<typeof useUserCourseAwardCountsQuery>;
export type UserCourseAwardCountsLazyQueryHookResult = ReturnType<
  typeof useUserCourseAwardCountsLazyQuery
>;
export type UserCourseAwardCountsQueryResult = Apollo.QueryResult<
  UserCourseAwardCountsQuery,
  UserCourseAwardCountsQueryVariables
>;
