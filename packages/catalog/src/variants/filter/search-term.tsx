import React from 'react';
import { CatalogFiltersState } from '../../core';
import Link from './link';

const FilterSearchTerm = ({
  searchTerm,
  removeFilterHref
}: {
  searchTerm: CatalogFiltersState['searchTerm'];
  removeFilterHref: string;
}): JSX.Element => <Link label={searchTerm as string} href={removeFilterHref} />;

FilterSearchTerm.displayName = 'FilterSearchTerm';

export default FilterSearchTerm;
