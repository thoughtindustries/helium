import { createContext } from 'react';
import { HeightEqualizerContextType } from './types';

const HeightEqualizerContext = createContext<HeightEqualizerContextType | undefined>(undefined);

export default HeightEqualizerContext;
