import { ButtonHTMLAttributes, ReactNode } from 'react';

export type CartCheckoutButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  /** any ReactNode children */
  children: ReactNode;
};
