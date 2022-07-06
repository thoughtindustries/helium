import React, { FC } from 'react';
import CartModal from './cart-modal';
import { CartUIProvider } from './core';
import { CartProps } from './types';

const Cart: FC<CartProps> = ({
  children,
  priceFormat,
  companyDefaultLocale,
  currencyCode,
  ...passThroughProps
}) => (
  <CartUIProvider {...passThroughProps}>
    {children}
    <CartModal
      priceFormat={priceFormat}
      companyDefaultLocale={companyDefaultLocale}
      currencyCode={currencyCode}
    />
  </CartUIProvider>
);

Cart.displayName = 'Cart';

export default Cart;
