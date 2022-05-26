import { CART_ID } from './constants';
import {
  CartAction,
  CartActionType,
  CartItem,
  CartState,
  CartStateStatus,
  EcommItemType
} from './types';
import { existingCartItemMatcher } from './utilities';

export const initialState: CartState = {
  status: CartStateStatus.Uninitialized,
  shouldPersist: false,
  cart: { id: CART_ID, items: [] }
};

type ClonedExistingItemAndRestCartItems = {
  restItems: CartItem[];
  existingItem?: CartItem;
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
        const existingItemMatcher = existingCartItemMatcher(action.item);
        const { restItems, existingItem } = state.cart.items.reduce(
          (prev, item) => {
            // only account for the first existing item
            const isFirstExistingItem = !prev.existingItem && existingItemMatcher(item);
            if (isFirstExistingItem) {
              prev.existingItem = { ...item };
            } else {
              prev.restItems.push({ ...item });
            }
            return prev;
          },
          { restItems: [] } as ClonedExistingItemAndRestCartItems
        );
        if (existingItem && existingItem.purchasableType === EcommItemType.Product) {
          // products can have quantities
          existingItem.quantity += action.item.quantity;
          restItems.push({ ...existingItem });
        } else {
          // add new item or replace existing with new item
          restItems.push({ ...action.item });
        }
        return {
          ...state,
          cart: {
            ...state.cart,
            items: restItems
          },
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
        const existingItemMatcher = existingCartItemMatcher(action.item);
        return {
          ...state,
          cart: {
            ...state.cart,
            items: state.cart.items.filter(existingItem => !existingItemMatcher(existingItem))
          },
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
