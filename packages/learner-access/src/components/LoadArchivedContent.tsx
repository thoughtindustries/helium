import React, { useCallback, useEffect } from 'react';
import { NetworkStatus } from '@apollo/client';
import { useUserArchivesQuery, LoadingDots, formatTime } from '@thoughtindustries/content';
import { ReinstateButton } from './MutationCallingButtons';
import useLearnerAccess from '../use-context';
const LoadArchivedContent = (): JSX.Element => {
  const {
    data,
    loading,
    error,
    refetch: refetchArchives,
    networkStatus
  } = useUserArchivesQuery({
    variables: {},
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
    ssr: false
  });
  const isRefetching = networkStatus === NetworkStatus.refetch;
  const { refetchContentGroups, resetActiveTab } = useLearnerAccess();
  const onReinstateSuccessAsync = useCallback(async () => {
    await refetchContentGroups();
    const { data: refetchData } = await refetchArchives();
    if (refetchData && !refetchData.UserArchives?.length) {
      resetActiveTab();
    }
  }, [refetchContentGroups, refetchArchives, resetActiveTab]);
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
      {loading || isRefetching ? (
        <LoadingDots />
      ) : (
        data?.UserArchives?.map((item: any) => {
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
                    {item.reinstatable && (
                      <ReinstateButton
                        item={item}
                        onReinstateSuccessAsync={onReinstateSuccessAsync}
                      />
                    )}
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
