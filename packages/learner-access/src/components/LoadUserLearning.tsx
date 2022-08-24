import React, { useCallback, useState } from 'react';

import { LoadedComponentProps } from '../types';
import {
  RightArrowIcon,
  DownArrowIcon,
  HelpIcon,
  StopwatchIcon,
  ChatIcon,
  ViewIcon,
  FileIcon,
  CheckIcon,
  AwardCountIconGenerator
} from '../Assets/Icons';
import {
  useUserContentItemsQuery,
  useUserCourseProgressQuery,
  useUserCourseCompletionProgressQuery,
  useUserCourseCollaborationsQuery,
  useUserCourseAwardCountsQuery,
  LoadingDots,
  hydrateContent,
  HydratedContentItem,
  formatTime,
  useUserCourseByIdQuery
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

  const AwardCountsContent = (courseId: string) => {
    const { data, loading, error } = useUserCourseAwardCountsQuery({
      variables: {
        courseId
      }
    });

    const awardCount = data?.UserCourseAwardCounts;

    return awardCount?.map((awardCount, index) => (
      <li
        key={awardCount.id}
        className="user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0"
      >
        <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px last:content-none">
          <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
            {awardCount.label}
          </div>
          {index == 0 && (
            <div
              className="user-engagement-stat__label-hint absolute"
              style={{ top: '-.8rem', right: '-2.2rem' }}
            >
              <Tooltip description={t('dashboard.nightly-hint')} childComp={<HelpIcon />} />
            </div>
          )}
        </div>

        <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
          <span className="user-engagement-stat__value">
            {AwardCountIconGenerator(awardCount.icon)}
            <span className="user-engagement-stat__value">{awardCount.count}</span>
          </span>
        </div>
      </li>
    ));
  };

  const ExpandedContent = ({ item }: { item: HydratedContentItem }): JSX.Element => {
    const { data: UserCourseCompletionProgressQuery } = useUserCourseCompletionProgressQuery({
      variables: { id: item.id }
    });
    const courseCriteriaProgress = UserCourseCompletionProgressQuery?.UserCourseCompletionProgress;

    const { data: useUserCourseProgressData } = useUserCourseProgressQuery({
      variables: { id: item.id }
    });

    const courseProgress = useUserCourseProgressData?.UserCourseProgress;

    const { data: courseByIdData } = useUserCourseByIdQuery({
      variables: { id: item.id }
    });

    const courseData = courseByIdData?.UserCourseById;
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

    const calcProgressBar = () =>
      courseProgress?.percentComplete ? `[${courseProgress?.percentComplete}%]` : '0%';

    const criteriaProgressByType = courseCriteriaProgress?.reduce((grouped: any, progress) => {
      if (progress.type != undefined) grouped[progress.type] = progress;
      return grouped;
    }, {});

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
                  <li className="user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0">
                    <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px last:content-none">
                      <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                        {t('dashboard.hours').toUpperCase()}
                      </div>
                      <div
                        className="user-engagement-stat__label-hint absolute"
                        style={{ top: '-.8rem', right: '-2.2rem' }}
                      >
                        <Tooltip
                          description={t('dashboard.nightly-hint')}
                          childComp={<HelpIcon />}
                        />
                      </div>
                    </div>

                    <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
                      <span className="user-engagement-stat__value">
                        <StopwatchIcon />
                        {((courseProgress.totalTime ? courseProgress.totalTime : 0) / 3600).toFixed(
                          1
                        )}
                      </span>
                    </div>
                  </li>
                )}

                {courseData?.discussionsEnabled && (
                  <li className="user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0">
                    <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px last:content-none">
                      <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                        {t('dashboard.collaborations').toUpperCase()}
                      </div>
                    </div>

                    <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
                      <span className="user-engagement-stat__value">
                        <ChatIcon />
                        {courseCollaborations}
                      </span>
                    </div>
                  </li>
                )}
                {criteriaProgressByType?.coursePercentViewed && (
                  <li className="user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0">
                    <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px last:content-none">
                      <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                        {t('completion.course-percent-viewed').toUpperCase()}
                      </div>
                    </div>

                    <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
                      <span className="user-engagement-stat__value ">
                        <ViewIcon />
                        {criteriaProgressByType?.coursePercentViewed.percent}
                        <span className="text-xs leading-8 align-top">%</span>
                      </span>
                    </div>
                  </li>
                )}

                {criteriaProgressByType?.courseAssignmentComplete && (
                  <li className="user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0">
                    <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px last:content-none">
                      <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                        {t('dashboard.assignments').toUpperCase()}
                      </div>
                    </div>

                    <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
                      <span className="user-engagement-stat__value ">
                        <FileIcon />
                        <span className="user-engagement-stat__value">{`${criteriaProgressByType?.courseAssignmentComplete?.completed}`}</span>
                        <span className="user-engagement-stat__value--muted">
                          / {`${criteriaProgressByType?.courseAssignmentComplete?.required.length}`}
                        </span>
                      </span>
                    </div>
                  </li>
                )}
                {criteriaProgressByType?.courseAssessmentPassed && (
                  <li className="user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0">
                    <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px last:content-none">
                      <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                        {t('completion.course-assessments-passed').toUpperCase()}
                      </div>
                    </div>

                    <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
                      <span className="user-engagement-stat__value ">
                        <CheckIcon />
                        <span className="user-engagement-stat__value">{`${criteriaProgressByType?.courseAssessmentPassed?.completed.length}`}</span>
                        <span className="user-engagement-stat__value--muted">
                          / {`${criteriaProgressByType?.courseAssessmentPassed?.required.length}`}
                        </span>
                      </span>
                    </div>
                  </li>
                )}
                {criteriaProgressByType?.courseTopicViewed && (
                  <li className="user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0">
                    <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px last:content-none">
                      <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                        {t('completion.course-topic-viewed').toUpperCase()}
                      </div>
                    </div>

                    <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
                      <span className="user-engagement-stat__value ">
                        <ViewIcon />
                        <span className="text-xs leading-8 align-top">{`${criteriaProgressByType?.courseTopicViewed?.completed.length} / ${criteriaProgressByType?.courseTopicViewed?.required.length}`}</span>
                      </span>
                    </div>
                  </li>
                )}
                {criteriaProgressByType?.videoPercentViewed && (
                  <li className="user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0">
                    <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px last:content-none">
                      <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                        {t('completion.course-video-viewed').toUpperCase()}
                      </div>
                    </div>

                    <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
                      <span className="user-engagement-stat__value ">
                        <ViewIcon />
                        <span className="text-xs leading-8 align-top">{`${criteriaProgressByType?.videoPercentViewed?.completed.length} / ${criteriaProgressByType?.videoPercentViewed?.required.length}`}</span>
                      </span>
                    </div>
                  </li>
                )}
                {courseData && (
                  <li className="user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0 text-[#b6259e]">
                    <div className="user-engagement-stat__label-container before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px last:content-none">
                      <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8  text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                        {t('dashboard.completed').toUpperCase()}
                      </div>
                    </div>

                    <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-2xl mt-1 text-center leading-10">
                      <span className="user-engagement-stat__value">
                        {courseProgress?.percentComplete}
                        <span className="text-xs leading-8 align-top">%</span>
                      </span>
                    </div>
                  </li>
                )}
                {AwardCountsContent(item.id)}
              </ul>
            </div>

            {courseData && (
              <div className="user-engagement-progress-bar ">
                <div className="nice round progress colorized rounded-[999px] bg-gray-light border-white border-solid border h-4 mb-2 p-px">
                  <span
                    className="block h-full rounded-[999px] bg-gradient-to-r from-accent-colorized-cyan to-accent-colorized-lime ease-in-out duration-200 transition-width"
                    style={{ width: calcProgressBar() }}
                  ></span>
                </div>
              </div>
            )}
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
        className="p-4 text-black-light border-gray-light px-4 py-[0.5rem] even:bg-white-mid border-b last:border-b-0"
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
              <div className="flex flex-col">
                {item.currentUserMayReschedule && (
                  <a className="hover:text-hover" href={`/learn/reschedule/${item.title}`}>
                    <small>
                      <span>{t('reschedule-course')}</span>
                    </small>
                  </a>
                )}
                {item.expiresAt && (
                  <small>
                    <span className="text-gray-mid">{t('access-expires')}</span>{' '}
                  </small>
                )}
              </div>
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
