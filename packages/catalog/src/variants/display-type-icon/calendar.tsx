import React from 'react';
import Link from './link';

const DisplayTypeIconCalendar = ({
  isActive,
  link
}: {
  isActive: boolean;
  link: string;
}): JSX.Element => (
  <Link isActive={isActive} link={link}>
    <i aria-label="calendar view" className="w-5 h-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth={3}
      >
        <circle cx="24" cy="24" r="20" fill="none" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
        <line x1="20" y1="2" x2="28" y2="2" />
        <line x1="24" y1="24" x2="24" y2="8" />
      </svg>
    </i>
  </Link>
);

DisplayTypeIconCalendar.displayName = 'DisplayTypeIconCalendar';

export default DisplayTypeIconCalendar;
