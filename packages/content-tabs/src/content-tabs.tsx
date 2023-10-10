import React, { createRef, useState } from 'react';
import { ContentTabsProps, TabType } from './types';
import { useOnClickOutside } from '@thoughtindustries/hooks';
import { ArrowDownIcon, CheckIcon } from './icons';
import { useGetCourseDataQuery } from './graphql/queries/GetCourseData.generated';
import { FreeText } from './components/free-text';
import { Instructor } from './components/instructor';
import { ProductsFragmentFragment, InstructorsFragmentFragment } from './graphql';
import { Product } from './components/product';
import { Testimonial } from './components/testimonial';
import { useGetLearningPathDataQuery } from './graphql/queries/GetLearningPathData.generated';
import { ContentKind } from '@thoughtindustries/content/src/graphql/global-types';

const ContentTabs = (props: ContentTabsProps): JSX.Element => {
  const { tabsView, slug, contentKind } = props;

  const handleFetchData = () => {
    function LearningPathContentKind() {
      const { data, error } = useGetLearningPathDataQuery({
        variables: { slug: slug }
      });
      if (error) {
        console.log(error);
      }

      return data && data.LearningPathBySlug;
    }

    function CourseGroupContentKind() {
      const { data: data, error } = useGetCourseDataQuery({
        variables: { slug: slug }
      });
      if (error) {
        console.log(error);
      }

      return data && data.CourseGroupBySlug;
    }

    if (contentKind === ContentKind.Course) {
      const data = CourseGroupContentKind();

      if (data) {
        return {
          id: data.id,
          tabs: data.tabs
        };
      }
    }

    const data = LearningPathContentKind();

    if (data) {
      return {
        id: data.id,
        tabs: data.tabs?.tabs
      };
    }

    return { id: undefined, tabs: [] };
  };

  const tabsToRender = handleFetchData().tabs ?? [];
  const wrapperRef = createRef<HTMLUListElement>();
  const [selectedTab, setSelectedTab] = useState(tabsToRender[0]);
  const [mobileSelect, setMobileSelect] = useState(false);

  useOnClickOutside(wrapperRef, () => setMobileSelect(false));

  const handleTabContentToRender = (
    type: TabType,
    content: {
      __typename?: 'CourseTab' | 'LearningPathTab' | undefined;
      id?: string | undefined;
      label?: string | undefined;
      body?: string;
      tabType?: string | undefined;
      instructors?: InstructorsFragmentFragment[];
      products?: ProductsFragmentFragment[];
    }
  ) => {
    const courseId = handleFetchData().id;

    const componentsToRender = {
      'free-text': <FreeText body={content.body} />,
      instructors: <Instructor instructors={content.instructors} />,
      testimonials: <Testimonial id={courseId || ''} />,
      products: <Product products={content.products} />
    };

    return componentsToRender[type];
  };

  return (
    <>
      {tabsToRender.length > 0 && (
        <div>
          {tabsView && (
            <>
              <ul
                className="gap-x-6 border-b border-gray-300 px-8 sm:flex hidden pt-4"
                role="tablist"
              >
                {tabsToRender.map(headTab => (
                  <li
                    key={headTab.id}
                    className={`pb-4 px-2 border-b-2 ${
                      selectedTab.id === headTab.id ? 'border-blue-500' : 'border-transparent'
                    } mb-[-1px] cursor-pointer`}
                    onClick={() => setSelectedTab(headTab)}
                    tabIndex={0}
                    role="tab"
                    aria-selected={selectedTab.id === headTab.id}
                  >
                    <span
                      className={`font-medium text-sm leading-normal ${
                        selectedTab.id === headTab.id ? 'text-blue-500' : ''
                      }`}
                    >
                      {headTab.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="block sm:hidden relative">
                <h4
                  className="font-normal text-base leading-6 border border-gray-300 px-3 py-2 rounded bg-gray-50 flex items-center justify-between"
                  onClick={() => setMobileSelect(true)}
                >
                  <span>{selectedTab.label}</span>
                  <span className="mt-[2px]">
                    <ArrowDownIcon />
                  </span>
                </h4>

                <ul
                  className={`${
                    mobileSelect ? 'visible' : 'hidden'
                  } absolute bg-gray-50 w-full mt-1 rounded border border-gray-300 pt-2 pb-0 px-2`}
                  ref={wrapperRef}
                >
                  {tabsToRender.map(headTab => (
                    <li
                      key={headTab.id}
                      className="pb-3 px-2 flex items-center justify-between cursor-pointer"
                      onClick={() => {
                        setSelectedTab(headTab);
                        setMobileSelect(false);
                      }}
                    >
                      <span
                        className={`text-sm leading-normal ${
                          selectedTab.id === headTab.id ? 'font-semibold' : 'font-normal'
                        }`}
                      >
                        {headTab.label}
                      </span>
                      {selectedTab.id === headTab.id && <CheckIcon />}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          <div className="px-8 pt-8">
            {tabsView ? (
              <>
                {tabsToRender.map(content => {
                  if (selectedTab.id === content.id) {
                    return (
                      <React.Fragment key={content.id}>
                        {content.tabType &&
                          handleTabContentToRender(content.tabType as TabType, content)}
                      </React.Fragment>
                    );
                  }
                })}
              </>
            ) : (
              <>
                {tabsToRender.map(content => {
                  return (
                    <div key={content.id} className="mb-10 pb-10 pt-10 border-b border-gray-300">
                      {handleTabContentToRender(content.tabType as TabType, content)}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

ContentTabs.displayName = 'Tab';

export default ContentTabs;
