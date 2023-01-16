import React from 'react';
import { HydratedContentItem } from '@thoughtindustries/content';
import defaultLogo from '../../Assets/logoImage';

import { usePageContext } from '../../../renderer/usePageContext';
interface ContentUiProps {
  item: HydratedContentItem;
  index?: number;
}

const LearnerAccessGridView = ({ item }: ContentUiProps) => {
  const { appearance } = usePageContext();
  const companyLogo = appearance?.logoAsset ? appearance?.logoAsset : defaultLogo;

  return (
    <div className="m-8">
      <div className="flex justify-center border rounded-t-md">
        <div>
          {/* course image */}
          <img src={companyLogo} className="p-12 max-w-12" />
        </div>
      </div>
      {/* card content */}
      <div className="p-8 border rounded-b-md space-y-4">
        {/* course title */}
        <div className="text-lg font-semibold">{item.title}</div>
        {/* course info */}
        <div className="text-gray-500 text-sm font-semibold">
          {item.displayDate ? (
            <div className="flex flex-row">
              <div>{item.contentTypeLabel}</div>
              <div>|</div>
              <div>{item.displayDate}</div>
            </div>
          ) : (
            <div>{item.contentTypeLabel}</div>
          )}
        </div>
        <div className={item.description ? 'py-4' : ''}>{item.description}</div>
        <hr className=""></hr>
        <a href={item.href} className="flex justify-end text-blue-700">
          <div className="">{item.callToAction}</div>
        </a>
      </div>
    </div>
  );
};

export default LearnerAccessGridView;
