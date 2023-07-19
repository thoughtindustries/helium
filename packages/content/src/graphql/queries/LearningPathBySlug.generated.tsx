import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LearningPathBySlugQueryVariables = Types.Exact<{
  slug: Types.Scalars['Slug'];
}>;

export type LearningPathBySlugQuery = {
  __typename?: 'Query';
  LearningPathBySlug?: {
    __typename?: 'LearningPath';
    name: string;
    shortDescription?: string;
    asset?: string;
  };
};

export const LearningPathBySlugDocument = gql`
  query LearningPathBySlug($slug: Slug!) {
    LearningPathBySlug(slug: $slug) {
      name
      shortDescription
      asset
    }
  }
`;

/**
 * __useLearningPathBySlugQuery__
 *
 * To run a query within a React component, call `useLearningPathBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useLearningPathBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLearningPathBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useLearningPathBySlugQuery(
  baseOptions: Apollo.QueryHookOptions<LearningPathBySlugQuery, LearningPathBySlugQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LearningPathBySlugQuery, LearningPathBySlugQueryVariables>(
    LearningPathBySlugDocument,
    options
  );
}
export function useLearningPathBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LearningPathBySlugQuery,
    LearningPathBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LearningPathBySlugQuery, LearningPathBySlugQueryVariables>(
    LearningPathBySlugDocument,
    options
  );
}
export type LearningPathBySlugQueryHookResult = ReturnType<typeof useLearningPathBySlugQuery>;
export type LearningPathBySlugLazyQueryHookResult = ReturnType<
  typeof useLearningPathBySlugLazyQuery
>;
export type LearningPathBySlugQueryResult = Apollo.QueryResult<
  LearningPathBySlugQuery,
  LearningPathBySlugQueryVariables
>;
