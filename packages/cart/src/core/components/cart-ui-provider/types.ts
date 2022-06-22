import { CartProviderProps } from '../cart-provider';

export type CartUIProviderProps = CartProviderProps;

export interface CartUIContextType {
  /** the open status of the cart */
  isCartOpen: boolean;
  /** a callback to open cart */
  openCart: VoidFunction;
  /** a callback to close cart */
  closeCart: VoidFunction;
  /** a callback to toggle cart open status */
  toggleCart: VoidFunction;
}
