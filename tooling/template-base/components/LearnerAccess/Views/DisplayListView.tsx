import React, { useState } from 'react';
import dropDownClosed from '../../../renderer/dropDownClosed.svg';
import dropDownOpen from '../../../renderer/dropDownOpen.svg';
import LearnerAccessListDisplayDropDown from './ListDisplayDropDown';
import {
  HydratedContentItem,
  useUserCourseCompletionProgressQuery
} from '@thoughtindustries/content';
import clsx from 'clsx';
import { t } from 'i18next';
import { usePageContext } from '../../../renderer/usePageContext';
interface ContentUiProps {
  item: HydratedContentItem;
  index?: number;
}

const LearnerAccessDisplayListView = ({ item }: ContentUiProps) => {
  const [listViewDropDown, setListViewDropDown] = useState(false);

  const { data } = useUserCourseCompletionProgressQuery({
    variables: {
      id: item.id
    },
    fetchPolicy: 'network-only'
  });

  const { appearance } = usePageContext();
  const assetImage = item.asset ? item.asset : appearance?.logoAsset;

  return (
    <>
      <div
        className={clsx('flex flex-col w-full', listViewDropDown && 'border-1-4 border-blue-700')}
      >
        <div className="flex flex-row basis-8/12">
          <div className="flex flex-row basis-8/12">
            {/* course image */}
            <div className="py-4 pl-6 basis-4/12">
              <div>
                <img src={assetImage} className={clsx('rounded-md', !item.asset && 'p-4')} />
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
                <img src={dropDownOpen} className="h-2" />
              ) : (
                <img src={dropDownClosed} className="h-2" />
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
