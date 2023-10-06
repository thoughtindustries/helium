import * as Types from '../global-types';

import { gql } from '@apollo/client';
export type ProductsFragmentFragment = {
  __typename?: 'Product';
  id: string;
  asset?: string;
  status?: Types.Status;
  purchasable?: boolean;
  name?: string;
  longDescription?: string;
  priceInCents?: number;
  language?: string;
  suggestedRetailPriceInCents?: number;
  alternativePricingType?: Types.AlternativePricingType;
  alternativePricingRef?: number;
  relatedProducts?: Array<{
    __typename?: 'Product';
    id: string;
    asset?: string;
    status?: Types.Status;
    purchasable?: boolean;
    name?: string;
    longDescription?: string;
    priceInCents?: number;
    language?: string;
    suggestedRetailPriceInCents?: number;
    alternativePricingType?: Types.AlternativePricingType;
    alternativePricingRef?: number;
  }>;
};

export const ProductsFragmentFragmentDoc = gql`
  fragment ProductsFragment on Product {
    id
    asset
    status
    purchasable
    name
    longDescription
    priceInCents
    language
    suggestedRetailPriceInCents
    alternativePricingType
    alternativePricingRef
    relatedProducts {
      id
      asset
      status
      purchasable
      name
      longDescription
      priceInCents
      language
      suggestedRetailPriceInCents
      alternativePricingType
      alternativePricingRef
    }
  }
`;
