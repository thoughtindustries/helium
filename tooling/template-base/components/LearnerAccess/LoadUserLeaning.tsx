import React, { useCallback, useState } from 'react';
import dashboardDefault from '../../renderer/dashboardDefault.png';
import listViewSelector from '../../renderer/listViewSelector.svg';
import gridNotSelected from '../../renderer/gridNotSelected.svg';
import gridSelected from '../../renderer/gridSelected.svg';
import dropDownClosed from '../../renderer/dropDownClosed.svg';

import { LoadedComponentProps } from '@thoughtindustries/learner-access/src/types';
import {
  RightArrowIcon,
  DownArrowIcon,
  HelpIcon,
  StopwatchIcon,
  ChatIcon,
  ViewIcon,
  FileIcon
} from '@thoughtindustries/learner-access/src/Assets/Icons';
import {
  useUserContentItemsQuery,
  useUserCourseProgressQuery,
  useUserCourseCompletionProgressQuery,
  useUserCourseCollaborationsQuery,
  useUserCourseAwardCountsQuery,
  LoadingDots,
  GlobalTypes,
  hydrateContent,
  HydratedContentItem,
  formatTime
} from '@thoughtindustries/content';
import { ArchiveButton } from '@thoughtindustries/learner-access/src/components/MutationCallingButtons';
import { Tooltip } from '@thoughtindustries/learner-access/src/Assets/Tooltips';
import { useTranslation } from 'react-i18next';
import useLearnerAccess from '@thoughtindustries/learner-access/src/use-context';
import Logo from '../Logo/Logo';
import { assertType } from 'graphql';

const LoadUserLearning = ({ query, kind, sort }: LoadedComponentProps): JSX.Element => {
  const [gridViewActive, setGridActive] = useState(false);
  const updateGrudState = () => {
    setGridActive(true);
  };
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
    const [showContent, setShowContent] = useState<boolean>(false);

    return (
      // list flex container
      <div className="flex flex-col w-full">
        <div className="flex flex-row basis-8/12">
          <div className="flex flex-row basis-8/12">
            {/* course image */}
            <div className="pt-4 pl-6 basis-4/12">
              {item.asset ? (
                <img src={item.asset} className="" />
              ) : (
                <img src={dashboardDefault} className="" />
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
              25% complete
            </div>
            {/* continue button */}
            <div className="flex items-center text-sm font-semibold text-blue-400">Continue</div>
            {/* drop down menu */}
            <div className="flex items-center pr-2">
              <img src={dropDownClosed} className="h-2" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DisplayGridView = ({ item }: ContentUiProps) => {
    const [showContent, setShowContent] = useState<boolean>(false);

    return (
      // {/* course card */}
      <div className="w-[300px] m-8">
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
        <div className="p-8 border rounded-b-md">
          {/* course title */}
          <div className="text-lg font-semibold">{item.title}</div>
          {/* course info */}
          <div className="text-gray-500 text-sm font-semibold">
            {item.contentTypeLabel} | {item.displayDate}
          </div>
          <div className={item.description ? 'py-4' : ''}>{item.description}</div>
        </div>
      </div>
    );
  };

  if (loading) return <LoadingDots />;

  if (error) return <>{error.message}</>;

  if (!data || !data.UserContentItems) return <></>;
  console.log(gridViewActive);

  return (
    <>
      {/* grid/list toggle */}
      <div className="flex justify-end p-3">
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
        <div className="flex flex-col w-full">
          {/* title and progress */}
          <div className="flex flex-row bg-slate-50 px-6 py-3">
            <div className="text-sm font-semibold basis-8/12">Title</div>
            <div className="text-sm font-semibold basis-4/12">Progress</div>
          </div>
          {data.UserContentItems.map(item => {
            const hydratedItem = hydrateContent(i18n, item);
            if (hydratedItem.isCompleted) {
              return null;
            }
            return <DisplayListView key={item.id} item={hydratedItem} />;
          })}
        </div>
      )}
    </>
  );
};
export default LoadUserLearning;
