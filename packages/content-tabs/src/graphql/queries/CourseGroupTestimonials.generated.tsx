import * as Types from '../global-types';

import { UserFragmentFragment } from './UserFragment.generated';
import { gql } from '@apollo/client';
import { UserFragmentFragmentDoc } from './UserFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CourseGroupTestimonialsQueryVariables = Types.Exact<{
  id: Types.Scalars['UUID'];
}>;

export type CourseGroupTestimonialsQuery = {
  __typename?: 'Query';
  CourseGroupTestimonials: Array<{
    __typename?: 'Testimonial';
    id?: string;
    createdAt?: string;
    body?: string;
    rating?: number;
    user?: { __typename?: 'User' } & UserFragmentFragment;
  }>;
};

export const CourseGroupTestimonialsDocument = gql`
  query CourseGroupTestimonials($id: UUID!) {
    CourseGroupTestimonials(id: $id) {
      id
      createdAt
      user {
        ...UserFragment
      }
      body
      rating
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useCourseGroupTestimonialsQuery__
 *
 * To run a query within a React component, call `useCourseGroupTestimonialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseGroupTestimonialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseGroupTestimonialsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCourseGroupTestimonialsQuery(
  baseOptions: Apollo.QueryHookOptions<
    CourseGroupTestimonialsQuery,
    CourseGroupTestimonialsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CourseGroupTestimonialsQuery, CourseGroupTestimonialsQueryVariables>(
    CourseGroupTestimonialsDocument,
    options
  );
}
export function useCourseGroupTestimonialsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CourseGroupTestimonialsQuery,
    CourseGroupTestimonialsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CourseGroupTestimonialsQuery, CourseGroupTestimonialsQueryVariables>(
    CourseGroupTestimonialsDocument,
    options
  );
}
export type CourseGroupTestimonialsQueryHookResult = ReturnType<
  typeof useCourseGroupTestimonialsQuery
>;
export type CourseGroupTestimonialsLazyQueryHookResult = ReturnType<
  typeof useCourseGroupTestimonialsLazyQuery
>;
export type CourseGroupTestimonialsQueryResult = Apollo.QueryResult<
  CourseGroupTestimonialsQuery,
  CourseGroupTestimonialsQueryVariables
>;
