import React, { useCallback, useState } from 'react';

import { LoadedComponentProps } from '../types';
import { RightArrowtIcon, DownArrowIcon, HelpIcon } from '../Assets/Icons';
import {
  useUserContentItemsQuery,
  useUserCourseProgressQuery,
  useUserCourseCompletionProgressQuery,
  useUserCourseCollaborationsQuery,
  useUserCourseAwardCountsQuery,
  LoadingDots,
  GlobalTypes,
  hydrateContent,
  HydratedContentItem
} from '@thoughtindustries/content';
import { ArchiveButton } from './MutationCallingButtons';
import { Tooltip } from '../Assets/Tooltips';
import { formatTime } from '@thoughtindustries/content';
import { useTranslation } from 'react-i18next';
import useLearnerAccess from '../use-context';

const LoadMyLearningItems = ({ query, kind, sort }: LoadedComponentProps): JSX.Element => {
  const { data, loading, error } = useUserContentItemsQuery({
    variables: {
      query,
      kind,
      sort
    },
    fetchPolicy: 'network-only',
    ssr: false
  });

  const { i18n } = useTranslation();

  const ExpandedContent = ({ item }: { item: HydratedContentItem }): JSX.Element => {
    const { data: courseCompletion } = useUserCourseCompletionProgressQuery({
      variables: { id: '' }
    });
    const { refetchContentGroups } = useLearnerAccess();
    const onArchiveSuccessAsync = useCallback(async () => {
      // defer refetch of content groups to allow time for server
      // to reflect the new count
      await new Promise(res => setTimeout(res, 100));
      await refetchContentGroups();
    }, [refetchContentGroups]);

    courseCompletion && console.log('courseCompletion', courseCompletion);
    // const { data: courseProgress } = useUserCourseProgressQuery({
    //   variables: {
    //     id: ''
    //   }
    // });

    // const { data: courseCollaborations } = useUserCourseCollaborationsQuery({
    //   variables: {
    //     courseId: ''
    //   }
    // });

    // const { data: awaedCounts } = useUserCourseAwardCountsQuery({
    //   variables: {
    //     courseId: ''
    //   }
    // });

    return (
      <div
        className={item.asset ? 'grid grid-rows-2 mx-0 my-4 relative' : 'grid mx-0 my-4 relative'}
      >
        <div className={item.asset && 'grid grid-cols-3 row-span-2'}>
          {item.asset && (
            <div className="px-4">
              <img
                className="ember-view"
                src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_600,h_288/v1/course-uploads/3a131ac3-1a74-420d-b4da-ae10b18b2c68/n2h0yafsqsbq-British_Isles.jpg"
                alt=""
              />
            </div>
          )}

          <div className="medium-8 col-span-2 px-4">
            <div className="dashboard-access-list-item__description text-xs mt-0 text-black-light">
              <p>{item.description}</p>
            </div>
            <div className="user-engagement-stats">
              <ul className="my-0 -mx-3 p-0 grid grid-cols-4">
                <li className="ember-view user-engagement-stat user-engagement-stat--hours relative px-2.5 pb-5 block float-left h-auto pt-0">
                  <div className="user-engagement-stat__label-container flex before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px">
                    <div className="user-engagement-stat__label user-engagement-stat__label--with-hint h-8 text-sm text-ellipsis text-gray-mid overflow-hidden text-center uppercase">
                      Total Hours
                    </div>
                    <div className="user-engagement-stat__label-hint absolute right-0">
                      <Tooltip
                        description="This information is updated and verified as part of a nightly process"
                        childComp={<HelpIcon />}
                      />
                    </div>
                  </div>

                  <div
                    className="user-engagement-stat__value-container user-engagement-stat__value-container--huge text-3xl mt-1 text-center leading-10"
                    data-bindattr-7987="7987"
                  >
                    <i className="icon-stopwatch" data-bindattr-7989="7989"></i>
                    <span className="user-engagement-stat__value">0.0</span>
                  </div>
                </li>

                <li className="ember-view user-engagement-stat user-engagement-stat--collaborations px-2.5 pb-5 block float-left h-auto pt-0">
                  <div>
                    <div className="user-engagement-stat__label" data-bindattr-7994="7994">
                      Collaborations
                    </div>
                  </div>

                  <div
                    className="user-engagement-stat__value-container user-engagement-stat__value-container--huge"
                    data-bindattr-7996="7996"
                  >
                    <i className="icon-chat" data-bindattr-7998="7998"></i>
                    <span className="user-engagement-stat__value"></span>
                  </div>
                </li>
                <li className="ember-view user-engagement-stat user-engagement-stat--percent-viewed px-2.5 pb-5 block float-left h-auto pt-0">
                  <div className="user-engagement-stat__label-container">
                    <div className="user-engagement-stat__label" data-bindattr-8003="8003">
                      Content Viewed
                    </div>
                  </div>

                  <div className="user-engagement-stat__value-container user-engagement-stat__value-container--huge">
                    <i className="icon-view" data-bindattr-8007="8007"></i>
                    <span className="user-engagement-stat__value">100</span>

                    <span className="user-engagement-stat__value--percent">%</span>
                  </div>
                </li>
                {courseCompletion && (
                  <li className="ember-view user-engagement-stat user-engagement-stat--assessments px-2.5 pb-5 block float-left h-auto pt-0">
                    <div className="user-engagement-stat__label-container">
                      <div className="user-engagement-stat__label" data-bindattr-8014="8014">
                        Required Pages Viewed
                      </div>
                    </div>

                    <div className="user-engagement-stat__value-container">
                      <i className="icon-view" data-bindattr-8018="8018"></i>
                      <span className="user-engagement-stat__value">1</span>
                      <span className="user-engagement-stat__value--muted"></span>
                    </div>
                  </li>
                )}

                <li className="ember-view user-engagement-stat user-engagement-stat--percent-complete px-2.5 pb-5 block float-left h-auto pt-0">
                  <div className="user-engagement-stat__label-container flex before:content-[''] before:bg-gray-light before:h-4/5 before:absolute before:top-0 before:right-0 before:w-px">
                    <div
                      className="user-engagement-stat__label h-8 text-sm text-ellipsis text-gray-mid overflow-hidden text-center uppercase"
                      data-bindattr-8023="8023"
                    >
                      Complete
                    </div>
                  </div>
                  <div
                    className="user-engagement-stat__value-container user-engagement-stat__value-container--huge"
                    data-bindattr-8025="8025"
                  >
                    <span className="user-engagement-stat__value">100</span>

                    <span className="user-engagement-stat__value--percent">%</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="user-engagement-progress-bar ">
              <div
                id="ember8032"
                className="ember-view nice round progress colorized rounded-[999px] bg-gray-light border-white border-solid border h-4 mb-2 p-px"
              >
                <span className="block h-full w-full rounded-[999px] bg-gradient-to-r from-accent-colorized-cyan to-accent-colorized-lime ease-in-out duration-200 transition-width"></span>
              </div>
            </div>
          </div>
        </div>
        <div className=" archive mt-2 row-end-4 text-black-light relative">
          {item.availabilityStatus !== 'completed' && (
            <ArchiveButton item={item} onArchiveSuccessAsync={onArchiveSuccessAsync} />
          )}
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
                {item.kind !== 'inPersonEventCourse' ? (
                  showContent ? (
                    <DownArrowIcon />
                  ) : (
                    <RightArrowtIcon />
                  )
                ) : (
                  ''
                )}
                <span className="dashboard-access-list-item-expander__title text-gray-mid">
                  {item.title && item.title}
                </span>
              </button>
            </div>

            <div className="col-span-2 text-gray-mid">
              {item.displayDate &&
                (item.kind === 'inPersonEventCourse' || item.kind === 'webinar') &&
                formatTime(item.displayDate, undefined, 'MMM D, YYYY h A')}
            </div>

            <div className="col-span-3 text-gray-mid relative">
              <strong className="">{item.contentTypeLabel && item.contentTypeLabel}</strong>
              {'  '}
              {item.authors && item.authors.length > 0 && (
                <div className="border-gray-mid border-solid border-l-2 h-3.5 inline my-0 mr-1 ml-px"></div>
              )}
              <span>
                {' '}
                {'  '} {item.authors}
              </span>
              <p className="catalog-list-item__source">{item.source && item.source}</p>
            </div>

            <div className="col-start-11 col-span-2 text-right">
              <button
                onClick={() => {
                  window.location.href = window.location.hostname + '/learn/course/' + item.slug;
                }}
                className="bg-active-blue text-white rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
              >
                {item.availabilityStatus == 'completed'
                  ? 'View ' + item.contentTypeLabel
                  : item.availabilityStatus == 'started'
                  ? 'Continue'
                  : 'Start ' + item.contentTypeLabel}
              </button>
            </div>
          </div>
          {showContent && item.kind !== 'inPersonEventCourse' ? (
            <ExpandedContent item={item} />
          ) : (
            ''
          )}
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
export default LoadMyLearningItems;
