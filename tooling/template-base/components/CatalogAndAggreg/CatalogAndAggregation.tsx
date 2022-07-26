import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CatalogProps } from '@thoughtindustries/catalog/src/types';
import CatalogAggregations from './Aggregations';
import CatalogError from '@thoughtindustries/catalog/src/catalog-error';
import CatalogResults from './CatalogResults';

const CatalogAndAggregation: FC<CatalogProps> = ({
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

export default CatalogAndAggregation;
