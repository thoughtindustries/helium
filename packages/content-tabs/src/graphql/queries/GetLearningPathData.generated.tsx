import * as Types from '../global-types';

import { InstructorsFragmentFragment } from './InstructorsFragment.generated';
import { ProductsFragmentFragment } from './ProductsFragment.generated';
import { gql } from '@apollo/client';
import { InstructorsFragmentFragmentDoc } from './InstructorsFragment.generated';
import { ProductsFragmentFragmentDoc } from './ProductsFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetLearningPathDataQueryVariables = Types.Exact<{
  slug: Types.Scalars['Slug'];
}>;

export type GetLearningPathDataQuery = {
  __typename?: 'Query';
  LearningPathBySlug?: {
    __typename?: 'LearningPath';
    name: string;
    source?: string;
    milestones?: Array<{ __typename?: 'Milestone'; name: string; kind: Types.MilestoneKind }>;
    tabs?: {
      __typename?: 'LearningPathTabs';
      tabs?: Array<{
        __typename?: 'LearningPathTab';
        id: string;
        label?: string;
        body?: string;
        tabType?: string;
        instructors?: Array<{ __typename?: 'Instructor' } & InstructorsFragmentFragment>;
        products?: Array<{ __typename?: 'Product' } & ProductsFragmentFragment>;
      }>;
    };
  };
};

export const GetLearningPathDataDocument = gql`
  query GetLearningPathData($slug: Slug!) {
    LearningPathBySlug(slug: $slug) {
      name
      milestones {
        name
        kind
      }
      source
      tabs {
        tabs {
          id
          label
          body
          tabType
          instructors {
            ...InstructorsFragment
          }
          products {
            ...ProductsFragment
          }
        }
      }
    }
  }
  ${InstructorsFragmentFragmentDoc}
  ${ProductsFragmentFragmentDoc}
`;

/**
 * __useGetLearningPathDataQuery__
 *
 * To run a query within a React component, call `useGetLearningPathDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLearningPathDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLearningPathDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetLearningPathDataQuery(
  baseOptions: Apollo.QueryHookOptions<GetLearningPathDataQuery, GetLearningPathDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLearningPathDataQuery, GetLearningPathDataQueryVariables>(
    GetLearningPathDataDocument,
    options
  );
}
export function useGetLearningPathDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLearningPathDataQuery,
    GetLearningPathDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLearningPathDataQuery, GetLearningPathDataQueryVariables>(
    GetLearningPathDataDocument,
    options
  );
}
export type GetLearningPathDataQueryHookResult = ReturnType<typeof useGetLearningPathDataQuery>;
export type GetLearningPathDataLazyQueryHookResult = ReturnType<
  typeof useGetLearningPathDataLazyQuery
>;
export type GetLearningPathDataQueryResult = Apollo.QueryResult<
  GetLearningPathDataQuery,
  GetLearningPathDataQueryVariables
>;
