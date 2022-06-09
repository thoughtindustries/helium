import { CartUIProviderProps } from './core';

export type PriceFormatFn = (priceInCents: number) => string;

export type CartProps = CartUIProviderProps & {
  /** optional function for prioritized price formatting */
  priceFormat?: PriceFormatFn;
  /** company property to format price */
  companyDefaultLocale?: string;
  /** currency code to format price */
  currencyCode?: string;
};
