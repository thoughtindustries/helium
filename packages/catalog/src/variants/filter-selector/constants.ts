import { SortField } from '../../core';
import { GlobalTypes } from '@thoughtindustries/content';

export const localizedSortMapping: { [key in SortField]: string } = {
  [GlobalTypes.SortColumn.UpdatedAt]: 'catalog.sort-updated',
  [GlobalTypes.SortColumn.CreatedAt]: 'catalog.sort-created',
  [GlobalTypes.SortColumn.Title]: 'catalog.sort-title',
  [GlobalTypes.SortColumn.PublishDate]: 'catalog.sort-publish-date',
  [GlobalTypes.SortColumn.CourseStartDate]: 'catalog.sort-course-start-date',
  [GlobalTypes.SortColumn.Relevance]: 'catalog.sort-relevance'
};
