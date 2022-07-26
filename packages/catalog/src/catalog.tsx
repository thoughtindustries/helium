import React, { FC } from 'react';
import { Header } from '@thoughtindustries/header';
import { useTranslation } from 'react-i18next';
import { CatalogProps } from './types';
import CatalogFilters from './catalog-filters';
import CatalogAggregations from './catalog-aggregations';
import CatalogError from './catalog-error';
import CatalogResults from './catalog-results';
import CatalogPagination from './catalog-pagination';

const Catalog: FC<CatalogProps> = ({
  title,
  alternateTitleDisplay,
  pagination,
  ...restResultsProps
}: CatalogProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="w-full pt-6">
      <div className="w-full">
        <CatalogError>
          <div className="grid grid-cols-3 gap-4 pt-11">
            <div className="col-span-full md:col-span-1">
              <CatalogAggregations />
            </div>
            <div className="col-span-full md:col-span-2">
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
