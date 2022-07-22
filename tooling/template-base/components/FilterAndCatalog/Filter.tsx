import { CatalogProvider, CatalogResultItem } from '@thoughtindustries/catalog';
import CatalogAggregations from '@thoughtindustries/catalog/src/catalog-aggregations';
import CatalogFilters from '@thoughtindustries/catalog/src/catalog-filters';
import { useAddResourceToQueueMutation } from '@thoughtindustries/content';
import React, { SyntheticEvent, useMemo } from 'react';
import { usePageContext } from '../../renderer/usePageContext';

function Filter() {
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
      ? addResourceToQueue({ variables: { resourceId, resourceType: kind } }).then(() => undefined)
      : Promise.resolve(undefined);
  };

  const handleClick = (evt: SyntheticEvent, item: CatalogResultItem) => {
    console.log('clicked!', item);
  };

  return (
    <div className="px-4 py-7">
      <CatalogProvider config={config}>
        <CatalogAggregations />
      </CatalogProvider>
    </div>
  );
}

export default Filter;
