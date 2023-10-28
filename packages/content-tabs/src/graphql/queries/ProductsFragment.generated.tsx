import * as Types from '../global-types';

import { gql } from '@apollo/client';
export type ProductsFragmentFragment = {
  __typename?: 'Product';
  id: string;
  asset?: string;
  name?: string;
  priceInCents?: number;
  alternativePricingRef?: number;
};

export const ProductsFragmentFragmentDoc = gql`
  fragment ProductsFragment on Product {
    id
    asset
    name
    priceInCents
    alternativePricingRef
  }
`;
