import React, { Dispatch, SetStateAction, useState } from 'react';
import { LearnerAccessProps } from '../types';
import { UploadIcon, RepeatIcon } from '../Assets/Icons';
import {
  useUserCertificatesQuery,
  useCreateCertificateFromUploadMutation,
  useUserCertificateFieldsQuery,
  LoadingDots,
  UserCertificatesQuery
} from '@thoughtindustries/content';
import useLearnerAccess from '../use-context';
import { t } from 'i18next';

type RequiredUserCertifacesQuery = Required<UserCertificatesQuery>;
type UserCertificate = RequiredUserCertifacesQuery['UserCertificates'][0];
interface CertificateProps {
  item: UserCertificate;
}
const Certificate = ({ item }: CertificateProps) => {
  return <>Certificate Line Item {item.id}</>;
};

interface CertificateUploaderProps {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}
const CertificateUploader = ({ setShowForm }: CertificateUploaderProps) => {
  return (
    <div className="my-0 mx-auto max-w-full w-full">
      <div className="px-4">
        <button
          onClick={() => setShowForm(prev => !prev)}
          className="rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-5 relative text-center no-underline bg-grey-light duration-200 transition ease-in-out bg-active-blue border-active-blue text-accent-contrast leading-5"
        >
          <UploadIcon />
          <span style={{ marginLeft: '1rem' }}>{t('external-certificate.upload')}</span>
        </button>
      </div>
    </div>
  );
};

type CertificateUploadFormProps = CertificateUploaderProps;
const CertificateUploadForm = ({ setShowForm }: CertificateUploadFormProps) => {
  const { data: data2 } = useUserCertificateFieldsQuery({
    variables: {}
  });
  const [showFileImage, setShowFileImage] = useState<boolean>(false);
  const [imageFromUpload, setImageFromUpload] = useState<string | ArrayBuffer | null>('');
  const [createCertificateFromUploadMutation] = useCreateCertificateFromUploadMutation({
    variables: {
      asset: 'item.contentItem.asset,',
      certificateUploadFields: []
    }
  });

  const handleFileChange = (e: any) => {
    const files = e.target.files[0];
    const reader = new FileReader();

    setShowFileImage(true);

    if (files) reader.readAsDataURL(files);
    reader.onload = () => {
      setImageFromUpload(reader.result);
      console.log('image data', reader.result);
    };
  };

  return (
    <div className="border-solid p-4 text-black-light border-gray-light border-b last:border-b-0">
      <form className="">
        <p className="font-normal mb-4 leading-[1.45rem]">
          {!showFileImage && <span id="i18n-323">{t('external-certificate.instructions')}</span>}
        </p>
        <div className="flex justify-evenly">
          <div className="w-full">
            <div className="row">
              <div className="float-left px-4 relative">
                <div className="ember-view input__container">
                  {!showFileImage ? (
                    <input
                      className="border-none btn btn--expand btn--bare rounded-sm text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 w-full"
                      type="file"
                      name="file"
                      aria-label="file"
                      onChange={e => {
                        handleFileChange(e);
                      }}
                    />
                  ) : (
                    <>
                      <img
                        className="ember-view"
                        src={imageFromUpload?.toString()}
                        alt="External Certificate"
                      />
                      <button
                        onClick={() => setShowFileImage(false)}
                        className="flex items-center justify-end h-auto border-[#405667] text-[#405667] text-right bg-none rounded-none border-solid border-t-4 clear-both font-bold p-0 shadow-none w-full"
                      >
                        Remove Image
                        <RepeatIcon />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col text-base py-3 px-4 text-gray-mid">
            <div className="row">
              <div className="float-left px-4 relative w-full">
                <div className="ember-view">
                  <label>Certificate Grant Date</label>
                  <div className="ember-view input__wrapper input__wrapper--clear">
                    <input
                      className="focus:outline-none h-10 mb-4 text-base py-2 px-4 w-full bg-white rounded-none border-solid border box-border block mx-0 mt-0 p-2 text-black cursor-pointer"
                      type="text"
                      onBlur={e => (e.target.type = 'text')}
                      onFocus={e => (e.target.type = 'date')}
                    />
                  </div>
                </div>
                <div className="ember-view">
                  <label>Certificate Expiration</label>

                  <div className="mb-4">
                    <input
                      className="focus:outline-none h-10 mb-4 text-base py-2 px-4 w-full bg-white rounded-none border-solid border box-border block mx-0 mt-0 p-2 text-black cursor-pointer"
                      type="text"
                      onBlur={e => (e.target.type = 'text')}
                      onFocus={e => (e.target.type = 'date')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end px-4">
              <div className="flex">
                <button
                  onClick={() => {
                    setShowForm(showForm => !showForm);
                    setShowFileImage(false);
                  }}
                  data-ember-action="28579"
                  className="bg-white text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 text-black w-full"
                >
                  {t('external-certificate.cancel')}
                </button>
                <button
                  onClick={() => createCertificateFromUploadMutation()}
                  className="bg-active-blue rounded-sm text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 text-white w-full"
                >
                  {t('external-certificate.submit')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const LoadCertificates = ({
  query,
  displayExpiredCertificateInformation
}: LearnerAccessProps): JSX.Element => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { data, loading, error } = useUserCertificatesQuery({
    variables: {
      query: query,
      includeExpiredCertificates: displayExpiredCertificateInformation
    },
    fetchPolicy: 'network-only',
    ssr: false
  });
  const { companyEnableExternalCertificateUploads } = useLearnerAccess();

  console.log('data from child', data);
  if (loading) return <LoadingDots />;
  if (error) return <>{error.message}</>;
  if (showForm) return <CertificateUploadForm setShowForm={setShowForm} />;
  return (
    <>
      {data?.UserCertificates?.map(item => (
        <Certificate key={item.id} item={item} />
      ))}
      {!!companyEnableExternalCertificateUploads && (
        <CertificateUploader setShowForm={setShowForm} />
      )}
    </>
  );
};
export default LoadCertificates;
