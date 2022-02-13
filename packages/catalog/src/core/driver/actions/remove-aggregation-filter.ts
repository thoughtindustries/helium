import { DEFAULT_PAGE } from '../constants';
import CatalogDriverBase from '../catalog-driver-base';
import { AggregationFilter } from '../types';

export type Fn = (filter: AggregationFilter) => Promise<void>;
export default async function removeAggregationFilter(
  this: CatalogDriverBase,
  filter: AggregationFilter
) {
  const { aggregationFilters } = this.getState();
  const existingFilter = aggregationFilters.find(
    item => item.label === filter.label && item.value === filter.value
  );

  if (!existingFilter) {
    return;
  }

  const newFilters = aggregationFilters.filter(
    item => item.label !== filter.label && item.value !== filter.value
  );

  await this.updateResults({
    aggregationFilters: newFilters,
    page: DEFAULT_PAGE
  });
}
