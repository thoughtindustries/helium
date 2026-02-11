import { useCallback, useReducer } from 'react';
import type { Reducer } from 'react';
import Cookies, { CookieSetOptions } from 'universal-cookie';
import reducer, { initialState } from './reducer';
import { CartAction, CartActionType, CartState } from './types';
import { serializeCart } from './utilities';

export default function usePersistReducer(cookieName: string, cookieManager: Cookies) {
  const updateCookie = useCallback(
    (newValue: string, options?: CookieSetOptions) => {
      cookieManager.set(cookieName, newValue, options);
    },
    [cookieName, cookieManager]
  );

  // Wrap `reducer` with a memoized function that
  // syncs the `newState` to `cookie` before
  // returning `newState`.
  const reducerCookie = useCallback(
    (state: CartState, action: CartAction) => {
      const newState = reducer(state, action);
      const { cart } = newState;
      // skip persisting cookie during initialization
      if (action.type !== CartActionType.InitializeCart) {
        // Cart is already base64 encoded, which is cookie-safe
        updateCookie(serializeCart(cart), {
          secure: false,
          httpOnly: false,
          path: '/'
        });
      }
      return newState;
    },
    [updateCookie]
  );

  return useReducer<Reducer<CartState, CartAction>>(reducerCookie, initialState);
}
