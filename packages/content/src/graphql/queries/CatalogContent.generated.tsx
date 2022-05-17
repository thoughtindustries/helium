import * as Types from '../global-types';

import { ContentFragmentFragment } from './ContentFragment.generated';
import { LocationFragmentFragment } from './LocationFragment.generated';
import { CatalogMetaFragmentFragment } from './CatalogMetaFragment.generated';
import { gql } from '@apollo/client';
import { ContentFragmentFragmentDoc } from './ContentFragment.generated';
import { LocationFragmentFragmentDoc } from './LocationFragment.generated';
import { CatalogMetaFragmentFragmentDoc } from './CatalogMetaFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CatalogContentQueryVariables = Types.Exact<{
  layoutId?: Types.InputMaybe<Types.Scalars['ID']>;
  widgetId?: Types.InputMaybe<Types.Scalars['ID']>;
  sort?: Types.InputMaybe<Types.Scalars['String']>;
  resultsDisplayType?: Types.InputMaybe<Types.ContentItemDisplayType>;
  page: Types.Scalars['Int'];
  token?: Types.InputMaybe<Types.Scalars['String']>;
  labels?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
  values?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
  contentTypes?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
  query?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type CatalogContentQuery = {
  __typename?: 'Query';
  CatalogContent: {
    __typename?: 'CatalogContent';
    contentItems?: Array<
      {
        __typename?: 'Content';
        location?: { __typename?: 'Location' } & LocationFragmentFragment;
      } & ContentFragmentFragment
    >;
    meta: { __typename?: 'CatalogMeta' } & CatalogMetaFragmentFragment;
  };
};

export const CatalogContentDocument = gql`
  query CatalogContent(
    $layoutId: ID
    $widgetId: ID
    $sort: String
    $resultsDisplayType: ContentItemDisplayType
    $page: Int!
    $token: String
    $labels: [String!]
    $values: [String!]
    $contentTypes: [String!]
    $query: String
  ) {
    CatalogContent(
      layoutId: $layoutId
      widgetId: $widgetId
      sort: $sort
      resultsDisplayType: $resultsDisplayType
      page: $page
      token: $token
      labels: $labels
      values: $values
      contentTypes: $contentTypes
      query: $query
    ) {
      contentItems {
        ...ContentFragment
        location {
          ...LocationFragment
        }
      }
      meta {
        ...CatalogMetaFragment
      }
    }
  }
  ${ContentFragmentFragmentDoc}
  ${LocationFragmentFragmentDoc}
  ${CatalogMetaFragmentFragmentDoc}
`;

/**
 * __useCatalogContentQuery__
 *
 * To run a query within a React component, call `useCatalogContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogContentQuery({
 *   variables: {
 *      layoutId: // value for 'layoutId'
 *      widgetId: // value for 'widgetId'
 *      sort: // value for 'sort'
 *      resultsDisplayType: // value for 'resultsDisplayType'
 *      page: // value for 'page'
 *      token: // value for 'token'
 *      labels: // value for 'labels'
 *      values: // value for 'values'
 *      contentTypes: // value for 'contentTypes'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCatalogContentQuery(
  baseOptions: Apollo.QueryHookOptions<CatalogContentQuery, CatalogContentQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CatalogContentQuery, CatalogContentQueryVariables>(
    CatalogContentDocument,
    options
  );
}
export function useCatalogContentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CatalogContentQuery, CatalogContentQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CatalogContentQuery, CatalogContentQueryVariables>(
    CatalogContentDocument,
    options
  );
}
export type CatalogContentQueryHookResult = ReturnType<typeof useCatalogContentQuery>;
export type CatalogContentLazyQueryHookResult = ReturnType<typeof useCatalogContentLazyQuery>;
export type CatalogContentQueryResult = Apollo.QueryResult<
  CatalogContentQuery,
  CatalogContentQueryVariables
>;
