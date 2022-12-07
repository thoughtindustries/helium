import React from 'react';
import { Dialog } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { CloseIcon } from '../icons';
import { useRegistrationContext } from '../registration/registration';
import Terms from './terms';
import { LoadingDots } from '@thoughtindustries/content';
import { useTermsAndConditionsContext } from '../terms-conditions/terms-conditions';

const TermsConditionsModal = (): JSX.Element => {
  const { t } = useTranslation();
  const { openModal, setOpenModal } = useRegistrationContext();
  const { loading } = useTermsAndConditionsContext();

  return (
    <Dialog className="relative z-[9000]" open={openModal} onClose={() => setOpenModal(false)}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-[.35]" aria-hidden="true" />
      <div className="fixed top-0 inset-x-0 m-0 md:mt-12 md:mx-auto w-full md:max-w-[960px] h-full md:h-auto">
        <div className="w-full h-full rounded overflow-hidden bg-white md:border-4 md:border-solid md:border-gray-400/50">
          <Dialog.Title
            as="div"
            className="border-b-4 border-solid border-gray-400/50 p-4 relative flex items-center justify-between gap-x-1"
          >
            <h4 className="font-bold text-xl text-accent font-secondary text-indigo-600">
              {t('terms-and-conditions')}
            </h4>
            <button className="w-5 h-5" aria-label="close" onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </button>
          </Dialog.Title>
          {loading === true ? (
            <div className="py-4">
              <LoadingDots />
            </div>
          ) : (
            <div className="p-4 relative h-[calc(100vh-60px)] md:h-auto md:max-h-[calc(100vh-156px)] overflow-y-auto">
              <Dialog.Description as="div" className="flex flex-col">
                <Terms />
              </Dialog.Description>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
};

TermsConditionsModal.displayName = 'TermsConditionsModal';
export default TermsConditionsModal;
