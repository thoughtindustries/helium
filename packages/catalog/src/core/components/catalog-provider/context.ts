import { createContext } from 'react';
import { CatalogContextType } from './types';

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

export default CatalogContext;
