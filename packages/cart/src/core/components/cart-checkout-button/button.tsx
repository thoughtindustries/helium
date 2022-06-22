import React, { forwardRef } from 'react';
import { useCart } from '../../hooks/use-cart';
import { useCartCheckout } from '../../hooks/use-cart-checkout';
import { CartCheckoutButtonProps } from './types';

/**
 * The `CartCheckoutButton` component renders a button that redirects to the checkout URL for the cart.
 * It must be a descendent of a `CartProvider` component.
 */
const CartCheckoutButton = forwardRef<HTMLButtonElement, CartCheckoutButtonProps>(
  ({ children, ...passThroughProps }, ref) => {
    const { isInitialized } = useCart();
    const { isCheckoutRequested, startCheckout } = useCartCheckout();
    const disabled = !isInitialized || isCheckoutRequested || passThroughProps.disabled;

    return (
      <button {...passThroughProps} ref={ref} disabled={disabled} onClick={startCheckout}>
        {children}
      </button>
    );
  }
);

CartCheckoutButton.displayName = 'CartCheckoutButton';
export default CartCheckoutButton;
