import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { codeList } from './helper';

const Registration = (): JSX.Element => {
  const { t } = useTranslation();
  const [count, setCount] = useState(1);
  const styles = {
    buttonStyle:
      'text-white bg-indigo-700 hover:bg-indigo-600 inline-block font-normal text-sm text-center no-underline py-2 w-full md:w-1/4 rounded-md',
    inputStyle:
      'p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4',
    nameInput:
      'p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4 mr-4',
    prompt: 'flex justify-center mb-8 text-sm text-gray-500',
    nameContainer: 'flex flex-row',
    checkboxContainer: 'flex flex-row items-center mb-4',
    checkbox: 'mr-2',
    addCodeStyle: 'flex justify-left text-indigo-700 text-sm',
    terms: 'text-gray-700',
    termsContainer: 'flex flex-col md:flex-row text-sm text-gray-500 justify-between',
    redirect: 'mb-4',
    member: 'text-gray-600'
  };
  return (
    <>
      <h5 className={styles.prompt}>{t('redemption.logged-out-prompt')}</h5>
      <p className={styles.redirect}>
        <strong className={styles.member}>{`${t('common.already-member')}\u00A0`}</strong>
        <button type="button">
          <strong>{t('common.sign-in')}</strong>
        </button>
      </p>
      <div className={styles.nameContainer}>
        <input className={styles.nameInput} placeholder={t('register.first-name')} />
        <input className={styles.inputStyle} placeholder={t('register.last-name')} />
      </div>
      <input className={styles.inputStyle} placeholder={t('register.email')} />
      <input className={styles.inputStyle} placeholder={t('register.password')} />
      <input className={styles.inputStyle} placeholder={t('register.confirm-password')} />
      {codeList(count)}
      <button className={styles.addCodeStyle} type="button" onClick={() => setCount(count + 1)}>
        {t('redemption.add-code')}
      </button>
      <div className="w-full border-t border-gray-200 my-4"></div>
      <div className={styles.termsContainer}>
        <div className={styles.checkboxContainer}>
          <input className={styles.checkbox} type="checkbox" />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p>{`${t('common.agree-terms')}\u00A0`}</p>
            <button className={styles.terms} type="button">
              {t('common.terms-and-conditions')}
            </button>
          </div>
        </div>
        <button className={styles.buttonStyle} type="button">
          {t('redemption.register')}
        </button>
      </div>
    </>
  );
};

Registration.displayName = 'Registration';
export default Registration;
