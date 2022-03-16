import React from 'react';
import { GlobalTypes } from '@thoughtindustries/content';
import { CatalogParams, useCatalogURLManager } from '../../core';
import {
  DisplayTypeIconGrid,
  DisplayTypeIconList,
  DisplayTypeIconCalendar
} from '../display-type-icon';

const getDisplayTypeComponent = (displayType: GlobalTypes.ContentItemDisplayType) => {
  switch (displayType) {
    case GlobalTypes.ContentItemDisplayType.List: {
      return DisplayTypeIconList;
    }
    case GlobalTypes.ContentItemDisplayType.Grid: {
      return DisplayTypeIconGrid;
    }
    case GlobalTypes.ContentItemDisplayType.Calendar: {
      return DisplayTypeIconCalendar;
    }
    default: {
      const _exhaustiveCheck: never = displayType;
      return _exhaustiveCheck;
    }
  }
};

const DisplayTypeSelector = ({
  activeDisplayType,
  enabledDisplayTypes
}: Pick<CatalogParams, 'enabledDisplayTypes'> & {
  activeDisplayType: CatalogParams['displayType'] | CatalogParams['resultsDisplayType'];
}): JSX.Element => {
  const urlManager = useCatalogURLManager();
  const selectors = enabledDisplayTypes.map(item => {
    const isActive = item === activeDisplayType;
    const props = {
      isActive,
      link: urlManager.composeURLForSetDisplayType(item)
    };
    const Component = getDisplayTypeComponent(item);
    return <Component key={item} {...props} />;
  });
  return <div className="flex flex-wrap gap-x-1 justify-end">{selectors}</div>;
};

DisplayTypeSelector.displayName = 'DisplayTypeSelector';
export default DisplayTypeSelector;
