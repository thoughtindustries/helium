import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ReinstateUserLearningPathMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type ReinstateUserLearningPathMutation = {
  __typename?: 'Mutation';
  ReinstateUserLearningPath?: string;
};

export const ReinstateUserLearningPathDocument = gql`
  mutation ReinstateUserLearningPath($id: ID!) {
    ReinstateUserLearningPath(id: $id)
  }
`;
export type ReinstateUserLearningPathMutationFn = Apollo.MutationFunction<
  ReinstateUserLearningPathMutation,
  ReinstateUserLearningPathMutationVariables
>;

/**
 * __useReinstateUserLearningPathMutation__
 *
 * To run a mutation, you first call `useReinstateUserLearningPathMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReinstateUserLearningPathMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reinstateUserLearningPathMutation, { data, loading, error }] = useReinstateUserLearningPathMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReinstateUserLearningPathMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ReinstateUserLearningPathMutation,
    ReinstateUserLearningPathMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ReinstateUserLearningPathMutation,
    ReinstateUserLearningPathMutationVariables
  >(ReinstateUserLearningPathDocument, options);
}
export type ReinstateUserLearningPathMutationHookResult = ReturnType<
  typeof useReinstateUserLearningPathMutation
>;
export type ReinstateUserLearningPathMutationResult =
  Apollo.MutationResult<ReinstateUserLearningPathMutation>;
export type ReinstateUserLearningPathMutationOptions = Apollo.BaseMutationOptions<
  ReinstateUserLearningPathMutation,
  ReinstateUserLearningPathMutationVariables
>;
