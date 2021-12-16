import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { hydrateContent, ContentItem, ContentKind } from '@thoughtindustries/hydrate-content';
import { FeaturedContent, ContentTileStandardLayout, FeaturedContentContentItem } from '../src';

export default {
  title: 'Example/FeaturedContent (data fetching)'
};

const headerOptions = {
  title: 'Feature Content Header'
};

const handleClick = (): void => {
  // do something
};

const CORE_CONTENT_FIELDS = gql`
  fragment CoreContentFields on Content {
    id
    asset
    authors
    availabilityStatus
    canAddToQueue
    contentTypeLabel
    courseGracePeriodEnded
    coursePresold
    courseStartDate
    description
    rating
    slug
    title
    kind
    currentUserUnmetCoursePrerequisites
    currentUserUnmetLearningPathPrerequisites
    priceInCents
    suggestedRetailPriceInCents
    source
    ribbon {
      label
      color
      contrastColor
      darkerColor
    }
    displayCourse
  }
`;

// query for CatalogQuery
interface CatalogQueryData {
  CatalogQuery: CatalogQuery;
}
interface CatalogQuery {
  contentItems: ContentItem[];
}
interface CatalogQueryVars {
  query: string;
  querySignature: string;
  querySort: string;
}
const CATLOG_QUERY_QUERY = gql`
  ${CORE_CONTENT_FIELDS}
  query CatalogQueryQuery($query: String, $querySignature: String, $querySort: String) {
    CatalogQuery(query: $query, querySignature: $querySignature, querySort: $querySort) {
      contentItems {
        ...CoreContentFields
      }
    }
  }
`;

// query for QueryContents
interface QueryContentsData {
  QueryContents: ContentItem[];
}
interface QueryContentsVars {
  ids: string[];
}
const QUERY_CONTENTS_QUERY = gql`
  ${CORE_CONTENT_FIELDS}
  query QueryContentsQuery($ids: [ID!]!) {
    QueryContents(ids: $ids) {
      ...CoreContentFields
    }
  }
`;

// mutation for AddResourceToQueue
interface AddResourceToQueueMutationData {
  AddResourceToQueue: boolean;
}
interface AddResourceToQueueMutationVars {
  resourceId: string;
  resourceType?: ContentKind;
}
const ADD_RESOURCE_TO_QUEUE_MUTATION = gql`
  mutation AddResourceToQueueMutation($resourceType: ContentKind, $resourceId: ID!) {
    AddResourceToQueue(resourceType: $resourceType, resourceId: $resourceId)
  }
`;

// query for UserRecentContent
interface UserRecentContentData {
  UserRecentContent: ContentItem[];
}
interface UserRecentContentVars {
  limit?: number;
}
const USER_RECENT_CONTENT_QUERY = gql`
  query UserRecentContentQuery($limit: Int) {
    UserRecentContent(limit: $limit) {
      asset
      authors
      availabilityStatus
      contentTypeLabel
      courseEndDate
      courseGracePeriodEnded
      coursePresold
      courseStartDate
      description
      displayCourseSlug
      isActive
      kind
      sku
      slug
      source
      timeZone
      title
    }
  }
`;

const mockCatalogQueryVariables = {
  query: 'test query',
  querySignature: 'test query signature',
  querySort: 'relevance'
};
const mockQueryContentsQueryVariables = {
  ids: ['item-id']
};
const mockUserRecentContentQueryVariables = {
  limit: 2
};
const mockContentItemFactory = (isLearningPath = false) => ({
  __typename: 'Content',
  id: 'item-id',
  asset:
    'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
  authors: ['Author A', 'Author B'],
  availabilityStatus: 'available',
  canAddToQueue: true,
  contentTypeLabel: 'Guide',
  courseGracePeriodEnded: false,
  coursePresold: false,
  courseStartDate: '2016-11-07T05:51:02.856Z',
  description: 'Test description',
  rating: 78,
  slug: 'test-course-slug',
  title: 'Test title',
  kind: isLearningPath ? ContentKind.LearningPath : null,
  currentUserUnmetCoursePrerequisites: [],
  currentUserUnmetLearningPathPrerequisites: [],
  priceInCents: null,
  suggestedRetailPriceInCents: null,
  source: null,
  ribbon: null,
  displayCourse: 'display-course-id'
});
const mockRecentContentItem = {
  __typename: 'Content',
  asset:
    'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
  authors: ['Author A', 'Author B'],
  availabilityStatus: 'available',
  contentTypeLabel: 'Guide',
  courseEndDate: null,
  courseGracePeriodEnded: false,
  coursePresold: false,
  courseStartDate: '2016-11-07T05:51:02.856Z',
  description: 'Test description',
  displayCourseSlug: 'test-display-course-slug',
  isActive: true,
  kind: ContentKind.CourseGroup,
  sku: null,
  slug: 'test-course-slug',
  source: null,
  timeZone: 'America/New_York',
  title: 'Test title'
};
const mockApolloResults = {
  catalogQuery: {
    request: {
      query: CATLOG_QUERY_QUERY,
      variables: { ...mockCatalogQueryVariables }
    },
    result: {
      data: {
        CatalogQuery: {
          contentItems: [mockContentItemFactory()]
        }
      }
    }
  },
  queryContentsQuery: {
    request: {
      query: QUERY_CONTENTS_QUERY,
      variables: { ...mockQueryContentsQueryVariables }
    },
    result: {
      data: {
        QueryContents: [mockContentItemFactory(true)]
      }
    }
  },
  addCourseToQueueMutation: {
    request: {
      query: ADD_RESOURCE_TO_QUEUE_MUTATION,
      variables: { resourceId: 'display-course-id' }
    },
    result: {
      data: {
        AddResourceToQueue: true
      }
    }
  },
  addLearningPathToQueueMutation: {
    request: {
      query: ADD_RESOURCE_TO_QUEUE_MUTATION,
      variables: { resourceId: 'test-course-slug', resourceType: ContentKind.LearningPath }
    },
    result: {
      data: {
        AddResourceToQueue: true
      }
    }
  },
  userRecentContentQuery: {
    request: {
      query: USER_RECENT_CONTENT_QUERY,
      variables: { ...mockUserRecentContentQueryVariables }
    },
    result: {
      data: {
        UserRecentContent: [{ ...mockRecentContentItem }]
      }
    }
  }
};

