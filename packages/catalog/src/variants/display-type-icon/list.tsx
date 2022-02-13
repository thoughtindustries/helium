import React, { memo } from 'react';
import Button from './button';

const DisplayTypeIconList = memo(
  ({ isActive, handleClick }: { isActive: boolean; handleClick: VoidFunction }): JSX.Element => (
    <Button isActive={isActive} onClick={handleClick}>
      <i className="icon-bullets" aria-label="list view">
        List
      </i>
    </Button>
  )
);

DisplayTypeIconList.displayName = 'DisplayTypeIconList';

export default DisplayTypeIconList;
