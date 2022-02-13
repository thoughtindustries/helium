import React from 'react';
import { CatalogResultItem, CatalogResultsProps } from '../../types';

type DisplayTypeResultsGridProps = Pick<CatalogResultsProps, 'onClick' | 'onAddedToQueue'> & {
  items: CatalogResultItem[];
};

const DisplayTypeResultsGrid = ({
  items,
  ...restProps
}: DisplayTypeResultsGridProps): JSX.Element => {
  const contentItems = items
    .filter(({ isNotCompleted }) => !isNotCompleted)
    .map((_, index) => <div key={`result-item-${index}`} />);
  return <>Grid results: {contentItems}</>;
};

DisplayTypeResultsGrid.displayName = 'DisplayTypeResultsGrid';
export default DisplayTypeResultsGrid;
