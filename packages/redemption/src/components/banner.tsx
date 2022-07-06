import React from 'react';
import { useTranslation } from 'react-i18next';
import { Props } from './types';

const Banner = ({ valid, alreadyRedeemed, codeExpired }: Props): JSX.Element => {
  const { t } = useTranslation();
  const styles = {
    errorStyle: 'w-full bg-red-600 p-4 text-sm text-white text-left font-bold mb-4',
    successStyle: 'w-full bg-green-600 p-4 text-sm text-white text-left font-bold mb-4'
  };

  return (
    <>
      {valid !== null && valid !== undefined ? (
        valid ? (
          <div className={styles.successStyle}>
            {t('redemption-code.redeem-code-manual-validated')}
          </div>
        ) : alreadyRedeemed ? (
          <div className={styles.errorStyle}>
            {t('redemption-code.manual-already-redeemed-error')}
          </div>
        ) : codeExpired ? (
          <div className={styles.errorStyle}>{t('redemption-code.manual-code-expired')}</div>
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
