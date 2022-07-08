import React, { useCallback, useState } from 'react';
import { AvailableTab, LearnerAccessProps, TabKey } from './types';
import {
  LoadArchivedContent,
  LoadWaitlist,
  LoadBookmarks,
  LoadCertificates,
  LoadMyLearningItems
} from './components';
import { LoadingDots, useContentGroupsQuery } from '@thoughtindustries/content';
import LearnerAccessContext from './context';
import { getAvailableTabs } from './utilities';
import { useTranslation } from 'react-i18next';
import { localizedTabLabelMapping } from './constants';

const LearnerAccess = ({
  allowCollapse,
  classNames,
  displayExpiredCertificateInformation,
  query,
  userHasManagerInterfaceAccess,
  companyEnableExternalCertificateUploads,
  companyHasWaitlistingFeature
}: LearnerAccessProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [activeTabKey, setActiveTabKey] = useState<TabKey | undefined>(undefined);
  const [availableTabs, setAvailableTabs] = useState<AvailableTab[]>([]);
  const {
    loading,
    error,
    refetch: refetchContentGroups
  } = useContentGroupsQuery({
    variables: {
      query,
      includeExpiredCertificates: displayExpiredCertificateInformation
    },
    onCompleted: data => {
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
  });

  const { t } = useTranslation();

  const resetActiveTab = useCallback(
    () => setActiveTabKey(availableTabs.length ? availableTabs[0].key : undefined),
    []
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

  const activityCollapsed = (
    <div className="border-b border-solid leading-5 p-4 bg-gradient-to-t from-white to-gray-lightest">
      <button
        className="border-gray-300 leading-3 border-solid border h-5 text-center mr-2 w-5"
        onClick={() => setCollapsed(false)}
      >
        <i className="icon-plus text-xl font-thin leading-3 not-italic" aria-label="expand">
          +
        </i>
      </button>
      <span>
        <span className="text-base">Activity</span>
      </span>
    </div>
  );

  const activityExpanded = (
    <div className="border-b border-solid leading-5 p-4 bg-gradient-to-t from-white to-gray-lightest">
      <button
        className="border-gray-300 leading-3 border-solid border h-5 text-center mr-2 w-5"
        onClick={() => setCollapsed(true)}
      >
        <i className="icon-hyphen text-xl font-thin leading-3 not-italic" aria-label="collapse">
          -
        </i>
      </button>
      <span>
        <span className="text-base">Activity</span>
      </span>
    </div>
  );

  const styleLi = {
    className: `${classNames} border-t-2 border-transparent border-solid inline-block text-[14px] py-4 px-6 relative`
  };
  const selectedStyleLi = {
    className: `${styleLi.className} bg-white border-active-blue`
  };

  const styleSpan = {
    className: `${classNames} inline-block hover:text-hover`
  };
  const selectedStyleSpan = {
    className: `${styleSpan.className} font-bold`
  };
  const dashboardAccessTabs = (
    <ul
      className="border-solid border-gray-light bg-gradient-to-b from-white to-gray-lightest list-none m-0 p-0"
      role="tablist"
    >
      {availableTabs.map(({ key, count }, index) => {
        const activeTab = key === activeTabKey ? true : false;
        const activeClassLi = activeTab ? selectedStyleLi : styleLi;
        const activeClassSpan = activeTab ? selectedStyleSpan : styleSpan;
        return (
          <li key={index} {...activeClassLi}>
            <button
              onClick={() => {
                handleTabSelection(key);
              }}
              className="btn bg-none rounded-none h-auto p-0 shadow-none"
              role="tab"
              aria-selected={activeTab}
              aria-controls={'access-section-' + index}
            >
              <span {...activeClassSpan}>{t(localizedTabLabelMapping[key], { count })}</span>
              {key !== TabKey.Bookmark && (
                <span className="border border-solid border-gray-light text-xs font-bold rounded-lg bg-white inline-block leading-4 ml-1 py-0 px-1 text-center">
                  {count}
                </span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
  const tabContent = () => {
    switch (activeTabKey) {
      case TabKey.Current:
        return (
          <LoadMyLearningItems
            query={query}
            kind={['courseGroup', 'article', 'video', 'shareableContentObject', 'xApiObject']}
          />
        );
      case TabKey.Events:
        return (
          <LoadMyLearningItems
            query={query}
            kind={['webinar', 'webinarCourse', 'inPersonEvent', 'inPersonEventCourse']}
            sort="displayDate"
          />
        );
      case TabKey.LearningPath:
        return <LoadMyLearningItems query={query} kind={['learningPath']} />;
      case TabKey.Completed:
        return (
          <LoadMyLearningItems
            query={query}
            kind={[
              'learningPath',
              'courseGroup',
              'article',
              'video',
              'shareableContentObject',
              'xApiObject',
              'webinar',
              'webinarCourse',
              'inPersonEvent',
              'inPersonEventCourse'
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
      {allowCollapse && (
        <div className="my-0 -mx-4 max-w-none w-auto py-4 px-8 text-slate-700 text-black-light text-sm">
          <div className="border border-solid">
            {collapsed ? activityCollapsed : activityExpanded}
            {!collapsed ? dashboardAccessTabs : ''}
            {tabContent()}
          </div>
        </div>
      )}
      {!allowCollapse && (
        <div className="my-0 -mx-4 max-w-none w-auto py-4 px-8 text-slate-700 text-black-light text-sm">
          <div className="border border-solid">
            {dashboardAccessTabs}
            {tabContent()}
          </div>
        </div>
      )}
    </LearnerAccessContext.Provider>
  );
};

LearnerAccess.displayName = 'LearnerAccessWidget';

export default LearnerAccess;
