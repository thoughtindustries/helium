import React from 'react';
import { CatalogFiltersState } from '../../core';
import Button from './button';

const FilterContentType = ({
  contentType,
  removeContentType
}: {
  contentType: CatalogFiltersState['contentTypes'][0];
  removeContentType: CatalogFiltersState['removeContentType'];
}): JSX.Element => {
  const handleClick = () => {
    removeContentType(contentType);
  };

  return <Button label={contentType} onClick={handleClick} />;
};

FilterContentType.displayName = 'FilterContentType';

export default FilterContentType;
