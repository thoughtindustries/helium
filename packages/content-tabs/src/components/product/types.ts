import { ProductsFragmentFragment } from '../../graphql';

export type PriceFormatFn = (priceInCents: number) => string;

export interface ProductProps {
  /** array containing products to show */
  products?: ProductsFragmentFragment[];
  /** optional function for prioritized price formatting */
  priceFormat?: PriceFormatFn;
  /** company property to format price */
  companyDefaultLocale?: string;
  /** currency code to format price */
  currencyCode?: string;
}
