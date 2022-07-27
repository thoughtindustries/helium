<<<<<<< HEAD
<<<<<<< HEAD
import { hydrateContent, useAddResourceToQueueMutation, useCatalogQuery } from '@thoughtindustries/content';
import { ContentTileStandardLayout, FeaturedContent, FeaturedContentContentItem } from '@thoughtindustries/featured-content'
import React from 'react'
=======
=======
>>>>>>> refs/remotes/origin/build-homepage-catalogpage
import {
  hydrateContent,
  useAddResourceToQueueMutation,
  useCatalogQuery
} from '@thoughtindustries/content';
import { FeaturedContent, FeaturedContentContentItem } from '@thoughtindustries/featured-content';
import React from 'react';
<<<<<<< HEAD
>>>>>>> 29502bb (feat: correct packages file)
=======
>>>>>>> refs/remotes/origin/build-homepage-catalogpage
import { useTranslation } from 'react-i18next';
import CatalogElementLayout from './CatalogElementLayout';

const FeaturedCardContent = () => {
<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/build-homepage-catalogpage
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
<<<<<<< HEAD
<<<<<<< HEAD
        <ContentTileStandardLayout
          desktopColumnCount={2}
          onAddedToQueue={handleAddedToQueue}>
=======
        <CatalogElementLayout desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
>>>>>>> 29502bb (feat: correct packages file)
=======
        <CatalogElementLayout desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
>>>>>>> refs/remotes/origin/build-homepage-catalogpage
          {contentItems.map((item, index) => (
            <CatalogElementLayout.Item key={`item-${index}`} {...item} />
          ))}
        </CatalogElementLayout>
      </FeaturedContent>
      <p>&nbsp;</p>
    </div>
<<<<<<< HEAD
  )
}

export default FeaturedCardContent;
=======
  );
};

export default FeaturedCardContent;
>>>>>>> refs/remotes/origin/build-homepage-catalogpage
