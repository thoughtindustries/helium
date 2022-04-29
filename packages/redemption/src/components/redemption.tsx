import { t } from 'i18next';
import React from 'react';
import { RedemptionProps } from '.';

const Redemption = ({ children }: RedemptionProps): JSX.Element => {
  const styles = {
    container: 'mx-4 md:mx-40 text-center',
    prompt: 'flex justify-center mb-8 text-sm text-gray-500',
    termsContainer: 'flex flex-col md:flex-row text-sm text-gray-500 justify-between',
    buttonStyle:
      'text-white bg-indigo-700 hover:bg-indigo-600 cursor-pointer inline-block font-normal text-sm text-center no-underline py-2 w-full md:w-1/4 rounded-md',
    checkboxContainer: 'flex flex-row items-center mb-4',
    checkbox: 'mr-2',
    addCodeStyle: 'flex justify-left text-indigo-700 text-sm',
    terms: 'text-gray-700'
  };

  return (
    <form className={styles.container}>
      <h5 className={styles.prompt}>{t('redemption.prompt')}</h5>
      {children}
      <button className={styles.addCodeStyle}>{t('redemption.add')}</button>
      <div className="w-full border-t border-gray-200 my-4"></div>
      <div className={styles.termsContainer}>
        <div className={styles.checkboxContainer}>
          <input className={styles.checkbox} type="checkbox" />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p>{`${t('redemption.agree')}\u00A0`}</p>
            <button className={styles.terms}>{t('redemption.terms')}</button>
          </div>
        </div>
        <button className={styles.buttonStyle}>{t('redemption.register')}</button>
      </div>
    </form>
  );
};

Redemption.displayName = 'Redemption';
export default Redemption;
