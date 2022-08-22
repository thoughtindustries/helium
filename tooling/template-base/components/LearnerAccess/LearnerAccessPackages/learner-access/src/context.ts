import { createContext } from 'react';
import { LearnerAccessContextType } from './types';

const LearnerAccessContext = createContext<LearnerAccessContextType | undefined>(undefined);

export default LearnerAccessContext;
