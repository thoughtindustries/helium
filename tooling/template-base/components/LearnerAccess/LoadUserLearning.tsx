import React, { useEffect, useState } from 'react';
import listViewSelector from '../Assets/listViewSelector';
import gridSelected from '../Assets/gridSelector';

import { LoadedComponentProps } from './Types/types';
import {
  useUserContentItemsQuery,
  LoadingDots,
  hydrateContent,
  HydratedContentItem
} from '@thoughtindustries/content';
import { useTranslation } from 'react-i18next';
import LearnerAccessGridView from './Views/GridView';
import LearnerAccessDisplayListView from './Views/DisplayListView';
import clsx from 'clsx';

const LoadUserLearning = ({ query, kind, sort }: LoadedComponentProps): JSX.Element => {
  const [gridViewActive, setGridActive] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setGridActive(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const { data, loading, error } = useUserContentItemsQuery({
    variables: {
      query,
      kind,
      sort
    },
    fetchPolicy: 'network-only'
  });

  const { i18n } = useTranslation();

  interface ContentUiProps {
    item: HydratedContentItem;
    index?: number;
  }

  const DisplayListView = ({ item }: ContentUiProps) => {
    return (
      // list flex container
      <LearnerAccessDisplayListView item={item} />
    );
  };

  const DisplayGridView = ({ item }: ContentUiProps) => {
    return (
      // {/* course card */}
      <LearnerAccessGridView item={item} />
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
        <button
          className={clsx(
            'flex border rounded-l-md w-9 h-9 place-content-center items-center',
            !gridViewActive && 'bg-blue-600'
          )}
          onClick={() => setGridActive(false)}
        >
          <div>{listViewSelector}</div>
        </button>

        {/* grid display button */}
        <button
          className={clsx(
            'flex border rounded-r-md w-9 h-9 place-content-center items-center',
            gridViewActive && 'bg-blue-600'
          )}
          onClick={() => setGridActive(true)}
        >
          <div>{gridSelected}</div>
        </button>
      </div>

      <div
        className={clsx(
          gridViewActive
            ? 'grid gap-5 self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'sm:flex flex-col w-full hidden'
        )}
      >
        {/* title and progress */}
        {!gridViewActive && (
          <div className="flex flex-row bg-slate-50 px-6 py-3 rounded-t-md">
            <div className="text-sm font-semibold basis-8/12">Title</div>
            <div className="text-sm font-semibold basis-4/12">Progress</div>
          </div>
        )}

        {data.UserContentItems.map(item => {
          const hydratedItem = hydrateContent(i18n, item);
          if (hydratedItem.isCompleted) {
            return null;
          }
          return (
            <>
              {gridViewActive ? (
                <DisplayGridView key={item.id} item={hydratedItem} />
              ) : (
                <div key={item.id} className="odd:bg-slate-50 even:bg-white">
                  <DisplayListView key={item.id} item={hydratedItem} />
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};
export default LoadUserLearning;
