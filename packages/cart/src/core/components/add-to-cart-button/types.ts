import { ButtonHTMLAttributes, ReactNode } from 'react';
import { AddPurchaseableItemPayload } from '../cart-provider';

export type AddToCartButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> &
  AddPurchaseableItemPayload & {
    children: ReactNode;
    shouldOpenCart?: boolean;
    isMobile: boolean;
  };
