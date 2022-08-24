import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserCourseByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type UserCourseByIdQuery = {
  __typename?: 'Query';
  UserCourseById: {
    __typename?: 'Course';
    id: string;
    title?: string;
    slug: string;
    createdAt?: string;
    updatedAt?: string;
    courseStartDate?: string;
    courseEndDate?: string;
    status?: Types.Status;
    webinarId?: string;
    parentCourseId?: string;
    hasChildren: boolean;
    roster?: boolean;
    discussionsEnabled?: boolean;
  };
};

export const UserCourseByIdDocument = gql`
  query UserCourseById($id: ID!) {
    UserCourseById(id: $id) {
      id
      title
      slug
      createdAt
      updatedAt
      courseStartDate
      courseEndDate
      status
      webinarId
      parentCourseId
      hasChildren
      roster
      discussionsEnabled
    }
  }
`;

/**
 * __useUserCourseByIdQuery__
 *
 * To run a query within a React component, call `useUserCourseByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCourseByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCourseByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserCourseByIdQuery(
  baseOptions: Apollo.QueryHookOptions<UserCourseByIdQuery, UserCourseByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserCourseByIdQuery, UserCourseByIdQueryVariables>(
    UserCourseByIdDocument,
    options
  );
}
export function useUserCourseByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserCourseByIdQuery, UserCourseByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserCourseByIdQuery, UserCourseByIdQueryVariables>(
    UserCourseByIdDocument,
    options
  );
}
export type UserCourseByIdQueryHookResult = ReturnType<typeof useUserCourseByIdQuery>;
export type UserCourseByIdLazyQueryHookResult = ReturnType<typeof useUserCourseByIdLazyQuery>;
export type UserCourseByIdQueryResult = Apollo.QueryResult<
  UserCourseByIdQuery,
  UserCourseByIdQueryVariables
>;
