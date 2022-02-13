import { useLayoutEffect } from 'react';
import { CatalogDriver } from '../../driver';
import { CatalogStateOrActions, MapContextToProps } from './types';

export function catalogDriverToProps(driver: CatalogDriver): CatalogStateOrActions {
  return {
    ...driver.getState(),
    ...driver.getActions()
  };
}

/* For a given object execute mapContextToProps to pluck out the relevant
properties */
export function catalogContextToMappedProps<TMappedProps>(
  stateOrContext: TMappedProps,
  mapContextToProps: MapContextToProps<TMappedProps>
) {
  return mapContextToProps(stateOrContext);
}

export const useBrowserLayoutEffect =
  typeof window !== 'undefined'
    ? useLayoutEffect
    : () => {
        // do something
      };
