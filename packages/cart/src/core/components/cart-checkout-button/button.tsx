import React, { forwardRef, useEffect, useState } from 'react';
import { useCart } from '../../hooks/use-cart';
import { CartStateStatus } from '../cart-provider';
import { CartCheckoutProps } from './types';
import { serializeCartItems } from './utilities';

const CartCheckoutButton = forwardRef<HTMLButtonElement, CartCheckoutProps>(
  ({ children, ...passThroughProps }, ref) => {
    const [requestedCheckout, setRequestedCheckout] = useState<boolean>(false);
    const { status, checkoutBaseUrl, items } = useCart();

    useEffect(() => {
      if (requestedCheckout && checkoutBaseUrl && status === CartStateStatus.Idle) {
        window.location.href = `${checkoutBaseUrl}?cart=${encodeURIComponent(
          serializeCartItems(items)
        )}`;
      }
    }, [requestedCheckout, status, checkoutBaseUrl, items]);

    return (
      <button
        {...passThroughProps}
        ref={ref}
        disabled={requestedCheckout || passThroughProps.disabled}
        onClick={() => setRequestedCheckout(true)}
      >
        {children}
      </button>
    );
  }
);

CartCheckoutButton.displayName = 'CartCheckoutButton';
export default CartCheckoutButton;
