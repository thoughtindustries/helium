import { GlobalTypes, CatalogContentQueryHookResult } from '@thoughtindustries/content';

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
  aggregationFilters: AggregationFilter[];
  token?: string;
};

export type CatalogDriverRequestState = CatalogDriverRequestURLState & {
  searchTerm?: string;
  sort?: Sort | string;
  displayType?: GlobalTypes.ContentItemDisplayType;
  contentTypes: string[];
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
  resultContentTypes: string[];
  contentTypeFilterEnabled: boolean;
  displayBundle?: GlobalTypes.Bundle;
  displayStartDateEnabled: boolean;
  displayAuthorsEnabled: boolean;
  displayDescriptionOnCalendar: boolean;
};

export type CatalogDriverGeneralState = {
  error?: string;
  isLoading: boolean;
  pageSize: number;
};

export type CatalogDriverState = CatalogDriverRequestState &
  CatalogDriverResponseState &
  CatalogDriverGeneralState;

export type CatalogDriverConfig = {
  onSearch: CatalogContentQueryHookResult['refetch'];
  initialState?: Partial<CatalogDriverState>;
};

export type CatalogDriverUpdateResultsFn = (
  requestParams: Partial<CatalogDriverState>
) => Promise<void>;
export type CatalogDriverSubscriptionFn = (state: CatalogDriverState) => void;

export type CatalogDriverMakeRequestFn = () => Promise<void>;
