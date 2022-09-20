import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateCertificateFromUploadMutationVariables = Types.Exact<{
  asset: Types.Scalars['URL'];
  certificateUploadFields?: Types.InputMaybe<
    Array<Types.CertificateUploadField> | Types.CertificateUploadField
  >;
}>;

export type CreateCertificateFromUploadMutation = {
  __typename?: 'Mutation';
  CreateCertificateFromUpload: {
    __typename: 'Certificate';
    id: string;
    externalResourceTitle?: string;
  };
};

export const CreateCertificateFromUploadDocument = gql`
  mutation CreateCertificateFromUpload(
    $asset: URL!
    $certificateUploadFields: [CertificateUploadField!]
  ) {
    CreateCertificateFromUpload(asset: $asset, certificateUploadFields: $certificateUploadFields) {
      __typename
      id
      externalResourceTitle
    }
  }
`;
export type CreateCertificateFromUploadMutationFn = Apollo.MutationFunction<
  CreateCertificateFromUploadMutation,
  CreateCertificateFromUploadMutationVariables
>;

/**
 * __useCreateCertificateFromUploadMutation__
 *
 * To run a mutation, you first call `useCreateCertificateFromUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCertificateFromUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCertificateFromUploadMutation, { data, loading, error }] = useCreateCertificateFromUploadMutation({
 *   variables: {
 *      asset: // value for 'asset'
 *      certificateUploadFields: // value for 'certificateUploadFields'
 *   },
 * });
 */
export function useCreateCertificateFromUploadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCertificateFromUploadMutation,
    CreateCertificateFromUploadMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCertificateFromUploadMutation,
    CreateCertificateFromUploadMutationVariables
  >(CreateCertificateFromUploadDocument, options);
}
export type CreateCertificateFromUploadMutationHookResult = ReturnType<
  typeof useCreateCertificateFromUploadMutation
>;
export type CreateCertificateFromUploadMutationResult =
  Apollo.MutationResult<CreateCertificateFromUploadMutation>;
export type CreateCertificateFromUploadMutationOptions = Apollo.BaseMutationOptions<
  CreateCertificateFromUploadMutation,
  CreateCertificateFromUploadMutationVariables
>;
