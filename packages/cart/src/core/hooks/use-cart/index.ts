import React from 'react';
import { CartContext } from '../../components/cart-provider';

/**
 * The `useCart` hook provides access to the cart context. It must be a descendent of a `CartProvider` component.
 */
export function useCart() {
  const context = React.useContext(CartContext);

  if (!context) {
    throw new Error('Expected a Cart Context, but no Cart Context was found');
  }

  return context;
}
