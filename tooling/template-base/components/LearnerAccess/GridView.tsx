import React from 'react';
import { HydratedContentItem } from '@thoughtindustries/content';
import dashboardDefault from '../../renderer/dashboardDefault.png';

interface ContentUiProps {
  item: HydratedContentItem;
  index?: number;
}

const LearnerAccessGridView = ({ item }: ContentUiProps) => {
  return (
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
        <a href={item.href} className="flex justify-end text-blue-700">
          <div className="">Continue</div>
        </a>
      </div>
    </div>
  );
};

export default LearnerAccessGridView;
