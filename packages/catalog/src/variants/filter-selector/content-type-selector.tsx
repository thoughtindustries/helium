import React from 'react';
import { useTranslation } from 'react-i18next';
import { CatalogParams, useCatalog } from '../../core';
import DropdownMenu from './dropdown-menu';

const ContentTypeSelector = ({
  contentTypes,
  resultContentTypes
}: Pick<CatalogParams, 'contentTypes' | 'resultContentTypes'>): JSX.Element => {
  const { t } = useTranslation();
  const { urlManager } = useCatalog();
  const contentTypeFieldLabel = t('filter-by');
  const filters = resultContentTypes
    .filter(item => !contentTypes.includes(item))
    .map(item => ({
      name: item,
      link: urlManager.composeURLForAddContentType(item)
    }));

  return <DropdownMenu id="content-type-options" label={contentTypeFieldLabel} options={filters} />;
};

ContentTypeSelector.displayName = 'ContentTypeSelector';
export default ContentTypeSelector;
