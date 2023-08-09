import { CatalogContentQuery, useCatalogContentQuery } from '@thoughtindustries/content';
import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import { CatalogURLManager } from '../../utilities/manage-catalog-url';
import {
  CatalogParams,
  parseQueryVariables,
  parseResponseData,
  DEFAULT_PARAMS
} from '../../utilities/parse-catalog-data';
import CatalogContext from './context';
import { CatalogProviderProps, navigateClientSideAsyncFnParams } from './types';
import { useWindowEventListener } from '@thoughtindustries/hooks';

const getParsedParams = (urlManager: CatalogURLManager) => {
  const parsedUrlRequestParams = urlManager.getParsedRequestParams();
  return {
    ...DEFAULT_PARAMS,
    ...parsedUrlRequestParams
  };
};

const getQueryVariables = (urlManager: CatalogURLManager) => {
  const parsedParams = getParsedParams(urlManager);
  return parseQueryVariables({
    ...parsedParams
  });
};

/**
 * Catalog client provider to provide access to catalog params, url manager and client navigation
 * function, as well as shared values with catalog server provider like: ssr and is loading state.
 * The provider will fetch data on client side. A single instance of the catalog url manager will
 * be persisted upon each client side navigation.
 *
 * User interface will allow user to do client side navigation.
 */
const CatalogClientProvider: FC<CatalogProviderProps> = ({ children, ...restProps }) => {
  const { layoutId, widgetId, pathName, searchString, ssr } = restProps;
  const parsedUrl = { pathName, searchString };

  const [urlManager] = useState<CatalogURLManager>(() => new CatalogURLManager(parsedUrl));
  const [params, setParams] = useState<CatalogParams>(() => getParsedParams(urlManager));
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const scrollToRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const postDataFetchOperations = useCallback(
    (data?: CatalogContentQuery, error?: Error) => {
      const baseParams = getParsedParams(urlManager);
      const newParams =
        data || error ? { ...baseParams, ...parseResponseData(data, error) } : { ...baseParams };
      setParams(newParams);
      urlManager.setIsCurated(newParams.isCurated);
      urlManager.setSelectedDisplayType(newParams.displayType || baseParams.resultsDisplayType);
      setIsLoading(false);
    },
    [parseResponseData, setParams, setIsLoading, urlManager]
  );

  // Data fetching will take place in client side
  const queryVariables = useMemo(() => getQueryVariables(urlManager), [urlManager]);
  const { refetch: refetchCatalogContent } = useCatalogContentQuery({
    variables: {
      ...queryVariables,
      layoutId,
      widgetId
    },
    ssr: false,
    onCompleted: data => {
      postDataFetchOperations(data, undefined);
    },
    onError: error => {
      postDataFetchOperations(undefined, error);
    }
  });

  const navigateClientSideAsync = useCallback(
    async ({ url, pushToUrl = true }: navigateClientSideAsyncFnParams) => {
      // update html refs during loading state
      if (scrollToRef.current) {
        scrollToRef.current.scrollIntoView({
          behavior: 'auto',
          block: 'start'
        });
      }
      if (contentWrapperRef.current) {
        const tmpHeight = contentWrapperRef.current.clientHeight;
        contentWrapperRef.current.style.setProperty('height', `${tmpHeight}px`);
      }

      // pre data-fetch operations
      setIsLoading(true);
      urlManager.updateUrl(url);
      const queryVariables = getQueryVariables(urlManager);

      // refetch data
      await refetchCatalogContent({
        ...queryVariables,
        layoutId,
        widgetId
      });

      // push to url
      if (pushToUrl) {
        window.history.pushState(window.history.state, '', url);
      }

      // reset html refs
      if (contentWrapperRef.current) {
        contentWrapperRef.current.style.setProperty('height', 'auto');
      }
    },
    [setIsLoading, refetchCatalogContent, urlManager]
  );

  // Event listener for 'popstate' to capture browser navigations
  const historyHandler = useCallback(
    (event: PopStateEvent) => {
      console.log(`...history.scrollRestoration`, window.history.scrollRestoration);
      const { pathname, search } = window.location;
      const newUrl = pathname + search;
      navigateClientSideAsync({ url: newUrl, pushToUrl: false });
    },
    [navigateClientSideAsync]
  );
  useWindowEventListener('popstate', historyHandler);

  return (
    <CatalogContext.Provider
      value={{
        isLoading,
        urlManager,
        params,
        ssr,
        navigateClientSideAsync,
        scrollToRef,
        contentWrapperRef
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export default CatalogClientProvider;
