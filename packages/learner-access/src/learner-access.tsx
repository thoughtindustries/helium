import React, { useState } from 'react';
import { LearnerAccessProps } from './types';
import {
  LoadContentItems,
  LoadArchivedContent,
  LoadWaitlist,
  LoadBookmarks,
  LoadCertificates
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
    id: string;
  }

  const [learnerAccessData, setLearnerAccessData] = useState<ob[]>([
    {
      item: 'My learning',
      id: 'current'
    },
    {
      item: 'Events',
      id: 'events'
    },
    {
      item: 'Learning Paths',
      id: 'learningPath'
    },
    {
      item: 'Completed',
      id: 'completed'
    },
    { item: 'Archived', id: 'archived' },
    { item: 'Certifications', id: 'certificate' }
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
    className: `${classNames} border-t-2 border-transparent border-solid inline-block text-sm py-4 px-8 relative`
  };
  const selectedStyleLi = {
    className: `${styleLi.className} bg-white border-activeTab-blue`
  };

  const styleSpan = {
    className: `${classNames} inline-block hover:text-hover`
  };
  const selectedStyleSpan = {
    className: `${styleSpan.className} font-bold`
  };
  const dashboardAccessTabs = (
    <ul
      className="border-solid border-b border-gray-light bg-gradient-to-b from-white to-gray-lightest list-none m-0 p-0"
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
                handleChange(index, obj.id);
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
          <LoadContentItems
            query={query}
            kind={['courseGroup', 'article', 'video', 'shareableContentObject', 'xApiObject']}
            sort={null}
          />
        );
      case 'Events':
        return (
          <LoadContentItems
            query={query}
            kind={['webinar', 'webinarCourse', 'inPersonEvent', 'inPersonEventCourse']}
            sort="displayDate"
          />
        );
      case 'LearningPath':
        return <LoadContentItems query={query} kind={['learningPath']} sort={null} />;
      case 'Completed':
        return (
          <LoadContentItems
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
            sort={null}
          />
        );
      case 'Archived':
        return <LoadArchivedContent />;
      case 'certificate':
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
            sort={null}
          />
        );
    }
  };
  return allowCollapse ? (
    <div className="my-0 -mx-4 max-w-none w-auto py-4 px-8 text-slate-700 text-black-light">
      <div className="border border-solid bg-gray-light">
        {collapsed ? activityCollapsed : activityExpanded}
        {!collapsed ? dashboardAccessTabs : ''}
        {tabContent()}
      </div>
    </div>
  ) : (
    <div className="my-0 -mx-4 max-w-none w-auto py-4 px-8 text-slate-700 text-black-light">
      <div className="border border-solid bg-gray-light">
        {dashboardAccessTabs}
        {tabContent()}
      </div>
    </div>
  );
};

LearnerAccess.displayName = 'LearnerAccessWidget';

export default LearnerAccess;
