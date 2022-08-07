import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TermsAndConditionsMutationVariables = Types.Exact<{ [key: string]: never }>;

export type TermsAndConditionsMutation = {
  __typename?: 'Mutation';
  TermsAndConditions: { __typename?: 'TermsAndConditions'; globalTerms?: string };
};

export const TermsAndConditionsDocument = gql`
  mutation TermsAndConditions {
    TermsAndConditions {
      globalTerms
    }
  }
`;
export type TermsAndConditionsMutationFn = Apollo.MutationFunction<
  TermsAndConditionsMutation,
  TermsAndConditionsMutationVariables
>;

/**
 * __useTermsAndConditionsMutation__
 *
 * To run a mutation, you first call `useTermsAndConditionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTermsAndConditionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [termsAndConditionsMutation, { data, loading, error }] = useTermsAndConditionsMutation({
 *   variables: {
 *   },
 * });
 */
export function useTermsAndConditionsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TermsAndConditionsMutation,
    TermsAndConditionsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TermsAndConditionsMutation, TermsAndConditionsMutationVariables>(
    TermsAndConditionsDocument,
    options
  );
}
export type TermsAndConditionsMutationHookResult = ReturnType<typeof useTermsAndConditionsMutation>;
export type TermsAndConditionsMutationResult = Apollo.MutationResult<TermsAndConditionsMutation>;
export type TermsAndConditionsMutationOptions = Apollo.BaseMutationOptions<
  TermsAndConditionsMutation,
  TermsAndConditionsMutationVariables
>;
