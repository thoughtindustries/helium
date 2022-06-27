import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ContentGroupsQueryVariables = Types.Exact<{
  query?: Types.InputMaybe<Types.Scalars['String']>;
  includeExpiredCertificates?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;

export type ContentGroupsQuery = {
  __typename?: 'Query';
  UserContentGroups?: Array<{
    __typename?: 'ContentGroup';
    kind: Types.ContentGroupKind;
    count: number;
  }>;
};

export const ContentGroupsDocument = gql`
  query ContentGroups($query: String, $includeExpiredCertificates: Boolean) {
    UserContentGroups(query: $query, includeExpiredCertificates: $includeExpiredCertificates) {
      kind
      count
    }
  }
`;

/**
 * __useContentGroupsQuery__
 *
 * To run a query within a React component, call `useContentGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentGroupsQuery({
 *   variables: {
 *      query: // value for 'query'
 *      includeExpiredCertificates: // value for 'includeExpiredCertificates'
 *   },
 * });
 */
export function useContentGroupsQuery(
  baseOptions?: Apollo.QueryHookOptions<ContentGroupsQuery, ContentGroupsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ContentGroupsQuery, ContentGroupsQueryVariables>(
    ContentGroupsDocument,
    options
  );
}
export function useContentGroupsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ContentGroupsQuery, ContentGroupsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ContentGroupsQuery, ContentGroupsQueryVariables>(
    ContentGroupsDocument,
    options
  );
}
export type ContentGroupsQueryHookResult = ReturnType<typeof useContentGroupsQuery>;
export type ContentGroupsLazyQueryHookResult = ReturnType<typeof useContentGroupsLazyQuery>;
export type ContentGroupsQueryResult = Apollo.QueryResult<
  ContentGroupsQuery,
  ContentGroupsQueryVariables
>;
