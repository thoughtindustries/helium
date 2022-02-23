import { CatalogDriverState } from '../../driver';

export type CatalogResultsState = Pick<
  CatalogDriverState,
  // aggregation
  | 'aggregations'
  | 'aggregationFilters'
  // display type
  | 'displayType'
  | 'resultsDisplayType'
  // results
  | 'results'
  | 'queryCustomFields'
  | 'displayBundle'
  | 'displayAuthorsEnabled'
  | 'displayStartDateEnabled'
  | 'displayDescriptionOnCalendar'
>;
