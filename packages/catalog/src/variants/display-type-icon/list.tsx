import React from 'react';
import Link from './link';

const DisplayTypeIconList = ({
  isActive,
  link
}: {
  isActive: boolean;
  link: string;
}): JSX.Element => (
  <Link isActive={isActive} link={link}>
    <i aria-label="list view" className="w-5 h-5">
      <svg
        className="w-full h-full"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path d="M44.88,13H15.13A2.07,2.07,0,0,1,13,11a2.07,2.07,0,0,1,2.13-2H44.88A2.07,2.07,0,0,1,47,11,2.07,2.07,0,0,1,44.88,13Z" />
        <path d="M44.88,25H15.13a2,2,0,1,1,0-4H44.88A2,2,0,1,1,44.88,25Z" />
        <path d="M44.88,37H15.13a2,2,0,1,1,0-4H44.88A2,2,0,1,1,44.88,37Z" />
        <circle cx="6" cy="11" r="3" />
        <circle cx="6" cy="23" r="3" />
        <circle cx="6" cy="35" r="3" />
      </svg>
    </i>
  </Link>
);

DisplayTypeIconList.displayName = 'DisplayTypeIconList';

export default DisplayTypeIconList;
