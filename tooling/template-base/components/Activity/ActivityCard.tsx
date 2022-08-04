import React from 'react';
import image from '../../renderer/activity.png';

const ActivityCard = (props: { heading: string; lessonType: string }) => {
  return (
    <div className="border rounded-md">
      {/* image */}
      <img src={image} className="w-full" />
      <div className="p-6 space-y-5">
        {/* heading */}
        <div className="font-semibold font-primary">{props.heading}</div>
        <div className="text-sm font-semibold font-primary text-gray-500">{props.lessonType}</div>
        {/* progression bar */}
        <div className="space-y-2">
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-1/2" />
          </div>
          <div className="flex justify-between d">
            <div className="text-xs font-semibold font-primary text-gray-500">25% Complete</div>
            <div className="text-xs font-semibold text-blue-800 font-primary">Continue</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
