import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ArchiveUserLearningPathMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type ArchiveUserLearningPathMutation = {
  __typename?: 'Mutation';
  ArchiveUserLearningPath?: string;
};

export const ArchiveUserLearningPathDocument = gql`
  mutation ArchiveUserLearningPath($id: ID!) {
    ArchiveUserLearningPath(id: $id)
  }
`;
export type ArchiveUserLearningPathMutationFn = Apollo.MutationFunction<
  ArchiveUserLearningPathMutation,
  ArchiveUserLearningPathMutationVariables
>;

/**
 * __useArchiveUserLearningPathMutation__
 *
 * To run a mutation, you first call `useArchiveUserLearningPathMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveUserLearningPathMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveUserLearningPathMutation, { data, loading, error }] = useArchiveUserLearningPathMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArchiveUserLearningPathMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ArchiveUserLearningPathMutation,
    ArchiveUserLearningPathMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ArchiveUserLearningPathMutation,
    ArchiveUserLearningPathMutationVariables
  >(ArchiveUserLearningPathDocument, options);
}
export type ArchiveUserLearningPathMutationHookResult = ReturnType<
  typeof useArchiveUserLearningPathMutation
>;
export type ArchiveUserLearningPathMutationResult =
  Apollo.MutationResult<ArchiveUserLearningPathMutation>;
export type ArchiveUserLearningPathMutationOptions = Apollo.BaseMutationOptions<
  ArchiveUserLearningPathMutation,
  ArchiveUserLearningPathMutationVariables
>;
