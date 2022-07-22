import { Catalog, CatalogProvider } from '@thoughtindustries/catalog';
import { HydratedContentItem } from '@thoughtindustries/content';
import React, { useMemo } from 'react';
import { usePageContext } from '../../renderer/usePageContext';
import FeaturedCardContent from '../FeaturedContent/FeaturedCardContent';
import Filter from './Filter';

const FilterAndCatalog = () => {
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

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 py-24 px-12 md:px-20 bg-slate-100">
      <div className="col-span-3">
        <CatalogProvider config={config}>
          <Catalog
            onAddedToQueue={function (item: HydratedContentItem): Promise<boolean | void> {
              throw new Error('Function not implemented.');
            }}
          />
        </CatalogProvider>
      </div>
    </div>
  );
};

export default FilterAndCatalog;
