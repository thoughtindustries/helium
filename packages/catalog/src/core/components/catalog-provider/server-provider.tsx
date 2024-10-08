import { useCatalogContentQuery } from '@thoughtindustries/content';
import React, { FC, useRef, useState } from 'react';
import { CatalogURLManager } from '../../utilities/manage-catalog-url';
import {
  CatalogParams,
  parseQueryVariables,
  parseResponseData,
  DEFAULT_PARAMS
} from '../../utilities/parse-catalog-data';
import CatalogContext from './context';
import { CatalogProviderProps } from './types';

/**
 * Catalog server provider to provide access to catalog params and url manager, as
 * well as shared values with catalog client provider like: ssr and is loading state.
 * The provider will fetch data on server side. Data will be hydrated to the client side.
 * A single instance of the catalog url manager will be maintained by the
 * provider upon each server request.
 *
 * User interface will allow user to do server side navigation.
 */
const CatalogServerProvider: FC<CatalogProviderProps> = ({ children, ...restProps }) => {
  const { layoutId, widgetId, pathName, searchString, ssr } = restProps;
  const parsedUrl = { pathName, searchString };

  const [urlManager] = useState<CatalogURLManager>(new CatalogURLManager(parsedUrl));
  const [params, setParams] = useState<CatalogParams | undefined>(undefined);

  // parse url search params
  const parsedUrlRequestParams = urlManager.getParsedRequestParams();
  const queryVariables = parseQueryVariables({
    ...DEFAULT_PARAMS,
    ...parsedUrlRequestParams
  });

  // On server side, the query hook will wait till the loading stops
  const { data, error, loading } = useCatalogContentQuery({
    variables: {
      ...queryVariables,
      layoutId,
      widgetId
    }
  });

  const didInitialized = useRef(false);
  if (!didInitialized.current && !loading) {
    const newParams = {
      ...DEFAULT_PARAMS,
      ...parsedUrlRequestParams,
      ...parseResponseData(data, error)
    };
    setParams(newParams);
    urlManager.setIsCurated(newParams.isCurated);
    urlManager.setSelectedDisplayType(newParams.displayType || newParams.resultsDisplayType);

    didInitialized.current = true;
  }

  if (!params) {
    return null;
  }

  return (
    <CatalogContext.Provider
      value={{
        isLoading: false,
        urlManager,
        params,
        ssr
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export default CatalogServerProvider;
