import React from 'react';
import { CatalogParams } from '../../core';
import Link from './link';

const FilterTokenLabel = ({
  tokenLabel,
  removeFilterHref
}: {
  tokenLabel: CatalogParams['tokenLabel'];
  removeFilterHref: string;
}): JSX.Element => <Link label={tokenLabel as string} href={removeFilterHref} />;

FilterTokenLabel.displayName = 'FilterTokenLabel';

export default FilterTokenLabel;
