import React from 'react';
import { useTranslation } from 'react-i18next';
import { TermsConditionsModal } from '../terms-conditions-modal';
import { useRegistrationContext } from '../registration/registration';
import { useTermsAndConditionsMutation } from '../../graphql';

const TermsConditions = (): JSX.Element => {
  const { t } = useTranslation();
  const { setOpenModal, agreeToTerms, setAgreeToTerms } = useRegistrationContext();
  const [TermsAndConditionsMutation, { loading }] = useTermsAndConditionsMutation();

  const handleOpenModal = async () => {
    await TermsAndConditionsMutation()
      .then(response => {
        if (response.data?.TermsAndConditions.globalTerms) {
          // Create template for global terms
        }
      })
      .catch(error => console.log('Terms and Conditions Request Error: ', error));
    if (!loading) {
      setOpenModal(true);
    }
  };

  return (
    <div className="flex flex-row items-center mb-4">
      <TermsConditionsModal loading={loading} />
      <input className="mr-2" type="checkbox" onClick={() => setAgreeToTerms(!agreeToTerms)} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <p>{`${t('agree-terms')}\u00A0`}</p>
        <button className="text-gray-700" type="button" onClick={() => handleOpenModal()}>
          {t('terms-and-conditions')}
        </button>
      </div>
    </div>
  );
};

TermsConditions.displayName = 'TermsConditions';
export default TermsConditions;
