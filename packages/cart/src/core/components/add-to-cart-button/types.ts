import { ButtonHTMLAttributes, ReactNode } from 'react';
import { AddPurchaseableItemPayload } from '../cart-provider';

export type AddToCartButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> &
  AddPurchaseableItemPayload & {
    /** any ReactNode children */
    children: ReactNode;
    /** option to open cart modal as a follow-up action */
    shouldOpenCart?: boolean;
    /**
     * flag to indicate mobile view, when set along with `shouldOpenCart` prop and no upsell info
     * is available, it will take user to the checkout flow instantly.
     */
    isMobile: boolean;
  };
