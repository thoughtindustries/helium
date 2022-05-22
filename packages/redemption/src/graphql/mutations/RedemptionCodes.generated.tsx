import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RedemptionCodesMutationVariables = Types.Exact<{
  code: Types.Scalars['String'];
}>;

export type RedemptionCodesMutation = {
  __typename?: 'Mutation';
  RedemptionCodes?: { __typename?: 'RedemptionCodes'; valid?: boolean; alreadyRedeemed?: boolean };
};

export const RedemptionCodesDocument = gql`
  mutation RedemptionCodes($code: String!) {
    RedemptionCodes(code: $code) {
      valid
      alreadyRedeemed
    }
  }
`;
export type RedemptionCodesMutationFn = Apollo.MutationFunction<
  RedemptionCodesMutation,
  RedemptionCodesMutationVariables
>;

/**
 * __useRedemptionCodesMutation__
 *
 * To run a mutation, you first call `useRedemptionCodesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRedemptionCodesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [redemptionCodesMutation, { data, loading, error }] = useRedemptionCodesMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useRedemptionCodesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RedemptionCodesMutation,
    RedemptionCodesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RedemptionCodesMutation, RedemptionCodesMutationVariables>(
    RedemptionCodesDocument,
    options
  );
}
export type RedemptionCodesMutationHookResult = ReturnType<typeof useRedemptionCodesMutation>;
export type RedemptionCodesMutationResult = Apollo.MutationResult<RedemptionCodesMutation>;
export type RedemptionCodesMutationOptions = Apollo.BaseMutationOptions<
  RedemptionCodesMutation,
  RedemptionCodesMutationVariables
>;
