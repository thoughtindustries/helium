import { useCatalogContentQuery } from '@thoughtindustries/content';
import React, { FC, useRef, useState } from 'react';
import { CatalogURLManager } from '../../utilities/manage-catalog-url';
import {
  CatalogState,
  parseRequestParamsFromState,
  parseStateFromResults,
  DEFAULT_STATE
} from '../../utilities/parse-catalog-state';
import CatalogContext from './context';
import { CatalogProviderProps } from './types';

/**
 * Catalog provider to provide access to catalog state and url manager.
 * The provider will be rendered on server side. Upon server rendering, it will transform
 * the server url search params to fetch catalog data. Data will be hydrated to the client side.
 * A single instance of the catalog url manager will be maintained by the
 * provider upon each server request.
 *
 * User interface will allow user to do server side navigation.
 */
const CatalogProvider: FC<CatalogProviderProps> = ({ children, config }) => {
  const { layoutId, widgetId, parsedUrl } = config;

  const [urlManager] = useState<CatalogURLManager>(new CatalogURLManager(parsedUrl));
  const [state, setState] = useState<CatalogState | undefined>(undefined);

  // fetch catalog data on server side
  const urlParamState = urlManager.getStateFromURL();
  const requestParams = parseRequestParamsFromState({
    ...DEFAULT_STATE,
    ...urlParamState
  });

  // On server side, the query hook will wait till the loading stops
  const { data, error, loading } = useCatalogContentQuery({
    variables: {
      ...requestParams,
      layoutId,
      widgetId
    }
  });

  const didInitialized = useRef(false);
  if (!didInitialized.current && !loading) {
    const newState = {
      ...DEFAULT_STATE,
      ...urlParamState,
      ...parseStateFromResults(data, error)
    };
    setState(newState);
    urlManager.setIsCurated(newState.isCurated);
    urlManager.setSelectedDisplayType(newState.displayType || newState.resultsDisplayType);

    didInitialized.current = true;
  }

  if (!state) {
    return null;
  }

  return (
    <CatalogContext.Provider value={{ urlManager, state }}>{children}</CatalogContext.Provider>
  );
};

export default CatalogProvider;
