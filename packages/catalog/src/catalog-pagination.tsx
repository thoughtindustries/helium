import React, { cloneElement } from 'react';
import { useCatalog } from './core';
import { CatalogProps } from './types';
import Pagination from './pagination';

type CatalogPaginationProps = Pick<CatalogProps, 'pagination'>;

const CatalogPagination = ({ pagination }: CatalogPaginationProps): JSX.Element | null => {
  const { params, urlManager } = useCatalog();
  const { page = 1, pageSize, total } = params;

  if (!total) {
    return null;
  }

  // derived values
  const getPageLink = urlManager.composeURLForSetPage.bind(urlManager);
  const props = {
    page,
    pageSize,
    total,
    getPageLink
  };

  if (pagination) {
    return cloneElement(pagination({ ...props }));
  }

  return <Pagination {...props} />;
};

CatalogPagination.displayName = 'CatalogPagination';
export default CatalogPagination;
