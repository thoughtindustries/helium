import React, { memo } from 'react';
import Button from './button';

const DisplayTypeIconCalendar = memo(
  ({ isActive, handleClick }: { isActive: boolean; handleClick: VoidFunction }): JSX.Element => (
    <Button isActive={isActive} onClick={handleClick}>
      <i className="icon-stopwatch" aria-label="calendar view">
        Calendar
      </i>
    </Button>
  )
);

DisplayTypeIconCalendar.displayName = 'DisplayTypeIconCalendar';

export default DisplayTypeIconCalendar;
