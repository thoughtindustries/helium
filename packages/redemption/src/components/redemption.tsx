import React, { useState, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { RedemptionProps } from './types';

const codeList = (num: number) => {
  const list: ReactNode[] = [];
  for (let i = 0; i < num; i++) {
    list.push(<CodeBox />);
  }
  return list;
};

const CodeBox = (): JSX.Element => {
  const { t } = useTranslation();
  const [validating, setValidating] = useState(false);
  const styles = {
    buttonStyle:
      'text-white bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-default hover:bg-indigo-600 inline-block font-normal text-sm no-underline py-4 w-full md:w-1/3 rounded-md md:rounded-l-none mb-4',
    inputStyle:
      'p-4 text-sm w-full md:w-2/3 ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4'
  };

  return (
    <div>
      <input
        disabled={validating}
        className={styles.inputStyle}
        placeholder={t('redemption-code.placeholder')}
      />
      <button
        className={styles.buttonStyle}
        disabled={validating}
        type="button"
        onClick={() => setValidating(true)}
      >
        {validating ? t('redemption-code.validating') : t('redemption-code.validate')}
      </button>
    </div>
  );
};

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
    redirect: 'mb-4'
  };
  return (
    <>
      <h5 className={styles.prompt}>
        {t('redemption-code.redeem-course-copy-not-signed-in-manual-code')}
      </h5>
      <p className={styles.redirect}>
        <strong>
          {`${t('already-member')}\u00A0`}
          <button type="button">
            <strong>{t('sign-in')}</strong>
          </button>
        </strong>
      </p>
      <div className={styles.nameContainer}>
        <input className={styles.nameInput} placeholder={t('register-first-name')} />
        <input className={styles.inputStyle} placeholder={t('register-last-name')} />
      </div>
      <input className={styles.inputStyle} placeholder={t('register-email')} />
      <input className={styles.inputStyle} placeholder={t('register-password')} />
      <input className={styles.inputStyle} placeholder={t('register-confirm-password')} />
      {codeList(count)}
      <button className={styles.addCodeStyle} type="button" onClick={() => setCount(count + 1)}>
        {t('redemption-code.add-redemption-code')}
      </button>
      <div className="w-full border-t border-gray-200 my-4"></div>
      <div className={styles.termsContainer}>
        <div className={styles.checkboxContainer}>
          <input className={styles.checkbox} type="checkbox" />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p>{`${t('agree-terms')}\u00A0`}</p>
            <button className={styles.terms} type="button">
              {t('terms-and-conditions')}
            </button>
          </div>
        </div>
        <button className={styles.buttonStyle} type="button">
          {t('redemption-code.redeem-code-preloaded')}
        </button>
      </div>
    </>
  );
};

const Redemption = ({ currentUser }: RedemptionProps): JSX.Element => {
  const styles = {
    container: 'mx-4 md:mx-40 text-center',
    prompt: 'flex justify-center mb-8 text-sm text-gray-500',
    termsContainer: 'flex flex-col md:flex-row text-sm text-gray-500 justify-between',
    buttonStyle:
      'text-white bg-indigo-700 hover:bg-indigo-600 inline-block font-normal text-sm text-center no-underline py-2 w-full md:w-1/4 rounded-md',
    checkboxContainer: 'flex flex-row items-center mb-4',
    checkbox: 'mr-2',
    addCodeStyle: 'flex justify-left text-indigo-700 text-sm',
    terms: 'text-gray-700'
  };
  const { t } = useTranslation();
  const [count, setCount] = useState(1);

  return (
    <form className={styles.container}>
      {currentUser ? (
        <>
          <h5 className={styles.prompt}>
            {t('redemption-code.redeem-course-copy-signed-in-manual-code')}
          </h5>
          {codeList(count)}
          <button className={styles.addCodeStyle} type="button" onClick={() => setCount(count + 1)}>
            {t('redemption-code.add-redemption-code')}
          </button>
          <div className="w-full border-t border-gray-200 my-4"></div>
          <div className={styles.termsContainer}>
            <div className={styles.checkboxContainer}>
              <input className={styles.checkbox} type="checkbox" />
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p>{`${t('agree-terms')}\u00A0`}</p>
                <button className={styles.terms} type="button">
                  {t('terms-and-conditions')}
                </button>
              </div>
            </div>
            <button className={styles.buttonStyle} type="button">
              {t('redemption-code.redeem-code-preloaded')}
            </button>
          </div>
        </>
      ) : (
        <Registration />
      )}
    </form>
  );
};

Redemption.displayName = 'Redemption';
Redemption.CodeBox = CodeBox;
Redemption.Registration = Registration;
export default Redemption;
