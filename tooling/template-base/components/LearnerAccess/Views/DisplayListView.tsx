import React, { useState } from 'react';
import dropDownClosed from '../../Assets/dropDownClosed';
import dropDownOpen from '../../Assets/dropDownOpen';
import LearnerAccessListDisplayDropDown from './ListDisplayDropDown';
import defaultLogo from '../../Assets/logoImage';

import {
  HydratedContentItem,
  useUserCourseCompletionProgressQuery
} from '@thoughtindustries/content';
import clsx from 'clsx';
import { usePageContext } from '../../../renderer/usePageContext';

interface ContentUiProps {
  item: HydratedContentItem;
  index?: number;
}

const LearnerAccessDisplayListView = ({ item }: ContentUiProps) => {
  const [listViewDropDown, setListViewDropDown] = useState(false);

  const { appearance } = usePageContext();
  const companyLogo = appearance?.logoAsset ? appearance?.logoAsset : defaultLogo;

  const { data } = useUserCourseCompletionProgressQuery({
    variables: {
      id: item.id
    },
    fetchPolicy: 'network-only'
  });

  const courseAsset = item.asset ? item.asset : companyLogo;

  return (
    <>
      <div
        className={clsx('flex flex-col w-full', listViewDropDown && 'border-1-4 border-blue-700')}
      >
        <div className="flex flex-row basis-8/12">
          <div className="flex flex-row basis-8/12">
            {/* course image */}
            <div className="py-4 pl-6 basis-4/12">
              <div className="flex justify-center">
                <img
                  src={courseAsset}
                  className={clsx('rounded-md', !item.asset && 'md:h-20 lg:h-32 py-4')}
                />
              </div>
            </div>

            {/* course title */}
            <div className="flex items-center px-6 text-sm font-semibold font-primary">
              {item.title}
            </div>
          </div>
          <div className="flex flex-row basis-4/12 justify-between">
            {/* course completion */}
            <div className="flex items-center pr-6 text-sm font-semibold font-primary text-gray-500">
              {data?.UserCourseCompletionProgress?.map((item, i) => (
                <div key={i}>
                  {item.type === 'coursePercentViewed' && item.percent + '% Completed'}
                </div>
              ))}
            </div>
            {/* continue button */}
            <a href={item.href} className="flex items-center text-sm font-semibold text-blue-700">
              <div className="">{item.callToAction}</div>
            </a>
            {/* drop down menu */}
            <button
              className="flex items-center pr-6"
              onClick={() => setListViewDropDown(!listViewDropDown)}
            >
              {listViewDropDown ? (
                <div className="h-2">{dropDownOpen}</div>
              ) : (
                <div className="h-2">{dropDownClosed}</div>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* listDisplayDropDown */}
      {listViewDropDown && <LearnerAccessListDisplayDropDown item={item} />}
    </>
  );
};

export default LearnerAccessDisplayListView;
