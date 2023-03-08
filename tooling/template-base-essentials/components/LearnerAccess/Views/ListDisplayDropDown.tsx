import {
  HydratedContentItem,
  useUserCourseCompletionProgressQuery
} from '@thoughtindustries/content';
import clsx from 'clsx';
import React from 'react';
interface ContentUiProps {
  item: HydratedContentItem;
  index?: number;
}

const LearnerAccessListDisplayDropDown = ({ item }: ContentUiProps) => {
  const { data } = useUserCourseCompletionProgressQuery({
    variables: {
      id: item.id
    },
    fetchPolicy: 'network-only'
  });
  return (
    <>
      <hr className="bg-gray-500"></hr>
      <div
        className={clsx(
          'flex flex-col bg-slate-50 space-y-6 border-l-4 border-blue-700',
          item.description ? 'p-6' : 'px-6 pt-6'
        )}
      >
        {/* article and duration */}
        <div className="flex flex-row">
          <div className="py-1 px-3 rounded-full bg-green-200">
            <div className="text-sm font-semibold">{item.contentTypeLabel}</div>
          </div>
        </div>
        {/* course information */}
        <div className="flex flex-row justify-between gap-4">
          {data?.UserCourseCompletionProgress?.map(
            item =>
              item?.type !== 'coursePercentViewed' && (
                <div className="flex flex-grow pl-6 py-6 bg-white rounded-md">
                  <div className="flex flex-col">
                    <div className="text-sm text-gray-500">
                      {item?.type?.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1')}
                    </div>
                    <div className="text-3xl font-bold pt-2">
                      {item.required && item.completed ? (
                        <>
                          {item.completed?.length}/{item.required?.length}
                        </>
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        {/* course description */}
        {item.description && <div className="text-sm font-semibold">{item.description}</div>}
      </div>
    </>
  );
};

export default LearnerAccessListDisplayDropDown;
