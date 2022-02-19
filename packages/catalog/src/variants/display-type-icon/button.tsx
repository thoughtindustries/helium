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
}): JSX.Element => {
  const baseClassnames =
    'bg-gray-100 hover:bg-white md:bg-transparent border border-solid border-gray-400 rounded-sm hover:border-gray-500 md:rounded-none font-normal font-secondary text-gray-800 text-sm text-center no-underline leading-none hover:text-gray-800 md:text-gray-400 cursor-pointer inline-block relative py-1 px-4 mb-4 transition-colors ease-in-out duration-200 md:h-12 md:w-12 md:mb-0 md:p-0';
  const activeClassnames = isActive
    ? 'bg-accent hover:bg-accent-hover border-accent hover:border-accent-hover text-accent-contrast hover:text-accent-contrast md:text-black md:hover:text-black md:hover:bg-transparent'
    : '';
  return (
    <button
      disabled={isActive}
      onClick={onClick}
      className={clsx(baseClassnames, activeClassnames)}
    >
      {children}
    </button>
  );
};

DisplayTypeIconButton.displayName = 'DisplayTypeIconButton';

export default DisplayTypeIconButton;
