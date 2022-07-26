import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ValidateRedemptionCodeMutationVariables = Types.Exact<{
  code: Types.Scalars['String'];
}>;

export type ValidateRedemptionCodeMutation = {
  __typename?: 'Mutation';
  ValidateRedemptionCode: {
    __typename?: 'ValidateRedemptionCodeResult';
    valid: boolean;
    alreadyRedeemed: boolean;
    codeExpired: boolean;
  };
};

export const ValidateRedemptionCodeDocument = gql`
  mutation ValidateRedemptionCode($code: String!) {
    ValidateRedemptionCode(code: $code) {
      valid
      alreadyRedeemed
      codeExpired
    }
  }
`;
export type ValidateRedemptionCodeMutationFn = Apollo.MutationFunction<
  ValidateRedemptionCodeMutation,
  ValidateRedemptionCodeMutationVariables
>;

/**
 * __useValidateRedemptionCodeMutation__
 *
 * To run a mutation, you first call `useValidateRedemptionCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateRedemptionCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateRedemptionCodeMutation, { data, loading, error }] = useValidateRedemptionCodeMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useValidateRedemptionCodeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ValidateRedemptionCodeMutation,
    ValidateRedemptionCodeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ValidateRedemptionCodeMutation,
    ValidateRedemptionCodeMutationVariables
  >(ValidateRedemptionCodeDocument, options);
}
export type ValidateRedemptionCodeMutationHookResult = ReturnType<
  typeof useValidateRedemptionCodeMutation
>;
export type ValidateRedemptionCodeMutationResult =
  Apollo.MutationResult<ValidateRedemptionCodeMutation>;
export type ValidateRedemptionCodeMutationOptions = Apollo.BaseMutationOptions<
  ValidateRedemptionCodeMutation,
  ValidateRedemptionCodeMutationVariables
>;
