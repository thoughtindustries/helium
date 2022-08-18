import React, { FC, useMemo } from 'react';
import CatalogAggregations from './Aggregations';
import CatalogError from './CatalogError';
import CatalogResults from './CatalogResults';
import { CatalogProvider, CatalogProps } from '@thoughtindustries/catalog';
import { usePageContext } from '../../renderer/usePageContext';

const CatalogAndAggregation: FC<CatalogProps> = ({
  ...restResultsProps
}: CatalogProps): JSX.Element => {
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
          <div className="w-full pt-6">
            <div className="w-full">
              <CatalogError>
                <div className="grid grid-cols-3 gap-4 pt-11">
                  <div className="col-span-full md:col-span-1">
                    <CatalogAggregations />
                  </div>
                  <div className="col-span-full md:col-span-2 ">
                    <CatalogResults {...restResultsProps} />
                  </div>
                </div>
              </CatalogError>
            </div>
          </div>
        </CatalogProvider>
      </div>
    </div>
  );
};

export default CatalogAndAggregation;
