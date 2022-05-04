import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type AddResourceToQueueMutationVariables = Types.Exact<{
  resourceType?: Types.InputMaybe<Types.ContentKind>;
  resourceId: Types.Scalars['ID'];
}>;

export type AddResourceToQueueMutation = { __typename?: 'Mutation'; AddResourceToQueue: boolean };

export const AddResourceToQueueDocument = gql`
  mutation AddResourceToQueue($resourceType: ContentKind, $resourceId: ID!) {
    AddResourceToQueue(resourceType: $resourceType, resourceId: $resourceId)
  }
`;
export type AddResourceToQueueMutationFn = Apollo.MutationFunction<
  AddResourceToQueueMutation,
  AddResourceToQueueMutationVariables
>;

/**
 * __useAddResourceToQueueMutation__
 *
 * To run a mutation, you first call `useAddResourceToQueueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddResourceToQueueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addResourceToQueueMutation, { data, loading, error }] = useAddResourceToQueueMutation({
 *   variables: {
 *      resourceType: // value for 'resourceType'
 *      resourceId: // value for 'resourceId'
 *   },
 * });
 */
export function useAddResourceToQueueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddResourceToQueueMutation,
    AddResourceToQueueMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddResourceToQueueMutation, AddResourceToQueueMutationVariables>(
    AddResourceToQueueDocument,
    options
  );
}
export type AddResourceToQueueMutationHookResult = ReturnType<typeof useAddResourceToQueueMutation>;
export type AddResourceToQueueMutationResult = Apollo.MutationResult<AddResourceToQueueMutation>;
export type AddResourceToQueueMutationOptions = Apollo.BaseMutationOptions<
  AddResourceToQueueMutation,
  AddResourceToQueueMutationVariables
>;
