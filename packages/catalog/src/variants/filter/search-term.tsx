import React from 'react';
import { CatalogParams } from '../../core';
import Link from './link';

const FilterSearchTerm = ({
  searchTerm,
  removeFilterHref
}: {
  searchTerm: CatalogParams['searchTerm'];
  removeFilterHref: string;
}): JSX.Element => <Link label={searchTerm as string} href={removeFilterHref} />;

FilterSearchTerm.displayName = 'FilterSearchTerm';

export default FilterSearchTerm;
