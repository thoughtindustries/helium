import { useCallback, useEffect, useState } from 'react';
import { useCart } from '../use-cart';
import { CartCheckoutBehavior } from './types';
import { serializeCartItems } from './utilities';

/**
 * The `useCartCheckout` hook provides access to the cart checkout process.
 * It must be a descendent of a `CartProvider` component.
 */
export function useCartCheckout(): CartCheckoutBehavior {
  const [requestedCheckout, setRequestedCheckout] = useState<boolean>(false);
  const { isInitialized, checkoutUrl, items } = useCart();
  const startCheckout = useCallback(() => setRequestedCheckout(true), []);

  useEffect(() => {
    if (requestedCheckout && checkoutUrl && isInitialized) {
      window.location.href = `${checkoutUrl}?cart=${encodeURIComponent(serializeCartItems(items))}`;
    }
  }, [requestedCheckout, isInitialized, checkoutUrl, items]);

  return {
    isCheckoutRequested: requestedCheckout,
    startCheckout
  };
}
