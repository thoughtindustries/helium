import { ReactNode, SyntheticEvent } from 'react';
import { HydratedContentItem, GlobalTypes } from '@thoughtindustries/content';

export interface CatalogProps {
  /** title that appears on top of the link lists */
  title?: string;
  /** display alternate title */
  alternateTitleDisplay?: boolean;
  /** list of categories */
  children: ReactNode;
}

export type CatalogResultItemRibbon = GlobalTypes.Ribbon;

export type CatalogResultItem = HydratedContentItem;

export interface CatalogResultsProps {
  companyHasSessionLevelCustomFieldsFeature?: boolean;
  onAddedToQueue: (item: CatalogResultItem) => Promise<boolean | void>;
  /** optional on item click event handler */
  onClick?: (evt: SyntheticEvent, item: CatalogResultItem) => void;
}
