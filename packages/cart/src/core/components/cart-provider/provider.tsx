import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { getCookie } from 'typescript-cookie';
import { CART_COOKIE_NAME } from './constants';
import CartContext from './context';
import {
  AddPurchaseableItemPayload,
  CartActionType,
  CartContextType,
  CartItem,
  CartProviderProps,
  CartState,
  CartStateStatus
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
  const [state, dispatch] = usePersistReducer(CART_COOKIE_NAME);

  const addItem = useCallback((item: CartItem, state: CartState) => {
    if (state.status === CartStateStatus.Idle) {
      dispatch({ type: CartActionType.AddCartItem, item });
    }
  }, []);

  const addPurchaseableItem = useCallback(
    (payload: AddPurchaseableItemPayload, state: CartState) => {
      if (state.status === CartStateStatus.Idle) {
        const item = parsePurchaseableItem(payload);
        dispatch({ type: CartActionType.AddCartItem, item });
      }
    },
    []
  );

  const removeItem = useCallback((item: CartItem, state: CartState) => {
    if (state.status === CartStateStatus.Idle) {
      dispatch({ type: CartActionType.RemoveCartItem, item });
    }
  }, []);

  // initialize cart from browser cookie
  const didInitCart = useRef(false);
  useEffect(() => {
    if (state.status === CartStateStatus.Uninitialized && !didInitCart.current) {
      didInitCart.current = true;
      dispatch({
        type: CartActionType.InitializeCart,
        cart: parseCartCookie(getCookie(CART_COOKIE_NAME))
      });
    }
  }, [state]);

  const cartContextValue = useMemo<CartContextType>(
    () => ({
      items: [...state.cart.items],
      status: state.status,
      totalQuantity: state.cart.items.reduce((previous, current) => {
        return previous + current.quantity;
      }, 0),
      addItem: (item: CartItem) => addItem(item, state),
      addPurchaseableItem: (payload: AddPurchaseableItemPayload) =>
        addPurchaseableItem(payload, state),
      removeItem: (item: CartItem) => removeItem(item, state),
      checkoutUrl
    }),
    [state, addItem, removeItem, checkoutUrl]
  );

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
