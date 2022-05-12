import React, { useState } from 'react';
import { LearnerAccessProps } from './types';
import {
  LoadContentItems,
  LoadArchivedContent,
  LoadWaitlist,
  LoadBookmarks,
  LoadCertificates,
  LoadMyLearningItems,
  LoadEvents,
  LoadLearningPaths,
  LoadCompletedItems
} from './components';

const LearnerAccess = ({
  allowCollapse,
  classNames,
  displayExpiredCertificateInformation,
  query
}: LearnerAccessProps): JSX.Element => {
  const [selected, setSelected] = useState<number>(0);
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('');

  interface ob {
    item: string;
  }

  const [learnerAccessData, setLearnerAccessData] = useState<ob[]>([
    { item: 'My learning' },
    { item: 'Events' },
    { item: 'Learning Paths' },
    { item: 'Completed' },
    { item: 'Archived' },
    { item: 'Certifications' },
    { item: 'Bookmarked' },
    { item: 'Waitlisted' }
  ]);

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
      {learnerAccessData.map((obj, index) => {
        const activeTab = index === selected ? true : false;
        const activeClassLi = activeTab ? selectedStyleLi : styleLi;
        const activeClassSpan = activeTab ? selectedStyleSpan : styleSpan;
        return (
          <li key={index} {...activeClassLi}>
            <button
              onClick={() => {
                handleChange(index, obj.item);
              }}
              className="btn bg-none rounded-none h-auto p-0 shadow-none"
              role="tab"
              aria-selected={activeTab}
              aria-controls={'access-section-' + index}
            >
              <span {...activeClassSpan}>{obj.item}</span>
              <span className="border border-solid border-gray-light text-xs font-bold rounded-lg bg-white inline-block leading-4 ml-1 py-0 px-1 text-center">
                0
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
  const tabContent = () => {
    console.log('in switch', activeTab);
    switch (activeTab) {
      case 'My learning':
        return (
          <LoadMyLearningItems
            query={query}
            kind={['courseGroup', 'article', 'video', 'shareableContentObject', 'xApiObject']}
            sort=""
          />
        );
      case 'Events':
        return (
          <LoadEvents
            query={query}
            kind={['webinar', 'webinarCourse', 'inPersonEvent', 'inPersonEventCourse']}
            sort="displayDate"
          />
        );
      case 'Learning Paths':
        return <LoadLearningPaths query={query} kind={['learningPath']} sort="" />;
      case 'Completed':
        return (
          <LoadCompletedItems
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
      case 'Archived':
        return <LoadArchivedContent />;
      case 'Bookmarked':
        return <LoadBookmarks />;
      case 'Waitlisted':
        return <LoadWaitlist />;
      case 'Certifications':
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
  return allowCollapse ? (
    <div className="my-0 -mx-4 max-w-none w-auto py-4 px-8 text-slate-700 text-black-light text-sm">
      <div className="border border-solid">
        {collapsed ? activityCollapsed : activityExpanded}
        {!collapsed ? dashboardAccessTabs : ''}
        {tabContent()}
      </div>
    </div>
  ) : (
    <div className="my-0 -mx-4 max-w-none w-auto py-4 px-8 text-slate-700 text-black-light text-sm">
      <div className="border border-solid">
        {dashboardAccessTabs}
        {tabContent()}
      </div>
    </div>
  );
};

LearnerAccess.displayName = 'LearnerAccessWidget';

export default LearnerAccess;
