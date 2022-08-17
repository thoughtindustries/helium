import React, { useState } from 'react';
import { usePageContext } from '../renderer/usePageContext';
import CourseSidebar from './CourseSidebar';

export default function CourseLayout({
  title,
  coursePages
}: {
  title?: string;
  coursePages: Array<JSX.Element>;
}) {
  const pageContext = usePageContext();
  let pageQuery = 1;

  const { search } = pageContext.urlParsed;
  if (search?.page) {
    const pageInt = parseInt(search.page, 10);
    pageQuery = isNaN(pageInt) || pageInt < 1 ? 1 : pageInt;
  }

  const [currentPageIndex, setCurrentPage] = useState<number>(pageQuery - 1);

  const nextIsDisabled = currentPageIndex >= coursePages.length - 1;
  const prevIsDisabled = currentPageIndex === 0;
  const currentView = coursePages[currentPageIndex];

  const handleForward = () => {
    if (currentPageIndex < coursePages.length - 1) {
      setCurrentPage(currentPageIndex + 1);
    }
  };

  const handleBackward = () => {
    if (currentPageIndex > 0) {
      setCurrentPage(currentPageIndex - 1);
    }
  };

  return (
    <div className="h-full bg-gray-100 p-8">
      <div className="h-full max-w-screen-lg mx-auto bg-white shadow-sm font-primary">
        {title && (
          <div className="p-5 flex justify-center">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          </div>
        )}
        <div className="flex flex-row space-y-2 p-10">
          <div>
            <CourseSidebar
              currentPageIndex={currentPageIndex}
              coursePages={coursePages}
              setPage={setCurrentPage}
            />
          </div>
          <div className="flex flex-col grow items-center">
            <div className="flex grow font-secondary">{currentView}</div>
            <div className="flex flex-row w-3/4 justify-between pt-10">
              <button
                disabled={prevIsDisabled}
                className="text-white bg-indigo-700 hover:bg-indigo-600 inline-block font-normal text-sm text-center no-underline py-2 w-1/4 rounded-md disabled:bg-indigo-300 disabled:cursor-default"
                onClick={handleBackward}
              >
                Back
              </button>
              <button
                disabled={nextIsDisabled}
                className="text-white bg-indigo-700 hover:bg-indigo-600 inline-block font-normal text-sm text-center no-underline py-2 w-1/4 rounded-md disabled:bg-indigo-300 disabled:cursor-default"
                onClick={handleForward}
              >
                Forward
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
