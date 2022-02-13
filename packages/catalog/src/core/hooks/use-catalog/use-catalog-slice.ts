import { useState } from 'react';
import { CatalogDriverState } from '../../driver';
import { MapContextToProps } from './types';
import useCatalog from './use-catalog';
import {
  catalogContextToMappedProps,
  catalogDriverToProps,
  useBrowserLayoutEffect
} from './utilities';

export default function useCatalogSlice<TMappedProps>(
  contextMapper: MapContextToProps<TMappedProps>
) {
  const { driver } = useCatalog();
  const [catalogState, setCatalogState] = useState({
    ...catalogContextToMappedProps<TMappedProps>(
      catalogDriverToProps(driver) as TMappedProps,
      contextMapper
    )
  });

  const subscription = (state: CatalogDriverState) => {
    setCatalogState(prevState =>
      catalogContextToMappedProps(
        {
          // We pass prevState here instead of just state so that actions are
          // persisted as well, which are not passed in the subscription param
          ...prevState,
          ...state
        },
        contextMapper
      )
    );
  };

  // We want to run this effect synchronously when state mutation takes place
  // instead of waiting till DOM finishes painting
  useBrowserLayoutEffect(() => {
    driver.subscribeToStateChanges(subscription);
    return () => {
      driver.unsubscribeToStateChanges(subscription);
    };
  }, []);

  return catalogState;
}
