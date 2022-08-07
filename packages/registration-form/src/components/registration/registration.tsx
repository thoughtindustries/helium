import React, { useState, createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Redemption } from '../redemption';
import { isEmpty } from 'lodash';
import { Props, ResponseProps, CurrentUser } from '../types';
import { useRedeemRegistrationAndRedemptionCodesMutation } from '../../graphql';
import Banner from '../redemption/banner';
import { TermsConditions } from '../terms-conditions';

const RegistrationContext = createContext<ResponseProps | undefined>(undefined);

const useRegistrationContext = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('No context found for RegistrationContext');
  }
  return context;
};

const Registration = ({
  currentUser,
  redirectUrl
}: {
  currentUser?: CurrentUser;
  redirectUrl?: string;
}): JSX.Element => {
  const { t } = useTranslation();
  const [response, setResponse] = useState<Props>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [validatedRedemptionCodes, setValidatedRedemptionCodes] = useState<Array<string>>([]);
  const [RedeemRegistrationAndRedemptionCodesMutation, { loading }] =
    useRedeemRegistrationAndRedemptionCodesMutation();
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const handleRegistration = async () => {
    let alertMessage = '';
    // Form validation
    if (isEmpty(currentUser)) {
      if (isEmpty(formData.firstName)) {
        alertMessage = alertMessage + t('first-name-alert');
      }
      if (isEmpty(formData.lastName)) {
        alertMessage = alertMessage + `\n${t('last-name-alert')}`;
      }
      if (isEmpty(formData.email) || !emailRegex.test(formData.email)) {
        alertMessage = alertMessage + `\n${t('valid-email-alert')}`;
      }
      if (
        isEmpty(formData.password) ||
        formData.password.length < 6 ||
        formData.password !== formData.passwordConfirmation
      ) {
        alertMessage = alertMessage + `\n${t('password-length-alert')}`;
      }
    }
    // Registration and validation
    if (!isEmpty(alertMessage) && isEmpty(currentUser)) {
      alert(alertMessage);
    } else if (isEmpty(validatedRedemptionCodes)) {
      alert(t('register-invalid-code-alert'));
    } else if (!agreeToTerms) {
      alert(t('agree-terms-alert'));
    } else {
      const uniqueCodes = [...new Set(validatedRedemptionCodes)];
      await RedeemRegistrationAndRedemptionCodesMutation({
        variables: { validatedRedemptionCodes: uniqueCodes }
      })
        .then(response => {
          if (response.data?.RedeemRegistrationAndRedemptionCodes.redeemed) {
            window.location.href = !isEmpty(redirectUrl) ? redirectUrl || '' : '/learn';
          }
        })
        .catch(error => console.log('Redemption Request Error: ', error));
    }
  };

  const handleOnBlur = (e: React.FormEvent<HTMLInputElement>, field: string) => {
    const classList = (e.target as HTMLInputElement).classList;

    if (isEmpty(field)) {
      classList.remove('ring-gray-300');
      classList.add('ring-red-500');
    } else {
      classList.remove('ring-red-500');
      classList.add('ring-gray-300');
    }
  };

  return (
    <form className="mx-4 md:mx-40 text-center self-center">
      {isEmpty(currentUser) ? (
        <>
          <h5 className="flex justify-center mb-8 text-sm text-gray-500">
            {t('redemption-code.redeem-course-copy-signed-in-manual-code')}
          </h5>
          <Banner
            valid={response?.valid}
            alreadyRedeemed={response?.alreadyRedeemed}
            codeExpired={response?.codeExpired}
          />
          <p className="mb-4">
            <strong className="text-gray-600">{`${t('already-member')}\u00A0`}</strong>
            <button type="button">
              <strong>{t('sign-in')}</strong>
            </button>
          </p>
          <div className="flex flex-row">
            <input
              className="p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4 mr-4"
              placeholder={t('register-first-name')}
              onChange={e => setFormData({ ...formData, firstName: e.target.value })}
              onBlur={e => handleOnBlur(e, formData.firstName)}
            />
            <input
              className="p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
              placeholder={t('register-last-name')}
              onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              onBlur={e => handleOnBlur(e, formData.lastName)}
            />
          </div>
          <input
            className="p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
            placeholder={t('register-email')}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            onBlur={e => handleOnBlur(e, formData.email)}
          />
          <input
            className="p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
            placeholder={t('register-password')}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
            onBlur={e => handleOnBlur(e, formData.password)}
            type="password"
          />
          <input
            className="p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
            placeholder={t('register-confirm-password')}
            onChange={e => setFormData({ ...formData, passwordConfirmation: e.target.value })}
            onBlur={e => handleOnBlur(e, formData.passwordConfirmation)}
            type="password"
          />
        </>
      ) : (
        <Banner
          valid={response?.valid}
          alreadyRedeemed={response?.alreadyRedeemed}
          codeExpired={response?.codeExpired}
        />
      )}
      <RegistrationContext.Provider
        value={{
          response,
          setResponse,
          validatedRedemptionCodes,
          setValidatedRedemptionCodes,
          openModal,
          setOpenModal,
          agreeToTerms,
          setAgreeToTerms
        }}
      >
        <Redemption />
        <div className="w-full border-t border-gray-200 my-4" />
        <div className="flex flex-col md:flex-row text-sm text-gray-500 justify-between">
          <TermsConditions />
          <button
            className="text-white bg-indigo-700 hover:bg-indigo-600 inline-block font-normal text-sm text-center no-underline py-2 w-full md:w-1/4 rounded-md disabled:bg-indigo-300 disabled:cursor-default"
            type="button"
            onClick={() => handleRegistration()}
            disabled={loading}
          >
            {t('redemption-code.redeem-code-preloaded')}
          </button>
        </div>
      </RegistrationContext.Provider>
    </form>
  );
};

Registration.displayName = 'Registration';
export default Registration;
export { useRegistrationContext };
