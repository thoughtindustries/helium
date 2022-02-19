import React, { FC } from 'react';

const FilterWrapper: FC = ({ children }) => (
  <span className="py-3 ml-1 inline-block">{children}</span>
);

FilterWrapper.displayName = 'FilterWrapper';

export default FilterWrapper;
