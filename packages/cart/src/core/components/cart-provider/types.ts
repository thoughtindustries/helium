import { GlobalTypes } from '../../graphql';

export enum EcommItemType {
  DiscountGroup = 'discountGroup',
  PickableGroup = 'pickableGroup',
  Bundle = 'bundle',
  Product = 'product',
  Course = 'course',
  LearningPath = 'learningPath'
}

export enum CartItemInterval {
  Year = 'year',
  Month = 'month'
}

export type SeatTier = {
  seats: number;
  priceInCents: number;
};

export type OtherPurchaseableItem = {
  clientSubscription?: boolean;
  isBulkPurchase?: boolean;
  seatTiers?: SeatTier[];
  lastTierPriceInCents?: number;
  annualPriceInCents?: number;
  priceInCents?: number;
  id: string;
  title?: string;
  name?: string;
  suffixedTitle?: string;
  asset?: string;
  instructorAccessPriceInCents?: number;
  selectedCourseIds?: string[];
  currentPriceInCents?: number;
};

export type PurchaseableItem = GlobalTypes.Product | OtherPurchaseableItem;

export type Coupon = {
  code: string;
  percentOff?: number;
  amountOffInCents?: number;
};

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

export type AddPurchaseableItemPayload = {
  /** type of purchaseable item (one of the ecommerce item type) */
  purchasableType: EcommItemType;
  /** object of the purchaseable item */
  purchasable: PurchaseableItem;
  /** optional coupon object */
  coupon?: Coupon;
  /** optional payment interval (one of the interval type) */
  interval?: CartItemInterval;
  /** optional quantity (a default value will be applied when not sepcified) */
  quantity?: number;
};

export interface CartContextType extends Cart {
  /** the status of the cart. This returns 'uninitialized' when the cart is not yet created, `creating` when the cart is being created, `updating` when the cart is updating, and `idle` when the cart isn't being created or updated. */
  status: CartStateStatus;
  /** a callback that adds purchaseable item to the cart. */
  addPurchaseableItem: (payload: AddPurchaseableItemPayload) => void;
  /** a callback that removes item from the cart. */
  removeItem: (item: CartItem) => void;
  /** the total number of items in the cart. If there are no items, then the value is 0. */
  totalQuantity: number;
  /** url for checkout link */
  checkoutUrl: string;
}

export enum CartStateStatus {
  Uninitialized,
  Idle
}

export interface CartState {
  status: CartStateStatus;
  cart: Cart;
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
  /** url for checkout link */
  checkoutUrl: string;
}
