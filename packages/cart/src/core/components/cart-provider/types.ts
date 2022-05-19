export enum EcommItemType {
  DiscountGroup = 'discountGroup',
  PickableGroup = 'pickableGroup',
  Bundle = 'bundle',
  Product = 'product'
}

export enum CartItemInterval {
  Year = 'year',
  Month = 'month'
}

export interface CartItem {
  purchasableType: EcommItemType;
  purchasableId: string;
  courseGroupId?: string;
  title: string;
  couponCode?: string;
  asset?: string;
  interval?: CartItemInterval;
  priceInCents: number;
  quantity: number;
  instructorAccessPriceInCents?: number;
  variationLabel?: string;
  relatedProducts?: string[];
  relatedCourseGroups?: string[];
  courses?: string[];
  isBulkPurchase?: boolean;
}

export interface Cart {
  /** cart's id */
  id?: string;
  /** list of cart items */
  items: CartItem[];
}

export interface CartContextType extends Cart {
  /** the status of the cart. This returns 'uninitialized' when the cart is not yet created, `creating` when the cart is being created, `updating` when the cart is updating, and `idle` when the cart isn't being created or updated. */
  status: CartStateStatus;
  /** a callback that adds item to the cart. */
  addItem: (item: CartItem) => void;
  /** a callback that removes item from the cart. */
  removeItem: (item: CartItem) => void;
  /** the total number of items in the cart. If there are no items, then the value is 0. */
  totalQuantity: number;
  /** base url for checkout link */
  checkoutBaseUrl: string;
}

export enum CartStateStatus {
  Uninitialized,
  Idle
}

export interface CartState {
  status: CartStateStatus;
  cart?: Cart;
  shouldPersist: boolean;
}

export enum CartActionType {
  InitializeCart,
  AddCartItem,
  RemoveCartItem
}

export type CartAction =
  | { type: CartActionType.InitializeCart; cart: Cart }
  | { type: CartActionType.AddCartItem; item: CartItem }
  | { type: CartActionType.RemoveCartItem; item: CartItem };

export interface CartProviderProps {
  /** base url for checkout link */
  checkoutBaseUrl: string;
}
