import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RedeemRegistrationAndRedemptionCodesMutationVariables = Types.Exact<{
  validatedRedemptionCodes: Array<Types.Scalars['String']> | Types.Scalars['String'];
}>;

export type RedeemRegistrationAndRedemptionCodesMutation = {
  __typename?: 'Mutation';
  RedeemRegistrationAndRedemptionCodes: {
    __typename?: 'RedeemedRegistrationRedemptionResult';
    redeemed: boolean;
  };
};

export const RedeemRegistrationAndRedemptionCodesDocument = gql`
  mutation RedeemRegistrationAndRedemptionCodes($validatedRedemptionCodes: [String!]!) {
    RedeemRegistrationAndRedemptionCodes(validatedRedemptionCodes: $validatedRedemptionCodes) {
      redeemed
    }
  }
`;
export type RedeemRegistrationAndRedemptionCodesMutationFn = Apollo.MutationFunction<
  RedeemRegistrationAndRedemptionCodesMutation,
  RedeemRegistrationAndRedemptionCodesMutationVariables
>;

/**
 * __useRedeemRegistrationAndRedemptionCodesMutation__
 *
 * To run a mutation, you first call `useRedeemRegistrationAndRedemptionCodesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRedeemRegistrationAndRedemptionCodesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [redeemRegistrationAndRedemptionCodesMutation, { data, loading, error }] = useRedeemRegistrationAndRedemptionCodesMutation({
 *   variables: {
 *      validatedRedemptionCodes: // value for 'validatedRedemptionCodes'
 *   },
 * });
 */
export function useRedeemRegistrationAndRedemptionCodesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RedeemRegistrationAndRedemptionCodesMutation,
    RedeemRegistrationAndRedemptionCodesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RedeemRegistrationAndRedemptionCodesMutation,
    RedeemRegistrationAndRedemptionCodesMutationVariables
  >(RedeemRegistrationAndRedemptionCodesDocument, options);
}
export type RedeemRegistrationAndRedemptionCodesMutationHookResult = ReturnType<
  typeof useRedeemRegistrationAndRedemptionCodesMutation
>;
export type RedeemRegistrationAndRedemptionCodesMutationResult =
  Apollo.MutationResult<RedeemRegistrationAndRedemptionCodesMutation>;
export type RedeemRegistrationAndRedemptionCodesMutationOptions = Apollo.BaseMutationOptions<
  RedeemRegistrationAndRedemptionCodesMutation,
  RedeemRegistrationAndRedemptionCodesMutationVariables
>;
