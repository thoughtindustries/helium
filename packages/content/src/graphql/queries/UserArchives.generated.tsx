import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type ArchivesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ArchivesQuery = {
  __typename?: 'Query';
  UserArchives?: Array<{
    __typename?: 'ArchivedContent';
    id: string;
    user?: string;
    resource?: string;
    resourceType?: string;
    status?: string;
    archivedAt?: string;
    name?: string;
    reinstatable: boolean;
    waitlistActive: boolean;
    company?: {
      __typename?: 'Company';
      id: string;
      name?: string;
      subdomain?: string;
      catalogVisibilityEmails?: Array<string>;
      catalogBlock?: { __typename?: 'Block'; id: string };
      organization?: { __typename?: 'Organization'; id: string; name?: string };
    };
  }>;
};

export const ArchivesDocument = gql`
  query Archives {
    UserArchives {
      id
      company {
        id
        name
        subdomain
        catalogBlock {
          id
        }
        organization {
          id
          name
        }
        catalogVisibilityEmails
      }
      user
      resource
      resourceType
      status
      archivedAt
      name
      reinstatable
      waitlistActive
    }
  }
`;

/**
 * __useArchivesQuery__
 *
 * To run a query within a React component, call `useArchivesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArchivesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArchivesQuery({
 *   variables: {
 *   },
 * });
 */
export function useArchivesQuery(
  baseOptions?: Apollo.QueryHookOptions<ArchivesQuery, ArchivesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ArchivesQuery, ArchivesQueryVariables>(ArchivesDocument, options);
}
export function useArchivesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ArchivesQuery, ArchivesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ArchivesQuery, ArchivesQueryVariables>(ArchivesDocument, options);
}
export type ArchivesQueryHookResult = ReturnType<typeof useArchivesQuery>;
export type ArchivesLazyQueryHookResult = ReturnType<typeof useArchivesLazyQuery>;
export type ArchivesQueryResult = Apollo.QueryResult<ArchivesQuery, ArchivesQueryVariables>;
