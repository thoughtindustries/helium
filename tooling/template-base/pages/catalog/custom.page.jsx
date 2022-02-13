import React, { useMemo } from 'react';

import { usePageContext } from '../../renderer/usePageContext';
import { CatalogResults, Catalog, CatalogProvider } from '@thoughtindustries/catalog';
import { useAddResourceToQueueMutation } from '@thoughtindustries/content';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Custom Catalog Page',
  description: 'The custom catalog page'
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
      },
      layoutId: '8975d47f-e194-414b-9193-43a970a841ee',
      widgetId: 'zj7xtu8'
    }),
    [pathname, searchString]
  );

  const [addResourceToQueue] = useAddResourceToQueueMutation();
  const handleAddedToQueue = ({ slug, kind, displayCourse }) => {
    const resourceId = displayCourse || slug;
    return resourceId
      ? addResourceToQueue({ variables: { resourceId, resourceType: kind } }).then()
      : Promise.resolve(undefined);
  };

  return (
    <>
      <CatalogProvider config={config}>
        <Catalog>
          <CatalogResults onAddedToQueue={handleAddedToQueue} />
        </Catalog>
      </CatalogProvider>
    </>
  );
}
