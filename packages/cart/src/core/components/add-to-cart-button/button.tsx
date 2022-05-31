import React, { forwardRef, useEffect, useState } from 'react';
import { useCartCheckout } from '../../hooks/use-cart-checkout';
import { useCart } from '../../hooks/use-cart';
import { AddToCartButtonProps } from './types';
import { OtherPurchaseableItem } from '../cart-provider';
import { useCartUI } from '../../hooks/use-cart-ui';

/**
 * The `AddToCartButton` component renders a button that adds a purchaseable item to the cart
 * when pressed. With additional props, it will follow up with step to either open the cart modal
 * or take the user directly to the checkout flow. It must be a descendent of the `CartUIProvider`
 * component.
 */
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
    const { isInitialized, addPurchaseableItem } = useCart();
    const { openCart } = useCartUI();
    const disabled =
      !isInitialized || addingItem || isCheckoutRequested || passThroughProps.disabled;

    useEffect(() => {
      if (addingItem && isInitialized) {
        setAddingItem(false);
      }
    }, [isInitialized, addingItem]);

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
