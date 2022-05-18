import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { getCookie } from 'typescript-cookie';
import { CART_COOKIE_NAME } from './constants';
import CartContext from './context';
import {
  CartActionType,
  CartContextType,
  CartItem,
  CartProviderProps,
  CartState,
  CartStateStatus
} from './types';
import usePersistReducer from './use-persisted-reducer';
import { parseCartCookie, serializeCart } from './utilities';

const CartProvider: FC<CartProviderProps> = ({ children, checkoutBaseUrl }) => {
  const [state, dispatch] = usePersistReducer(CART_COOKIE_NAME);

  const addItem = useCallback((item: CartItem, state: CartState) => {
    if (state.status === CartStateStatus.Idle) {
      dispatch({ type: CartActionType.AddCartItem, item });
    }
  }, []);

  const removeItem = useCallback((item: CartItem, state: CartState) => {
    if (state.status === CartStateStatus.Idle) {
      dispatch({ type: CartActionType.RemoveCartItem, item });
    }
  }, []);

  // initialize cart from browser cookie
  const didInitCart = useRef(false);
  useEffect(() => {
    console.log(`CartProvider >> [useEffect]`, state);
    if (state.status === CartStateStatus.Uninitialized && !didInitCart.current) {
      console.log(`CartProvider >> [useEffect] >> dispatch`);
      didInitCart.current = true;
      dispatch({
        type: CartActionType.InitializeCart,
        cart: parseCartCookie(getCookie(CART_COOKIE_NAME))
      });
    }
  }, [state]);

  const cartContextValue = useMemo<CartContextType>(
    () => ({
      ...(state.cart ?? { items: [] }),
      status: state.status,
      totalQuantity:
        state.cart?.items?.reduce((previous, current) => {
          return previous + current.quantity;
        }, 0) || 0,
      addItem: (item: CartItem) => addItem(item, state),
      removeItem: (item: CartItem) => removeItem(item, state),
      checkoutBaseUrl
    }),
    [state, addItem, removeItem, checkoutBaseUrl]
  );

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
