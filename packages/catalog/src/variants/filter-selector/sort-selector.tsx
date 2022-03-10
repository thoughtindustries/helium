import React from 'react';
import { useTranslation } from 'react-i18next';
import { CatalogFiltersState, useCatalogURLManager } from '../../core';
import { localizedSortMapping } from './constants';
import DropdownMenu from './dropdown-menu';

const SortSelector = ({
  enabledSorts,
  sort
}: Pick<CatalogFiltersState, 'enabledSorts' | 'sort'>): JSX.Element => {
  const { t } = useTranslation();
  const urlManager = useCatalogURLManager();
  const { field: selectedField, direction: selectedDirection } = sort || {};
  const label = t('catalog.sort-by');
  const filters = enabledSorts.map(item => ({
    isSelected: selectedField === item.field && selectedDirection === item.direction,
    name: t(localizedSortMapping[item.field]),
    link: urlManager.composeURLForSetSort(item)
  }));

  return <DropdownMenu id="sort-options" label={label} options={filters} />;
};

SortSelector.displayName = 'SortSelector';
export default SortSelector;
