import * as Types from './global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RusticiLaunchScormQueryQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  type?: Types.InputMaybe<Types.ContentOrTopicEnum>;
  isPreview: Types.Scalars['Boolean'];
}>;

export type RusticiLaunchScormQueryQuery = {
  __typename?: 'Query';
  RusticiLaunchScorm: {
    __typename?: 'RusticiCourseLaunchResponse';
    url: string;
    registrationId: string;
    courseTitle?: string;
    fullscreenEmbed: boolean;
    height?: number;
    width?: number;
    registrationCheckerJWT: string;
  };
};

export const RusticiLaunchScormQueryDocument = gql`
  query RusticiLaunchScormQuery($id: ID!, $type: ContentOrTopicEnum, $isPreview: Boolean!) {
    RusticiLaunchScorm(id: $id, type: $type, isPreview: $isPreview) {
      url
      registrationId
      courseTitle
      fullscreenEmbed
      height
      width
      registrationCheckerJWT
    }
  }
`;

/**
 * __useRusticiLaunchScormQueryQuery__
 *
 * To run a query within a React component, call `useRusticiLaunchScormQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useRusticiLaunchScormQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRusticiLaunchScormQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *      isPreview: // value for 'isPreview'
 *   },
 * });
 */
export function useRusticiLaunchScormQueryQuery(
  baseOptions: Apollo.QueryHookOptions<
    RusticiLaunchScormQueryQuery,
    RusticiLaunchScormQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RusticiLaunchScormQueryQuery, RusticiLaunchScormQueryQueryVariables>(
    RusticiLaunchScormQueryDocument,
    options
  );
}
export function useRusticiLaunchScormQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RusticiLaunchScormQueryQuery,
    RusticiLaunchScormQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RusticiLaunchScormQueryQuery, RusticiLaunchScormQueryQueryVariables>(
    RusticiLaunchScormQueryDocument,
    options
  );
}
export type RusticiLaunchScormQueryQueryHookResult = ReturnType<
  typeof useRusticiLaunchScormQueryQuery
>;
export type RusticiLaunchScormQueryLazyQueryHookResult = ReturnType<
  typeof useRusticiLaunchScormQueryLazyQuery
>;
export type RusticiLaunchScormQueryQueryResult = Apollo.QueryResult<
  RusticiLaunchScormQueryQuery,
  RusticiLaunchScormQueryQueryVariables
>;
