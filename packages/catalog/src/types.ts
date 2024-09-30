import { SyntheticEvent, ReactElement, ElementType } from 'react';
import { CatalogParams } from './core';
import { HydratedContentItem, GlobalTypes } from '@thoughtindustries/content';

export type CatalogResultItemRibbon = GlobalTypes.Ribbon;

export type CatalogResultItem = HydratedContentItem;

export type PriceFormatFn = (priceInCents: number) => string;

export interface CatalogResultsProps {
  /** company feature flag for content hydration */
  companyHasSessionLevelCustomFieldsFeature?: boolean;
  /** company property to override item's timezone */
  companyTimeZone?: string;
  /** event handler for add to queue button for each item */
  onAddedToQueue: (item: CatalogResultItem) => Promise<boolean | void>;
  /** optional event handler for each item */
  onClick?: (evt: SyntheticEvent, item: CatalogResultItem) => void;
  /** optional function for prioritized price formatting */
  priceFormat?: PriceFormatFn;
  /** company property to format price */
  companyDefaultLocale?: string;
  /** currency code to format price */
  currencyCode?: string;
  /** specify number of items to return from catalog */
  numberOfContentItems?: number;
  ItemWrapperComponent?: ItemWrapper;
}

export type ItemWrapper = (
  props: Pick<CatalogResultsProps, 'onClick' | 'onAddedToQueue'> &
    Pick<CatalogParams, 'displayAuthorsEnabled' | 'displayStartDateEnabled' | 'displayBundle'> & {
      priceFormatFn: PriceFormatFn;
      children: React.ReactNode;
      item: HydratedContentItem;
    }
) => JSX.Element;

export type DisplayTypeResultsGridProps = Pick<CatalogResultsProps, 'onClick' | 'onAddedToQueue'> &
  Pick<CatalogParams, 'displayAuthorsEnabled' | 'displayStartDateEnabled' | 'displayBundle'> & {
    items: CatalogResultItem[];
    ItemWrapperComponent?: ItemWrapper;
    priceFormatFn: PriceFormatFn;
  };

export type DisplayTypeResultsGridItemProps = Omit<DisplayTypeResultsGridProps, 'items'> & {
  item: CatalogResultItem;
};

export type PaginationFnArgs = {
  page: number;
  pageSize: number;
  total: number;
  getPageLink: (page: number) => string;
  linkComponent?: ElementType;
};
export type PaginationFn = (args: PaginationFnArgs) => ReactElement;

export interface CatalogProps extends CatalogResultsProps {
  /** title that appears on top of the catalog */
  title?: string;
  /** display alternate title */
  alternateTitleDisplay?: boolean;
  /** optional view for pagination */
  pagination?: PaginationFn;
}
