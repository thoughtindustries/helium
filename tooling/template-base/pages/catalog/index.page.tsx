import React, { useMemo } from 'react';

import { usePageContext } from '../../renderer/usePageContext';
import {
  CatalogResults,
  Catalog,
  CatalogProvider,
  CatalogResultItem
} from '@thoughtindustries/catalog';
import { useAddResourceToQueueMutation } from '@thoughtindustries/content';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Catalog Page',
  description: 'The catalog page'
};

function Page() {
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

  const handleClick = (evt, item: CatalogResultItem) => {
    console.log('clicked!', item);
  };

  return (
    <>
      <CatalogProvider config={config}>
        <Catalog>
          <CatalogResults onAddedToQueue={handleAddedToQueue} onClick={handleClick} />
        </Catalog>
      </CatalogProvider>
    </>
  );
}
