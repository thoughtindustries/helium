import { SetStateAction } from 'react';

export interface RedemptionProps {
  isLoggedIn: boolean;
}
export interface ValidationProps {
  valid: boolean | undefined;
}
export interface CodeProps extends ValidationProps {
  validate: React.Dispatch<SetStateAction<boolean | undefined>>;
}
