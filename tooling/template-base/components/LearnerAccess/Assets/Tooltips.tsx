import React, { useState } from 'react';
import { AlertIcon } from './Icons';

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

interface WarningMessageToolTipProps {
  mutationCallback: any;
  setShowPopup: any;
  text?: string;
  customPosition?: string;
}

export const WarningMessageToolTip = ({
  mutationCallback,
  setShowPopup,
  text,
  customPosition
}: WarningMessageToolTipProps) => {
  const containerClass =
    customPosition +
    'next-topic-tooltip absolute bg-white rounded text-sm p-4 shadow-sm w-[400px] z-[99999] text-black-light';
  return (
    <div className={containerClass}>
      <div className="m-0 max-w-none w-auto flex">
        <div className="float-left px-0 relative">
          <AlertIcon />
        </div>
        <div className="float-right px-0 relative">
          <p className="gray-mid leading-8 mb-4">
            <span className="text-active-blue inline-block text-center w-full text-2xl">
              {text}
            </span>
          </p>
          <div className="m-0 max-w-none w-auto flex justify-evenly">
            <button
              onClick={() => setShowPopup(false)}
              className="bg-white-mid h-8 border-solid border rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-gray-light font-sans transition duration-200 leading-5"
              data-ember-action="8974"
            >
              <span>Cancel</span>
            </button>
            <button
              onClick={() => {
                mutationCallback();
                setShowPopup(false);
              }}
              className="bg-active-blue text-accent-contrast bg-accent rounded-sm cursor-pointer inline-block font-normal text-xs ml-2 h-8 mb-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
              data-ember-action="8975"
            >
              <span>Continue</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
