import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Redemption } from '../redemption';

const Registration = (): JSX.Element => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  return (
    <div className="mx-4 md:mx-40 text-center self-center">
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
      <Redemption />
    </div>
  );
};

Registration.displayName = 'Registration';
export default Registration;
