import { createContext } from 'react';
import { NavigationBarContextType } from './types';

const NavigationBarContext = createContext<NavigationBarContextType | undefined>(undefined);

export default NavigationBarContext;
