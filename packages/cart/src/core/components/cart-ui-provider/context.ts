import { createContext } from 'react';
import { CartUIContextType } from './types';

const CartUIContext = createContext<CartUIContextType | undefined>(undefined);

export default CartUIContext;
