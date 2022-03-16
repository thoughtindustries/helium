import React from 'react';
import { CatalogState } from '../../core';
import Link from './link';

const FilterTokenLabel = ({
  tokenLabel,
  removeFilterHref
}: {
  tokenLabel: CatalogState['tokenLabel'];
  removeFilterHref: string;
}): JSX.Element => <Link label={tokenLabel as string} href={removeFilterHref} />;

FilterTokenLabel.displayName = 'FilterTokenLabel';

export default FilterTokenLabel;
