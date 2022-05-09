import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserBookmarksQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UserBookmarksQuery = {
  __typename?: 'Query';
  UserBookmarks?: Array<{
    __typename: 'BookmarkFolder';
    id: string;
    name: string;
    defaultFolder?: boolean;
    bookmarkCount?: number;
  }>;
};

export const UserBookmarksDocument = gql`
  query UserBookmarks {
    UserBookmarks {
      __typename
      id
      name
      defaultFolder
      bookmarkCount
    }
  }
`;

/**
 * __useUserBookmarksQuery__
 *
 * To run a query within a React component, call `useUserBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserBookmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserBookmarksQuery(
  baseOptions?: Apollo.QueryHookOptions<UserBookmarksQuery, UserBookmarksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserBookmarksQuery, UserBookmarksQueryVariables>(
    UserBookmarksDocument,
    options
  );
}
export function useUserBookmarksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserBookmarksQuery, UserBookmarksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserBookmarksQuery, UserBookmarksQueryVariables>(
    UserBookmarksDocument,
    options
  );
}
export type UserBookmarksQueryHookResult = ReturnType<typeof useUserBookmarksQuery>;
export type UserBookmarksLazyQueryHookResult = ReturnType<typeof useUserBookmarksLazyQuery>;
export type UserBookmarksQueryResult = Apollo.QueryResult<
  UserBookmarksQuery,
  UserBookmarksQueryVariables
>;
