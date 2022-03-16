import React, { FC } from 'react';
import { Header } from '@thoughtindustries/header';
import { useTranslation } from 'react-i18next';
import { CatalogProps } from './types';
import CatalogFilters from './catalog-filters';
import CatalogAggregations from './catalog-aggregations';
import CatalogError from './catalog-error';
import CatalogResults from './catalog-results';

const Catalog: FC<CatalogProps> = ({
  title,
  alternateTitleDisplay,
  ...restResultsProps
}: CatalogProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {title && <Header title={title} alternateTitleDisplay={alternateTitleDisplay} />}
      {!title && <h3>{t('catalog-search-header')}</h3>}
      <CatalogFilters />
      <div className="w-full">
        <CatalogError>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-full md:col-span-1">
              <CatalogAggregations />
            </div>
            <div className="col-span-full md:col-span-3">
              <CatalogResults {...restResultsProps} />
            </div>
          </div>
        </CatalogError>
      </div>
    </div>
  );
};

Catalog.displayName = 'Catalog';

export default Catalog;
