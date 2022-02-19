import React, { FC } from 'react';
import { Header } from '@thoughtindustries/header';
import { useTranslation } from 'react-i18next';
import { CatalogProps } from './types';
import CatalogFilters from './catalog-filters';
import CatalogLoader from './catalog-loader';
import CatalogAggregations from './catalog-aggregations';
import CatalogError from './catalog-error';

const Catalog: FC<CatalogProps> = (props: CatalogProps): JSX.Element => {
  const { title, alternateTitleDisplay, children } = props;
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {title && <Header title={title} alternateTitleDisplay={alternateTitleDisplay} />}
      {!title && <h3>{t('catalog-search-header')}</h3>}
      <CatalogFilters />
      <div className="w-full">
        <CatalogLoader>
          {targetRef => (
            <CatalogError>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-full md:col-span-1">
                  <CatalogAggregations />
                </div>
                <div className="col-span-full md:col-span-3" ref={targetRef}>
                  {children}
                </div>
              </div>
            </CatalogError>
          )}
        </CatalogLoader>
      </div>
    </div>
  );
};

Catalog.displayName = 'Catalog';

export default Catalog;
