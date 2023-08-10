import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { CatalogLinkButton } from '../../core';

const DisplayTypeIconLink = ({
  isActive,
  link,
  children
}: {
  isActive: boolean;
  link: string;
  children: ReactNode;
}): JSX.Element => {
  const baseClassnames =
    'bg-gray-100 hover:bg-white md:bg-transparent border border-solid border-gray-400 rounded-sm hover:border-gray-500 md:rounded-none font-normal font-secondary text-gray-800 text-sm text-center no-underline leading-none hover:text-gray-800 md:text-gray-400 cursor-pointer inline-block relative py-1 px-4 mb-4 transition-colors ease-in-out duration-200 md:h-12 md:w-12 md:mb-0 md:p-0 flex justify-center items-center';
  const activeClassnames = isActive
    ? 'cursor-default pointer-events-none bg-accent hover:bg-accent-hover border-accent hover:border-accent-hover text-accent-contrast hover:text-accent-contrast md:text-black md:hover:text-black md:hover:bg-transparent'
    : '';
  return (
    <CatalogLinkButton className={twMerge(baseClassnames, activeClassnames)} href={link}>
      {children}
    </CatalogLinkButton>
  );
};

DisplayTypeIconLink.displayName = 'DisplayTypeIconLink';

export default DisplayTypeIconLink;
