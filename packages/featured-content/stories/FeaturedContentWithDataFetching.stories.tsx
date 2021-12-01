import React, { SyntheticEvent } from 'react';
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

const handleClick = (evt: SyntheticEvent, item: FeaturedContentContentItem): void => {};

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

const mockCatalogQueryVariables = {
  query: 'test query',
  querySignature: 'test query signature',
  querySort: 'relevance'
};
const mockQueryContentsQueryVariables = {
  ids: ['item-id']
};
const mockContentItemFactory = (isLearningPath: boolean = false) => ({
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
  description: 'We need to compress the auxiliary COM pixel!',
  rating: 78,
  slug: 'perverted-rabbit-warfare',
  title: 'Perverted Rabbit Warfare',
  kind: isLearningPath ? ContentKind.LearningPath : null,
  currentUserUnmetCoursePrerequisites: [],
  currentUserUnmetLearningPathPrerequisites: [],
  priceInCents: null,
  suggestedRetailPriceInCents: null,
  source: null,
  ribbon: null,
  displayCourse: 'display-course-id'
});
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
      variables: { resourceId: 'perverted-rabbit-warfare', resourceType: ContentKind.LearningPath }
    },
    result: {
      data: {
        AddResourceToQueue: true
      }
    }
  }
};

export const withCatalogQuery = () => {
  const { i18n } = useTranslation();
  const [addResourceToQueue] = useMutation<
    AddResourceToQueueMutationData,
    AddResourceToQueueMutationVars
  >(ADD_RESOURCE_TO_QUEUE_MUTATION);
  const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<void> =>
    addResourceToQueue({ variables: { resourceId: item.displayCourse as any } }).then();

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
withCatalogQuery.parameters = {
  apolloClient: {
    mocks: [mockApolloResults.catalogQuery, mockApolloResults.addCourseToQueueMutation]
  }
};

export const withQueryContentsQuery = () => {
  const { i18n } = useTranslation();
  const [addResourceToQueue] = useMutation<
    AddResourceToQueueMutationData,
    AddResourceToQueueMutationVars
  >(ADD_RESOURCE_TO_QUEUE_MUTATION);
  const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<void> =>
    addResourceToQueue({
      variables: {
        resourceType: item.kind as any,
        resourceId: item.slug as any
      }
    }).then();

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
withQueryContentsQuery.parameters = {
  apolloClient: {
    mocks: [mockApolloResults.queryContentsQuery, mockApolloResults.addLearningPathToQueueMutation]
  }
};
