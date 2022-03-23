import React, { useState } from 'react';
import { LearnerAccessProps } from './types';

const LearnerAccess = (props: LearnerAccessProps): JSX.Element => {
  const { allowCollapse, classNames } = props;
  const [selected, setSelected] = useState<number>(0);
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const learnerAccessArray: { item: string; id: number }[] = [
    { item: 'My learning', id: 1 },
    { item: 'Events', id: 2 },
    { item: 'Learning Paths', id: 3 },
    { item: 'Completed', id: 4 },
    { item: 'Archived', id: 5 },
    { item: 'Certifications', id: 6 }
  ];
  const handleChange = (index: number) => setSelected(index);

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

  //   const tabContent = (<div className="inline-block">
  //   <div className="top-2/4 left-1/2 mr-0 mb-0 -mt-5 -ml-16 absolute">
  //     <div className="inline-block h-10 w-10 rounded-full animate-bounce delay-1000 ease-in-out my-0 mx-auto text-center"></div>
  //     <div className="inline-block h-10 w-10 rounded-full animate-bounce delay-1000 ease-in-out loading__spinner__bounce2"></div>
  //     <div className="inline-block h-10 w-10 rounded-full animate-bounce delay-1000 ease-in-out loading__spinner__bounce3"></div>
  //     </div>
  // </div>)

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
      {learnerAccessArray.map((obj, index) => {
        const activeTab = index === selected ? true : false;
        const activeClassLi = activeTab ? selectedStyleLi : styleLi;
        const activeClassSpan = activeTab ? selectedStyleSpan : styleSpan;

        return (
          <li key={obj.id} {...activeClassLi}>
            <button
              onClick={() => {
                handleChange(index);
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

  return allowCollapse ? (
    <div className="my-0 -mx-4 max-w-none w-auto py-4 px-8 text-slate-700 text-black-light">
      <div className="border border-solid bg-gray-light">
        {collapsed ? activityCollapsed : activityExpanded}
        {!collapsed ? dashboardAccessTabs : ''}
      </div>
    </div>
  ) : (
    <div className="my-0 -mx-4 max-w-none w-auto py-4 px-8 text-slate-700 text-black-light">
      <div className="border border-solid bg-gray-light">{dashboardAccessTabs}</div>
    </div>
  );
};

LearnerAccess.displayName = 'LearnerAccessWidget';

export default LearnerAccess;
