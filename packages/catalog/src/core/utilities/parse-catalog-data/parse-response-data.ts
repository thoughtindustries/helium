import { GlobalTypes, CatalogContentQuery } from '@thoughtindustries/content';
import { SortColumn, SortDirection } from '@thoughtindustries/content/src/graphql/global-types';
import { CatalogParams, Sort } from './types';

const toEnabledSorts = ({
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
  const sorts: Sort[] = [];
  if (sortUpdatedAtEnabled) {
    sorts.push({
      field: SortColumn.UpdatedAt,
      direction: SortDirection.Desc
    });
  }
  if (sortCreatedAtEnabled) {
    sorts.push({
      field: SortColumn.CreatedAt,
      direction: SortDirection.Desc
    });
  }
  if (sortTitleEnabled) {
    sorts.push({ field: SortColumn.Title, direction: SortDirection.Asc });
  }
  if (sortPublishDateEnabled) {
    sorts.push({
      field: SortColumn.PublishDate,
      direction: SortDirection.Desc
    });
  }
  if (sortCourseStartDateEnabled) {
    sorts.push({
      field: SortColumn.CourseStartDate,
      direction: SortDirection.Asc
    });
  }
  if (sortRelevanceEnabled) {
    sorts.push({ field: SortColumn.Relevance });
  }
  return sorts;
};

const toEnabledDisplayTypes = ({
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

const parseResponseData = (data?: CatalogContentQuery, error?: Error): Partial<CatalogParams> => {
  if (error || !data) {
    return {
      error: `An unexpected error occurred: ${error ? error.message : 'empty data'}`
    };
  }

  const {
    meta: {
      displayBundle,
      tokenLabel,
      total,
      hasMore,
      isCurated,
      aggregations = [],
      contentTypes = [],
      resultsDisplayType,
      sortUpdatedAtEnabled,
      sortCreatedAtEnabled,
      sortTitleEnabled,
      sortPublishDateEnabled,
      sortCourseStartDateEnabled,
      sortRelevanceEnabled,
      displayTypeListEnabled,
      displayTypeGridEnabled,
      displayTypeCalendarEnabled,
      displayStartDateEnabled,
      displayAuthorsEnabled,
      displayDescriptionOnCalendar,
      contentTypeFilterEnabled,
      queryCustomFields
    },
    contentItems = []
  } = data.CatalogContent;

  // transform result meta to enabled sorts
  const enabledSorts = toEnabledSorts({
    sortUpdatedAtEnabled,
    sortCreatedAtEnabled,
    sortTitleEnabled,
    sortPublishDateEnabled,
    sortCourseStartDateEnabled,
    sortRelevanceEnabled
  });

  // transform result meta to enabled display types
  const enabledDisplayTypes = toEnabledDisplayTypes({
    displayTypeListEnabled,
    displayTypeGridEnabled,
    displayTypeCalendarEnabled
  });

  return {
    error: undefined,
    results: contentItems,
    queryCustomFields,
    aggregations,
    total,
    hasMore,
    isCurated,
    tokenLabel,
    resultsDisplayType,
    enabledSorts,
    enabledDisplayTypes,
    resultContentTypes: contentTypes as GlobalTypes.ContentKind[],
    displayStartDateEnabled,
    displayAuthorsEnabled,
    displayDescriptionOnCalendar,
    contentTypeFilterEnabled,
    displayBundle
  };
};

export default parseResponseData;
