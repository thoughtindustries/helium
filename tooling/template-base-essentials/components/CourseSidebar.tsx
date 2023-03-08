import React from 'react';
import clsx from 'clsx';

export default function CourseSidebar({
  coursePages,
  currentPageIndex,
  setPage
}: {
  coursePages: JSX.Element[];
  currentPageIndex: number;
  setPage: (page: number) => void;
}) {
  const pageLabels = coursePages.map(page => page.type.label);

  return (
    <div className="px-2">
      <ul>
        {pageLabels.map((label, i) => {
          const active = i === currentPageIndex;
          return (
            <li key={i}>
              <button
                onClick={() => setPage(i)}
                key={i}
                className={clsx(
                  'inline-block leading-normal py-1.5 px-4',
                  active && 'bg-indigo-700 rounded-md text-white',
                  !active && 'text-link hover:text-link-hover'
                )}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
