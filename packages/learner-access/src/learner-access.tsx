import React, { useState } from 'react';
import { NetworkStatus } from '@apollo/client';
import { LearnerAccessProps } from './types';
import {
  LoadContentItems,
  LoadArchivedContent,
  LoadWaitlist,
  LoadBookmarks,
  LoadCertificates,
  LoadMyLearningItems
} from './components';
import { LoadingDots, useContentGroupsQuery } from '@thoughtindustries/content';
import LearnerAccessContext from './context';
const LearnerAccess = ({
  allowCollapse,
  classNames,
  displayExpiredCertificateInformation,
  query
}: LearnerAccessProps): JSX.Element => {
  const [selected, setSelected] = useState<number>(0);
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('contentItems');

  const [mylearningCount, setMylearningCount] = useState<number>(0);

  const {
    data,
    loading,
    error,
    refetch: refetchContentGroups,
    networkStatus
  } = useContentGroupsQuery({
    variables: {
      query,
      includeExpiredCertificates: displayExpiredCertificateInformation
    },
    ssr: false,
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true
  });

  if (loading || networkStatus === NetworkStatus.refetch) {
    return <LoadingDots />;
  }

  if (error) {
    return <>{error.message}</>;
  }

  const newTabName = (currentTab: string) => {
    switch (currentTab) {
      case 'contentItems':
        return 'My Learning';
        break;
      case 'eventItems':
        return 'Events';
        break;
      case 'learningPaths':
        return 'Learning Paths';
        break;
      case 'completedItems':
        return 'Completed';
        break;
      case 'certificates':
        return 'Certifications';
        break;
      case 'bookmarkFolders':
        return 'Bookmarks';
        break;
      case 'archivedContentItems':
        return 'Archived';
        break;
      case 'waitlistedCourses':
        return 'Waitlisted';
        break;
    }
  };

  const handleChange = (index: number, currentTab: string) => {
    setSelected(index);
    setActiveTab(currentTab);
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
      {data &&
        data.UserContentGroups.map((obj, index) => {
          const activeTab = index === selected ? true : false;
          const activeClassLi = activeTab ? selectedStyleLi : styleLi;
          const activeClassSpan = activeTab ? selectedStyleSpan : styleSpan;
          return (
            <li key={index} {...activeClassLi}>
              <button
                onClick={() => {
                  handleChange(index, obj.kind);
                }}
                className="btn bg-none rounded-none h-auto p-0 shadow-none"
                role="tab"
                aria-selected={activeTab}
                aria-controls={'access-section-' + index}
              >
                <span {...activeClassSpan}>{newTabName(obj.kind)}</span>
                {obj.kind == 'bookmarkFolders' ? (
                  ''
                ) : (
                  <span className="border border-solid border-gray-light text-xs font-bold rounded-lg bg-white inline-block leading-4 ml-1 py-0 px-1 text-center">
                    {obj.count}
                  </span>
                )}
              </button>
            </li>
          );
        })}
    </ul>
  );
  const tabContent = () => {
    switch (activeTab) {
      case 'contentItems':
        return (
          <LoadMyLearningItems
            query={query}
            kind={['courseGroup', 'article', 'video', 'shareableContentObject', 'xApiObject']}
            sort=""
          />
        );
      case 'eventItems':
        return (
          <LoadMyLearningItems
            query={query}
            kind={['webinar', 'webinarCourse', 'inPersonEvent', 'inPersonEventCourse']}
            sort="displayDate"
          />
        );
      case 'learningPaths':
        return <LoadMyLearningItems query={query} kind={['learningPath']} sort="" />;
      case 'completedItems':
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
            sort=""
          />
        );
      case 'archivedContentItems':
        return <LoadArchivedContent />;
      case 'bookmarkFolders':
        return <LoadBookmarks />;
      case 'waitlistedCourses':
        return <LoadWaitlist />;
      case 'certificates':
        return (
          <LoadCertificates
            query={query}
            displayExpiredCertificateInformation={displayExpiredCertificateInformation}
          />
        );
      default:
        return (
          <LoadContentItems
            query={query}
            kind={['courseGroup', 'article', 'video', 'shareableContentObject', 'xApiObject']}
            sort=""
          />
        );
    }
  };

  return (
    <LearnerAccessContext.Provider value={{ refetchContentGroups }}>
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
