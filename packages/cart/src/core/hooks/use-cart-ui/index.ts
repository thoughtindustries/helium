import React from 'react';
import { CartUIContext } from '../../components/cart-ui-provider';

/**
 * The `useCartUI` hook provides access to the cart ui context. It must be a descendent of a `CartUIProvider` component.
 */
export function useCartUI() {
  const context = React.useContext(CartUIContext);

  if (!context) {
    throw new Error('Expected a Cart UI Context, but no Cart UI Context was found');
  }

  return context;
}
