import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserCertificatesQueryVariables = Types.Exact<{
  query?: Types.InputMaybe<Types.Scalars['String']>;
  includeExpiredCertificates?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;

export type UserCertificatesQuery = {
  __typename?: 'Query';
  UserCertificates?: Array<{
    __typename: 'Certificate';
    id: string;
    resourceId?: string;
    expirationDate?: string;
    isExpired: boolean;
    externalResourceTitle?: string;
    url: string;
    source?: string;
    contentItem?: {
      __typename: 'Content';
      id: string;
      asset?: string;
      courseEndDate?: string;
      courseStartDate?: string;
      coursePresold: boolean;
      description?: string;
      kind?: Types.ContentKind;
      slug: string;
      availabilityStatus?: string;
      contentTypeLabel?: string;
      title?: string;
      timeZone?: string;
    };
  }>;
};

export const UserCertificatesDocument = gql`
  query UserCertificates($query: String, $includeExpiredCertificates: Boolean) {
    UserCertificates(query: $query, includeExpiredCertificates: $includeExpiredCertificates) {
      __typename
      id
      resourceId
      expirationDate
      isExpired
      externalResourceTitle
      url
      source
      contentItem {
        __typename
        id
        asset
        courseEndDate
        courseStartDate
        coursePresold
        description
        kind
        slug
        availabilityStatus
        contentTypeLabel
        title
        timeZone
      }
    }
  }
`;

/**
 * __useUserCertificatesQuery__
 *
 * To run a query within a React component, call `useUserCertificatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCertificatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCertificatesQuery({
 *   variables: {
 *      query: // value for 'query'
 *      includeExpiredCertificates: // value for 'includeExpiredCertificates'
 *   },
 * });
 */
export function useUserCertificatesQuery(
  baseOptions?: Apollo.QueryHookOptions<UserCertificatesQuery, UserCertificatesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserCertificatesQuery, UserCertificatesQueryVariables>(
    UserCertificatesDocument,
    options
  );
}
export function useUserCertificatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserCertificatesQuery, UserCertificatesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserCertificatesQuery, UserCertificatesQueryVariables>(
    UserCertificatesDocument,
    options
  );
}
export type UserCertificatesQueryHookResult = ReturnType<typeof useUserCertificatesQuery>;
export type UserCertificatesLazyQueryHookResult = ReturnType<typeof useUserCertificatesLazyQuery>;
export type UserCertificatesQueryResult = Apollo.QueryResult<
  UserCertificatesQuery,
  UserCertificatesQueryVariables
>;
