import * as Types from '../global-types';

import { gql } from '@apollo/client';
import { ContentFragmentFragmentDoc } from './ContentFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type ContentsQueryVariables = Types.Exact<{
  ids: Array<Types.Scalars['ID']> | Types.Scalars['ID'];
}>;

export type ContentsQuery = {
  __typename?: 'Query';
  QueryContents: Array<{
    __typename?: 'Content';
    asset?: string;
    authors?: Array<string>;
    availabilityStatus?: string;
    canAddToQueue?: boolean;
    contentTypeLabel?: string;
    courseGracePeriodEnded: boolean;
    coursePresold: boolean;
    courseStartDate?: any;
    currentUserMayReschedule: boolean;
    currentUserUnmetCoursePrerequisites?: Array<string>;
    currentUserUnmetLearningPathPrerequisites?: Array<string>;
    description?: string;
    displayCourse?: string;
    kind?: Types.ContentKind;
    hasChildren: boolean;
    hideCourseDescription: boolean;
    id: string;
    isActive: boolean;
    priceInCents?: number;
    rating?: number;
    slug: any;
    source?: string;
    suggestedRetailPriceInCents?: number;
    title?: string;
    waitlistingEnabled: boolean;
    waitlistingTriggered: boolean;
    ribbon?: {
      __typename?: 'Ribbon';
      color?: string;
      contrastColor?: string;
      darkerColor?: string;
      label?: string;
      slug: any;
    };
  }>;
};

export const ContentsDocument = gql`
  query Contents($ids: [ID!]!) {
    QueryContents(ids: $ids) {
      ...ContentFragment
    }
  }
  ${ContentFragmentFragmentDoc}
`;

/**
 * __useContentsQuery__
 *
 * To run a query within a React component, call `useContentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useContentsQuery(
  baseOptions: Apollo.QueryHookOptions<ContentsQuery, ContentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ContentsQuery, ContentsQueryVariables>(ContentsDocument, options);
}
export function useContentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ContentsQuery, ContentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ContentsQuery, ContentsQueryVariables>(ContentsDocument, options);
}
export type ContentsQueryHookResult = ReturnType<typeof useContentsQuery>;
export type ContentsLazyQueryHookResult = ReturnType<typeof useContentsLazyQuery>;
export type ContentsQueryResult = Apollo.QueryResult<ContentsQuery, ContentsQueryVariables>;
