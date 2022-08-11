import React, { useCallback, useState } from 'react';

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

const LoadUserLearning = ({ query, kind, sort }: LoadedComponentProps): JSX.Element => {
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

  const ContentUi = ({ item }: ContentUiProps) => {
    const [showContent, setShowContent] = useState<boolean>(false);
    return (
      // {/* course card */}
      <div className="w-[404px] m-8">
        {/* course image */}
        <div>
          <img src={item.asset} className={item.description ? 'w-full rounded-t-md' : ''} />
        </div>
        {/* card content */}
        <div className="pl-8 py-8 border rounded-b-md">
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

  return (
    <section className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.UserContentItems.map(item => {
        const hydratedItem = hydrateContent(i18n, item);
        if (hydratedItem.isCompleted) {
          return null;
        }
        return <ContentUi key={item.id} item={hydratedItem} />;
      })}
    </section>
  );
};
export default LoadUserLearning;
