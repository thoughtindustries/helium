import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserWaitlistQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UserWaitlistQuery = {
  __typename?: 'Query';
  UserWaitlist?: Array<{
    __typename?: 'ContentItem';
    id: string;
    contentTypeLabel?: string;
    title?: string;
    kind?: Types.ContentKind;
    slug?: string;
    displayCourse?: string;
    displayCourseSlug?: string;
  }>;
};

export const UserWaitlistDocument = gql`
  query UserWaitlist {
    UserWaitlist {
      id
      contentTypeLabel
      title
      kind
      slug
      displayCourse
      displayCourseSlug
    }
  }
`;

/**
 * __useUserWaitlistQuery__
 *
 * To run a query within a React component, call `useUserWaitlistQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserWaitlistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserWaitlistQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserWaitlistQuery(
  baseOptions?: Apollo.QueryHookOptions<UserWaitlistQuery, UserWaitlistQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserWaitlistQuery, UserWaitlistQueryVariables>(
    UserWaitlistDocument,
    options
  );
}
export function useUserWaitlistLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserWaitlistQuery, UserWaitlistQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserWaitlistQuery, UserWaitlistQueryVariables>(
    UserWaitlistDocument,
    options
  );
}
export type UserWaitlistQueryHookResult = ReturnType<typeof useUserWaitlistQuery>;
export type UserWaitlistLazyQueryHookResult = ReturnType<typeof useUserWaitlistLazyQuery>;
export type UserWaitlistQueryResult = Apollo.QueryResult<
  UserWaitlistQuery,
  UserWaitlistQueryVariables
>;
