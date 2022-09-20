import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TermsAndConditionsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type TermsAndConditionsQuery = {
  __typename?: 'Query';
  TermsAndConditions: { __typename?: 'TermsAndConditions'; globalTerms?: string };
};

export const TermsAndConditionsDocument = gql`
  query TermsAndConditions {
    TermsAndConditions {
      globalTerms
    }
  }
`;

/**
 * __useTermsAndConditionsQuery__
 *
 * To run a query within a React component, call `useTermsAndConditionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTermsAndConditionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTermsAndConditionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTermsAndConditionsQuery(
  baseOptions?: Apollo.QueryHookOptions<TermsAndConditionsQuery, TermsAndConditionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TermsAndConditionsQuery, TermsAndConditionsQueryVariables>(
    TermsAndConditionsDocument,
    options
  );
}
export function useTermsAndConditionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TermsAndConditionsQuery,
    TermsAndConditionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TermsAndConditionsQuery, TermsAndConditionsQueryVariables>(
    TermsAndConditionsDocument,
    options
  );
}
export type TermsAndConditionsQueryHookResult = ReturnType<typeof useTermsAndConditionsQuery>;
export type TermsAndConditionsLazyQueryHookResult = ReturnType<
  typeof useTermsAndConditionsLazyQuery
>;
export type TermsAndConditionsQueryResult = Apollo.QueryResult<
  TermsAndConditionsQuery,
  TermsAndConditionsQueryVariables
>;
