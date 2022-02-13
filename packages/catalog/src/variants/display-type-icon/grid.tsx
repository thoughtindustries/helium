import React, { memo } from 'react';
import Button from './button';

const DisplayTypeIconGrid = memo(
  ({ isActive, handleClick }: { isActive: boolean; handleClick: VoidFunction }): JSX.Element => (
    <Button isActive={isActive} onClick={handleClick}>
      <i className="icon-thumbnails" aria-label="grid view">
        Grid
      </i>
    </Button>
  )
);

DisplayTypeIconGrid.displayName = 'DisplayTypeIconGrid';

export default DisplayTypeIconGrid;
