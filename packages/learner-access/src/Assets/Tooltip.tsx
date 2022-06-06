import React, { useState } from 'react';

interface ParentCompProps {
  childComp?: React.ReactNode;
  description?: string;
}

export const Tooltip = ({ description, childComp }: ParentCompProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {childComp}
      {open && (
        <div className="TooltipBody shadow-sm shadow-gray-mid bg-black-light min-w-[175px] z-[10000] top-[-0.4rem] left-9 font-normal text-xs p-3 absolute text-left text-white">
          {description}
          <div className="TooltipArrow border-r-black-light border-transparent border-solid border-t-8 border-r-8 border-b-8 right-full top-1 h-0 absolute w-0"></div>
        </div>
      )}
    </span>
  );
};
