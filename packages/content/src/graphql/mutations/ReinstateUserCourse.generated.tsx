import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ReinstateUserCourseMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type ReinstateUserCourseMutation = { __typename?: 'Mutation'; ReinstateUserCourse?: string };

export const ReinstateUserCourseDocument = gql`
  mutation ReinstateUserCourse($id: ID!) {
    ReinstateUserCourse(id: $id)
  }
`;
export type ReinstateUserCourseMutationFn = Apollo.MutationFunction<
  ReinstateUserCourseMutation,
  ReinstateUserCourseMutationVariables
>;

/**
 * __useReinstateUserCourseMutation__
 *
 * To run a mutation, you first call `useReinstateUserCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReinstateUserCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reinstateUserCourseMutation, { data, loading, error }] = useReinstateUserCourseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReinstateUserCourseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ReinstateUserCourseMutation,
    ReinstateUserCourseMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ReinstateUserCourseMutation, ReinstateUserCourseMutationVariables>(
    ReinstateUserCourseDocument,
    options
  );
}
export type ReinstateUserCourseMutationHookResult = ReturnType<
  typeof useReinstateUserCourseMutation
>;
export type ReinstateUserCourseMutationResult = Apollo.MutationResult<ReinstateUserCourseMutation>;
export type ReinstateUserCourseMutationOptions = Apollo.BaseMutationOptions<
  ReinstateUserCourseMutation,
  ReinstateUserCourseMutationVariables
>;
