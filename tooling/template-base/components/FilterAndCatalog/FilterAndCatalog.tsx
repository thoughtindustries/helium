import { HydratedContentItem } from '@thoughtindustries/content';
import React, { useMemo } from 'react';
import { usePageContext } from '../../renderer/usePageContext';
import { CatalogProvider } from '@thoughtindustries/catalog';
import CatalogAndAggregation from '../CatalogAndAggreg/CatalogAndAggregation';

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
          <CatalogAndAggregation
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
