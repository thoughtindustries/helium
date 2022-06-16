import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserBookmarksByFolderQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type UserBookmarksByFolderQuery = {
  __typename?: 'Query';
  UserBookmarksByFolder?: Array<{
    __typename: 'Bookmark';
    id: string;
    topicId?: string;
    note?: string;
    createdAt: string;
    course: {
      __typename: 'Course';
      id: string;
      title?: string;
      slug: string;
      status?: Types.Status;
      courseGroup?: {
        __typename: 'CourseGroup';
        id: string;
        authors?: Array<string>;
        source?: string;
        asset?: string;
        kind?: Types.CourseGroupKind;
        contentType?: { __typename: 'ContentType'; label?: string };
      };
    };
  }>;
};

export const UserBookmarksByFolderDocument = gql`
  query UserBookmarksByFolder($id: ID!) {
    UserBookmarksByFolder(id: $id) {
      __typename
      id
      course {
        __typename
        id
        title
        slug
        status
        courseGroup {
          __typename
          id
          authors
          source
          asset
          kind
          contentType {
            __typename
            label
          }
        }
      }
      topicId
      note
      createdAt
    }
  }
`;

/**
 * __useUserBookmarksByFolderQuery__
 *
 * To run a query within a React component, call `useUserBookmarksByFolderQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserBookmarksByFolderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserBookmarksByFolderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserBookmarksByFolderQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserBookmarksByFolderQuery,
    UserBookmarksByFolderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserBookmarksByFolderQuery, UserBookmarksByFolderQueryVariables>(
    UserBookmarksByFolderDocument,
    options
  );
}
export function useUserBookmarksByFolderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserBookmarksByFolderQuery,
    UserBookmarksByFolderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserBookmarksByFolderQuery, UserBookmarksByFolderQueryVariables>(
    UserBookmarksByFolderDocument,
    options
  );
}
export type UserBookmarksByFolderQueryHookResult = ReturnType<typeof useUserBookmarksByFolderQuery>;
export type UserBookmarksByFolderLazyQueryHookResult = ReturnType<
  typeof useUserBookmarksByFolderLazyQuery
>;
export type UserBookmarksByFolderQueryResult = Apollo.QueryResult<
  UserBookmarksByFolderQuery,
  UserBookmarksByFolderQueryVariables
>;
