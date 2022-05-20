import { ButtonHTMLAttributes, ReactNode } from 'react';

export type CartCheckoutProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  children: ReactNode;
};
