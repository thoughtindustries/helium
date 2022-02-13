import React from 'react';
import { useCatalogPagination, useCatalogURLManager } from './core';
import { PAGINATION_INNER_WINDOW, PAGINATION_MAX_PAGES } from './constants';
import clsx from 'clsx';

type VisiblePage = {
  number: number;
  label: number | string;
  isActive?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
};
const getVisiblePages = (page: number, lastPage: number): VisiblePage[] => {
  const series: VisiblePage[] = [];

  if (lastPage === 1) {
    return series;
  }

  if (lastPage <= PAGINATION_MAX_PAGES) {
    // 7 or less entries
    for (let i = 1; i <= lastPage; i++) {
      const pageNumber = i;
      series.push({
        number: pageNumber,
        label: pageNumber,
        isActive: page === pageNumber,
        isFirst: i === 1,
        isLast: i === lastPage
      });
    }
    return series;
  }

  if (page >= lastPage - PAGINATION_INNER_WINDOW) {
    // end of pages
    series.push({
      number: Math.max(page - 5, 1),
      label: '...',
      isFirst: true
    });

    for (let i = lastPage - 5; i <= lastPage; i++) {
      series.push({
        number: i,
        label: i,
        isActive: page === i,
        isFirst: false,
        isLast: i === lastPage
      });
    }

    return series;
  }

  if (page - PAGINATION_INNER_WINDOW <= 1) {
    // beginning of pages
    for (let i = 1; i <= 6; i++) {
      series.push({
        number: i,
        label: i,
        isActive: page === i,
        isFirst: i === 1
      });
    }

    series.push({
      number: Math.min(page + 5, lastPage),
      label: '...',
      isLast: true
    });

    return series;
  }

  series.push({
    number: Math.max(page - 5, 1),
    label: '...',
    isFirst: true
  });

  for (let i = page - 2; i < page + PAGINATION_INNER_WINDOW; i++) {
    series.push({
      number: i,
      label: i,
      isActive: page === i
    });
  }

  series.push({
    number: Math.min(page + 5, lastPage),
    label: '...',
    isLast: true
  });

  return series;
};

type DisplayedPageRange = {
  start: number;
  end: number;
};
const getDisplayedPageRange = (
  page: number,
  pageSize: number,
  total: number
): DisplayedPageRange => {
  let start, end;
  if (page === 1) {
    start = 1;
  } else {
    start = (page - 1) * pageSize + 1;
  }
  end = start + pageSize - 1;
  if (end > total) {
    end = total;
  }
  return { start, end };
};

const CatalogPagination = (): JSX.Element | null => {
  const { page = 1, pageSize, total } = useCatalogPagination();
  const urlManager = useCatalogURLManager();

  if (!total) {
    return null;
  }

  // derived values
  const lastPage = Math.ceil(total / pageSize) || 1;
  const hasPrevPage = page > 1;
  const hasNextPage = page < lastPage;
  const prevPage = page - 1;
  const nextPage = page + 1;
  const visiblePages = getVisiblePages(page, lastPage);
  const { start, end } = getDisplayedPageRange(page, pageSize, total);

  // stylings
  const pageBaseClassNames = 'pagination__controls-button';
  const firstPageClassNames = clsx([pageBaseClassNames, 'first-page'], !hasPrevPage && 'disabled');
  const prevPageClassNames = clsx(
    [pageBaseClassNames, 'previous-page mr-2'],
    !hasPrevPage && 'disabled'
  );
  const nextPageClassNames = clsx(
    [pageBaseClassNames, 'next-page ml-2'],
    !hasNextPage && 'disabled'
  );
  const lastPageClassNames = clsx([pageBaseClassNames, 'last-page'], !hasNextPage && 'disabled');

  // components
  const visiblePagesContent = visiblePages.map(({ number, label, isActive, isFirst, isLast }) => (
    <a
      key={`catalog-page-${label}`}
      href={urlManager.composeURLForSetPage(number)}
      className={clsx(
        [pageBaseClassNames, 'numbers'],
        isActive && 'active',
        isFirst && 'first-child',
        isLast && 'last-child'
      )}
    >
      {label}
    </a>
  ));

  return (
    <div className="pagination mx-2 my-4 flex flex-wrap-reverse items-center justify-between">
      <div className="pagination__left mt-2 flex items-center justify-start">
        <span>
          Showing{' '}
          <strong>
            {start}-{end}
          </strong>{' '}
          of <strong>{total} items</strong>
        </span>
      </div>
      {!!visiblePages.length && (
        <div className="pagination__right mt-2 flex items-center justify-end">
          <div className="pagination__controls flex justify-center">
            <a href={urlManager.composeURLForSetPage(1)} className={firstPageClassNames}>
              <i className="icon-rewind" aria-label="rewind"></i>
            </a>
            <a href={urlManager.composeURLForSetPage(prevPage)} className={prevPageClassNames}>
              <i className="icon-navigateleft" aria-label="navigateleft"></i>
            </a>
            {visiblePagesContent}
            <a href={urlManager.composeURLForSetPage(nextPage)} className={nextPageClassNames}>
              <i className="icon-navigateright" aria-label="navigateright"></i>
            </a>
            <a href={urlManager.composeURLForSetPage(lastPage)} className={lastPageClassNames}>
              <i className="icon-fastforward" aria-label="fastforward"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

CatalogPagination.displayName = 'CatalogPagination';
export default CatalogPagination;
