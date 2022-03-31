import { GlobalTypes } from '@thoughtindustries/content';

export type AggregationFilter = {
  label: string;
  value: string;
};

export enum SortField {
  UpdatedAt = 'updatedAt',
  CreatedAt = 'createdAt',
  Title = 'title',
  PublishedDate = 'publishDate',
  CourseStartDate = 'courseStartDate',
  Relevance = 'relevance'
}

export enum SortDirection {
  Desc = 'desc',
  Asc = 'asc'
}

export type Sort = {
  field: SortField;
  direction?: SortDirection;
};

export type CatalogRequestURLParams = {
  page?: number;
  aggregationFilters: AggregationFilter[];
  token?: string;
  searchTerm?: string;
  sort?: Sort;
  displayType?: GlobalTypes.ContentItemDisplayType;
  contentTypes: string[];
};

export type CatalogRequestParams = CatalogRequestURLParams;

export type CatalogResponseData = {
  results: GlobalTypes.Content[];
  queryCustomFields?: JSON;
  aggregations: GlobalTypes.Aggregation[];
  total?: number;
  hasMore: boolean;
  isCurated: boolean;
  tokenLabel?: string;
  resultsDisplayType?: GlobalTypes.ContentItemDisplayType;
  enabledSorts: Sort[];
  enabledDisplayTypes: GlobalTypes.ContentItemDisplayType[];
  resultContentTypes: string[];
  contentTypeFilterEnabled: boolean;
  displayBundle?: GlobalTypes.Bundle;
  displayStartDateEnabled: boolean;
  displayAuthorsEnabled: boolean;
  displayDescriptionOnCalendar: boolean;
};

export type CatalogGeneralParams = {
  error?: string;
  isLoading: boolean;
  pageSize: number;
};

export type CatalogParams = CatalogRequestParams & CatalogResponseData & CatalogGeneralParams;
