import * as Types from './global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateAssessmentAttemptMutationMutationVariables = Types.Exact<{
  activeQuestion?: Types.InputMaybe<Types.QuestionInput>;
  assessmentAttempt?: Types.InputMaybe<Types.AssessmentAttemptInput>;
}>;

export type UpdateAssessmentAttemptMutationMutation = {
  __typename?: 'Mutation';
  UpdateAssessmentAttempt: {
    __typename?: 'AssessmentAttempt';
    id: string;
    status: Types.AssessmentAttemptStatus;
    questions?: Array<{ __typename?: 'QuizQuestion'; questionId?: string }>;
  };
};

export const UpdateAssessmentAttemptMutationDocument = gql`
  mutation UpdateAssessmentAttemptMutation(
    $activeQuestion: QuestionInput
    $assessmentAttempt: AssessmentAttemptInput
  ) {
    UpdateAssessmentAttempt(
      activeQuestion: $activeQuestion
      assessmentAttempt: $assessmentAttempt
    ) {
      id
      status
      questions {
        questionId
      }
    }
  }
`;
export type UpdateAssessmentAttemptMutationMutationFn = Apollo.MutationFunction<
  UpdateAssessmentAttemptMutationMutation,
  UpdateAssessmentAttemptMutationMutationVariables
>;

/**
 * __useUpdateAssessmentAttemptMutationMutation__
 *
 * To run a mutation, you first call `useUpdateAssessmentAttemptMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssessmentAttemptMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssessmentAttemptMutationMutation, { data, loading, error }] = useUpdateAssessmentAttemptMutationMutation({
 *   variables: {
 *      activeQuestion: // value for 'activeQuestion'
 *      assessmentAttempt: // value for 'assessmentAttempt'
 *   },
 * });
 */
export function useUpdateAssessmentAttemptMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAssessmentAttemptMutationMutation,
    UpdateAssessmentAttemptMutationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateAssessmentAttemptMutationMutation,
    UpdateAssessmentAttemptMutationMutationVariables
  >(UpdateAssessmentAttemptMutationDocument, options);
}
export type UpdateAssessmentAttemptMutationMutationHookResult = ReturnType<
  typeof useUpdateAssessmentAttemptMutationMutation
>;
export type UpdateAssessmentAttemptMutationMutationResult =
  Apollo.MutationResult<UpdateAssessmentAttemptMutationMutation>;
export type UpdateAssessmentAttemptMutationMutationOptions = Apollo.BaseMutationOptions<
  UpdateAssessmentAttemptMutationMutation,
  UpdateAssessmentAttemptMutationMutationVariables
>;
