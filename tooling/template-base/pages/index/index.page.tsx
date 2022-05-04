import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/Layout';
import { Hero } from '@thoughtindustries/hero';
import { LearnerAccess } from '@thoughtindustries/learner-access';
import {
  FeaturedContent,
  ContentTileStandardLayout,
  FeaturedContentContentItem
} from '@thoughtindustries/featured-content';
import {
  hydrateContent,
  useCatalogQuery,
  useAddResourceToQueueMutation
} from '@thoughtindustries/content';
import { Appearance, CurrentUser } from '../../types';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function Page({ appearance, currentUser }: { appearance: Appearance; currentUser: CurrentUser }) {
  return (
    <Layout appearance={appearance} currentUser={currentUser}>
      <div className="flex flex-col items-start space-y-2">
        <Hero
          title="Welcome to Helium!"
          subtitle="This page is completely rendered in React. Go ahead and edit it at pages/index/index.page.jsx"
          asset="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_1500/v1426249885/sq5qv0uebvfywkxbw3cc.jpg"
        />
        <LearnerAccess />
        <FeaturedItems />
      </div>
    </Layout>
  );
}

function FeaturedItems() {
  const { i18n } = useTranslation();
  const [addResourceToQueue] = useAddResourceToQueueMutation();
  const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<boolean | void> =>
    item.displayCourse
      ? addResourceToQueue({ variables: { resourceId: item.displayCourse } }).then()
      : Promise.resolve(undefined);

  const { data, loading, error } = useCatalogQuery({
    variables: {
      query:
        'courseGroup:5ce1f5cf-4a4e-5e43-a7d7-8b4963b44d63 OR courseGroup:95897223-339b-529b-bc09-03e83fdb0377 OR courseGroup:8c99a587-f64f-5655-9a16-5f016a3a8321 OR courseGroup:15f4c8e7-41f8-517c-832d-d20e7295717e'
    }
  });

  const handleClick = (evt, item: FeaturedContentContentItem) => {
    console.log('clicked!', item);
  };

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
        authors,
        shortDescription: description && `${description.substring(0, 75)} ...`,
        linkUrl: href
      };
      return <ContentTileStandardLayout.Item key={`item-${index}`} {...transformedItem} />;
    });
  }

  return (
    <div className="px-4">
      <FeaturedContent>
        <ContentTileStandardLayout
          desktopColumnCount={4}
          headerOptions={{ title: 'Featured Content' }}
          onAddedToQueue={handleAddedToQueue}
          onClick={handleClick}
        >
          {content}
        </ContentTileStandardLayout>
      </FeaturedContent>
    </div>
  );
}
