import * as Types from '../global-types';

import { UserFragmentFragment } from './UserFragment.generated';
import { CourseFragmentFragment } from './CourseFragment.generated';
import { gql } from '@apollo/client';
import { UserFragmentFragmentDoc } from './UserFragment.generated';
import { CourseFragmentFragmentDoc } from './CourseFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BookmarksQueryVariables = Types.Exact<{ [key: string]: never }>;

export type BookmarksQuery = {
  __typename?: 'Query';
  UserBookmarks?: Array<{
    __typename?: 'BookmarkFolder';
    id: string;
    name: string;
    deleted: boolean;
    defaultFolder?: boolean;
    bookmarkCount?: number;
    externalResourceId?: string;
    user: { __typename?: 'User' } & UserFragmentFragment;
    bookmarks?: Array<{
      __typename?: 'Bookmark';
      id: string;
      note?: string;
      topicId?: string;
      createdAt: string;
      deleted: boolean;
      topic?: {
        __typename?: 'Topic';
        id: string;
        originalId?: string;
        title?: string;
        type: Types.TopicType;
        quizQuestions?: Array<string>;
        preTextBlock?: string;
        postTextBlock?: string;
        updatedAt?: string;
        resultsMessage?: string;
        passMessage?: string;
        failMessage?: string;
        questionSkipEnabled?: boolean;
      };
      course: { __typename?: 'Course' } & CourseFragmentFragment;
    }>;
  }>;
};

export const BookmarksDocument = gql`
  query Bookmarks {
    UserBookmarks {
      id
      name
      user {
        ...UserFragment
      }
      deleted
      bookmarks {
        id
        note
        topic {
          id
          originalId
          title
          type
          quizQuestions
          preTextBlock
          postTextBlock
          updatedAt
          resultsMessage
          passMessage
          failMessage
          questionSkipEnabled
        }
        topicId
        course {
          ...CourseFragment
        }
        createdAt
        deleted
      }
      defaultFolder
      bookmarkCount
      externalResourceId
    }
  }
  ${UserFragmentFragmentDoc}
  ${CourseFragmentFragmentDoc}
`;

/**
 * __useBookmarksQuery__
 *
 * To run a query within a React component, call `useBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBookmarksQuery(
  baseOptions?: Apollo.QueryHookOptions<BookmarksQuery, BookmarksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BookmarksQuery, BookmarksQueryVariables>(BookmarksDocument, options);
}
export function useBookmarksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BookmarksQuery, BookmarksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BookmarksQuery, BookmarksQueryVariables>(BookmarksDocument, options);
}
export type BookmarksQueryHookResult = ReturnType<typeof useBookmarksQuery>;
export type BookmarksLazyQueryHookResult = ReturnType<typeof useBookmarksLazyQuery>;
export type BookmarksQueryResult = Apollo.QueryResult<BookmarksQuery, BookmarksQueryVariables>;
