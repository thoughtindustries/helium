import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserCertificateFieldsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UserCertificateFieldsQuery = {
  __typename?: 'Query';
  UserCertificateFields?: Array<{
    __typename: 'CertificateField';
    id: string;
    type: Types.CertificateFieldType;
    label: string;
    awardTypeId?: string;
    awardType?: { __typename: 'AwardType'; id: string; pluralLabel?: string };
  }>;
};

export const UserCertificateFieldsDocument = gql`
  query UserCertificateFields {
    UserCertificateFields {
      __typename
      id
      type
      label
      awardTypeId
      awardType {
        __typename
        id
        pluralLabel
      }
    }
  }
`;

/**
 * __useUserCertificateFieldsQuery__
 *
 * To run a query within a React component, call `useUserCertificateFieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCertificateFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCertificateFieldsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserCertificateFieldsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserCertificateFieldsQuery,
    UserCertificateFieldsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserCertificateFieldsQuery, UserCertificateFieldsQueryVariables>(
    UserCertificateFieldsDocument,
    options
  );
}
export function useUserCertificateFieldsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserCertificateFieldsQuery,
    UserCertificateFieldsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserCertificateFieldsQuery, UserCertificateFieldsQueryVariables>(
    UserCertificateFieldsDocument,
    options
  );
}
export type UserCertificateFieldsQueryHookResult = ReturnType<typeof useUserCertificateFieldsQuery>;
export type UserCertificateFieldsLazyQueryHookResult = ReturnType<
  typeof useUserCertificateFieldsLazyQuery
>;
export type UserCertificateFieldsQueryResult = Apollo.QueryResult<
  UserCertificateFieldsQuery,
  UserCertificateFieldsQueryVariables
>;
