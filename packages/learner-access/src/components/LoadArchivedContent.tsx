import React, { useEffect } from 'react';
import { useUserArchivesQuery, LoadingDots, formatTime } from '@thoughtindustries/content';
import { ReinstateButton } from './MutationCallingButtons';
const LoadArchivedContent = (): JSX.Element => {
  const { data, loading, error } = useUserArchivesQuery({
    variables: {},
    fetchPolicy: 'network-only'
  });
  console.log('data from child', data);
  useEffect(() => {
    console.log('mounting <LoadArchivedContent />');
    return () => {
      console.log('un-mounting <LoadArchivedContent />');
    };
  }, []);
  if (error) return <>{error.message}</>;
  return (
    <>
      {loading ? (
        <LoadingDots />
      ) : (
        data?.UserArchives.map((item: any) => {
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
                        {item.name && item.name}
                      </span>
                    </button>
                  </div>

                  <div className="col-span-2"></div>

                  <div className="col-span-3 text-gray-mid">
                    <strong>{item.resourceType && item.resourceType}</strong>
                  </div>

                  <div className="col-start-12 col-span-2 text-center my-1.5 relative">
                    {item.reinstatable && <ReinstateButton item={item} />}
                    <small className="block text-gray-mid text-xs z-[-1] relative">
                      Archived {formatTime(item.archivedAt, undefined, 'MMM D, YYYY')}
                    </small>
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
export default LoadArchivedContent;
