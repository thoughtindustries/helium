import CatalogDriverBase from '../catalog-driver-base';
import { AggregationFilter } from '../types';
import { DEFAULT_PAGE } from '../constants';
import { reset } from './utilities';
import { activeDisplayTypeIsCalendarSelector } from '../selectors';

export type Fn = (filter: AggregationFilter) => Promise<void>;
export default async function addAggregationFilter(
  this: CatalogDriverBase,
  filter: AggregationFilter
) {
  const state = this.getState();
  let newState;
  const { aggregationFilters, isCurated, page } = state;
  if (isCurated) {
    newState = {
      ...reset(),
      aggregationFilters: [filter]
    };
  } else {
    newState = {
      aggregationFilters: aggregationFilters.concat([filter])
    };
  }

  const activeDisplayTypeIsCalendar = activeDisplayTypeIsCalendarSelector(state);
  if (page !== DEFAULT_PAGE && activeDisplayTypeIsCalendar) {
    newState.page = DEFAULT_PAGE;
  }

  await this.updateResults(newState);
}
