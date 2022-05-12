import React from 'react';
import { LearnerAccessProps } from '../types';
import { UploadIcon } from '../Assets/Icons';
import { useUserCertificatesQuery, LoadingDots } from '@thoughtindustries/content';

const LoadCertificates = ({
  query,
  displayExpiredCertificateInformation
}: LearnerAccessProps): JSX.Element => {
  const { data, loading, error }: any = useUserCertificatesQuery({
    variables: {
      query: query,
      includeExpiredCertificates: displayExpiredCertificateInformation
    }
  });

  console.log('data from child', data);
  if (error) return error;
  return (
    <>
      {loading ? (
        <LoadingDots />
      ) : (
        <div className="border-solid text-base py-4 px-4 text-gray-400 border-gray-light">
          <div className="my-0 mx-auto max-w-full w-full">
            <div className="px-4">
              <button
                className="bg-gray-100 rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-5 relative text-center no-underline bg-grey-light duration-200 transition ease-in-out bg-active-blue border-active-blue text-white leading-5"
                data-ember-action="23973"
              >
                <UploadIcon />
                <span style={{ marginLeft: '1rem' }}>Upload Third-Party Certificate</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default LoadCertificates;
