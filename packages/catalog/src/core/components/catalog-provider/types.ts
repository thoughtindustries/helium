import { CatalogParams } from '../../utilities/parse-catalog-data';
import { CatalogParsedURL, CatalogURLManager } from '../../utilities/manage-catalog-url';
import { ReactNode, RefObject } from 'react';

export type navigateClientSideAsyncFnParams = {
  url: string;
  pushToUrl?: boolean;
};

export type CatalogContextType = {
  params: CatalogParams;
  urlManager: CatalogURLManager;
  ssr: boolean;
  navigateClientSideAsync?: (params: navigateClientSideAsyncFnParams) => Promise<void>;
  isLoading: boolean;
  scrollToRef?: RefObject<HTMLDivElement>;
  contentWrapperRef?: RefObject<HTMLDivElement>;
};

export type CatalogProviderProps = CatalogParsedURL & {
  children: ReactNode;
  layoutId?: string;
  widgetId?: string;
  ssr: boolean;
};
