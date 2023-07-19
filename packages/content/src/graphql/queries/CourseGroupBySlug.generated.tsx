import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CourseGroupBySlugQueryVariables = Types.Exact<{
  slug: Types.Scalars['Slug'];
}>;

export type CourseGroupBySlugQuery = {
  __typename?: 'Query';
  CourseGroupBySlug?: {
    __typename?: 'CourseGroup';
    asset?: string;
    description?: string;
    title?: string;
    rating?: number;
    ratingsCount?: number;
  };
};

export const CourseGroupBySlugDocument = gql`
  query CourseGroupBySlug($slug: Slug!) {
    CourseGroupBySlug(slug: $slug) {
      asset
      description
      title
      rating
      ratingsCount
    }
  }
`;

/**
 * __useCourseGroupBySlugQuery__
 *
 * To run a query within a React component, call `useCourseGroupBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseGroupBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseGroupBySlugQuery({
 *   variables: {
 *      Slug: // value for 'Slug'
 *   },
 * });
 */
export function useCourseGroupBySlugQuery(
  baseOptions: Apollo.QueryHookOptions<CourseGroupBySlugQuery, CourseGroupBySlugQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CourseGroupBySlugQuery, CourseGroupBySlugQueryVariables>(
    CourseGroupBySlugDocument,
    options
  );
}
export function useCourseGroupBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CourseGroupBySlugQuery, CourseGroupBySlugQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CourseGroupBySlugQuery, CourseGroupBySlugQueryVariables>(
    CourseGroupBySlugDocument,
    options
  );
}
export type CourseGroupBySlugQueryHookResult = ReturnType<typeof useCourseGroupBySlugQuery>;
export type CourseGroupBySlugLazyQueryHookResult = ReturnType<typeof useCourseGroupBySlugLazyQuery>;
export type CourseGroupBySlugQueryResult = Apollo.QueryResult<
  CourseGroupBySlugQuery,
  CourseGroupBySlugQueryVariables
>;
