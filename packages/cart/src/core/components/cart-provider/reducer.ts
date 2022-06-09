import { CART_ID } from './constants';
import {
  CartAction,
  CartActionType,
  CartItem,
  CartState,
  EcommItemType,
  VariationLabel
} from './types';
import { existingCartItemMatcher } from './utilities';

export const initialState: CartState = {
  cart: { id: CART_ID, items: [] },
  isInitialized: false
};

type UpdatedCartItems = {
  items: CartItem[];
  foundExistingItem?: boolean;
};

export default function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case CartActionType.InitializeCart: {
      if (!state.isInitialized) {
        return {
          ...state,
          cart: { ...action.cart },
          isInitialized: true
        };
      }
      return {
        ...state
      };
    }
    case CartActionType.AddCartItem: {
      if (state.isInitialized) {
        const existingItemMatcher = existingCartItemMatcher(action.item);
        const { items, foundExistingItem } = state.cart.items.reduce(
          (prev, item) => {
            // only account for the first existing item
            const isFirstExistingItem = !prev.foundExistingItem && existingItemMatcher(item);
            if (isFirstExistingItem) {
              prev.foundExistingItem = true;
              if (item.purchasableType === EcommItemType.Product) {
                // products can have quantities
                prev.items.push({
                  ...item,
                  quantity: item.quantity + action.item.quantity
                });
              } else {
                // replace existing with new item
                prev.items.push({ ...action.item });
              }
            } else {
              prev.items.push({ ...item });
            }
            return prev;
          },
          { items: [] } as UpdatedCartItems
        );
        if (!foundExistingItem) {
          // add new item
          items.push({ ...action.item });
        }
        return {
          ...state,
          cart: {
            ...state.cart,
            items
          }
        };
      }
      return {
        ...state
      };
    }
    case CartActionType.RemoveCartItem: {
      if (state.isInitialized) {
        const existingItemMatcher = existingCartItemMatcher(action.item);
        return {
          ...state,
          cart: {
            ...state.cart,
            items: state.cart.items.filter(existingItem => !existingItemMatcher(existingItem))
          }
        };
      }
      return {
        ...state
      };
    }
    case CartActionType.ToggleCartItemInstructorAccess: {
      if (state.isInitialized) {
        const existingItemMatcher = existingCartItemMatcher(action.item);
        const { items } = state.cart.items.reduce(
          (prev, item) => {
            // only account for the first existing item
            const isFirstExistingItem = !prev.foundExistingItem && existingItemMatcher(item);
            if (isFirstExistingItem) {
              prev.foundExistingItem = true;
              prev.items.push({
                ...item,
                variationLabel:
                  item.variationLabel === VariationLabel.WithInstructorAccess
                    ? VariationLabel.WithoutInstructorAccess
                    : VariationLabel.WithInstructorAccess
              });
            } else {
              prev.items.push({ ...item });
            }
            return prev;
          },
          { items: [] } as UpdatedCartItems
        );
        return {
          ...state,
          cart: {
            ...state.cart,
            items
          }
        };
      }
      return {
        ...state
      };
    }
  }
}
