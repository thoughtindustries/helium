import React from 'react';
import { useTranslation } from 'react-i18next';

const RedemptionCodeBox = (): JSX.Element => {
  const { t } = useTranslation();
  const styles = {
    buttonStyle:
      'text-white bg-indigo-700 hover:bg-indigo-600 cursor-pointer inline-block font-normal text-sm no-underline py-4 w-full md:w-1/3 rounded-md md:rounded-l-none mb-4',
    inputStyle:
      'p-4 text-sm w-full md:w-2/3 ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4'
  };

  return (
    <div>
      <input className={styles.inputStyle} placeholder={t('redemption.code')} />
      <button className={styles.buttonStyle}>{t('redemption.validate')}</button>
    </div>
  );
};

RedemptionCodeBox.displayName = 'RedemptionCodeBox';
export default RedemptionCodeBox;
