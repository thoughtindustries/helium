import * as Types from '../global-types';

import { gql } from '@apollo/client';
export type CatalogMetaFragmentFragment = {
  __typename?: 'CatalogMeta';
  contentTypeFilterEnabled: boolean;
  contentTypes?: Array<string>;
  displayAuthorsEnabled: boolean;
  displayStartDateEnabled: boolean;
  displayDescriptionOnCalendar: boolean;
  displayTypeCalendarEnabled: boolean;
  displayTypeGridEnabled: boolean;
  displayTypeListEnabled: boolean;
  hasMore: boolean;
  isCurated: boolean;
  queryCustomFields: any;
  resultsDisplayType: Types.ContentItemDisplayType;
  selectedSortColumn: Types.SortColumn;
  selectedSortDirection: Types.SortDirection;
  sortCourseStartDateEnabled: boolean;
  sortCreatedAtEnabled: boolean;
  sortPublishDateEnabled: boolean;
  sortRelevanceEnabled: boolean;
  sortTitleEnabled: boolean;
  sortUpdatedAtEnabled: boolean;
  tokenLabel?: string;
  total?: number;
  aggregations?: Array<{
    __typename?: 'Aggregation';
    key?: string;
    label?: string;
    buckets?: Array<{
      __typename?: 'AggregationBucket';
      query?: string;
      value?: string;
      label?: string;
      description?: string;
      count?: number;
    }>;
  }>;
  displayBundle?: {
    __typename?: 'Bundle';
    id: string;
    name: string;
    slug: string;
    priceInCents?: number;
    annualPriceInCents?: number;
  };
};

export const CatalogMetaFragmentFragmentDoc = gql`
  fragment CatalogMetaFragment on CatalogMeta {
    aggregations {
      key
      label
      buckets {
        query
        value
        label
        description
        count
      }
    }
    contentTypeFilterEnabled
    contentTypes
    displayAuthorsEnabled
    displayBundle {
      id
      name
      slug
      priceInCents
      annualPriceInCents
    }
    displayStartDateEnabled
    displayDescriptionOnCalendar
    displayTypeCalendarEnabled
    displayTypeGridEnabled
    displayTypeListEnabled
    hasMore
    isCurated
    queryCustomFields
    resultsDisplayType
    selectedSortColumn
    selectedSortDirection
    sortCourseStartDateEnabled
    sortCreatedAtEnabled
    sortPublishDateEnabled
    sortRelevanceEnabled
    sortTitleEnabled
    sortUpdatedAtEnabled
    tokenLabel
    total
  }
`;
