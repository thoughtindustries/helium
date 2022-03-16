import React from 'react';
import { useCatalog, useCatalogURLManager } from './core';
import { PAGINATION_INNER_WINDOW, PAGINATION_MAX_PAGES } from './constants';
import clsx from 'clsx';
import { ArrowLeftIcon, ArrowRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from './icons';

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
  const { params } = useCatalog();
  const { page = 1, pageSize, total } = params;
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
  const pageBaseClassnames =
    'w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1';
  const disabledClassnames =
    'cursor-default pointer-events-none text-gray-400 bg-gray-300 border-gray-300';
  const enabledClassnames = 'text-gray-600';
  const firstPageClassnames = clsx(
    [pageBaseClassnames, 'rounded rounded-r-none border-r-0'],
    !hasPrevPage ? disabledClassnames : enabledClassnames
  );
  const prevPageClassnames = clsx(
    [pageBaseClassnames, 'rounded rounded-l-none border-r-1 mr-2'],
    !hasPrevPage ? disabledClassnames : enabledClassnames
  );
  const nextPageClassnames = clsx(
    [pageBaseClassnames, 'rounded rounded-r-none border-r-0 ml-2'],
    !hasNextPage ? disabledClassnames : enabledClassnames
  );
  const lastPageClassnames = clsx(
    [pageBaseClassnames, 'rounded rounded-l-none border-r-1'],
    !hasNextPage ? disabledClassnames : enabledClassnames
  );

  // components
  const visiblePagesContent = visiblePages.map(({ number, label, isActive, isFirst, isLast }) => {
    const firstLastBorderClassnames = isFirst
      ? 'border-l-1 border-r-0 rounded-r-none'
      : 'border-r-1 border-l-0 rounded-l-none';
    const borderClassnames =
      isFirst || isLast ? clsx('rounded', firstLastBorderClassnames) : 'border-x-0';
    return (
      <a
        key={`catalog-page-${label}`}
        href={urlManager.composeURLForSetPage(number)}
        className={clsx(
          [pageBaseClassnames, borderClassnames],
          isActive
            ? 'cursor-default pointer-events-none bg-accent border-accent text-accent-contrast'
            : 'text-gray-600'
        )}
      >
        {label}
      </a>
    );
  });

  return (
    <div className="mx-2 my-4 flex flex-wrap-reverse items-center justify-between">
      <div className="mt-2 flex items-center justify-start">
        <span>
          Showing{' '}
          <strong>
            {start}-{end}
          </strong>{' '}
          of <strong>{total} items</strong>
        </span>
      </div>
      {!!visiblePages.length && (
        <div className="mt-2 flex items-center justify-end">
          <div className="flex justify-center">
            <a
              href={urlManager.composeURLForSetPage(1)}
              className={firstPageClassnames}
              aria-label="rewind"
            >
              <DoubleArrowLeftIcon />
            </a>
            <a
              href={urlManager.composeURLForSetPage(prevPage)}
              className={prevPageClassnames}
              aria-label="navigateleft"
            >
              <ArrowLeftIcon />
            </a>
            {visiblePagesContent}
            <a
              href={urlManager.composeURLForSetPage(nextPage)}
              className={nextPageClassnames}
              aria-label="navigateright"
            >
              <ArrowRightIcon />
            </a>
            <a
              href={urlManager.composeURLForSetPage(lastPage)}
              className={lastPageClassnames}
              aria-label="fastforward"
            >
              <DoubleArrowRightIcon />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

CatalogPagination.displayName = 'CatalogPagination';
export default CatalogPagination;
