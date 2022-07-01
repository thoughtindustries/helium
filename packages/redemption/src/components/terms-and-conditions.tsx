import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TermsAndConditionsProps } from './types';

const TermsAndConditions = ({ valid, redeemedCodes }: TermsAndConditionsProps): JSX.Element => {
  const styles = {
    buttonStyle:
      'text-white bg-indigo-700 hover:bg-indigo-600 inline-block font-normal text-sm text-center no-underline py-2 w-full md:w-1/4 rounded-md',
    termsContainer: 'flex flex-col md:flex-row text-sm text-gray-500 justify-between',
    checkboxContainer: 'flex flex-row items-center mb-4',
    checkbox: 'mr-2',
    terms: 'text-gray-700'
  };

  const { t } = useTranslation();
  const [agree, setAgree] = useState(false);

  const handleSubmit = () => {
    console.log(redeemedCodes);
    const errors: string[] = [];
    let alertMessage = '';
    if (!agree) {
      errors.push(t('agree-terms-alert'));
    }
    if (!valid) {
      errors.push(t('register-invalid-code-alert'));
    }

    errors.forEach(() => {
      alertMessage = errors.join('\r\n');
    });

    if (alertMessage !== '') {
      alert(alertMessage);
    }
  };

  return (
    <>
      <div className="w-full border-t border-gray-200 my-4"></div>
      <div className={styles.termsContainer}>
        <div className={styles.checkboxContainer}>
          <input className={styles.checkbox} type="checkbox" onClick={() => setAgree(!agree)} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p>{`${t('agree-terms')}\u00A0`}</p>
            <button className={styles.terms} type="button">
              {t('terms-and-conditions')}
            </button>
          </div>
        </div>
        <button className={styles.buttonStyle} type="button" onClick={() => handleSubmit()}>
          {t('redemption-code.redeem-code-preloaded')}
        </button>
      </div>
    </>
  );
};

TermsAndConditions.displayName = 'TermsAndConditions';
export default TermsAndConditions;
