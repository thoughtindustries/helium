import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type DestroyBookmarkFolderMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type DestroyBookmarkFolderMutation = {
  __typename?: 'Mutation';
  DestroyBookmarkFolder: string;
};

export const DestroyBookmarkFolderDocument = gql`
  mutation DestroyBookmarkFolder($id: ID!) {
    DestroyBookmarkFolder(id: $id)
  }
`;
export type DestroyBookmarkFolderMutationFn = Apollo.MutationFunction<
  DestroyBookmarkFolderMutation,
  DestroyBookmarkFolderMutationVariables
>;

/**
 * __useDestroyBookmarkFolderMutation__
 *
 * To run a mutation, you first call `useDestroyBookmarkFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDestroyBookmarkFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [destroyBookmarkFolderMutation, { data, loading, error }] = useDestroyBookmarkFolderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDestroyBookmarkFolderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DestroyBookmarkFolderMutation,
    DestroyBookmarkFolderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DestroyBookmarkFolderMutation, DestroyBookmarkFolderMutationVariables>(
    DestroyBookmarkFolderDocument,
    options
  );
}
export type DestroyBookmarkFolderMutationHookResult = ReturnType<
  typeof useDestroyBookmarkFolderMutation
>;
export type DestroyBookmarkFolderMutationResult =
  Apollo.MutationResult<DestroyBookmarkFolderMutation>;
export type DestroyBookmarkFolderMutationOptions = Apollo.BaseMutationOptions<
  DestroyBookmarkFolderMutation,
  DestroyBookmarkFolderMutationVariables
>;
