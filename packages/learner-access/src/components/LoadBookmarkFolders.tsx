import React, { useState } from 'react';
import { useUserBookmarksQuery, LoadingDots } from '@thoughtindustries/content';
import { MoveIcon, RightArrowtIcon, DownArrowIcon, WriteIcon } from '../Assets/Icons';
const LoadBookmarks = (): JSX.Element => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const { data, loading, error }: any = useUserBookmarksQuery({
    variables: {}
  });

  const handleClick = () => {
    setShowContent(!showContent);
  };
  const expandedContent = (
    <div className="mx-0 my-6 relative">
      <div className="row">
        <div className="float-left relative">
          <div className="dashboard-access-list-item__description">
            <p className="leading-6 font-normal mb-2">
              Section 1, Lesson 1, Page 1
              <button className="btn btn--link btn--inherit-font btn--no-margin">
                (<span>Edit</span>)
              </button>
            </p>
            <div>
              <button className="bg-none rounded-none h-auto p-0 shadow-none text-black hover:text-hover">
                <span>Remove Bookmark</span>
              </button>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
  console.log('data from child', data);
  if (error) return error;
  return (
    <>
      {loading ? (
        <LoadingDots />
      ) : (
        <div className="mx-0 my-4 relative">
          <div className="row-span-2">
            <div className="float-left px-4 relative">
              <ul className="w-[max-content] list-none m-0 p-0">
                <li className="border-gray-light border-solid border-b flex m-0 max-w-none w-auto">
                  <div className="w-1/12 float-left mr-0 px-2 pt-3 relative">
                    <MoveIcon />
                  </div>

                  <button
                    className="w-full flex border-gray-mid leading-5 max-w-7xl grow-[2] ease-in-out transition font-sans duration-200 rounded-sm cursor-pointer items-center justify-between float-left font-normal text-sm mx-0 mt-0 py-2 px-5 relative text-center no-underline"
                    title="My Bookmarks"
                  >
                    <span className="font-normal text-base pr-4 not-italic truncate text-active-blue">
                      My Bookmarks
                    </span>
                    <span className="text-white bg-active-blue rounded-[200px] border-gray-light border-solid border font-semibold h-5 leading-5 px-1 text-center">
                      1
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="flex flex-col pl-4">
              <div className="bookmark-folder pb-5">
                <span className="bookmark-folder-name pr-7">My Bookmarks</span>
                <span>
                  <button className="btn btn--link btn--inherit-font btn--no-margin">
                    {' '}
                    <WriteIcon />
                  </button>
                </span>
              </div>
              <div className="dashboard-access-list-item border-gray-light text-black-light py-3 px-4 border-b-0 bg-white-mid">
                <div className="row grid items-center grid-cols-12 gap-4">
                  <div className="medium-7 columns col-span-6">
                    <button onClick={handleClick} className="inline-block">
                      {showContent ? <DownArrowIcon /> : <RightArrowtIcon />}
                      <span className="dashboard-access-list-item-expander__title">
                        Lord of the Bugs
                      </span>
                    </button>
                    {!showContent ? (
                      <div className="dashboard-access-list-item__description">
                        <p className="bookmark-note pt-2 pl-8 truncate w-full">
                          Section 1, Lesson 1, Page 1
                        </p>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="medium-3 columns col-span-3">
                    <div className="catalog-list-item__info">
                      <strong>Course</strong>
                    </div>
                  </div>
                  <div className="medium-2 columns col-span-2 flex justify-end">
                    <a
                      href="/learn/topic/61285240-b509-422c-a4b2-f4400250922a/redirect"
                      className="bg-active-blue text-white rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
                    >
                      <span id="i18n-164">View</span>
                    </a>
                  </div>
                </div>
                {showContent ? expandedContent : ''}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default LoadBookmarks;
