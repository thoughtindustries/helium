import * as Types from '../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type WaitlistQueryVariables = Types.Exact<{ [key: string]: never }>;

export type WaitlistQuery = {
  __typename?: 'Query';
  UserWaitlist?: Array<{
    __typename?: 'ContentItem';
    id: string;
    slug?: string;
    contentTypeLabel?: string;
    title?: string;
    asset?: string;
    description?: string;
    source?: string;
    displayCourse?: string;
    displayCourseSlug?: string;
    embeddedEnabled?: boolean;
    courseStartDate?: string;
    coursePresold?: boolean;
    courseGracePeriodEnded?: boolean;
    currentUserUnmetCoursePrerequisites?: Array<string>;
    currentUserUnmetLearningPathPrerequisites?: Array<string>;
    kind?: Types.ContentKind;
    authors?: Array<string>;
    rating?: number;
    timeZone?: string;
    publishDate?: string;
    canAddToQueue?: boolean;
    bulkPurchasingEnabled?: boolean;
  }>;
};

export const WaitlistDocument = gql`
  query Waitlist {
    UserWaitlist {
      id
      slug
      contentTypeLabel
      title
      asset
      description
      source
      displayCourse
      displayCourseSlug
      embeddedEnabled
      courseStartDate
      coursePresold
      courseGracePeriodEnded
      currentUserUnmetCoursePrerequisites
      currentUserUnmetLearningPathPrerequisites
      kind
      authors
      rating
      timeZone
      publishDate
      canAddToQueue
      bulkPurchasingEnabled
    }
  }
`;

/**
 * __useWaitlistQuery__
 *
 * To run a query within a React component, call `useWaitlistQuery` and pass it any options that fit your needs.
 * When your component renders, `useWaitlistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWaitlistQuery({
 *   variables: {
 *   },
 * });
 */
export function useWaitlistQuery(
  baseOptions?: Apollo.QueryHookOptions<WaitlistQuery, WaitlistQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WaitlistQuery, WaitlistQueryVariables>(WaitlistDocument, options);
}
export function useWaitlistLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<WaitlistQuery, WaitlistQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<WaitlistQuery, WaitlistQueryVariables>(WaitlistDocument, options);
}
export type WaitlistQueryHookResult = ReturnType<typeof useWaitlistQuery>;
export type WaitlistLazyQueryHookResult = ReturnType<typeof useWaitlistLazyQuery>;
export type WaitlistQueryResult = Apollo.QueryResult<WaitlistQuery, WaitlistQueryVariables>;
