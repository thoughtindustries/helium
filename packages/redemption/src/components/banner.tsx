import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner = (): JSX.Element => {
  const { t } = useTranslation();
  const validated = true;
  const styles = {
    errorStyle: 'w-full bg-red-600 p-4 text-sm text-white text-left font-bold mb-4',
    successStyle: 'w-full bg-green-600 p-4 text-sm text-white text-left mb-4'
  };

  return (
    <>
      {validated ? (
        <div className={styles.successStyle}>{t('redemption.code-validated')}</div>
      ) : (
        <div className={styles.errorStyle}>{t('redemption.code-not-found')}</div>
      )}
    </>
  );
};

Banner.displayName = 'Banner';
export default Banner;
