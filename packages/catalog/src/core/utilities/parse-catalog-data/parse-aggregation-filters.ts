import { AggregationFilter } from './types';

type LabelValueParam = {
  labels: string[];
  values: string[];
};

const parseAggregationFilters = (filters: AggregationFilter[]): LabelValueParam => {
  return filters.reduce(
    (acc, { label, value }) => {
      acc.labels.push(label);
      acc.values.push(value);
      return acc;
    },
    { labels: [], values: [] } as LabelValueParam
  );
};

export default parseAggregationFilters;
