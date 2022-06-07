import React from 'react';
import { useTranslation } from 'react-i18next';

const Prompt = (): JSX.Element => {
  const styles = {
    prompt: 'flex justify-center mb-8 text-sm text-gray-500'
  };

  const { t } = useTranslation();

  return (
    <h5 className={styles.prompt}>
      {t('redemption-code.redeem-course-copy-signed-in-manual-code')}
    </h5>
  );
};

Prompt.displayName = 'Prompt';
export default Prompt;
