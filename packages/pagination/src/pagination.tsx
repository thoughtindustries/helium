import React from 'react';
import clsx from 'clsx';
import { DEFAULT_HIDE_PAGE_LIST, DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from './constants';
import { ArrowLeftIcon, ArrowRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from './icons';
import { PaginationProps } from './types';
import { getDisplayedPageRange, getVisiblePages } from './utilities';

const Pagination = ({
  page = DEFAULT_PAGE,
  total,
  pageSize = DEFAULT_PAGE_SIZE,
  getPageLink,
  hidePageList = DEFAULT_HIDE_PAGE_LIST
}: PaginationProps): JSX.Element => {
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
  const visiblePagesContent = !hidePageList
    ? visiblePages.map(({ number, label, isActive, isFirst, isLast }) => {
        const firstLastBorderClassnames = isFirst
          ? 'border-l-1 border-r-0 rounded-r-none'
          : 'border-r-1 border-l-0 rounded-l-none';
        const borderClassnames =
          isFirst || isLast ? clsx('rounded', firstLastBorderClassnames) : 'border-x-0';
        return (
          <a
            key={`catalog-page-${label}`}
            href={getPageLink(number)}
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
      })
    : null;

  return (
    <div className="mx-2 my-4 flex flex-wrap-reverse items-center justify-between">
      <div className="mt-2 flex items-center justify-start">
        <span>
          Showing<strong>{` ${start}-${end} `}</strong>of<strong>{` ${total} items`}</strong>
        </span>
      </div>
      {!!visiblePages.length && (
        <div className="mt-2 flex items-center justify-end">
          <div className="flex justify-center">
            <a href={getPageLink(1)} className={firstPageClassnames} aria-label="rewind">
              <DoubleArrowLeftIcon />
            </a>
            <a
              href={getPageLink(prevPage)}
              className={prevPageClassnames}
              aria-label="navigateleft"
            >
              <ArrowLeftIcon />
            </a>
            {visiblePagesContent}
            <a
              href={getPageLink(nextPage)}
              className={nextPageClassnames}
              aria-label="navigateright"
            >
              <ArrowRightIcon />
            </a>
            <a href={getPageLink(lastPage)} className={lastPageClassnames} aria-label="fastforward">
              <DoubleArrowRightIcon />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

Pagination.displayName = 'Pagination';
export default Pagination;
