import React from 'react';
import { useUserWaitlistQuery, LoadingDots } from '@thoughtindustries/content';

const LoadWaitlist = (): JSX.Element => {
  const { data, loading, error }: any = useUserWaitlistQuery({
    variables: {}
  });
  console.log('data from child', data);
  if (error) return error;
  return (
    <>
      {loading ? (
        <LoadingDots />
      ) : (
        data.WaitlistedContentForCurrentUser.map((item: any) => {
          return (
            <div
              key={item.id}
              className="border-solid p-4 text-black-light border-gray-light px-4 py-[0.5rem] odd:bg-white-mid border-b last:border-b-0"
            >
              <div className="my-0 mx-auto max-w-full w-full">
                <div className="grid items-center grid-cols-12 gap-4">
                  <div className="col-span-4">
                    <button className="btn btn--link btn--inherit-font dashboard-access-list-item-expander">
                      <span className="dashboard-access-list-item-expander__title text-gray-mid">
                        {item.title && item.title}
                      </span>
                    </button>
                  </div>

                  <div className="col-span-2"></div>

                  <div className="col-span-3 text-gray-mid">
                    <strong>{item.contentTypeLabel && item.contentTypeLabel}</strong>
                  </div>

                  <div className="col-start-11 col-span-2 text-right">
                    <button
                      href="/learn/course/ll-microcourse-0422"
                      className="bg-active-blue text-white rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
                    >
                      Unenroll from Waitlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};
export default LoadWaitlist;
