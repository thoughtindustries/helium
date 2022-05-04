import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type RssItemsQueryVariables = Types.Exact<{
  feedUrl: Types.Scalars['String'];
}>;

export type RssItemsQuery = {
  __typename?: 'Query';
  RssItems: Array<{ __typename?: 'RssItem'; title?: string; link?: string }>;
};

export const RssItemsDocument = gql`
  query RssItems($feedUrl: String!) {
    RssItems(feedUrl: $feedUrl) {
      title
      link
    }
  }
`;

/**
 * __useRssItemsQuery__
 *
 * To run a query within a React component, call `useRssItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRssItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRssItemsQuery({
 *   variables: {
 *      feedUrl: // value for 'feedUrl'
 *   },
 * });
 */
export function useRssItemsQuery(
  baseOptions: Apollo.QueryHookOptions<RssItemsQuery, RssItemsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RssItemsQuery, RssItemsQueryVariables>(RssItemsDocument, options);
}
export function useRssItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RssItemsQuery, RssItemsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RssItemsQuery, RssItemsQueryVariables>(RssItemsDocument, options);
}
export type RssItemsQueryHookResult = ReturnType<typeof useRssItemsQuery>;
export type RssItemsLazyQueryHookResult = ReturnType<typeof useRssItemsLazyQuery>;
export type RssItemsQueryResult = Apollo.QueryResult<RssItemsQuery, RssItemsQueryVariables>;
