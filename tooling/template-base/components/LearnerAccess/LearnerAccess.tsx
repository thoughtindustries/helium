import React, { useCallback, useEffect, useState } from 'react';

import { AvailableTab, LearnerAccessProps, TabKey } from './Types/types';
import LoadWaitlist from './LoadWaitlistedContent';
import LoadArchivedContent from './LoadArchivedContent';
import LoadBookmarks from './LoadBookmarks';
import LoadUserLearning from './LoadUserLearning';
import LoadCertificates from './LoadCertificates';
import { GlobalTypes, LoadingDots, useContentGroupsQuery } from '@thoughtindustries/content';
import LearnerAccessContext from './Context/context';
import { getAvailableTabs } from './Utilities/utilities';
import { useTranslation } from 'react-i18next';
import DropDownClosed from '../Assets/DropDownClosed';
import DropDownOpen from '../Assets/DropDownOpen';

const localizedTabLabelMapping: { [key in TabKey]: string } = {
  [TabKey.Current]: 'dashboard.current',
  [TabKey.Events]: 'dashboard.events',
  [TabKey.LearningPath]: 'learning-path',
  [TabKey.Completed]: 'dashboard.completed',
  [TabKey.Archived]: 'dashboard.archived',
  [TabKey.Bookmark]: 'dashboard.bookmark',
  [TabKey.Certificate]: 'dashboard.certificates',
  [TabKey.Waitlist]: 'dashboard.waitlisted'
};

