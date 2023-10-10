import * as Types from '../global-types';

import { InstructorsFragmentFragment } from './InstructorsFragment.generated';
import { ProductsFragmentFragment } from './ProductsFragment.generated';
import { gql } from '@apollo/client';
import { InstructorsFragmentFragmentDoc } from './InstructorsFragment.generated';
import { ProductsFragmentFragmentDoc } from './ProductsFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCourseDataQueryVariables = Types.Exact<{
  slug: Types.Scalars['Slug'];
}>;

export type GetCourseDataQuery = {
  __typename?: 'Query';
  CourseGroupBySlug?: {
    __typename?: 'CourseGroup';
    id: string;
    tabs?: Array<{
      __typename?: 'CourseTab';
      id?: string;
      label?: string;
      body?: string;
      tabType?: string;
      instructors?: Array<{ __typename?: 'Instructor' } & InstructorsFragmentFragment>;
      products?: Array<{ __typename?: 'Product' } & ProductsFragmentFragment>;
    }>;
  };
};

export const GetCourseDataDocument = gql`
  query GetCourseData($slug: Slug!) {
    CourseGroupBySlug(slug: $slug) {
      id
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
  ${InstructorsFragmentFragmentDoc}
  ${ProductsFragmentFragmentDoc}
`;

/**
 * __useGetCourseDataQuery__
 *
 * To run a query within a React component, call `useGetCourseDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCourseDataQuery(
  baseOptions: Apollo.QueryHookOptions<GetCourseDataQuery, GetCourseDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCourseDataQuery, GetCourseDataQueryVariables>(
    GetCourseDataDocument,
    options
  );
}
export function useGetCourseDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCourseDataQuery, GetCourseDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCourseDataQuery, GetCourseDataQueryVariables>(
    GetCourseDataDocument,
    options
  );
}
export type GetCourseDataQueryHookResult = ReturnType<typeof useGetCourseDataQuery>;
export type GetCourseDataLazyQueryHookResult = ReturnType<typeof useGetCourseDataLazyQuery>;
export type GetCourseDataQueryResult = Apollo.QueryResult<
  GetCourseDataQuery,
  GetCourseDataQueryVariables
>;
