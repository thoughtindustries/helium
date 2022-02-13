import { SortField } from './core';

export const localizedSortMapping: { [key in SortField]: string } = {
  [SortField.UpdatedAt]: 'catalog.sort-updated',
  [SortField.CreatedAt]: 'catalog.sort-created',
  [SortField.Title]: 'catalog.sort-title',
  [SortField.PublishedDate]: 'catalog.sort-publish-date',
  [SortField.CourseStartDate]: 'catalog.sort-course-start-date',
  [SortField.Relevance]: 'catalog.sort-relevance'
};

// number of pages on either side of active
export const PAGINATION_INNER_WINDOW = 3;
export const PAGINATION_MAX_PAGES = PAGINATION_INNER_WINDOW * 2 + 1;
