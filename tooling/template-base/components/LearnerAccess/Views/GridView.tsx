import React from 'react';
import { HydratedContentItem } from '@thoughtindustries/content';

import { t } from 'i18next';
import clsx from 'clsx';
import { usePageContext } from '../../../renderer/usePageContext';
interface ContentUiProps {
  item: HydratedContentItem;
  index?: number;
}

const LearnerAccessGridView = ({ item }: ContentUiProps) => {
  const { appearance } = usePageContext();
  const assetImage = item.asset ? item.asset : appearance?.logoAsset;
  return (
    <div className="m-8">
      {/* course image */}
      <div>
        <img
          src={assetImage}
          className={clsx(
            item.description && 'w-full rounded-t-md',
            !item.asset && 'p-10 w-full border rounded-t-md'
          )}
        />
      </div>

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
          <div className="">{item.callToAction}</div>
        </a>
      </div>
    </div>
  );
};

export default LearnerAccessGridView;
