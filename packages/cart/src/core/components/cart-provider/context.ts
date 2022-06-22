import { createContext } from 'react';
import { CartContextType } from './types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export default CartContext;
