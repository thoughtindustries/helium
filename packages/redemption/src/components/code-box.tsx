import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
        placeholder={t('redemption.placeholder')}
      />
      <button
        className={styles.buttonStyle}
        disabled={validating}
        type="button"
        onClick={() => setValidating(true)}
      >
        {validating ? t('redemption.validating') : t('redemption.validate')}
      </button>
    </div>
  );
};

CodeBox.displayName = 'CodeBox';
export default CodeBox;
