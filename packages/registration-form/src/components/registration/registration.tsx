import React, { useState, createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Redemption } from '../redemption';
import { isEmpty } from 'lodash';
import { Props, ResponseProps, CurrentUser } from '../types';
import { useRedeemRegistrationAndRedemptionCodesMutation } from '../../graphql';

const RegistrationContext = createContext<ResponseProps | undefined>(undefined);

const useRegistrationContext = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('No context found for RegistrationContext');
  }
  return context;
};

const Registration = ({ currentUser }: { currentUser: CurrentUser }): JSX.Element => {
  const { t } = useTranslation();
  const [response, setResponse] = useState<Props>();
  const [validatedRedemptionCodes, setValidatedRedemptionCodes] = useState<Array<string>>([]);
  const [RedeemRegistrationAndRedemptionCodesMutation] =
    useRedeemRegistrationAndRedemptionCodesMutation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const handleRegistration = async () => {
    if (validatedRedemptionCodes.length > 0) {
      await RedeemRegistrationAndRedemptionCodesMutation({
        variables: { validatedRedemptionCodes: validatedRedemptionCodes }
      })
        .then(response => {
          if (response.data?.RedeemRegistrationAndRedemptionCodes.redeemed) {
            // Redirect user
          }
        })
        .catch(error => console.log('Redemption Request Error: ', error));
    }
  };

  return (
    <div className="mx-4 md:mx-40 text-center self-center">
      {isEmpty(currentUser) ? (
        <>
          <h5 className="flex justify-center mb-8 text-sm text-gray-500">
            {t('redemption-code.redeem-course-copy-signed-in-manual-code')}
          </h5>
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
            />
            <input
              className="p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
              placeholder={t('register-last-name')}
              onChange={e => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>
          <input
            className="p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
            placeholder={t('register-email')}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            className="p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
            placeholder={t('register-password')}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
          <input
            className="p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
            placeholder={t('register-confirm-password')}
            onChange={e => setFormData({ ...formData, passwordConfirmation: e.target.value })}
          />
        </>
      ) : null}
      <RegistrationContext.Provider
        value={{ response, setResponse, validatedRedemptionCodes, setValidatedRedemptionCodes }}
      >
        <Redemption />
      </RegistrationContext.Provider>
      <div className="w-full border-t border-gray-200 my-4" />
      <button
        className="text-white bg-indigo-700 hover:bg-indigo-600 inline-block font-normal text-sm text-center no-underline py-2 w-full md:w-1/4 rounded-md"
        type="button"
        onClick={() => handleRegistration()}
      >
        {t('redemption-code.redeem-code-preloaded')}
      </button>
    </div>
  );
};

Registration.displayName = 'Registration';
export default Registration;
export { useRegistrationContext };
