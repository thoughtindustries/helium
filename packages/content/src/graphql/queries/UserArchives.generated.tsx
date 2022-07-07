import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserArchivesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UserArchivesQuery = {
  __typename?: 'Query';
  UserArchives?: Array<{
    __typename?: 'ArchivedContent';
    id: string;
    user?: string;
    resource?: string;
    resourceType?: string;
    status?: string;
    archivedAt?: string;
    name?: string;
    reinstatable: boolean;
    waitlistActive: boolean;
  }>;
};

export const UserArchivesDocument = gql`
  query UserArchives {
    UserArchives {
      id
      user
      resource
      resourceType
      status
      archivedAt
      name
      reinstatable
      waitlistActive
    }
  }
`;

/**
 * __useUserArchivesQuery__
 *
 * To run a query within a React component, call `useUserArchivesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserArchivesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserArchivesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserArchivesQuery(
  baseOptions?: Apollo.QueryHookOptions<UserArchivesQuery, UserArchivesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserArchivesQuery, UserArchivesQueryVariables>(
    UserArchivesDocument,
    options
  );
}
export function useUserArchivesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserArchivesQuery, UserArchivesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserArchivesQuery, UserArchivesQueryVariables>(
    UserArchivesDocument,
    options
  );
}
export type UserArchivesQueryHookResult = ReturnType<typeof useUserArchivesQuery>;
export type UserArchivesLazyQueryHookResult = ReturnType<typeof useUserArchivesLazyQuery>;
export type UserArchivesQueryResult = Apollo.QueryResult<
  UserArchivesQuery,
  UserArchivesQueryVariables
>;
