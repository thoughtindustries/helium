import React from 'react';
import { CatalogFiltersState } from '../../core';
import Link from './link';

const FilterTokenLabel = ({
  tokenLabel,
  removeFilterHref
}: {
  tokenLabel: CatalogFiltersState['tokenLabel'];
  removeFilterHref: string;
}): JSX.Element => <Link label={tokenLabel as string} href={removeFilterHref} />;

FilterTokenLabel.displayName = 'FilterTokenLabel';

export default FilterTokenLabel;
