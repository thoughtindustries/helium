import React from 'react';
import { CatalogFiltersState } from '../../core';
import Button from './button';

const FilterSearchTerm = ({
  searchTerm,
  removeSearchTerm
}: {
  searchTerm: CatalogFiltersState['searchTerm'];
  removeSearchTerm: CatalogFiltersState['removeSearchTerm'];
}): JSX.Element => {
  const handleClick = () => {
    removeSearchTerm();
  };

  return <Button label={searchTerm as string} onClick={handleClick} />;
};

FilterSearchTerm.displayName = 'FilterSearchTerm';

export default FilterSearchTerm;
