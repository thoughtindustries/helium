import { gql } from '@apollo/client';

export { onBeforeRender };

const COURSE_GROUP_QUERY = gql`
  query CourseGroupBySlug($slug: Slug!) {
    CourseGroupBySlug(slug: $slug) {
      id
      title
      description
      slug
      asset
      detailAsset
      videoAsset
      rating
      ratingsCount
      language
      archived
      metaTitle
      metaDescription
      authors
      courses {
        id
        title
      }
      customFields
    }
  }
`;

interface PageContext {
  routeParams: {
    courseSlug: string;
  };
  apolloClient: any;
}

async function onBeforeRender(pageContext: PageContext) {
  const { courseSlug } = pageContext.routeParams;

  if (!courseSlug) {
    return {
      pageContext: {
        pageProps: {
          courseGroup: null,
          error: 'Course slug is required'
        }
      }
    };
  }

  try {
    // Use the Apollo Client from pageContext
    const { apolloClient } = pageContext;

    if (!apolloClient) {
      throw new Error('Apollo Client not available in pageContext');
    }

    const { data, error } = await apolloClient.query({
      query: COURSE_GROUP_QUERY,
      variables: { slug: courseSlug }
    });

    if (error) {
      throw error;
    }

    const courseGroup = data?.CourseGroupBySlug;

    if (!courseGroup) {
      throw new Error('Course not found');
    }

    return {
      pageContext: {
        pageProps: {
          courseGroup
        }
      }
    };
  } catch (error) {
    console.error('Error fetching course group:', error);
    return {
      pageContext: {
        pageProps: {
          courseGroup: null,
          error: error instanceof Error ? error.message : 'Failed to load course'
        }
      }
    };
  }
}
