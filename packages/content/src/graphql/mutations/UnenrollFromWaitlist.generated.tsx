import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UnenrollFromWaitlistMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type UnenrollFromWaitlistMutation = {
  __typename?: 'Mutation';
  UnenrollFromWaitlist: boolean;
};

export const UnenrollFromWaitlistDocument = gql`
  mutation UnenrollFromWaitlist($id: ID!) {
    UnenrollFromWaitlist(id: $id)
  }
`;
export type UnenrollFromWaitlistMutationFn = Apollo.MutationFunction<
  UnenrollFromWaitlistMutation,
  UnenrollFromWaitlistMutationVariables
>;

/**
 * __useUnenrollFromWaitlistMutation__
 *
 * To run a mutation, you first call `useUnenrollFromWaitlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnenrollFromWaitlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unenrollFromWaitlistMutation, { data, loading, error }] = useUnenrollFromWaitlistMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnenrollFromWaitlistMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnenrollFromWaitlistMutation,
    UnenrollFromWaitlistMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UnenrollFromWaitlistMutation, UnenrollFromWaitlistMutationVariables>(
    UnenrollFromWaitlistDocument,
    options
  );
}
export type UnenrollFromWaitlistMutationHookResult = ReturnType<
  typeof useUnenrollFromWaitlistMutation
>;
export type UnenrollFromWaitlistMutationResult =
  Apollo.MutationResult<UnenrollFromWaitlistMutation>;
export type UnenrollFromWaitlistMutationOptions = Apollo.BaseMutationOptions<
  UnenrollFromWaitlistMutation,
  UnenrollFromWaitlistMutationVariables
>;
