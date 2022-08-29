import { createContext } from 'react';
import { LearnerAccessContextType } from '../Types/types';

const LearnerAccessContext = createContext<LearnerAccessContextType | undefined>(undefined);

export default LearnerAccessContext;
