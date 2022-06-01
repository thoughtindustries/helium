import React, { FC } from 'react';
import CartModal from './cart-modal';
import { CartUIProvider } from './core';
import { CartProps } from './types';

const Cart: FC<CartProps> = ({ children, ...passThroughProps }) => (
  <CartUIProvider {...passThroughProps}>
    {children}
    <CartModal />
  </CartUIProvider>
);

Cart.displayName = 'Cart';

export default Cart;
