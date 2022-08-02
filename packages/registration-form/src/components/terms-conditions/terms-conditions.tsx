import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsConditions = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center mb-4">
      <input className="mr-2" type="checkbox" />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <p>{`${t('agree-terms')}\u00A0`}</p>
        <button className="text-gray-700" type="button">
          {t('terms-and-conditions')}
        </button>
      </div>
    </div>
  );
};

TermsConditions.displayName = 'TermsConditions';
export default TermsConditions;
