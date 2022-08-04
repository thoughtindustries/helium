import React, { useState } from 'react';
// import dropDown from '../../renderer/dropDownClosed.png';
import { ArrowDownIcon } from '@thoughtindustries/catalog/src/icons';
import DropDownCard from './DropDownCard';

const Dropdown = (props: { text: string; styling: string }) => {
  const [isExpanded, setisExpanded] = useState(false);
  const handleToggle = () => {
    setisExpanded(prevIsExpanded => !prevIsExpanded);
  };
  return (
    <>
      <button
        className={`flex justify-between w-full border rounded-md h-10 py-2 pr-2 pl-3 ${props.styling}`}
        onClick={handleToggle}
      >
        <div className="">{props.text}</div>
        <div className="text-xl inline-block w-5 h-5">
          {/* menu icon */}
          {isExpanded && (
            <>
              {console.log(isExpanded)}
              <ArrowDownIcon />
            </>
          )}
          {!isExpanded && (
            <>
              <ArrowDownIcon />
              {console.log(isExpanded)}
            </>
          )}
        </div>
      </button>
      {/* menu */}
      {isExpanded && (
        <div className="">
          {console.log(isExpanded)}
          <DropDownCard
            dropDownItems={[
              'My Learning',
              'Events',
              'Completed',
              'Learning Paths',
              'Certifications',
              'Archived'
            ]}
          />
        </div>
      )}
    </>
  );
};

export default Dropdown;
