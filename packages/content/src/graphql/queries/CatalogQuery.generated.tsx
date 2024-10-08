import * as Types from '../global-types';

import { ContentFragmentFragment } from './ContentFragment.generated';
import { gql } from '@apollo/client';
import { ContentFragmentFragmentDoc } from './ContentFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CatalogQueryVariables = Types.Exact<{
  query?: Types.InputMaybe<Types.Scalars['String']>;
  querySignature?: Types.InputMaybe<Types.Scalars['String']>;
  querySort?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type CatalogQuery = {
  __typename?: 'Query';
  CatalogQuery: {
    __typename?: 'CatalogContent';
    contentItems?: Array<{ __typename?: 'Content' } & ContentFragmentFragment>;
  };
};

export const CatalogDocument = gql`
  query Catalog($query: String, $querySignature: String, $querySort: String) {
    CatalogQuery(query: $query, querySignature: $querySignature, querySort: $querySort) {
      contentItems {
        ...ContentFragment
      }
    }
  }
  ${ContentFragmentFragmentDoc}
`;

/**
 * __useCatalogQuery__
 *
 * To run a query within a React component, call `useCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogQuery({
 *   variables: {
 *      query: // value for 'query'
 *      querySignature: // value for 'querySignature'
 *      querySort: // value for 'querySort'
 *   },
 * });
 */
export function useCatalogQuery(
  baseOptions?: Apollo.QueryHookOptions<CatalogQuery, CatalogQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, options);
}
export function useCatalogLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CatalogQuery, CatalogQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, options);
}
export type CatalogQueryHookResult = ReturnType<typeof useCatalogQuery>;
export type CatalogLazyQueryHookResult = ReturnType<typeof useCatalogLazyQuery>;
export type CatalogQueryResult = Apollo.QueryResult<CatalogQuery, CatalogQueryVariables>;
