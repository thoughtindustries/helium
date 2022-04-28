import * as Types from './global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserStatsQueryVariables = Types.Exact<{
  availableCoursesCount: Types.InputMaybe<Types.Scalars['Int']>;
  startedCoursesCount: Types.InputMaybe<Types.Scalars['Int']>;
  completedCoursesCount: Types.InputMaybe<Types.Scalars['Int']>;
  certificatesCount: Types.InputMaybe<Types.Scalars['Int']>;
  collaborationsCount: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type UserStatsQuery = {
  __typename?: 'UserStats';
  CurrentUser?: {
    __typename?: 'UserStats';
    certificatesCount: number;
    collaborationsCount: number;
    availableCoursesCount: number;
    startedCoursesCount: number;
    completedCoursesCount: number;
  };
};

export const UserStatsDocument = gql`
  query UserStats {
    CurrentUser {
      certificatesCount
      collaborationsCount
      availableCoursesCount
      startedCoursesCount
      completedCoursesCount
    }
  }
`;

/**
 * __useUserStatsQuery__
 *
 * To run a query within a React component, call `useUserStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserStatsQuery(
  baseOptions?: Apollo.QueryHookOptions<UserStatsQuery, UserStatsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserStatsQuery, UserStatsQueryVariables>(UserStatsDocument, options);
}
export function useUserStatsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserStatsQuery, UserStatsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserStatsQuery, UserStatsQueryVariables>(UserStatsDocument, options);
}
export type UserStatsQueryHookResult = ReturnType<typeof useUserStatsQuery>;
export type UserStatsLazyQueryHookResult = ReturnType<typeof useUserStatsLazyQuery>;
export type UserStatsQueryResult = Apollo.QueryResult<UserStatsQuery, UserStatsQueryVariables>;
