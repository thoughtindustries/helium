import React, { useState } from 'react';
import { LoadedComponentProps } from '../types';
import { DownArrowIcon, RightArrowtIcon } from '../Assets/Icons';
import { useUserContentItemsLazyQuery, LoadingDots } from '@thoughtindustries/content';

const LoadCertificates = ({ query, kind, sort }: LoadedComponentProps): JSX.Element => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const { data, loading, error }: any = useUserContentItemsLazyQuery({
    variables: {
      query,
      kind,
      sort
    }
  });
  const handleClick = () => {
    setShowContent(!showContent);
  };

  const expandedContent = (
    <div className="grid grid-rows-2 mx-0">
      <div className=" archive mt-2 row-end-4 relative text-black-light">
        <div className="column ">
          <button className="bg-white-mid border-solid border rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-gray-light font-sans transition duration-200 leading-5">
            <span>Archive</span>
          </button>
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
                <strong>Learning Path</strong>
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
