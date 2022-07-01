import { SetStateAction } from 'react';

export interface Props {
  valid: boolean | undefined;
  alreadyRedeemed?: boolean | undefined;
  codeExpired?: boolean | undefined;
}

interface RegistrationFormData {
  firstName?: string | undefined;
  lastName?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  passwordConfirmation?: string | undefined;
}

export interface TermsAndConditionsProps extends Props {
  formData?: RegistrationFormData;
  redeemedCodes?: Array<string>;
}

export interface UserProps {
  isLoggedIn: boolean;
}
export interface ResponseProps {
  setResponse: React.Dispatch<SetStateAction<Props | undefined>>;
  setRedeemedCodes: React.Dispatch<SetStateAction<Array<string>>>;
  redeemedCodes: Array<string>;
  response?: Props;
}
