import React, { useState } from 'react';
import Topic1 from './topics/01-test-topic.page.mdx';
import Topic2 from './topics/02-second-test-topic.page.mdx';
import Topic3 from './topics/03-test-topic.page.mdx';
import { usePageContext } from '../../../renderer/usePageContext';

export { Page };

function Page() {
  const pageContext = usePageContext();
  let pageQuery = 1;

  const { search } = pageContext.urlParsed;
  if (search?.page && parseInt(search.page)) {
    pageQuery = parseInt(search.page);
  }

  const coursePages = [<CoursePage1 key={1} />, <CoursePage2 key={2} />];
  const [currentPage, setCurrentPage] = useState<number>(pageQuery - 1);
  const currentView = coursePages[currentPage];

  const handleForward = () => {
    if (currentPage < coursePages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBackward = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-row p-10">
      <div>
        <Sidebar pages={coursePages} setPage={setCurrentPage} />
      </div>
      <div className="flex flex-col grow items-center">
        <div className="flex grow justify-center">{currentView}</div>
        <div>
          <button className="p-5" onClick={handleBackward}>
            Back
          </button>
          <button className="p-5" onClick={handleForward}>
            Forward
          </button>
        </div>
      </div>
    </div>
  );
}

function CoursePage1() {
  return (
    <div>
      <Topic1 />
      <Topic2 />
    </div>
  );
}

CoursePage1.label = 'Chapter 1';

function CoursePage2() {
  return (
    <div>
      <Topic3 />
    </div>
  );
}

CoursePage2.label = 'Chapter 2';

function Sidebar({ pages, setPage }: { pages: JSX.Element[]; setPage: (page: number) => void }) {
  const pageLabels = pages.map(page => page.type.label);

  return (
    <ul>
      {pageLabels.map((label, i) => {
        return (
          <li key={i}>
            <button onClick={() => setPage(i)} key={i}>
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
