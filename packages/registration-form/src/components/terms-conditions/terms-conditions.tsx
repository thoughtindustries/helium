import React, { useState, createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { TermsConditionsModal } from '../terms-conditions-modal';
import { useRegistrationContext } from '../registration/registration';
import { useTermsAndConditionsLazyQuery } from '../../graphql';
import { GlobalTermsProps } from '../types';

const TermsAndConditionsContext = createContext<GlobalTermsProps>({
  loading: false,
  globalTerms: ''
});

const useTermsAndConditionsContext = () => {
  const context = useContext(TermsAndConditionsContext);
  if (!context) {
    throw new Error('No context found for TermsAndConditionsContext');
  }
  return context;
};

const TermsConditions = (): JSX.Element => {
  const { t } = useTranslation();
  const { setOpenModal, agreeToTerms, setAgreeToTerms } = useRegistrationContext();
  const [queryTerms, { loading }] = useTermsAndConditionsLazyQuery();
  const [globalTerms, setGlobalTerms] = useState<string>('');

  const handleOpenModal = async () => {
    const { data } = await queryTerms();
    if (data && !loading) {
      if (data.TermsAndConditions.globalTerms) {
        setGlobalTerms(data.TermsAndConditions.globalTerms);
      }
      setOpenModal(true);
    }
  };

  return (
    <div className="flex flex-row items-center mb-4">
      <TermsAndConditionsContext.Provider
        value={{
          loading,
          globalTerms
        }}
      >
        <TermsConditionsModal />
        <input className="mr-2" type="checkbox" onClick={() => setAgreeToTerms(!agreeToTerms)} />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p>{`${t('agree-terms')}\u00A0`}</p>
          <button className="text-gray-700" type="button" onClick={() => handleOpenModal()}>
            {t('terms-and-conditions')}
          </button>
        </div>
      </TermsAndConditionsContext.Provider>
    </div>
  );
};

TermsConditions.displayName = 'TermsConditions';
export default TermsConditions;
export { useTermsAndConditionsContext };
