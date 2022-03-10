import React from 'react';
import Link from './link';

const DisplayTypeIconGrid = ({
  isActive,
  link
}: {
  isActive: boolean;
  link: string;
}): JSX.Element => (
  <Link isActive={isActive} link={link}>
    <i aria-label="grid view" className="w-5 h-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        viewBox="0 0 32 32"
        stroke="currentColor"
        strokeWidth={3}
      >
        <rect x="4" y="4" width="24" height="24" fill="none" />
        <line x1="16" y1="28" x2="16" y2="4" />
        <line x1="4" y1="16" x2="28" y2="16" />
      </svg>
    </i>
  </Link>
);

DisplayTypeIconGrid.displayName = 'DisplayTypeIconGrid';

export default DisplayTypeIconGrid;
