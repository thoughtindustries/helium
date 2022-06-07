import React from 'react';
import { useTranslation } from 'react-i18next';
import { ValidationProps } from './types';

const Banner = ({ valid }: ValidationProps): JSX.Element => {
  const { t } = useTranslation();
  const styles = {
    errorStyle: 'w-full bg-red-600 p-4 text-sm text-white text-left font-bold mb-4',
    successStyle: 'w-full bg-green-600 p-4 text-sm text-white text-left mb-4'
  };

  return (
    <>
      {valid !== null && valid !== undefined ? (
        valid ? (
          <div className={styles.successStyle}>
            {t('redemption-code.redeem-code-manual-validated')}
          </div>
        ) : (
          <div className={styles.errorStyle}>
            {t('redemption-code.manual-code-not-found-error')}
          </div>
        )
      ) : null}
    </>
  );
};

Banner.displayName = 'Banner';
export default Banner;
