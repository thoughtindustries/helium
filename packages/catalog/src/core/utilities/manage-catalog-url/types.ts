import { AggregationFilter } from '../parse-catalog-data';

export type CatalogParsedURL = {
  pathname: string;
  searchString?: string;
};

export type AggregationFilterWithComposedURL = {
  filter: AggregationFilter;
  url: string;
};

export type ContentTypeWithComposedURL = {
  contentType: string;
  url: string;
};

export enum CatalogURLSearchParams {
  Token = 'token',
  SearchTerm = 'query',
  AggregationLabels = 'labels',
  AggregationValues = 'values',
  ContentTypes = 'content-types',
  DisplayType = 'display-type',
  Page = 'page',
  Sort = 'sort'
}

export type SearchTermFormHiddenField = {
  name: string;
  value: string;
};
