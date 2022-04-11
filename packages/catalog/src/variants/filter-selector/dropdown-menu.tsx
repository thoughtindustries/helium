import React, { createRef, useState } from 'react';
import clsx from 'clsx';
import { useOnClickOutside } from '../../core';
import { ArrowDownIcon, ArrowRightIcon, CheckIcon } from '../../icons';

const DropdownMenu = ({
  id,
  label,
  options
}: {
  id: string;
  label: string;
  options: {
    isSelected?: boolean;
    link: string;
    name: string;
  }[];
}): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const wrapperRef = createRef<HTMLDivElement>();
  useOnClickOutside(wrapperRef, () => {
    if (!isExpanded) return;
    setIsExpanded(!isExpanded);
  });

  // event handler
  const handleClick = () => setIsExpanded(!isExpanded);

  // derived values
  const hasOptions = !!options.length;

  // stylings
  const wrapperClassnames =
    'relative w-full h-10 md:h-full px-2 md:px-0 text-sm border-solid border border-gray-400 bg-gray-100 md:border-none md:bg-transparent';
  const buttonBaseClassnames = 'flex w-full h-full justify-between items-center';
  const buttonStatusClassnames = !hasOptions ? 'text-gray-400' : '';
  const dropdownWrapperBaseClassnames = 'absolute z-50 mt-px -left-0.5 md:-left-4';
  const dropdownWrapperClassnames = isExpanded ? 'visible' : 'invisible';
  const dropdownWrapperStyles = {
    minWidth: '160px'
  };
  const listItemClassnames = 'p-px bg-white';
  const listItemLinkClassnames =
    'transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5';
  const selectedMarkerClassnames = 'absolute w-4 h-4 text-accent left-0';

  // components
  const selectedMarker = (
    <i className={selectedMarkerClassnames}>
      <CheckIcon />
    </i>
  );

  return (
    <div className={wrapperClassnames} ref={wrapperRef}>
      <button
        className={clsx(buttonBaseClassnames, buttonStatusClassnames)}
        onClick={handleClick}
        disabled={!hasOptions}
      >
        {label}
        <span className="w-4 h-4">
          {isExpanded && <ArrowDownIcon />}
          {!isExpanded && <ArrowRightIcon />}
        </span>
      </button>
      <ul
        id={id}
        className={clsx(dropdownWrapperBaseClassnames, dropdownWrapperClassnames)}
        style={dropdownWrapperStyles}
      >
        {options.map(({ isSelected, link, name }, index) => (
          <li key={`${id}-item-${index}`} className={listItemClassnames}>
            <a href={link} className={listItemLinkClassnames}>
              {isSelected && selectedMarker}
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

DropdownMenu.displayName = 'DropdownMenu';
export default DropdownMenu;
