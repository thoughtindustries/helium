import { CatalogState } from '../../utilities/parse-catalog-state';
import { CatalogParsedURL, CatalogURLManager } from '../../utilities/manage-catalog-url';

export type CatalogContextType = {
  state: CatalogState;
  urlManager: CatalogURLManager;
};

export type CatalogProviderConfig = {
  layoutId?: string;
  widgetId?: string;
  parsedUrl: CatalogParsedURL;
};

export type CatalogProviderProps = {
  config: CatalogProviderConfig;
};
