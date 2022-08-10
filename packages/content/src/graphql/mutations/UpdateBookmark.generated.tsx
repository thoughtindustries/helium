import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateBookmarkMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  note?: Types.InputMaybe<Types.Scalars['String']>;
  bookmarkFolder: Types.Scalars['ID'];
}>;

export type UpdateBookmarkMutation = {
  __typename?: 'Mutation';
  UpdateBookmark: { __typename?: 'Bookmark'; id: string };
};

export const UpdateBookmarkDocument = gql`
  mutation UpdateBookmark($id: ID!, $note: String, $bookmarkFolder: ID!) {
    UpdateBookmark(id: $id, note: $note, bookmarkFolder: $bookmarkFolder) {
      id
    }
  }
`;
export type UpdateBookmarkMutationFn = Apollo.MutationFunction<
  UpdateBookmarkMutation,
  UpdateBookmarkMutationVariables
>;

/**
 * __useUpdateBookmarkMutation__
 *
 * To run a mutation, you first call `useUpdateBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookmarkMutation, { data, loading, error }] = useUpdateBookmarkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      note: // value for 'note'
 *      bookmarkFolder: // value for 'bookmarkFolder'
 *   },
 * });
 */
export function useUpdateBookmarkMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateBookmarkMutation, UpdateBookmarkMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateBookmarkMutation, UpdateBookmarkMutationVariables>(
    UpdateBookmarkDocument,
    options
  );
}
export type UpdateBookmarkMutationHookResult = ReturnType<typeof useUpdateBookmarkMutation>;
export type UpdateBookmarkMutationResult = Apollo.MutationResult<UpdateBookmarkMutation>;
export type UpdateBookmarkMutationOptions = Apollo.BaseMutationOptions<
  UpdateBookmarkMutation,
  UpdateBookmarkMutationVariables
>;
