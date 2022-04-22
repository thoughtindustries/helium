import * as Types from '../global-types';

import { ContentFragmentFragment } from './ContentFragment.generated';
import { gql } from '@apollo/client';
import { ContentFragmentFragmentDoc } from './ContentFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type ContentItemsQueryVariables = Types.Exact<{
  query?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type ContentItemsQuery = {
  __typename?: 'Query';
  UserContentItems?: Array<{ __typename?: 'Content' } & ContentFragmentFragment>;
};

export const ContentItemsDocument = gql`
  query ContentItems($query: String) {
    UserContentItems(query: $query) {
      ...ContentFragment
    }
  }
  ${ContentFragmentFragmentDoc}
`;

/**
 * __useContentItemsQuery__
 *
 * To run a query within a React component, call `useContentItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentItemsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useContentItemsQuery(
  baseOptions?: Apollo.QueryHookOptions<ContentItemsQuery, ContentItemsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ContentItemsQuery, ContentItemsQueryVariables>(
    ContentItemsDocument,
    options
  );
}
export function useContentItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ContentItemsQuery, ContentItemsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ContentItemsQuery, ContentItemsQueryVariables>(
    ContentItemsDocument,
    options
  );
}
export type ContentItemsQueryHookResult = ReturnType<typeof useContentItemsQuery>;
export type ContentItemsLazyQueryHookResult = ReturnType<typeof useContentItemsLazyQuery>;
export type ContentItemsQueryResult = Apollo.QueryResult<
  ContentItemsQuery,
  ContentItemsQueryVariables
>;
