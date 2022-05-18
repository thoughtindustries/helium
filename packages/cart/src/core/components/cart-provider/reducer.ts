import { CartAction, CartActionType, CartState, CartStateStatus } from './types';

export const initialState: CartState = {
  status: CartStateStatus.Uninitialized,
  shouldPersist: false
};

export default function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case CartActionType.InitializeCart: {
      if (state.status === CartStateStatus.Uninitialized) {
        return {
          ...state,
          status: CartStateStatus.Idle,
          shouldPersist: false,
          cart: { ...action.cart }
        };
      }
      return {
        ...state,
        shouldPersist: false
      };
    }
    case CartActionType.AddCartItem: {
      if (state.status === CartStateStatus.Idle) {
        /**
         * TODO: port over logics from:
         * - https://github.com/thoughtindustries/ti/blob/85dcdbad7eb17979c7a7ec3f347506bfb736284b/assets/javascripts/lms/routes/home.js#L45-L126
         * - https://github.com/thoughtindustries/ti/blob/85dcdbad7eb17979c7a7ec3f347506bfb736284b/assets/javascripts/lms/models/cart.js#L34-L51
         */
        return {
          ...state,
          shouldPersist: true
        };
      }
      return {
        ...state,
        shouldPersist: false
      };
    }
    case CartActionType.RemoveCartItem: {
      if (state.status === CartStateStatus.Idle) {
        return {
          ...state,
          shouldPersist: true
        };
      }
      return {
        ...state,
        shouldPersist: false
      };
    }
  }
}
