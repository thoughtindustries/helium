import React, { useEffect, useState } from 'react';
import dashboardDefault from '../../renderer/dashboardDefault.png';
import listViewSelector from '../../renderer/listViewSelector.svg';
import gridNotSelected from '../../renderer/gridNotSelected.svg';
import gridSelected from '../../renderer/gridSelected.svg';
import dropDownClosed from '../../renderer/dropDownClosed.svg';
import dropDownOpen from '../../renderer/dropDownOpen.svg';

import { LoadedComponentProps } from '@thoughtindustries/learner-access/src/types';
import {
  useUserContentItemsQuery,
  useUserCourseCompletionProgressQuery,
  LoadingDots,
  hydrateContent,
  HydratedContentItem
} from '@thoughtindustries/content';
import { useTranslation } from 'react-i18next';

const LoadUserLearning = ({ query, kind, sort }: LoadedComponentProps): JSX.Element => {
  const [gridViewActive, setGridActive] = useState(true);

  // update state to display grid only on mobile
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setGridActive(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  const { data, loading, error } = useUserContentItemsQuery({
    variables: {
      query,
      kind,
      sort
    },
    fetchPolicy: 'network-only',
    ssr: false
  });

  const { i18n, t } = useTranslation();

  interface ContentUiProps {
    item: HydratedContentItem;
    index?: number;
  }

  const DisplayListView = ({ item }: ContentUiProps) => {
    const [listViewDropDown, setListViewDropDown] = useState(false);

    const { data } = useUserCourseCompletionProgressQuery({
      variables: {
        id: item.id
      }
    });

    return (
      // list flex container
      <>
        <div
          className={`flex flex-col w-full ${listViewDropDown ? 'border-l-4 border-blue-700' : ''}`}
        >
          <div className="flex flex-row basis-8/12">
            <div className="flex flex-row basis-8/12">
              {/* course image */}
              <div className="py-4 pl-6 basis-4/12">
                {item.asset ? (
                  <img src={item.asset} className="rounded-md" />
                ) : (
                  <img src={dashboardDefault} className="rounded-md" />
                )}
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
                  <div key={i}>{item.type === 'coursePercentViewed' && item.percent + '%'}</div>
                ))}
              </div>
              {/* continue button */}
              <div className="flex items-center text-sm font-semibold text-blue-700">Continue</div>
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
        {listViewDropDown && <ListDisplayDropDown item={item} />}
      </>
    );
  };

  const ListDisplayDropDown = ({ item }: ContentUiProps) => {
    const { data } = useUserCourseCompletionProgressQuery({
      variables: {
        id: item.id
      }
    });

    return (
      // {/* list drop down */}
      <div className="flex flex-col bg-slate-50 p-6 space-y-6 border-l-4 border-blue-700">
        {/* article and duration */}
        <div className="flex flex-row">
          <div className="py-1 px-3 rounded-full bg-green-200">
            <div className="text-sm font-semibold">{item.contentTypeLabel}</div>
          </div>
          <div className="flex items-center text-gray-500 px-4">|</div>
          <div className="flex items-center text-gray-500 font-sm font-semibold">30 mins</div>
        </div>
        {/* course information */}
        <div className="flex flex-row justify-between gap-4">
          {data?.UserCourseCompletionProgress?.map(
            item =>
              item?.type !== 'coursePercentViewed' && (
                <div className="flex flex-grow pl-6 py-6 bg-white rounded-md">
                  <div className="flex flex-col">
                    <div className="text-sm text-gray-500">{item?.type}</div>
                    <div className="text-3xl font-bold pt-2">1/1</div>
                  </div>
                </div>
              )
          )}
        </div>
        {/* course description */}
        {item.description && <div className="text-sm font-semibold">{item.description}</div>}
      </div>
    );
  };

  const DisplayGridView = ({ item }: ContentUiProps) => {
    return (
      // {/* course card */}
      <div className="m-8">
        {/* course image */}
        {item.asset ? (
          <div>
            <img src={item.asset} className={item.description ? 'w-full rounded-t-md' : ''} />
          </div>
        ) : (
          <div>
            <img src={dashboardDefault} className="w-full rounded-t-md" />
          </div>
        )}
        {/* card content */}
        <div className="p-8 border rounded-b-md space-y-4">
          {/* course title */}
          <div className="text-lg font-semibold">{item.title}</div>
          {/* course info */}
          <div className="text-gray-500 text-sm font-semibold">
            {item.contentTypeLabel} | {item.displayDate}
          </div>
          <div className={item.description ? 'py-4' : ''}>{item.description}</div>
          <hr className=""></hr>
          <div className="flex justify-end text-blue-700">Continue</div>
        </div>
      </div>
    );
  };

  if (loading) return <LoadingDots />;

  if (error) return <>{error.message}</>;

  if (!data || !data.UserContentItems) return <></>;

  return (
    <>
      {/* grid/list toggle */}
      <div className="hidden sm:flex justify-end p-3">
        {/* list display button */}
        {gridViewActive ? (
          <button
            className="flex border rounded-l-md w-9 h-9 place-content-center items-center"
            onClick={() => setGridActive(false)}
          >
            <img src={listViewSelector} />
          </button>
        ) : (
          <button
            className="flex border rounded-l-md w-9 h-9 place-content-center items-center bg-blue-600"
            onClick={() => setGridActive(false)}
          >
            <img src={listViewSelector} />
          </button>
        )}
        {/* grid display button */}
        {gridViewActive ? (
          <button
            className="flex border rounded-r-md w-9 h-9 place-content-center items-center bg-blue-600"
            onClick={() => setGridActive(true)}
          >
            <img src={gridSelected} />
          </button>
        ) : (
          <button
            className="flex border rounded-r-md w-9 h-9 place-content-center items-center"
            onClick={() => setGridActive(true)}
          >
            <img src={gridNotSelected} />
          </button>
        )}
      </div>
      {gridViewActive ? (
        <div className="grid gap-5 self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.UserContentItems.map(item => {
            const hydratedItem = hydrateContent(i18n, item);
            if (hydratedItem.isCompleted) {
              return null;
            }
            return <DisplayGridView key={item.id} item={hydratedItem} />;
          })}
        </div>
      ) : (
        // list flex container
        <div className="sm:flex flex-col w-full hidden">
          {/* title and progress */}
          <div className="flex flex-row bg-slate-50 px-6 py-3 rounded-t-md">
            <div className="text-sm font-semibold basis-8/12">Title</div>
            <div className="text-sm font-semibold basis-4/12">Progress</div>
          </div>
          {data.UserContentItems.map(item => {
            const hydratedItem = hydrateContent(i18n, item);
            if (hydratedItem.isCompleted) {
              return null;
            }
            return (
              <div key={item.id} className="odd:bg-slate-50 even:bg-white">
                <DisplayListView key={item.id} item={hydratedItem} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default LoadUserLearning;
