import React, { memo } from 'react';
import Button from './button';

const DisplayTypeIconCalendar = memo(
  ({ isActive, handleClick }: { isActive: boolean; handleClick: VoidFunction }): JSX.Element => (
    <Button isActive={isActive} onClick={handleClick}>
      <i aria-label="calendar view" className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22px"
          height="22px"
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
    </Button>
  )
);

DisplayTypeIconCalendar.displayName = 'DisplayTypeIconCalendar';

export default DisplayTypeIconCalendar;
