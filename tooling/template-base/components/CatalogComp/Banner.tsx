import { CatalogProvider } from '@thoughtindustries/catalog';
import CatalogFilters from '@thoughtindustries/catalog/src/catalog-filters';
import { printSourceLocation } from 'graphql';
import React, { useMemo } from 'react';
import { usePageContext } from '../../renderer/usePageContext';

const Banner = (props: { heading: string; subtext: string; searchBar: boolean }) => {
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
    <div className="flex flex-col p-24 bg-slate-50">
      <div className="lg:text-6xl md:text-5xl text-3xl font-bold mx-auto text-center">
        {props.heading}
      </div>
      <div className="text-slate-500 text-xl font-light text-center mx-5">{props.subtext}</div>
      <div className="sm:hidden mt-5">
        {props.searchBar === true && (
          <CatalogProvider config={config}>
            <CatalogFilters />
          </CatalogProvider>
        )}
      </div>
    </div>
  );
};

export default Banner;