export const WithCatalogQuery = () => {
  const { i18n } = useTranslation();
  const [addResourceToQueue] = useMutation<
    AddResourceToQueueMutationData,
    AddResourceToQueueMutationVars
  >(ADD_RESOURCE_TO_QUEUE_MUTATION);
  const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<void> =>
    item.displayCourse
      ? addResourceToQueue({ variables: { resourceId: item.displayCourse } }).then()
      : Promise.resolve();

  const { data, loading, error } = useQuery<CatalogQueryData, CatalogQueryVars>(
    CATLOG_QUERY_QUERY,
    { variables: { ...mockCatalogQueryVariables } }
  );
  let content;
  if (loading) {
    content = <p>Loading content</p>;
  }
  if (error) {
    content = <p>Error loading content</p>;
  }
  if (data) {
    content = data.CatalogQuery.contentItems.map((item, index) => {
      const hydratedItem = hydrateContent(i18n, item);
      const { authors, description, href, ...restItemProps } = hydratedItem;
      const transformedItem = {
        ...restItemProps,
        authors: authors?.join(', '),
        shortDescription: description && `${description.substring(0, 75)} ...`,
        linkUrl: href
      };
      return <ContentTileStandardLayout.Item key={`item-${index}`} {...transformedItem} />;
    });
  }
  return (
    <FeaturedContent>
      <ContentTileStandardLayout
        headerOptions={headerOptions}
        desktopColumnCount={3}
        onAddedToQueue={handleAddedToQueue}
        onClick={handleClick}
      >
        {content}
      </ContentTileStandardLayout>
    </FeaturedContent>
  );
};
WithCatalogQuery.parameters = {
  apolloClient: {
    mocks: [mockApolloResults.catalogQuery, mockApolloResults.addCourseToQueueMutation]
  }
};

export const WithQueryContentsQuery = () => {
  const { i18n } = useTranslation();
  const [addResourceToQueue] = useMutation<
    AddResourceToQueueMutationData,
    AddResourceToQueueMutationVars
  >(ADD_RESOURCE_TO_QUEUE_MUTATION);
  const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<void> =>
    item.slug
      ? addResourceToQueue({
          variables: {
            resourceType: item.kind as ContentKind,
            resourceId: item.slug
          }
        }).then()
      : Promise.resolve();

  const { data, loading, error } = useQuery<QueryContentsData, QueryContentsVars>(
    QUERY_CONTENTS_QUERY,
    { variables: { ...mockQueryContentsQueryVariables } }
  );
  let content;
  if (loading) {
    content = <p>Loading content</p>;
  }
  if (error) {
    content = <p>Error loading content</p>;
  }
  if (data) {
    content = data.QueryContents.map((item, index) => {
      const hydratedItem = hydrateContent(i18n, item);
      const { authors, description, href, ...restItemProps } = hydratedItem;
      const transformedItem = {
        ...restItemProps,
        authors: authors?.join(', '),
        shortDescription: description && `${description.substring(0, 75)} ...`,
        linkUrl: href
      };
      return <ContentTileStandardLayout.Item key={`item-${index}`} {...transformedItem} />;
    });
  }
  return (
    <FeaturedContent>
      <ContentTileStandardLayout
        headerOptions={headerOptions}
        desktopColumnCount={3}
        onAddedToQueue={handleAddedToQueue}
        onClick={handleClick}
      >
        {content}
      </ContentTileStandardLayout>
    </FeaturedContent>
  );
};
WithQueryContentsQuery.parameters = {
  apolloClient: {
    mocks: [mockApolloResults.queryContentsQuery, mockApolloResults.addLearningPathToQueueMutation]
  }
};

export const WithUserRecentContentQuery = () => {
  const { i18n } = useTranslation();
  const { data, loading, error } = useQuery<UserRecentContentData, UserRecentContentVars>(
    USER_RECENT_CONTENT_QUERY,
    { variables: { ...mockUserRecentContentQueryVariables } }
  );
  const handleAddedToQueue = (): Promise<void> => {
    return Promise.resolve();
  };
  let content;
  if (loading) {
    content = <p>Loading content</p>;
  }
  if (error) {
    content = <p>Error loading content</p>;
  }
  if (data) {
    content = data.UserRecentContent.map((item, index) => {
      const hydratedItem = hydrateContent(i18n, item);
      const { authors, description, href, ...restItemProps } = hydratedItem;
      const transformedItem = {
        ...restItemProps,
        authors: authors?.join(', '),
        shortDescription: description && `${description.substring(0, 75)} ...`,
        linkUrl: href
      };
      return <ContentTileStandardLayout.Item key={`item-${index}`} {...transformedItem} />;
    });
  }
  return (
    <FeaturedContent>
      <ContentTileStandardLayout
        headerOptions={headerOptions}
        desktopColumnCount={3}
        onAddedToQueue={handleAddedToQueue}
        onClick={handleClick}
      >
        {content}
      </ContentTileStandardLayout>
    </FeaturedContent>
  );
};
WithUserRecentContentQuery.parameters = {
  apolloClient: {
    mocks: [mockApolloResults.userRecentContentQuery]
  }
};
