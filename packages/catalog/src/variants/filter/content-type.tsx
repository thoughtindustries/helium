import React from 'react';
import { CatalogFiltersState } from '../../core';
import Link from './link';

const FilterContentType = ({
  contentType,
  removeFilterHref
}: {
  contentType: CatalogFiltersState['contentTypes'][0];
  removeFilterHref: string;
}): JSX.Element => <Link label={contentType} href={removeFilterHref} />;

FilterContentType.displayName = 'FilterContentType';

export default FilterContentType;
