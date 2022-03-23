import { PAGINATION_INNER_WINDOW, PAGINATION_MAX_PAGES } from './constants';
import { DisplayedPageRange, VisiblePage } from './types';

export const getVisiblePages = (page: number, lastPage: number): VisiblePage[] => {
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

export const getDisplayedPageRange = (
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
