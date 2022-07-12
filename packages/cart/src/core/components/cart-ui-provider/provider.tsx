import React, { FC, useCallback, useMemo, useState } from 'react';
import CartUIContext from './context';
import { CartUIProviderProps } from './types';
import { CartProvider } from '../cart-provider';

/**
 * A component that defines the behavior that occurs when a user is interacting with
 * a cart (for example, opening or closing it), it also creates a cart object and
 * provides callbacks that can be accessed by any descendent component using the
 * `useCartUI` hook, the `useCart` hook, and related hooks.
 */
const CartUIProvider: FC<CartUIProviderProps> = ({ children, ...restProps }) => {
  const [open, setOpen] = useState<boolean>(false);

  const openCart = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const closeCart = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const toggleCart = useCallback(() => {
    setOpen(open => !open);
  }, [setOpen]);

  const contextValue = useMemo(() => {
    return {
      isCartOpen: open,
      openCart,
      closeCart,
      toggleCart
    };
  }, [open, openCart, closeCart, toggleCart]);

  return (
    <CartUIContext.Provider value={contextValue}>
      <CartProvider {...restProps}>{children}</CartProvider>
    </CartUIContext.Provider>
  );
};

export default CartUIProvider;
