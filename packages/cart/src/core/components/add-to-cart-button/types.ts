import { ButtonHTMLAttributes, ReactNode } from 'react';
import { AddPurchaseableItemPayload } from '../cart-provider';

export type AddToCartButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> &
  AddPurchaseableItemPayload & {
    /** any ReactNode children */
    children: ReactNode;
    /** option to open cart modal as a follow-up action */
    shouldOpenCart?: boolean;
  };
