export interface CartCheckoutBehavior {
  isCheckoutRequested: boolean;
  startCheckout: () => void;
}
