import { GlobalTypes, CatalogContentLazyQueryHookResult } from '@thoughtindustries/content';

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

export type CatalogDriverRequestURLState = {
  page?: number;
  searchTerm?: string;
  aggregationFilters: AggregationFilter[];
  token?: string;
};

export type CatalogDriverRequestState = CatalogDriverRequestURLState & {
  sort?: Sort;
  displayType?: GlobalTypes.ContentItemDisplayType;
  contentTypes: GlobalTypes.ContentKind[];
};

export type CatalogDriverResponseState = {
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
  resultContentTypes: GlobalTypes.ContentKind[];
  contentTypeFilterEnabled: boolean;
  displayBundle?: GlobalTypes.Bundle;
  // TODO: check if the followings can be handled on server side
  displayStartDateEnabled: boolean;
  displayAuthorsEnabled: boolean;
  // TODO: check if this is missing from schema
  displayDescriptionOnCalendar: boolean;
};

export type CatalogDriverGeneralState = {
  error?: string;
  isLoading: boolean;
  // TODO: check if this could become request state once API supports it
  pageSize: number;
};

export type CatalogDriverState = CatalogDriverRequestState &
  CatalogDriverResponseState &
  CatalogDriverGeneralState;

export type CatalogDriverConfig = {
  layoutId?: string;
  widgetId?: string;
  onSearch: CatalogContentLazyQueryHookResult[0];
  initialState?: Partial<CatalogDriverRequestState>;
  trackUrlState?: boolean;
  alwaysSearchOnInitialLoad?: boolean;
};

type CatalogDriverUpdateResultsOptions = {
  skipPushToUrl?: boolean;
  replaceUrl?: boolean;
};
export type CatalogDriverUpdateResultsFn = (
  requestParams: Partial<CatalogDriverState>,
  options?: CatalogDriverUpdateResultsOptions
) => Promise<void>;
export type CatalogDriverSubscriptionFn = (state: CatalogDriverState) => void;

export type CatalogDriverMakeRequestFn = (
  options: CatalogDriverUpdateResultsOptions
) => Promise<void>;
