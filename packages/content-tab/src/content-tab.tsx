import React, { createRef, useState } from 'react';
import { ContentTabProps } from './types';
import data from '../sample-data.json';
import { useOnClickOutside } from '@thoughtindustries/hooks';
import { ArrowDownIcon, CheckIcon } from './icons';
import { useGetCourseDataQuery } from './graphql/queries/GetCourseData.generated';

const ContentTab = (props: ContentTabProps): JSX.Element => {
  const { tabsView } = props;
  const wrapperRef = createRef<HTMLUListElement>();
  const tabsToRender = data.data.CourseGroupBySlug.tabs.slice(1);
  const [selectedTab, setSelectedTab] = useState(tabsToRender[0]);
  const [mobileSelect, setMobileSelect] = useState(false);

  useOnClickOutside(wrapperRef, () => setMobileSelect(false));

  /*   const { data: dataGraph, error } = useGetCourseDataQuery({
    variables: { slug: 'course-example' }
  });

  console.log('dataGraph', dataGraph, error); */

  return (
    <div>
      {tabsView && (
        <>
          <ul className="gap-x-6 border-b border-gray-300 px-8 sm:flex hidden">
            {tabsToRender.map(headTab => (
              <li
                key={headTab.id}
                className={`pb-4 px-2 border-b-2 ${
                  selectedTab.id === headTab.id ? 'border-blue-500' : 'border-transparent'
                } mb-[-1px] cursor-pointer`}
                onClick={() => setSelectedTab(headTab)}
              >
                <span
                  className={`font-medium text-sm leading-normal ${
                    selectedTab.id === headTab.id ? 'text-blue-500' : ''
                  }`}
                >
                  {headTab.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="block sm:hidden relative">
            <h4
              className="font-normal text-base leading-6 border border-gray-300 px-3 py-2 rounded bg-gray-50 flex items-center justify-between"
              onClick={() => setMobileSelect(true)}
            >
              <span>{selectedTab.label}</span>
              <span className="mt-[2px]">
                <ArrowDownIcon />
              </span>
            </h4>

            <ul
              className={`${
                mobileSelect ? 'visible' : 'hidden'
              } absolute bg-gray-50 w-full mt-1 rounded border border-gray-300 pt-2 pb-0 px-2`}
              ref={wrapperRef}
            >
              {tabsToRender.map(headTab => (
                <li
                  key={headTab.id}
                  className="pb-3 px-2 flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    setSelectedTab(headTab);
                    setMobileSelect(false);
                  }}
                >
                  <span
                    className={`text-sm leading-normal ${
                      selectedTab.id === headTab.id ? 'font-semibold' : 'font-normal'
                    }`}
                  >
                    {headTab.label}
                  </span>
                  {selectedTab.id === headTab.id && <CheckIcon />}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <div className="px-8 pt-8">
        {tabsView ? (
          <>
            {tabsToRender.map(content => {
              if (selectedTab.id === content.id) {
                return (
                  <React.Fragment key={content.id}>
                    {content.tabType === 'free-text' ? (
                      <div dangerouslySetInnerHTML={{ __html: content.body as string }} />
                    ) : (
                      <div className="shadow-sm">{content.tabType}</div>
                    )}
                  </React.Fragment>
                );
              }
            })}
          </>
        ) : (
          <>
            {tabsToRender.map(content => {
              return (
                <React.Fragment key={content.id}>
                  {content.tabType === 'free-text' ? (
                    <div dangerouslySetInnerHTML={{ __html: content.body as string }} />
                  ) : (
                    <div>{content.tabType}</div>
                  )}
                </React.Fragment>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

ContentTab.displayName = 'Tab';

export default ContentTab;
