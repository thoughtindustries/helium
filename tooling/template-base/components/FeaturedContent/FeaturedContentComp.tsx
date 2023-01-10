import { CatalogProps, CatalogProvider, CatalogResultsProps } from '@thoughtindustries/catalog';
import React, { FC, useMemo } from 'react';
import { usePageContext } from '../../renderer/usePageContext';
import CatalogResults from '../CatalogAndAggreg/CatalogResults';

interface CatalogResultsWithLimitProps extends CatalogResultsProps {
  /** number of items to return */
  numberOfContentItems?: number;
}

const FeaturedContentComp: FC<CatalogResultsWithLimitProps> = ({
  ...restResultsProps
}: CatalogProps): JSX.Element => {
  const pageContext = usePageContext();
  const {
    urlParsed: { pathname, searchOriginal: searchString }
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
    <section id="featuredcomp" className="bg-slate-50 py-24 px-12">
      <div className="">
        <h2 className="text-4xl font-bold text-center">Featured Catalog</h2>
        <h4 className="text-slate-500 text-center text-xl font-light">
          Our massive libary of resources engages and informs learners on everything from marking to
          finance and everything in between.
        </h4>
        <div className="grid md:grid-cols-3 grid-cols-1 py-24 px-12 md:px-20 ">
          <div className="col-span-3">
            <CatalogProvider config={config}>
              <CatalogResults {...restResultsProps} />
            </CatalogProvider>
          </div>
        </div>
      </div>
      <a href="/catalog">
        <button className="flex my-10 bg-blue-900 text-white font-bold py-3 px-5 rounded mx-auto">
          View Full Catalog
        </button>
      </a>
    </section>
  );
};

export default FeaturedContentComp;
