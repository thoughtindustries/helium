import React, { FC, useCallback, useEffect, useMemo } from 'react';
import Cookies from 'universal-cookie';
import { CART_COOKIE_NAME } from './constants';
import CartContext from './context';
import {
  AddPurchaseableItemPayload,
  CartActionType,
  CartContextType,
  CartItem,
  CartProviderProps
} from './types';
import usePersistReducer from './use-persist-reducer';
import { parseCartCookie, parsePurchaseableItem } from './utilities';

/**
 * The `CartProvider` component creates a context for using a cart. It creates a cart object and callbacks
 * that can be accessed by any descendent component using the `useCart` hook and related hooks.
 *
 * You must use this component if you want to use the `useCart` hook or related hooks, or if you would like
 * to use the `CartCheckoutButton` component.
 */
const CartProvider: FC<CartProviderProps> = ({ children, checkoutUrl }) => {
  const cookies = new Cookies();
  const [state, dispatch] = usePersistReducer(CART_COOKIE_NAME, cookies);

  const addPurchaseableItem = useCallback((payload: AddPurchaseableItemPayload) => {
    const item = parsePurchaseableItem(payload);
    dispatch({ type: CartActionType.AddCartItem, item });
  }, []);

  const removeItem = useCallback((item: CartItem) => {
    dispatch({ type: CartActionType.RemoveCartItem, item });
  }, []);

  const toggleItemInstructorAccess = useCallback((item: CartItem) => {
    dispatch({ type: CartActionType.ToggleCartItemInstructorAccess, item });
  }, []);

  // initialize cart from browser cookie
  useEffect(() => {
    if (!state.isInitialized) {
      dispatch({
        type: CartActionType.InitializeCart,
        cart: parseCartCookie(cookies.get(CART_COOKIE_NAME))
      });
    }
  }, [state]);

  const cartContextValue = useMemo<CartContextType>(
    () => ({
      items: [...state.cart.items],
      isInitialized: state.isInitialized,
      totalQuantity: state.cart.items.reduce((previous, current) => {
        return previous + current.quantity;
      }, 0),
      addPurchaseableItem: (payload: AddPurchaseableItemPayload) => addPurchaseableItem(payload),
      removeItem: (item: CartItem) => removeItem(item),
      toggleItemInstructorAccess: (item: CartItem) => toggleItemInstructorAccess(item),
      checkoutUrl
    }),
    [state, addPurchaseableItem, removeItem, checkoutUrl]
  );

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
