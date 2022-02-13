import { CatalogDriver, CatalogURLManager } from '../../driver';

export type CatalogContextType = {
  driver: CatalogDriver;
  urlManager: CatalogURLManager;
};

export type CatalogSearchQuery = {
  token?: string;
  query?: string;
  labels?: string;
  values?: string;
  page?: string;
};
export type CatalogParsedURL = {
  pathname: string;
  searchString?: string;
};
export type CatalogProviderConfig = {
  layoutId?: string;
  widgetId?: string;
  parsedUrl: CatalogParsedURL;
};

export type CatalogProviderProps = {
  driver?: CatalogDriver;
  config: CatalogProviderConfig;
};
