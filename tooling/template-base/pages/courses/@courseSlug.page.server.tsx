import { CourseGroup } from '@thoughtindustries/content/src/graphql/global-types';

export { onBeforeRender };

interface PageContext {
  routeParams: {
    courseSlug: string;
  };
}

async function onBeforeRender(pageContext: PageContext) {
  const { courseSlug } = pageContext.routeParams;

  if (!courseSlug) {
    throw new Error('Course slug is required');
  }

  try {
    // GraphQL query for course group by slug
    const query = `
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

    const url = `https://${process.env.HELIUM_PUBLIC_INSTANCE_PUBLIC_DOMAIN}/helium?apiKey=${process.env.HELIUM_SECRET_API_KEY}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: {
          slug: courseSlug
        }
      }),
      signal: AbortSignal.timeout(10000)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GraphQL API Error Response:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }

    const courseGroup: CourseGroup = result.data?.CourseGroupBySlug;

    if (!courseGroup) {
      throw new Error('Course group not found');
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
          error: error instanceof Error ? error.message : 'Unknown error occurred'
        }
      }
    };
  }
}
