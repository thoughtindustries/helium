import React, { useState } from 'react';
import { LearnerAccessProps } from '../types';
import { HelpIcon, DownArrowIcon, RightArrowtIcon } from '../Assets/Icons';
import { useUserContentItemsLazyQuery, LoadingDots } from '@thoughtindustries/content';

const LoadCertificates = ({ query, kind, sort }: LearnerAccessProps): JSX.Element => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const { data, loading, error }: any = useUserContentItemsLazyQuery({
    variables: {
      query,
      kind,
      sort
    }
  });

  const toolTip = (
    <div className="user-engagement-stat__label-hint">
      <span className="has-tooltip">
        <i className="icon-help" aria-label="help"></i>
        <span className="tooltip tooltip--right">
          This information is updated and verified as part of a nightly process
        </span>
      </span>
    </div>
  );

  const handleClick = () => {
    setShowContent(!showContent);
  };

  const expandedContent = (
    <div className="grid grid-rows-2 mx-0 my-4 relative">
      <div className=" grid grid-cols-2 row-span-2">
        <div className="medium-8 col-span-2 px-4">
          <div className="dashboard-access-list-item__description text-xs mt-0 text-black-light">
            <p>Best MicroCourse ever!!</p>
          </div>
          <div className="user-engagement-stats">
            <ul className="my-0 -mx-3 p-0 grid grid-cols-4" data-bindattr-7983="7983">
              <li className="ember-view user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0">
                <div className="user-engagement-stat__label-container flex before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px">
                  <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8 text-sm text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                    Total Hours
                  </div>
                  <div className="user-engagement-stat__label-hint absolute right-0">
                    <span className="has-tooltip">
                      <HelpIcon />
                      {/* <span className="tooltip tooltip--right">
                        This information is updated and verified as part of a nightly process
                      </span> */}
                    </span>
                  </div>
                </div>

                <div
                  className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-3xl mt-1 text-center leading-10"
                  data-bindattr-7987="7987"
                >
                  <i className="icon-stopwatch" data-bindattr-7989="7989"></i>
                  <span className="user-engagement-stat__value">0.0</span>
                </div>
              </li>

              <li className="ember-view user-engagement-stat user-engagement-stat--collaborations px-2.5 pb-5 block float-left h-auto pt-0">
                <div>
                  <div className="user-engagement-stat__label" data-bindattr-7994="7994">
                    Collaborations
                  </div>
                </div>

                <div
                  className="user-engagement-stat__value-container user-engagement-stat__value-container--huge"
                  data-bindattr-7996="7996"
                >
                  <i className="icon-chat" data-bindattr-7998="7998"></i>
                  <span className="user-engagement-stat__value"></span>
                </div>
              </li>
              <li className="ember-view user-engagement-stat user-engagement-stat--percent-viewed px-2.5 pb-5 block float-left h-auto pt-0">
                <div className="user-engagement-stat__label-container">
                  <div className="user-engagement-stat__label" data-bindattr-8003="8003">
                    Content Viewed
                  </div>
                </div>

                <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge">
                  <i className="icon-view" data-bindattr-8007="8007"></i>
                  <span className="user-engagement-stat__value">100</span>

                  <span className="user-engagement-stat__value--percent">%</span>
                </div>
              </li>
              <li className="ember-view user-engagement-stat user-engagement-stat--assessments px-2.5 pb-5 block float-left h-auto pt-0">
                <div className="user-engagement-stat__label-container">
                  <div className="user-engagement-stat__label" data-bindattr-8014="8014">
                    Required Pages Viewed
                  </div>
                </div>

                <div className="user-engagement-stat__value-container" data-bindattr-8016="8016">
                  <i className="icon-view" data-bindattr-8018="8018"></i>
                  <span className="user-engagement-stat__value">1</span>
                  <span className="user-engagement-stat__value--muted"></span>
                </div>
              </li>
              <li className="ember-view user-engagement-stat user-engagement-stat--percent-complete px-2.5 pb-5 block float-left h-auto pt-0">
                <div className="user-engagement-stat__label-container flex before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px">
                  <div
                    className="user-engagement-stat__label h-8 text-sm text-ellipsis text-gray-mid overflow-hidden text-center uppercase"
                    data-bindattr-8023="8023"
                  >
                    Complete
                  </div>
                </div>
                <div
                  className="user-engagement-stat__value-container user-engagement-stat__value-container--huge"
                  data-bindattr-8025="8025"
                >
                  <span className="user-engagement-stat__value">100</span>

                  <span className="user-engagement-stat__value--percent">%</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="user-engagement-progress-bar ">
            <div
              id="ember8032"
              className="ember-view nice round progress colorized rounded-[999px] bg-gray-light border-white border-solid border h-4 mb-2 p-px"
            >
              <span className="block h-full w-full rounded-[999px] bg-gradient-to-r from-accent-colorized-cyan to-accent-colorized-lime ease-in-out duration-200 transition-width"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  console.log('data from child', data);
  if (error) return error;
  return (
    <>
      {loading ? (
        <LoadingDots />
      ) : (
        <div className="border-solid p-4 text-black-light border-gray-light px-4 py-[0.5rem]">
          <div className="my-0 mx-auto max-w-full w-full">
            <div className="grid items-center grid-cols-12 gap-4">
              <div className="col-span-4">
                <button
                  className="btn btn--link btn--inherit-font dashboard-access-list-item-expander"
                  onClick={handleClick}
                >
                  {showContent ? <DownArrowIcon /> : <RightArrowtIcon />}
                  <span className="dashboard-access-list-item-expander__title text-gray-mid">
                    MIcroCourse 0422
                  </span>
                </button>
              </div>

              <div className="col-span-2"></div>

              <div className="col-span-3 text-gray-mid">
                <strong>MicroCourse</strong> | Agatha Christie
                <p className="catalog-list-item__source">Ortiz Group</p>
              </div>

              <div className="col-start-11 col-span-2 text-right">
                <button
                  href="/learn/course/ll-microcourse-0422"
                  className="bg-active-blue text-white rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
                >
                  Continue
                </button>
              </div>
            </div>
            {showContent ? expandedContent : ''}
          </div>
        </div>
      )}
    </>
  );
};
export default LoadCertificates;
