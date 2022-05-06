import React from 'react';
import { LoadedComponentProps } from '../types';
import { useCertificatesQuery, LoadingDots } from '@thoughtindustries/content';

const LoadCertificates = ({
  query,
  kind,
  sort,
  displayExpiredCertificateInformation
}: LoadedComponentProps): JSX.Element => {
  const { data, loading, error }: any = useCertificatesQuery({
    variables: {
      ...{
        query,
        kind,
        sort
      }
      // displayExpiredCertificateInformation
    }
  });
  console.log('data from child', data);
  if (error) return error;
  return (
    <>
      <div className="inline-block w-full h-auto">
        <div className=" mr-0 mb-0 -mt-5">
          {loading ? (
            <LoadingDots />
          ) : (
            <div className="text-center border-solid border-b text-base py-3 px-4 text-gray-400 border-gray-light">
              <div className="float-left px-4 relative w-full">
                <button className="btn btn--primary btn--medium" data-ember-action="4831">
                  <i className="icon-upload" aria-label="upload"></i>
                  <span id="i18n-60">Upload Third-Party Certificate</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default LoadCertificates;
