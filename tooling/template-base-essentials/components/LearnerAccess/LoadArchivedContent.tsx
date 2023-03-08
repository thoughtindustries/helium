import React, { useCallback } from 'react';
import { NetworkStatus } from '@apollo/client';
import { useUserArchivesQuery, LoadingDots, formatTime } from '@thoughtindustries/content';
import { ReinstateButton } from './MutationCallingButtons';
import useLearnerAccess from './Context/use-context';
import { t } from 'i18next';
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
    notifyOnNetworkStatusChange: true
  });
  const isRefetching = networkStatus === NetworkStatus.refetch;
  const { refetchContentGroups, resetActiveTab } = useLearnerAccess();
  const onReinstateSuccessAsync = useCallback(async () => {
    const { data: refetchData } = await refetchArchives();
    if (refetchData && !refetchData.UserArchives?.length) {
      resetActiveTab();
    }
    await refetchContentGroups();
  }, [refetchContentGroups, refetchArchives, resetActiveTab]);
  if (loading || isRefetching) return <LoadingDots />;
  if (error) return <>{error.message}</>;
  if (!data || !data.UserArchives) return <></>;
  return (
    <div className="py-6">
      {data.UserArchives.map(item => (
        <div
          key={item.id}
          className="odd:bg-slate-100 text-black-light py-3 px-4 bg-white-mid rounded border-blue-700"
        >
          <div className="flex flex-col w-full">
            <div className="flex flex-row">
              <div className="flex flex-row basis-4/12">
                {/* course title */}
                <div className="flex items-center p-6 text-sm font-semibold font-primary">
                  {item.name}
                </div>
              </div>
              <div className="flex flex-row basis-8/12 justify-between">
                <div className="flex items-center text-sm font-semibold">{item.resourceType}</div>
                <div className="col-start-12 col-span-2 text-center my-1.5 relative">
                  {item.reinstatable && (
                    <ReinstateButton
                      item={item}
                      onReinstateSuccessAsync={onReinstateSuccessAsync}
                    />
                  )}
                  <small className="block text-gray-mid text-xs z-[-1] relative">
                    {t('dashboard.archived')}{' '}
                    {item.archivedAt && formatTime(item.archivedAt, undefined, 'MMM D, YYYY')}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <hr></hr>
    </div>
  );
};
export default LoadArchivedContent;
