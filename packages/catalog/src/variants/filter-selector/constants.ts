import { SortField } from '../../core';

export const localizedSortMapping: { [key in SortField]: string } = {
  [SortField.UpdatedAt]: 'catalog.sort-updated',
  [SortField.CreatedAt]: 'catalog.sort-created',
  [SortField.Title]: 'catalog.sort-title',
  [SortField.PublishedDate]: 'catalog.sort-publish-date',
  [SortField.CourseStartDate]: 'catalog.sort-course-start-date',
  [SortField.Relevance]: 'catalog.sort-relevance'
};
