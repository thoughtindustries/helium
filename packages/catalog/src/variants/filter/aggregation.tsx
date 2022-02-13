import React, { memo } from 'react';
import Link from './link';

const FilterAggregation = memo(
  ({ label, removeFilterHref }: { label: string; removeFilterHref: string }): JSX.Element => (
    <Link label={label} href={removeFilterHref} />
  )
);

FilterAggregation.displayName = 'FilterAggregation';

export default FilterAggregation;
