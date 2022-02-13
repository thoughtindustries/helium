import React, { FC } from 'react';

const FilterWrapper: FC = ({ children }) => (
  <span className="catalog-active-filter">{children}</span>
);

FilterWrapper.displayName = 'FilterWrapper';

export default FilterWrapper;
