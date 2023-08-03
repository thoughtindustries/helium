import { CatalogParams } from '../../utilities/parse-catalog-data';
import { CatalogParsedURL, CatalogURLManager } from '../../utilities/manage-catalog-url';
import { ReactNode } from 'react';

export type CatalogContextType = {
  params: CatalogParams;
  urlManager: CatalogURLManager;
};

export type CatalogProviderProps = CatalogParsedURL & {
  children: ReactNode;
  layoutId?: string;
  widgetId?: string;
};
