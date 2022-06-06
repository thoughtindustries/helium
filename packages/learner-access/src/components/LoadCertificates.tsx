import React, { useState } from 'react';
import { LearnerAccessProps } from '../types';
import { UploadIcon } from '../Assets/Icons';
import { useUserCertificatesQuery, LoadingDots } from '@thoughtindustries/content';
import { Calender } from '../Assets/flatPickr/FlatPickr';

const LoadCertificates = ({
  query,
  displayExpiredCertificateInformation
}: LearnerAccessProps): JSX.Element => {
  const [showForm, setShowForm] = useState<boolean>(false);

  console.log(typeof date);
  const { data, loading, error }: any = useUserCertificatesQuery({
    variables: {
      query: query,
      includeExpiredCertificates: displayExpiredCertificateInformation
    }
  });

  const UploadFormUi = (item: any) => {
    return (
      <div
        key={item.id}
        className="border-solid p-4 text-black-light border-gray-light border-b last:border-b-0"
      >
        <form className="" data-nordpass-autofill="identity" data-np-checked="1">
          <p className="font-normal mb-4 leading-[1.45rem]">
            <span id="i18n-323">Upload a third-party certificate. Please provide details.</span>
          </p>
          <div className="flex justify-evenly">
            <div className="w-full">
              <div className="row">
                <div className="float-left px-4 relative">
                  <div className="ember-view input__container">
                    <input
                      className="border-none btn btn--expand btn--bare rounded-sm text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 w-full"
                      data-bindattr-28570="28570"
                      type="file"
                      name="file"
                      aria-label="file"
                      data-np-checked="1"
                    />
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
                      <Calender />
                    </div>
                  </div>
                  <div className="ember-view">
                    <label>Certificate Expiration</label>

                    <div className="mb-4">
                      <Calender />
                    </div>
                  </div>
                  <div className="ember-view">
                    <label>
                      <span className="ember-view">
                        <em>CEU&apos;s</em>
                      </span>
                    </label>
                    <div className="ember-view">
                      <div className="ember-view legacy-label">
                        <label className="form__label" data-bindattr-28641="28641">
                          <div className="form__label__container" data-bindattr-28642="28642"></div>
                          <div className="form__input__container" data-bindattr-28646="28646">
                            <input
                              className="focus:outline-none h-10 mb-4 text-base py-2 px-4 w-full bg-white rounded-none border-solid border box-border block mx-0 mt-0 p-2 text-black"
                              placeholder="0"
                              type="number"
                              min="0"
                              max="Infinity"
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end px-4">
                <div className="flex">
                  <button
                    data-ember-action="28579"
                    className="bg-white text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 text-black w-full"
                  >
                    Cancel
                  </button>
                  <button className="bg-active-blue rounded-sm text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 text-white w-full">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };
  const switchUploadUI = () => {
    setShowForm(prev => !prev);
  };
  const CertificateUi = () => {
    return (
      <div className="my-0 mx-auto max-w-full w-full">
        <div className="px-4">
          <button
            onClick={switchUploadUI}
            className="rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-5 relative text-center no-underline bg-grey-light duration-200 transition ease-in-out bg-active-blue border-active-blue text-white leading-5"
            data-ember-action="23973"
          >
            <UploadIcon />
            <span style={{ marginLeft: '1rem' }}>Upload Third-Party Certificate</span>
          </button>
        </div>
      </div>
    );
  };

  console.log('data from child', data);
  if (error) return error;
  return (
    <>
      {loading ? (
        <LoadingDots />
      ) : showForm ? (
        <UploadFormUi />
      ) : (
        data.CurrentUserCertificates.map(() => {
          return (
            <div className="border-solid text-base py-4 px-4 text-gray-400 border-gray-light">
              <CertificateUi />
            </div>
          );
        })
      )}
    </>
  );
};
export default LoadCertificates;
