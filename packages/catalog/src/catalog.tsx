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
      <div className="row">
        <div className="medium-12 columns">
          {!title && <h3 className="catalog-header">{t('catalog-search-header')}</h3>}
          <CatalogFilters />
        </div>
      </div>
      <div className="row">
        <CatalogLoader>
          <CatalogError>
            <>
              <div className="medium-3 columns">
                <CatalogAggregations />
              </div>
              <div className="medium-9 columns js-results-holder">{children}</div>
            </>
          </CatalogError>
        </CatalogLoader>
      </div>
    </div>
  );
};

Catalog.displayName = 'Catalog';

export default Catalog;
