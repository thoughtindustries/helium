import React, { useCallback, useState } from 'react';

import { LoadedComponentProps } from '../types';
import {
  RightArrowIcon,
  DownArrowIcon,
  HelpIcon,
  StopwatchIcon,
  ChatIcon,
  ViewIcon
} from '../Assets/Icons';
import {
  useUserContentItemsQuery,
  useUserCourseProgressQuery,
  useUserCourseCompletionProgressQuery,
  useUserCourseCollaborationsQuery,
  LoadingDots,
  hydrateContent,
  HydratedContentItem,
  formatTime
} from '@thoughtindustries/content';
import { ArchiveButton } from './MutationCallingButtons';
import { Tooltip } from '../Assets/Tooltips';
import { useTranslation } from 'react-i18next';
import useLearnerAccess from '../use-context';

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

  const ExpandedContent = ({ item }: { item: HydratedContentItem }): JSX.Element => {
    const { data } = useUserCourseCompletionProgressQuery({
      variables: { id: item.id }
    });

    const courseCriteria = data?.UserCourseCompletionProgress;

    const { data: useUserCourseProgressData, error: UserCourseProgressError } =
      useUserCourseProgressQuery({
        variables: { id: item.id }
      });

    const courseProgress = useUserCourseProgressData?.UserCourseProgress;

    const { data: courseCollaborationsData } = useUserCourseCollaborationsQuery({
      variables: { courseId: item.id }
    });

    const courseCollaborations = courseCollaborationsData?.UserCourseCollaborations;

    const { refetchContentGroups } = useLearnerAccess();
    const onArchiveSuccessAsync = useCallback(async () => {
      // defer refetch of content groups to allow time for server
      // to reflect the new count
      await new Promise(res => setTimeout(res, 100));
      await refetchContentGroups();
    }, [refetchContentGroups]);

    return (
      <div
        className={item.asset ? 'grid grid-rows-2 mx-0 my-4 relative' : 'grid mx-0 my-4 relative'}
      >
        <div className={item.asset && 'grid grid-cols-3 row-span-2'}>
          {item.asset && (
            <div className="px-4">
              <img src={item.asset} alt="" />
            </div>
          )}

          <div className="medium-8 col-span-2 px-4">
            <div className="dashboard-access-list-item__description text-xs mt-0 text-black-light">
              <p className="text-sm font-normal mb-4">{item.description}</p>
            </div>
            <div className="user-engagement-stats">
              <ul className="my-0 -mx-3 p-0 grid grid-cols-4 text-xs text-gray-mid font-primary">
                {courseProgress && (
                  <li className="text-accent-colorized-cyan user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0">
                    <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px last:content-none">
                      <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                        {t('dashboard.hours').toUpperCase()}
                      </div>
                      <div className="user-engagement-stat__label-hint absolute right-0">
                        <Tooltip
                          description={t('dashboard.nightly-hint')}
                          childComp={<HelpIcon />}
                        />
                      </div>
                    </div>

                    <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
                      <i className="icon-stopwatch"></i>
                      <span className="user-engagement-stat__value">
                        <StopwatchIcon />
                        {((courseProgress.totalTime ? courseProgress.totalTime : 0) / 3600).toFixed(
                          1
                        )}
                      </span>
                    </div>
                  </li>
                )}

                {courseCollaborations && (
                  <li className="user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0">
                    <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px last:content-none">
                      <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                        {t('dashboard.collaborations').toUpperCase()}
                      </div>
                    </div>

                    <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
                      <i className="icon-stopwatch"></i>
                      <span className="user-engagement-stat__value">
                        <ChatIcon />
                        {courseCollaborations}
                      </span>
                    </div>
                  </li>
                )}
                <li className="user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0">
                  <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px last:content-none">
                    <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                      {t('completion.course-percent-viewed').toUpperCase()}
                    </div>
                  </div>

                  <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
                    <i className="icon-stopwatch"></i>
                    <span className="user-engagement-stat__value ">
                      <ViewIcon />
                      {/*  courseCriteria percent   */}
                      <span className="text-xs leading-8 align-top">%</span>
                    </span>
                  </div>
                </li>
                {/*  courseCriteriacourse section  */}
                <li className="user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0 text-[#b6259e]">
                  <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px before:last:content-none">
                    <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                      {t('dashboard.completed').toUpperCase()}
                    </div>
                  </div>

                  <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
                    <i className="icon-stopwatch"></i>
                    <span className="user-engagement-stat__value">
                      {courseProgress?.percentComplete}
                      <span className="text-xs leading-8 align-top">%</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="user-engagement-progress-bar ">
              <div className="nice round progress colorized rounded-[999px] bg-gray-light border-white border-solid border h-4 mb-2 p-px">
                <span className="block h-full w-full rounded-[999px] bg-gradient-to-r from-accent-colorized-cyan to-accent-colorized-lime ease-in-out duration-200 transition-width"></span>
              </div>
            </div>
          </div>
        </div>
        <div className=" archive mt-2 row-end-4 text-black-light relative">
          <ArchiveButton item={item} onArchiveSuccessAsync={onArchiveSuccessAsync} />
        </div>
      </div>
    );
  };

  interface ContentUiProps {
    item: HydratedContentItem;
    index?: number;
  }

  const ContentUi = ({ item }: ContentUiProps) => {
    const [showContent, setShowContent] = useState<boolean>(false);
    return (
      <div
        key={item.id}
        className="border-solid p-4 text-black-light border-gray-light px-4 py-[0.5rem] even:bg-white-mid border-b last:border-b-0"
      >
        <div className="my-0 mx-auto max-w-full w-full">
          <div className="grid items-center grid-cols-12 gap-4">
            <div className="col-span-4">
              <button
                style={{ cursor: item.kind == 'inPersonEventCourse' ? 'default' : 'pointer' }}
                className="btn btn--link btn--inherit-font dashboard-access-list-item-expander text-left"
                onClick={() => setShowContent(prev => !prev)}
              >
                {item.kind !== 'inPersonEventCourse' &&
                  (showContent ? <DownArrowIcon /> : <RightArrowIcon />)}
                <span className="dashboard-access-list-item-expander__title text-gray-mid">
                  {item.title}
                </span>
              </button>
            </div>

            <div className="col-span-2 text-gray-mid">
              {item.displayDate &&
                (item.kind === 'inPersonEventCourse' || item.kind === 'webinar') &&
                formatTime(item.displayDate, undefined, 'MMM D, YYYY h A')}
            </div>

            <div className="col-span-3 text-gray-mid relative">
              <strong className="">{item.contentTypeLabel}</strong>
              {'  '}
              {item.authors && item.authors.length > 0 && (
                <div className="border-gray-mid border-solid border-l-2 h-3.5 inline my-0 mr-1 ml-px"></div>
              )}
              <span>
                {' '}
                {'  '} {item.authors}
              </span>
              <p className="catalog-list-item__source">{item.source}</p>
            </div>

            <div className="col-start-11 col-span-2 text-right">
              <button
                onClick={() => {
                  window.location.href = window.location.hostname + '/learn/course/' + item.slug;
                }}
                className="bg-active-blue text-white rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
              >
                {item.callToAction}
              </button>
            </div>
          </div>
          {showContent && <ExpandedContent item={item} />}
        </div>
      </div>
    );
  };

  if (loading) return <LoadingDots />;

  if (error) return <>{error.message}</>;

  if (!data || !data.UserContentItems) return <></>;

  return (
    <section>
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
