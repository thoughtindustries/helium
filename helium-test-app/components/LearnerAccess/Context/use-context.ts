import { useContext } from 'react';
import LearnerAccessContext from './context';

export default function useLearnerAccess() {
  const context = useContext(LearnerAccessContext);
  if (!context) {
    throw new Error('No context found for LearnerAccess');
  }
  return context;
}
