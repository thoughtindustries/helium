import { GlobalTypes } from '@thoughtindustries/content';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CatalogParams, SortField, useCatalog } from '../../core';
import DropdownMenu from './dropdown-menu';

const SortSelector = ({
  enabledSorts,
  sort
}: Pick<CatalogParams, 'enabledSorts' | 'sort'>): JSX.Element => {
  const { t } = useTranslation();

  const localizedSortMapping: { [key in SortField]: string } = {
    [GlobalTypes.SortColumn.UpdatedAt]: t('catalog.sort-updated'),
    [GlobalTypes.SortColumn.CreatedAt]: t('catalog.sort-created'),
    [GlobalTypes.SortColumn.Title]: t('catalog.sort-title'),
    [GlobalTypes.SortColumn.PublishDate]: t('catalog.sort-publish-date'),
    [GlobalTypes.SortColumn.CourseStartDate]: t('catalog.sort-course-start-date'),
    [GlobalTypes.SortColumn.Relevance]: t('catalog.sort-relevance')
  };

  const { urlManager } = useCatalog();
  const { field: selectedField, direction: selectedDirection } = sort || {};
  const label = t('catalog.sort-by');
  const filters = enabledSorts.map(item => ({
    isSelected: selectedField === item.field && selectedDirection === item.direction,
    name: localizedSortMapping[item.field],
    link: urlManager.composeURLForSetSort(item)
  }));

  return <DropdownMenu id="sort-options" label={label} options={filters} />;
};

SortSelector.displayName = 'SortSelector';
export default SortSelector;
