import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserCourseProgressQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type UserCourseProgressQuery = {
  __typename?: 'Query';
  UserCourseProgress?: {
    __typename?: 'UserProgress';
    totalViews?: number;
    totalTime?: number;
    percentComplete?: number;
  };
};

export const UserCourseProgressDocument = gql`
  query UserCourseProgress($id: ID!) {
    UserCourseProgress(id: $id) {
      totalViews
      totalTime
      percentComplete
    }
  }
`;

/**
 * __useUserCourseProgressQuery__
 *
 * To run a query within a React component, call `useUserCourseProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCourseProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCourseProgressQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserCourseProgressQuery(
  baseOptions: Apollo.QueryHookOptions<UserCourseProgressQuery, UserCourseProgressQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserCourseProgressQuery, UserCourseProgressQueryVariables>(
    UserCourseProgressDocument,
    options
  );
}
export function useUserCourseProgressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserCourseProgressQuery,
    UserCourseProgressQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserCourseProgressQuery, UserCourseProgressQueryVariables>(
    UserCourseProgressDocument,
    options
  );
}
export type UserCourseProgressQueryHookResult = ReturnType<typeof useUserCourseProgressQuery>;
export type UserCourseProgressLazyQueryHookResult = ReturnType<
  typeof useUserCourseProgressLazyQuery
>;
export type UserCourseProgressQueryResult = Apollo.QueryResult<
  UserCourseProgressQuery,
  UserCourseProgressQueryVariables
>;
