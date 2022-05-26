import React, { forwardRef, useEffect, useState } from 'react';
import { useCartCheckout } from '../../hooks/use-cart-checkout';
import { useCart } from '../../hooks/use-cart';
import { AddToCartButtonProps } from './types';
import { CartStateStatus, OtherPurchaseableItem } from '../cart-provider';
import { useCartUI } from '../../hooks/use-cart-ui';

const AddToCartButton = forwardRef<HTMLButtonElement, AddToCartButtonProps>(
  (
    {
      purchasableType,
      purchasable,
      coupon,
      interval,
      quantity,
      children,
      shouldOpenCart,
      isMobile,
      ...passThroughProps
    },
    ref
  ) => {
    const { instructorAccessPriceInCents } = purchasable as OtherPurchaseableItem;
    const [addingItem, setAddingItem] = useState<boolean>(false);
    const { isCheckoutRequested, startCheckout } = useCartCheckout();
    const { status, addPurchaseableItem } = useCart();
    const { openCart } = useCartUI();
    const disabled =
      status !== CartStateStatus.Idle ||
      addingItem ||
      isCheckoutRequested ||
      passThroughProps.disabled;

    useEffect(() => {
      if (addingItem && status === CartStateStatus.Idle) {
        setAddingItem(false);
      }
    }, [status, addingItem]);

    return (
      <button
        {...passThroughProps}
        ref={ref}
        disabled={disabled}
        onClick={() => {
          setAddingItem(true);
          addPurchaseableItem({
            purchasableType,
            purchasable,
            coupon,
            interval,
            quantity
          });

          // skip the cart modal if the user is on a mobile device and there's nothing to upsell
          if (shouldOpenCart && isMobile && instructorAccessPriceInCents) {
            startCheckout();
          } else if (shouldOpenCart) {
            openCart();
          }
        }}
      >
        {children}
      </button>
    );
  }
);

AddToCartButton.displayName = 'AddToCartButton';
export default AddToCartButton;
