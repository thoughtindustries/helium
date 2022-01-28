import { GlobalTypes, CatalogContentQueryVariables } from '@thoughtindustries/content';
import { DEFAULT_PAGE } from './constants';
import { AggregationFilter, CatalogDriverState, Sort, SortDirection, SortField } from './types';

export const truthyFilter = <T>(x: T | false | undefined | '' | 0): x is T => !!x;

type LabelValueParam = {
  labels: string[];
  values: string[];
};
export const aggregationFiltersToParams = (filters: AggregationFilter[]): LabelValueParam => {
  return filters.reduce(
    (acc, { label, value }) => {
      acc.labels.push(label);
      acc.values.push(value);
      return acc;
    },
    { labels: [], values: [] } as LabelValueParam
  );
};
export const stateToSearchParams = (state: CatalogDriverState): CatalogContentQueryVariables => {
  const {
    page = DEFAULT_PAGE,
    token,
    sort,
    displayType,
    resultsDisplayType,
    aggregationFilters,
    searchTerm,
    contentTypes
  } = state;
  const sortParam = sort && [sort.field, sort.direction].filter(truthyFilter).join(':');
  const displayTypeParam = displayType || resultsDisplayType;
  const transformedFilters = aggregationFiltersToParams(aggregationFilters);
  return {
    page,
    sort: sortParam,
    resultsDisplayType: displayTypeParam,
    token,
    contentTypes,
    query: searchTerm,
    labels: transformedFilters.labels,
    values: transformedFilters.values
  };
};

export const toEnabledSorts = ({
  sortUpdatedAtEnabled,
  sortCreatedAtEnabled,
  sortTitleEnabled,
  sortPublishDateEnabled,
  sortCourseStartDateEnabled,
  sortRelevanceEnabled
}: {
  sortUpdatedAtEnabled: boolean;
  sortCreatedAtEnabled: boolean;
  sortTitleEnabled: boolean;
  sortPublishDateEnabled: boolean;
  sortCourseStartDateEnabled: boolean;
  sortRelevanceEnabled: boolean;
}): Sort[] => {
  const sorts = [];
  if (sortUpdatedAtEnabled) {
    sorts.push({ field: SortField.UpdatedAt, direction: SortDirection.Desc });
  }
  if (sortCreatedAtEnabled) {
    sorts.push({ field: SortField.CreatedAt, direction: SortDirection.Desc });
  }
  if (sortTitleEnabled) {
    sorts.push({ field: SortField.Title, direction: SortDirection.Asc });
  }
  if (sortPublishDateEnabled) {
    sorts.push({ field: SortField.PublishedDate, direction: SortDirection.Desc });
  }
  if (sortCourseStartDateEnabled) {
    sorts.push({ field: SortField.CourseStartDate, direction: SortDirection.Asc });
  }
  if (sortRelevanceEnabled) {
    sorts.push({ field: SortField.Relevance });
  }
  return sorts;
};

export const toEnabledDisplayTypes = ({
  displayTypeListEnabled,
  displayTypeGridEnabled,
  displayTypeCalendarEnabled
}: {
  displayTypeListEnabled: boolean;
  displayTypeGridEnabled: boolean;
  displayTypeCalendarEnabled: boolean;
}): GlobalTypes.ContentItemDisplayType[] => {
  const displayTypes = [];
  if (displayTypeListEnabled) {
    displayTypes.push(GlobalTypes.ContentItemDisplayType.List);
  }
  if (displayTypeGridEnabled) {
    displayTypes.push(GlobalTypes.ContentItemDisplayType.Grid);
  }
  if (displayTypeCalendarEnabled) {
    displayTypes.push(GlobalTypes.ContentItemDisplayType.Calendar);
  }
  return displayTypes;
};

export const shouldUpdateContentTypes = (
  searchParams: CatalogContentQueryVariables,
  prevSearchParams?: CatalogContentQueryVariables
): boolean => {
  const { values, query } = searchParams;
  const { values: prevValues, query: prevQuery } = prevSearchParams || {};
  const areValuesTheSame = JSON.stringify(values) === JSON.stringify(prevValues);
  return !prevSearchParams || !areValuesTheSame || query !== prevQuery;
};
