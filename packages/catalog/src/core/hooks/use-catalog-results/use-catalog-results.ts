import { useMemo } from 'react';
import { useCatalogSlice } from '../use-catalog';
import { CatalogResultsState } from './types';

export default function useCatalogResults() {
  const mapper = ({
    // aggregation
    aggregations,
    aggregationFilters,
    // display type
    displayType,
    resultsDisplayType,
    // results
    results,
    queryCustomFields,
    displayBundle,
    displayStartDateEnabled,
    displayDescriptionOnCalendar
  }: CatalogResultsState) => ({
    // aggregation
    aggregations,
    aggregationFilters,
    // display type
    displayType,
    resultsDisplayType,
    // results
    results,
    queryCustomFields,
    displayBundle,
    displayStartDateEnabled,
    displayDescriptionOnCalendar
  });
  const stateSlice = useCatalogSlice(mapper);
  return useMemo(() => stateSlice, [stateSlice]);
}
