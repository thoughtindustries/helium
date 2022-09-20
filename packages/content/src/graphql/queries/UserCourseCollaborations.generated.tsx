import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserCourseCollaborationsQueryVariables = Types.Exact<{
  courseId: Types.Scalars['ID'];
}>;

export type UserCourseCollaborationsQuery = {
  __typename?: 'Query';
  UserCourseCollaborations: number;
};

export const UserCourseCollaborationsDocument = gql`
  query UserCourseCollaborations($courseId: ID!) {
    UserCourseCollaborations(courseId: $courseId)
  }
`;

/**
 * __useUserCourseCollaborationsQuery__
 *
 * To run a query within a React component, call `useUserCourseCollaborationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCourseCollaborationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCourseCollaborationsQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useUserCourseCollaborationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserCourseCollaborationsQuery,
    UserCourseCollaborationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserCourseCollaborationsQuery, UserCourseCollaborationsQueryVariables>(
    UserCourseCollaborationsDocument,
    options
  );
}
export function useUserCourseCollaborationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserCourseCollaborationsQuery,
    UserCourseCollaborationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserCourseCollaborationsQuery, UserCourseCollaborationsQueryVariables>(
    UserCourseCollaborationsDocument,
    options
  );
}
export type UserCourseCollaborationsQueryHookResult = ReturnType<
  typeof useUserCourseCollaborationsQuery
>;
export type UserCourseCollaborationsLazyQueryHookResult = ReturnType<
  typeof useUserCourseCollaborationsLazyQuery
>;
export type UserCourseCollaborationsQueryResult = Apollo.QueryResult<
  UserCourseCollaborationsQuery,
  UserCourseCollaborationsQueryVariables
>;
