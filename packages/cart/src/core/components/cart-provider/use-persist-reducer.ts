import { useCallback, useReducer } from 'react';
import type { Reducer } from 'react';
import { setCookie, Types as CookieTypes } from 'typescript-cookie';
import reducer, { initialState } from './reducer';
import { CartAction, CartActionType, CartState } from './types';
import { serializeCart } from './utilities';

export default function usePersistReducer(cookieName: string) {
  const updateCookie = useCallback(
    (newValue: string, options?: CookieTypes.CookieAttributes) => {
      if (options) {
        setCookie(cookieName, newValue, options);
      } else {
        setCookie(cookieName, newValue);
      }
    },
    [cookieName]
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
        updateCookie(serializeCart(cart), { signed: false, secure: false, httpOnly: false });
      }
      return newState;
    },
    [updateCookie]
  );

  return useReducer<Reducer<CartState, CartAction>>(reducerCookie, initialState);
}
