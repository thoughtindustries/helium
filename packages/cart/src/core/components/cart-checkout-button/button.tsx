import React, { forwardRef } from 'react';
import { useCartCheckout } from '../../hooks/use-cart-checkout';
import { CartCheckoutButtonProps } from './types';

const CartCheckoutButton = forwardRef<HTMLButtonElement, CartCheckoutButtonProps>(
  ({ children, ...passThroughProps }, ref) => {
    const { isCheckoutRequested, startCheckout } = useCartCheckout();
    return (
      <button
        {...passThroughProps}
        ref={ref}
        disabled={isCheckoutRequested || passThroughProps.disabled}
        onClick={startCheckout}
      >
        {children}
      </button>
    );
  }
);

CartCheckoutButton.displayName = 'CartCheckoutButton';
export default CartCheckoutButton;
