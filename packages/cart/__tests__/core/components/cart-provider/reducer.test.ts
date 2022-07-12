import {
  CartAction,
  CartActionType,
  CartItem,
  VariationLabel
} from '../../../../src/core/components/cart-provider/types';
import cartReducer, { initialState } from '../../../../src/core/components/cart-provider/reducer';

const mockCartProductItem = {
  purchasableType: 'product',
  purchasableId: 'product-1',
  title: 'Test Product',
  priceInCents: 1000,
  quantity: 5,
  isBulkPurchase: false
} as CartItem;
const mockCartBundleItem = {
  purchasableType: 'bundle',
  purchasableId: 'bundle-1',
  title: 'Test bundle',
  interval: 'month',
  priceInCents: 100,
  quantity: 1,
  isBulkPurchase: false
} as CartItem;

describe('@thoughtindustries/cart/core/CartProvider/reducer', () => {
  describe('when action type is InitializeCart', () => {
    it('should skip when already initialized', () => {
      const state = {
        ...initialState,
        isInitialized: true
      };
      const action: CartAction = {
        type: CartActionType.InitializeCart,
        cart: {
          items: [mockCartProductItem]
        }
      };
      const newState = cartReducer(state, action);
      expect(newState).toEqual(state);
    });

    it('should initialize cart when not initialized', () => {
      const action: CartAction = {
        type: CartActionType.InitializeCart,
        cart: {
          items: [mockCartProductItem]
        }
      };
      const { isInitialized, cart } = cartReducer(initialState, action);
      expect(isInitialized).toBeTruthy();
      expect(cart.items.length).toEqual(action.cart.items.length);
      expect(cart.items[0]).toEqual(expect.objectContaining(action.cart.items[0]));
    });
  });

  describe('when action type is AddCartItem', () => {
    it('should skip when not initialized', () => {
      const action: CartAction = {
        type: CartActionType.AddCartItem,
        item: mockCartProductItem
      };
      const newState = cartReducer(initialState, action);
      expect(newState).toEqual(initialState);
    });

    it('should add new item', () => {
      const state = {
        ...initialState,
        isInitialized: true
      };
      const action: CartAction = {
        type: CartActionType.AddCartItem,
        item: mockCartProductItem
      };
      const { cart } = cartReducer(state, action);
      expect(cart.items).toEqual([action.item]);
    });

    it('should increase quantity for first matching product item', () => {
      const stateItemOne = { ...mockCartProductItem };
      const stateItemTwo = { ...mockCartProductItem };
      const stateItemThree = { ...mockCartBundleItem };
      const state = {
        ...initialState,
        isInitialized: true,
        cart: {
          ...initialState.cart,
          items: [stateItemOne, stateItemTwo, stateItemThree]
        }
      };
      const action: CartAction = {
        type: CartActionType.AddCartItem,
        item: mockCartProductItem
      };
      const { cart } = cartReducer(state, action);
      expect(cart.items.length).toEqual(state.cart.items.length);
      const [itemOne, itemTwo, itemThree] = cart.items;
      expect(itemOne).toEqual(
        expect.objectContaining({
          ...stateItemOne,
          quantity: stateItemOne.quantity + action.item.quantity
        })
      );
      expect(itemTwo).toEqual(stateItemTwo);
      expect(itemThree).toEqual(stateItemThree);
    });

    it('should update for first matching non-product item', () => {
      const stateItemOne = { ...mockCartProductItem };
      const stateItemTwo = { ...mockCartBundleItem };
      const stateItemThree = { ...mockCartBundleItem };
      const state = {
        ...initialState,
        isInitialized: true,
        cart: {
          ...initialState.cart,
          items: [stateItemOne, stateItemTwo, stateItemThree]
        }
      };
      const action: CartAction = {
        type: CartActionType.AddCartItem,
        item: {
          ...mockCartBundleItem,
          title: `${mockCartBundleItem.title} - new title`
        }
      };
      const { cart } = cartReducer(state, action);
      expect(cart.items.length).toEqual(state.cart.items.length);
      const [itemOne, itemTwo, itemThree] = cart.items;
      expect(itemOne).toEqual(stateItemOne);
      expect(itemTwo).toEqual(action.item);
      expect(itemThree).toEqual(stateItemThree);
    });
  });

  describe('when action type is RemoveCartItem', () => {
    it('should skip when not initialized', () => {
      const state = {
        ...initialState,
        cart: {
          ...initialState.cart,
          items: [mockCartProductItem]
        }
      };
      const action: CartAction = {
        type: CartActionType.RemoveCartItem,
        item: mockCartProductItem
      };
      const newState = cartReducer(state, action);
      expect(newState).toEqual(state);
    });

    it('should remove all matching items', () => {
      const stateItemOne = { ...mockCartProductItem };
      const stateItemTwo = { ...mockCartBundleItem };
      const stateItemThree = { ...mockCartBundleItem };
      const state = {
        ...initialState,
        isInitialized: true,
        cart: {
          ...initialState.cart,
          items: [stateItemOne, stateItemTwo, stateItemThree]
        }
      };
      const action: CartAction = {
        type: CartActionType.RemoveCartItem,
        item: mockCartBundleItem
      };
      const { cart } = cartReducer(state, action);
      expect(cart.items.length).toEqual(1);
      const [itemOne] = cart.items;
      expect(itemOne).toEqual(stateItemOne);
    });
  });

  describe('when action type is ToggleCartItemInstructorAccess', () => {
    it('should skip when not initialized', () => {
      const state = {
        ...initialState,
        cart: {
          ...initialState.cart,
          items: [mockCartProductItem]
        }
      };
      const action: CartAction = {
        type: CartActionType.ToggleCartItemInstructorAccess,
        item: mockCartProductItem
      };
      const newState = cartReducer(state, action);
      expect(newState).toEqual(state);
    });

    it('should toggle variation label for first matching item', () => {
      const stateItemOne = {
        ...mockCartProductItem,
        variationLabel: VariationLabel.WithInstructorAccess
      };
      const stateItemTwo = {
        ...mockCartProductItem,
        variationLabel: VariationLabel.WithInstructorAccess
      };
      const stateItemThree = {
        ...mockCartProductItem,
        variationLabel: VariationLabel.WithoutInstructorAccess
      };
      const state = {
        ...initialState,
        isInitialized: true,
        cart: {
          ...initialState.cart,
          items: [stateItemOne, stateItemTwo, stateItemThree]
        }
      };
      const action: CartAction = {
        type: CartActionType.ToggleCartItemInstructorAccess,
        item: mockCartProductItem
      };
      const { cart } = cartReducer(state, action);
      expect(cart.items.length).toEqual(state.cart.items.length);
      const [itemOne, itemTwo, itemThree] = cart.items;
      expect(itemOne).toEqual(
        expect.objectContaining({
          ...stateItemOne,
          variationLabel: VariationLabel.WithoutInstructorAccess
        })
      );
      expect(itemTwo).toEqual(stateItemTwo);
      expect(itemThree).toEqual(stateItemThree);
    });
  });
});
