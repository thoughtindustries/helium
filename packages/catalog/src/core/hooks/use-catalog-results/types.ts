import { CatalogState } from '../../utilities/parse-catalog-state';

export type CatalogResultsState = Pick<
  CatalogState,
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
