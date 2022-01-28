import { GlobalTypes } from '@thoughtindustries/content';
import { CatalogDriverState } from '../types';

export function activeDisplayTypeSelector({
  displayType,
  resultsDisplayType
}: CatalogDriverState): GlobalTypes.ContentItemDisplayType | undefined {
  if (displayType) {
    return displayType;
  }

  return resultsDisplayType;
}

export function activeDisplayTypeIsGridSelector(state: CatalogDriverState): boolean {
  const activeDisplayType = activeDisplayTypeSelector(state);
  return activeDisplayType === GlobalTypes.ContentItemDisplayType.Grid;
}

export function activeDisplayTypeIsListSelector(state: CatalogDriverState): boolean {
  const activeDisplayType = activeDisplayTypeSelector(state);
  return activeDisplayType === GlobalTypes.ContentItemDisplayType.List;
}

export function activeDisplayTypeIsCalendarSelector(state: CatalogDriverState): boolean {
  const activeDisplayType = activeDisplayTypeSelector(state);
  return activeDisplayType === GlobalTypes.ContentItemDisplayType.Calendar;
}
