import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type LanguagesQueryQueryVariables = Types.Exact<{ [key: string]: never }>;

export type LanguagesQueryQuery = {
  __typename?: 'Query';
  Languages: Array<{
    __typename?: 'Language';
    id?: string;
    label: string;
    code: string;
    isCustom?: boolean;
    selectorLabel?: string;
  }>;
};

export const LanguagesQueryDocument = gql`
  query LanguagesQuery {
    Languages {
      id
      label
      code
      isCustom
      selectorLabel
    }
  }
`;

/**
 * __useLanguagesQueryQuery__
 *
 * To run a query within a React component, call `useLanguagesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguagesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLanguagesQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useLanguagesQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<LanguagesQueryQuery, LanguagesQueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LanguagesQueryQuery, LanguagesQueryQueryVariables>(
    LanguagesQueryDocument,
    options
  );
}
export function useLanguagesQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LanguagesQueryQuery, LanguagesQueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LanguagesQueryQuery, LanguagesQueryQueryVariables>(
    LanguagesQueryDocument,
    options
  );
}
export type LanguagesQueryQueryHookResult = ReturnType<typeof useLanguagesQueryQuery>;
export type LanguagesQueryLazyQueryHookResult = ReturnType<typeof useLanguagesQueryLazyQuery>;
export type LanguagesQueryQueryResult = Apollo.QueryResult<
  LanguagesQueryQuery,
  LanguagesQueryQueryVariables
>;
