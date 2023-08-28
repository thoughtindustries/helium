import React, { FC } from 'react';
import { Header } from '@thoughtindustries/header';
import { useTranslation } from 'react-i18next';
import { CatalogProps } from './types';
import CatalogFilters from './catalog-filters';
import CatalogAggregations from './catalog-aggregations';
import CatalogError from './catalog-error';
import CatalogResults from './catalog-results';
import CatalogPagination from './catalog-pagination';
import CatalogLoader from './catalog-loader';
import { useCatalog } from './core';

const Catalog: FC<CatalogProps> = ({
  title,
  alternateTitleDisplay,
  pagination,
  ...restResultsProps
}: CatalogProps): JSX.Element => {
  const { t } = useTranslation();
  const { scrollToRef, contentWrapperRef } = useCatalog();

  return (
    <div className="w-full">
      <div ref={scrollToRef}>
        {title && <Header title={title} alternateTitleDisplay={alternateTitleDisplay} />}
        {!title && <h3>{t('catalog-search-header')}</h3>}
      </div>
      <div ref={contentWrapperRef}>
        <CatalogLoader>
          <CatalogError>
            <>
              <CatalogFilters />
              <div className="w-full">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-full md:col-span-1">
                    <CatalogAggregations />
                  </div>
                  <div className="col-span-full md:col-span-3">
                    <CatalogResults {...restResultsProps} />
                    <CatalogPagination pagination={pagination} />
                  </div>
                </div>
              </div>
            </>
          </CatalogError>
        </CatalogLoader>
      </div>
    </div>
  );
};

Catalog.displayName = 'Catalog';

export default Catalog;
