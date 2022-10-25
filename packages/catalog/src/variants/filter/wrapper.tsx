import React, { FC, ReactNode } from 'react';

interface FilterWrapperProps {
  children: ReactNode;
}
const FilterWrapper: FC<FilterWrapperProps> = ({ children }) => (
  <span className="py-3 ml-1 inline-block">{children}</span>
);

FilterWrapper.displayName = 'FilterWrapper';

export default FilterWrapper;
