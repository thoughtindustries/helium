import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateBookmarkFolderMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  name: Types.Scalars['String'];
}>;

export type UpdateBookmarkFolderMutation = {
  __typename?: 'Mutation';
  UpdateBookmarkFolder: { __typename?: 'BookmarkFolder'; id: string; name: string };
};

export const UpdateBookmarkFolderDocument = gql`
  mutation UpdateBookmarkFolder($id: ID!, $name: String!) {
    UpdateBookmarkFolder(id: $id, name: $name) {
      id
      name
    }
  }
`;
export type UpdateBookmarkFolderMutationFn = Apollo.MutationFunction<
  UpdateBookmarkFolderMutation,
  UpdateBookmarkFolderMutationVariables
>;

/**
 * __useUpdateBookmarkFolderMutation__
 *
 * To run a mutation, you first call `useUpdateBookmarkFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookmarkFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookmarkFolderMutation, { data, loading, error }] = useUpdateBookmarkFolderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateBookmarkFolderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBookmarkFolderMutation,
    UpdateBookmarkFolderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateBookmarkFolderMutation, UpdateBookmarkFolderMutationVariables>(
    UpdateBookmarkFolderDocument,
    options
  );
}
export type UpdateBookmarkFolderMutationHookResult = ReturnType<
  typeof useUpdateBookmarkFolderMutation
>;
export type UpdateBookmarkFolderMutationResult =
  Apollo.MutationResult<UpdateBookmarkFolderMutation>;
export type UpdateBookmarkFolderMutationOptions = Apollo.BaseMutationOptions<
  UpdateBookmarkFolderMutation,
  UpdateBookmarkFolderMutationVariables
>;
