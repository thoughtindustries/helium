import React from 'react';
import Button from './button';

const DisplayTypeIconGrid = ({
  isActive,
  handleClick
}: {
  isActive: boolean;
  handleClick: VoidFunction;
}): JSX.Element => (
  <Button isActive={isActive} onClick={handleClick}>
    <i aria-label="grid view" className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22px"
        height="22px"
        viewBox="0 0 32 32"
        stroke="currentColor"
        strokeWidth={3}
      >
        <rect x="4" y="4" width="24" height="24" fill="none" />
        <line x1="16" y1="28" x2="16" y2="4" />
        <line x1="4" y1="16" x2="28" y2="16" />
      </svg>
    </i>
  </Button>
);

DisplayTypeIconGrid.displayName = 'DisplayTypeIconGrid';

export default DisplayTypeIconGrid;
