import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserCourseCompletionProgressQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type UserCourseCompletionProgressQuery = {
  __typename?: 'Query';
  UserCourseCompletionProgress?: Array<{
    __typename?: 'CourseCompletionCriteriaProgress';
    type?: Types.CourseCompletionCriteriaType;
    required?: Array<string>;
    completed?: Array<string>;
    percent: number;
  }>;
};

export const UserCourseCompletionProgressDocument = gql`
  query UserCourseCompletionProgress($id: ID!) {
    UserCourseCompletionProgress(id: $id) {
      type
      required
      completed
      percent
    }
  }
`;

/**
 * __useUserCourseCompletionProgressQuery__
 *
 * To run a query within a React component, call `useUserCourseCompletionProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCourseCompletionProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCourseCompletionProgressQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserCourseCompletionProgressQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserCourseCompletionProgressQuery,
    UserCourseCompletionProgressQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    UserCourseCompletionProgressQuery,
    UserCourseCompletionProgressQueryVariables
  >(UserCourseCompletionProgressDocument, options);
}
export function useUserCourseCompletionProgressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserCourseCompletionProgressQuery,
    UserCourseCompletionProgressQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    UserCourseCompletionProgressQuery,
    UserCourseCompletionProgressQueryVariables
  >(UserCourseCompletionProgressDocument, options);
}
export type UserCourseCompletionProgressQueryHookResult = ReturnType<
  typeof useUserCourseCompletionProgressQuery
>;
export type UserCourseCompletionProgressLazyQueryHookResult = ReturnType<
  typeof useUserCourseCompletionProgressLazyQuery
>;
export type UserCourseCompletionProgressQueryResult = Apollo.QueryResult<
  UserCourseCompletionProgressQuery,
  UserCourseCompletionProgressQueryVariables
>;