const LearnerAccess = ({
  displayExpiredCertificateInformation,
  query,
  userHasManagerInterfaceAccess,
  companyEnableExternalCertificateUploads,
  companyHasWaitlistingFeature
}: LearnerAccessProps): JSX.Element => {
  const [activeTabKey, setActiveTabKey] = useState<TabKey | undefined>(undefined);
  const [availableTabs, setAvailableTabs] = useState<AvailableTab[]>([]);
  // Initialize button state based on SSR-safe default (desktop view)
  // Will be updated in useEffect on client
  const [button, setButton] = useState(false);
  const [dropDownActive, setDropDownActive] = useState(false);
  const {
    data,
    loading,
    error,
    refetch: refetchContentGroups
  } = useContentGroupsQuery({
    variables: {
      query,
      includeExpiredCertificates: displayExpiredCertificateInformation
    }
  });

  // Handle available tabs update in useEffect to avoid state updates during render
  useEffect(() => {
    if (data?.UserContentGroups) {
      const newAvailableTabs = getAvailableTabs(
        data.UserContentGroups || [],
        userHasManagerInterfaceAccess,
        companyEnableExternalCertificateUploads,
        companyHasWaitlistingFeature
      );

      // reset active tab key if not included in available tabs
      if (activeTabKey && !newAvailableTabs.find(({ key }) => key === activeTabKey)) {
        setActiveTabKey(undefined);
      } else if (!activeTabKey && newAvailableTabs.length) {
        setActiveTabKey(newAvailableTabs[0].key);
      }
      setAvailableTabs(newAvailableTabs);
    }
  }, [
    data,
    activeTabKey,
    userHasManagerInterfaceAccess,
    companyEnableExternalCertificateUploads,
    companyHasWaitlistingFeature
  ]);

  // update state to display button only on mobile
  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setButton(window.innerWidth < 640);
    }
  };

  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window !== 'undefined') {
      // Don't set initial state here to avoid hydration mismatch
      // The component will use the default state (false) for both SSR and initial client render
      window.addEventListener('resize', handleResize);

      // Only update state after a small delay to ensure hydration is complete
      const timer = setTimeout(() => {
        handleResize();
      }, 0);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const { t } = useTranslation();

  const resetActiveTab = useCallback(
    () => setActiveTabKey(availableTabs.length ? availableTabs[0].key : undefined),
    [availableTabs]
  );

  if (loading) {
    return <LoadingDots />;
  }

  if (error) {
    return <>{error.message}</>;
  }

  const handleTabSelection = (currentTabKey: TabKey) => {
    setActiveTabKey(currentTabKey);
  };

  const TabButton = () => {
    return (
      <>
        <button
          className="flex justify-between rounded-md py-3 pl-4 pr-3 border w-full text-md font-medium"
          onClick={() => setDropDownActive(!dropDownActive)}
        >
          {activeTabKey}
          {dropDownActive ? (
            <div className="pt-2">{DropDownOpen}</div>
          ) : (
            <div className="pt-2">{DropDownClosed}</div>
          )}
        </button>
        {dropDownActive && (
          <div className="border mt-2 rounded-md">
            {availableTabs.map(({ key }, index) => {
              const activeTabClassName = key === activeTabKey ? 'font-bold underline' : '';
              return (
                <>
                  {/* dropdown menu -> only visible on smaller screens */}
                  <div className="flex my-auto space-x-6 mx-auto md:block">
                    <ul className="items-center justify-between p-5 space-y-3 md:space-y-0 md:flex md:space-x-6 w-full">
                      <li key={index}>
                        <button
                          onClick={() => {
                            handleTabSelection(key);
                          }}
                          className={activeTabClassName}
                        >
                          <span>{t(localizedTabLabelMapping[key])}</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </>
    );
  };

  const dashboardAccessTabs = (
    <>
      {/* dropdown button */}
      {button ? (
        <TabButton />
      ) : (
        <ul className="items-center pt-4 md:space-y-0 sm:flex sm:space-x-6 w-full" role="tablist">
          {availableTabs.map(({ key }, index) => {
            const activeTabClassName =
              key === activeTabKey ? 'py-3 font-semibold border-b border-blue-500' : '';
            return (
              <>
                <li key={index}>
                  <button
                    onClick={() => {
                      handleTabSelection(key);
                    }}
                    className={activeTabClassName}
                  >
                    <span>{t(localizedTabLabelMapping[key])}</span>
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      )}
    </>
  );
  // tab container
  const tabContent = () => {
    switch (activeTabKey) {
      case TabKey.Current:
        return (
          <LoadUserLearning
            query={query}
            kind={[
              GlobalTypes.ContentKind.CourseGroup,
              GlobalTypes.ContentKind.Article,
              GlobalTypes.ContentKind.Video,
              GlobalTypes.ContentKind.ShareableContentObject,
              GlobalTypes.ContentKind.XApiObject
            ]}
          />
        );
      case TabKey.Events:
        return (
          <LoadUserLearning
            query={query}
            kind={[
              GlobalTypes.ContentKind.Webinar,
              GlobalTypes.ContentKind.Webinar,
              GlobalTypes.ContentKind.InPersonEvent,
              GlobalTypes.ContentKind.InPersonEventCourse
            ]}
            sortColumn={GlobalTypes.SortColumn.DisplayDate}
          />
        );
      case TabKey.LearningPath:
        return <LoadUserLearning query={query} kind={GlobalTypes.ContentKind.LearningPath} />;
      case TabKey.Completed:
        return (
          <LoadUserLearning
            query={query}
            kind={[
              GlobalTypes.ContentKind.LearningPath,
              GlobalTypes.ContentKind.CourseGroup,
              GlobalTypes.ContentKind.Article,
              GlobalTypes.ContentKind.Video,
              GlobalTypes.ContentKind.ShareableContentObject,
              GlobalTypes.ContentKind.XApiObject,
              GlobalTypes.ContentKind.Webinar,
              GlobalTypes.ContentKind.Webinar,
              GlobalTypes.ContentKind.InPersonEvent,
              GlobalTypes.ContentKind.InPersonEventCourse
            ]}
          />
        );
      case TabKey.Archived:
        return <LoadArchivedContent />;
      case TabKey.Bookmark:
        return <LoadBookmarks />;
      case TabKey.Waitlist:
        return <LoadWaitlist />;
      case TabKey.Certificate:
        return (
          <LoadCertificates
            query={query}
            displayExpiredCertificateInformation={displayExpiredCertificateInformation}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <LearnerAccessContext.Provider
      value={{
        refetchContentGroups,
        resetActiveTab,
        companyEnableExternalCertificateUploads
      }}
    >
      {/* title */}
      <div className="pt-16 px-10 pb-20">
        <div className="text-2xl font-bold font-header">Activity</div>
        <div className="max-w-none w-auto text-slate-700 text-black-light text-sm">
          <div className="">
            {dashboardAccessTabs}
            {!button && <hr className=""></hr>}
            {tabContent()}
          </div>
        </div>
      </div>
    </LearnerAccessContext.Provider>
  );
};

LearnerAccess.displayName = 'LearnerAccessWidget';

export default LearnerAccess;
