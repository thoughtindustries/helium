import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RedeemRedemptionCodeMutationVariables = Types.Exact<{
  code: Types.Scalars['String'];
}>;

export type RedeemRedemptionCodeMutation = {
  __typename?: 'Mutation';
  RedeemRedemptionCode?: {
    __typename?: 'RedeemRedemptionCode';
    valid?: boolean;
    alreadyRedeemed?: boolean;
  };
};

export const RedeemRedemptionCodeDocument = gql`
  mutation RedeemRedemptionCode($code: String!) {
    RedeemRedemptionCode(code: $code) {
      valid
      alreadyRedeemed
    }
  }
`;
export type RedeemRedemptionCodeMutationFn = Apollo.MutationFunction<
  RedeemRedemptionCodeMutation,
  RedeemRedemptionCodeMutationVariables
>;

/**
 * __useRedeemRedemptionCodeMutation__
 *
 * To run a mutation, you first call `useRedeemRedemptionCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRedeemRedemptionCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [RedeemRedemptionCodeMutation, { data, loading, error }] = useRedeemRedemptionCodeMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useRedeemRedemptionCodeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RedeemRedemptionCodeMutation,
    RedeemRedemptionCodeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RedeemRedemptionCodeMutation, RedeemRedemptionCodeMutationVariables>(
    RedeemRedemptionCodeDocument,
    options
  );
}
export type RedeemRedemptionCodeMutationHookResult = ReturnType<
  typeof useRedeemRedemptionCodeMutation
>;
export type RedeemRedemptionCodeMutationResult =
  Apollo.MutationResult<RedeemRedemptionCodeMutation>;
export type RedeemRedemptionCodeMutationOptions = Apollo.BaseMutationOptions<
  RedeemRedemptionCodeMutation,
  RedeemRedemptionCodeMutationVariables
>;
