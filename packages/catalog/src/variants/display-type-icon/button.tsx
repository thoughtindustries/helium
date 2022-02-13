import React, { MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

const DisplayTypeIconButton = ({
  isActive,
  onClick,
  children
}: {
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}): JSX.Element => (
  <button
    disabled={isActive}
    onClick={onClick}
    className={clsx(['btn'], isActive ? 'btn--primary' : '')}
  >
    {children}
  </button>
);

DisplayTypeIconButton.displayName = 'DisplayTypeIconButton';

export default DisplayTypeIconButton;
