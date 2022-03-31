import React, { SyntheticEvent, useMemo } from 'react';
import Layout from '../../components/Layout';
import { usePageContext } from '../../renderer/usePageContext';
import { Catalog, CatalogProvider, CatalogResultItem } from '@thoughtindustries/catalog';
import { useAddResourceToQueueMutation } from '@thoughtindustries/content';
import { Appearance, CurrentUser } from '../../types';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Catalog Page',
  description: 'The catalog page'
};

function Page({ appearance, currentUser }: { appearance: Appearance; currentUser: CurrentUser }) {
  return (
    <Layout appearance={appearance} currentUser={currentUser}>
      <div className="flex flex-col space-y-2">
        <CatalogItems />
      </div>
    </Layout>
  );
}

function CatalogItems() {
  const pageContext = usePageContext();
  const {
    urlParsed: { pathname, searchString }
  } = pageContext;
  const config = useMemo(
    () => ({
      parsedUrl: {
        pathname,
        searchString
      }
    }),
    [pathname, searchString]
  );

  const [addResourceToQueue] = useAddResourceToQueueMutation();
  const handleAddedToQueue = ({ slug, kind, displayCourse }: CatalogResultItem) => {
    const resourceId = displayCourse || slug;
    return resourceId
      ? addResourceToQueue({ variables: { resourceId, resourceType: kind } }).then()
      : Promise.resolve(undefined);
  };

  const handleClick = (evt: SyntheticEvent, item: CatalogResultItem) => {
    console.log('clicked!', item);
  };

  return (
    <div className="px-4">
      <CatalogProvider config={config}>
        <Catalog onAddedToQueue={handleAddedToQueue} onClick={handleClick} />
      </CatalogProvider>
    </div>
  );
}
