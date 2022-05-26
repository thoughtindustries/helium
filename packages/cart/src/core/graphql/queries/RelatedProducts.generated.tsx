import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RelatedProductsQueryVariables = Types.Exact<{
  productIds?: Types.InputMaybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>;
  courseIds?: Types.InputMaybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>;
}>;

export type RelatedProductsQuery = {
  __typename?: 'Query';
  RelatedProducts: Array<{
    __typename?: 'Product';
    id: string;
    asset?: string;
    name?: string;
    suggestedRetailPriceInCents?: number;
    priceInCents?: number;
  }>;
};

export const RelatedProductsDocument = gql`
  query RelatedProducts($productIds: [ID!], $courseIds: [ID!]) {
    RelatedProducts(productIds: $productIds, courseIds: $courseIds) {
      id
      asset
      name
      suggestedRetailPriceInCents
      priceInCents
    }
  }
`;

/**
 * __useRelatedProductsQuery__
 *
 * To run a query within a React component, call `useRelatedProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRelatedProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRelatedProductsQuery({
 *   variables: {
 *      productIds: // value for 'productIds'
 *      courseIds: // value for 'courseIds'
 *   },
 * });
 */
export function useRelatedProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<RelatedProductsQuery, RelatedProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RelatedProductsQuery, RelatedProductsQueryVariables>(
    RelatedProductsDocument,
    options
  );
}
export function useRelatedProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RelatedProductsQuery, RelatedProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RelatedProductsQuery, RelatedProductsQueryVariables>(
    RelatedProductsDocument,
    options
  );
}
export type RelatedProductsQueryHookResult = ReturnType<typeof useRelatedProductsQuery>;
export type RelatedProductsLazyQueryHookResult = ReturnType<typeof useRelatedProductsLazyQuery>;
export type RelatedProductsQueryResult = Apollo.QueryResult<
  RelatedProductsQuery,
  RelatedProductsQueryVariables
>;
