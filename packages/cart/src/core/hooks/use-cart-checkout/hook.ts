import { useCallback, useEffect, useState } from 'react';
import { CartStateStatus } from '../../components/cart-provider';
import { useCart } from '../use-cart';
import { CartCheckoutBehavior } from './types';
import { serializeCartItems } from './utilities';

/**
 * The `useCartCheckout` hook provides access to the cart checkout process.
 * It must be a descendent of a `CartProvider` component.
 */
export function useCartCheckout(): CartCheckoutBehavior {
  const [requestedCheckout, setRequestedCheckout] = useState<boolean>(false);
  const { status, checkoutBaseUrl, items } = useCart();
  const startCheckout = useCallback(() => setRequestedCheckout(true), []);

  useEffect(() => {
    if (requestedCheckout && checkoutBaseUrl && status === CartStateStatus.Idle) {
      window.location.href = `${checkoutBaseUrl}?cart=${encodeURIComponent(
        serializeCartItems(items)
      )}`;
    }
  }, [requestedCheckout, status, checkoutBaseUrl, items]);

  return {
    isCheckoutRequested: requestedCheckout,
    startCheckout
  };
}
