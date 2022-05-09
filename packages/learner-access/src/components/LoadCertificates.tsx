import React from 'react';
import { LearnerAccessProps } from '../types';
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
      <div className="inline-block w-full h-auto">
        <div className=" mr-0 mb-0 -mt-5">
          {loading ? (
            <LoadingDots />
          ) : (
            <div className="text-center border-solid border-b text-base py-3 px-4 text-gray-400 border-gray-light">
              <div className="dashboard-access-list-item">
                <div className="row">
                  <div className="medium-12 columns">
                    <button className="btn btn--primary btn--medium" data-ember-action="23973">
                      <i className="icon-upload" aria-label="upload"></i>
                      <span id="i18n-196">Upload Third-Party Certificate</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default LoadCertificates;
