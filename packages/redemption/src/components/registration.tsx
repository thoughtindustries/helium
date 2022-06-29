import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CodeList from './code-list';
import Banner from './banner';
import { ResponseProps } from './types';
import TermsAndConditions from './terms-and-conditions';
import Prompt from './prompt';

const Registration = ({ response, setResponse }: ResponseProps): JSX.Element => {
  const styles = {
    inputStyle:
      'p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4',
    nameInput:
      'p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4 mr-4',
    nameContainer: 'flex flex-row',
    redirect: 'mb-4',
    member: 'text-gray-600'
  };

  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  return (
    <>
      <Prompt />
      <Banner
        valid={response?.valid}
        alreadyRedeemed={response?.alreadyRedeemed}
        codeExpired={response?.codeExpired}
      />
      <p className={styles.redirect}>
        <strong className={styles.member}>{`${t('already-member')}\u00A0`}</strong>
        <button type="button">
          <strong>{t('sign-in')}</strong>
        </button>
      </p>
      <div className={styles.nameContainer}>
        <input
          className={styles.nameInput}
          placeholder={t('register-first-name')}
          onChange={e => setFormData({ ...formData, firstName: e.target.value })}
        />
        <input
          className={styles.inputStyle}
          placeholder={t('register-last-name')}
          onChange={e => setFormData({ ...formData, lastName: e.target.value })}
        />
      </div>
      <input
        className={styles.inputStyle}
        placeholder={t('register-email')}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        className={styles.inputStyle}
        placeholder={t('register-password')}
        onChange={e => setFormData({ ...formData, password: e.target.value })}
      />
      <input
        className={styles.inputStyle}
        placeholder={t('register-confirm-password')}
        onChange={e => setFormData({ ...formData, passwordConfirmation: e.target.value })}
      />
      <CodeList setResponse={setResponse} />
      <TermsAndConditions valid={response?.valid} formData={formData} />
    </>
  );
};

Registration.displayName = 'Registration';
export default Registration;
