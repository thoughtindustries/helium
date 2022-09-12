import React, { useCallback } from 'react';
import { NetworkStatus } from '@apollo/client';
import {
  useUserWaitlistQuery,
  LoadingDots,
  useUnenrollFromWaitlistMutation,
  hydrateContent,
  GlobalTypes
} from '@thoughtindustries/content';
import useLearnerAccess from './Context/use-context';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const LoadWaitlist = (): JSX.Element => {
  const { i18n } = useTranslation();
  const {
    data,
    loading,
    error,
    refetch: refetchWaitlist,
    networkStatus
  } = useUserWaitlistQuery({
    variables: {},
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true
  });
  const [unenrollFromWaitlistMutation] = useUnenrollFromWaitlistMutation();
  const { refetchContentGroups, resetActiveTab } = useLearnerAccess();
  const handleUnenroll = useCallback(
    async id => {
      await unenrollFromWaitlistMutation({ variables: { id } });
      const { data: refetchData } = await refetchWaitlist();
      if (refetchData && !refetchData.UserWaitlist?.length) {
        resetActiveTab();
      }
      await refetchContentGroups();
    },
    [refetchContentGroups, refetchWaitlist, resetActiveTab]
  );
  const isRefetching = networkStatus === NetworkStatus.refetch;
  if (loading || isRefetching) return <LoadingDots />;
  if (error) return <>{error.message}</>;
  if (!data || !data.UserWaitlist) return <></>;
  return (
    <div className="py-5">
      {data.UserWaitlist.map(item => {
        return (
          <div
            key={item.id}
            className="odd:bg-slate-100 text-black-light py-3 px-4 bg-white-mid rounded"
          >
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <div className="flex flex-row basis-4/12">
                  {/* course title */}
                  <div className="flex items-center p-6 text-sm font-semibold font-primary">
                    {item.title}
                  </div>
                </div>
                <div className="flex flex-row basis-8/12 justify-between">
                  <div className="flex items-center text-sm font-semibold">
                    {item.contentTypeLabel}
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleUnenroll(item.id)}
                      className="bg-active-blue text-accent-contrast bg-accent rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
                    >
                      {t('dashboard.unenroll-waitlist')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default LoadWaitlist;
