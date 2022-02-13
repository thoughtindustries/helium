import React from 'react';
import { CatalogResultItem, CatalogResultsProps } from '../../types';

type DisplayTypeResultsCalendarProps = Pick<CatalogResultsProps, 'onClick' | 'onAddedToQueue'> & {
  displayDescriptionOnCalendar: boolean;
  items: CatalogResultItem[];
};

const DisplayTypeResultsCalendar = ({
  items,
  ...restProps
}: DisplayTypeResultsCalendarProps): JSX.Element => {
  const contentItems = items
    .filter(({ isNotCompleted }) => !isNotCompleted)
    .map((_, index) => <div key={`result-item-${index}`} />);
  return <>Calendar results: {contentItems}</>;
};

DisplayTypeResultsCalendar.displayName = 'DisplayTypeResultsCalendar';
export default DisplayTypeResultsCalendar;
