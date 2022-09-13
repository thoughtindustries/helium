import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ArchiveUserCourseMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type ArchiveUserCourseMutation = { __typename?: 'Mutation'; ArchiveUserCourse?: string };

export const ArchiveUserCourseDocument = gql`
  mutation ArchiveUserCourse($id: ID!) {
    ArchiveUserCourse(id: $id)
  }
`;
export type ArchiveUserCourseMutationFn = Apollo.MutationFunction<
  ArchiveUserCourseMutation,
  ArchiveUserCourseMutationVariables
>;

/**
 * __useArchiveUserCourseMutation__
 *
 * To run a mutation, you first call `useArchiveUserCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveUserCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveUserCourseMutation, { data, loading, error }] = useArchiveUserCourseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArchiveUserCourseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ArchiveUserCourseMutation,
    ArchiveUserCourseMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ArchiveUserCourseMutation, ArchiveUserCourseMutationVariables>(
    ArchiveUserCourseDocument,
    options
  );
}
export type ArchiveUserCourseMutationHookResult = ReturnType<typeof useArchiveUserCourseMutation>;
export type ArchiveUserCourseMutationResult = Apollo.MutationResult<ArchiveUserCourseMutation>;
export type ArchiveUserCourseMutationOptions = Apollo.BaseMutationOptions<
  ArchiveUserCourseMutation,
  ArchiveUserCourseMutationVariables
>;
