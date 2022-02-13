import { useCatalogContentQuery } from '@thoughtindustries/content';
import React, { FC, useRef, useState } from 'react';
import {
  CatalogDriver,
  CatalogURLManager,
  searchResultsToState,
  DEFAULT_STATE,
  stateToSearchParams
} from '../../driver';
import CatalogContext from './context';
import { CatalogProviderProps } from './types';

/**
 * Catalog provider to provide access to catalog state manager and url manager.
 * The provider will be rendered on server side. Upon server rendering, it will transform
 * the server routing data to fetch catalog data. Data will be hydrated to the client side.
 * A single instance of the catalog driver and url manager will be maintained by the
 * provider upon each server request.
 *
 * User interface will allow user to do both client side interaction (like: select display type)
 * and server side navigation (like: pagination).
 */
const CatalogProvider: FC<CatalogProviderProps> = ({ children, config }) => {
  const { layoutId, widgetId, parsedUrl } = config;

  const [urlManager, setUrlManager] = useState<CatalogURLManager>(new CatalogURLManager(parsedUrl));
  const [driver, setDriver] = useState<CatalogDriver | undefined>(undefined);

  // fetch catalog data on server side
  const urlParamState = urlManager.getStateFromURL();
  const searchParams = stateToSearchParams({
    ...DEFAULT_STATE,
    ...urlParamState
  });
  // On server side, the query hook will wait till the loading stops
  const { data, error, refetch } = useCatalogContentQuery({
    variables: {
      ...searchParams,
      layoutId,
      widgetId
    }
  });

  const didInitialized = useRef(false);
  if (!didInitialized.current) {
    const driverConfig = {
      onSearch: refetch,
      layoutId,
      widgetId,
      initialState: {
        ...urlParamState,
        ...searchResultsToState(data, error)
      }
    };

    const driver = new CatalogDriver(driverConfig);

    setDriver(driver);

    didInitialized.current = true;
  }

  if (!driver) {
    return null;
  }

  return (
    <CatalogContext.Provider value={{ driver, urlManager }}>{children}</CatalogContext.Provider>
  );
};

export default CatalogProvider;
