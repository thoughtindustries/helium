import {
  hydrateContent,
  useAddResourceToQueueMutation,
  useCatalogQuery
} from '@thoughtindustries/content';
import {
  ContentTileStandardLayout,
  FeaturedContent,
  FeaturedContentContentItem
} from '@thoughtindustries/featured-content';
import React from 'react';
import { useTranslation } from 'react-i18next';

const FeaturedCardContent = () => {
  const { i18n } = useTranslation();
  const [addResourceToQueue] = useAddResourceToQueueMutation();
  const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<boolean | void> => {
    if ('displayCourse' in item && item.displayCourse) {
      return addResourceToQueue({ variables: { resourceId: item.displayCourse } }).then();
    }

    return Promise.resolve();
  };

  const { data, loading, error } = useCatalogQuery({
    variables: {
      query: ''
    }
  });

  if (loading || !data) {
    return <p>Loading Content</p>;
  }

  if (error) {
    return (
      <p>
        There has been an error loading your content. Please check that you have assigned courses to
        the user.
      </p>
    );
  }

  const contentItems = (data.CatalogQuery.contentItems || [])
    .slice(0, 6)
    .map(item => hydrateContent(i18n, item));

  return (
    <div className="px-4 py-6">
      <FeaturedContent>
        <ContentTileStandardLayout desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
          {contentItems.map((item, index) => (
            <ContentTileStandardLayout.Item key={`item-${index}`} {...item} />
          ))}
        </ContentTileStandardLayout>
      </FeaturedContent>
      <p>&nbsp;</p>
    </div>
  );
};

export default FeaturedCardContent;
