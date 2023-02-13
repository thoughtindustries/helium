import { SortColumn } from '../../core';

export const localizedSortMapping: { [key in SortColumn]: string } = {
  [SortColumn.UpdatedAt]: 'catalog.sort-updated',
  [SortColumn.CreatedAt]: 'catalog.sort-created',
  [SortColumn.Title]: 'catalog.sort-title',
  [SortColumn.PublishDate]: 'catalog.sort-publish-date',
  [SortColumn.CourseStartDate]: 'catalog.sort-course-start-date',
  [SortColumn.Relevance]: 'catalog.sort-relevance',
  [SortColumn.DisplayDate]: 'catalog.sort-display-date',
  [SortColumn.Label]: 'catalog.sort-label',
  [SortColumn.LastActiveAt]: 'catalog.sort-last-active-at',
  [SortColumn.Name]: 'catalog.sort-name',
  [SortColumn.ParentName]: 'catalog.sort-parent-name'
};
