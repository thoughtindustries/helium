import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DestroyBookmarkMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type DestroyBookmarkMutation = { __typename?: 'Mutation'; DestroyBookmark?: string };

export const DestroyBookmarkDocument = gql`
  mutation DestroyBookmark($id: ID!) {
    DestroyBookmark(id: $id)
  }
`;
export type DestroyBookmarkMutationFn = Apollo.MutationFunction<
  DestroyBookmarkMutation,
  DestroyBookmarkMutationVariables
>;

/**
 * __useDestroyBookmarkMutation__
 *
 * To run a mutation, you first call `useDestroyBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDestroyBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [destroyBookmarkMutation, { data, loading, error }] = useDestroyBookmarkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDestroyBookmarkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DestroyBookmarkMutation,
    DestroyBookmarkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DestroyBookmarkMutation, DestroyBookmarkMutationVariables>(
    DestroyBookmarkDocument,
    options
  );
}
export type DestroyBookmarkMutationHookResult = ReturnType<typeof useDestroyBookmarkMutation>;
export type DestroyBookmarkMutationResult = Apollo.MutationResult<DestroyBookmarkMutation>;
export type DestroyBookmarkMutationOptions = Apollo.BaseMutationOptions<
  DestroyBookmarkMutation,
  DestroyBookmarkMutationVariables
>;
