import React from 'react';

const DropDownCard = (props: { dropDownItems: string[] }) => {
  const listItems = props.dropDownItems.map((item, i) => {
    return (
      <li key={i} className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
        <a href="/dashboard">{item}</a>
      </li>
    );
  });
  return (
    <div className="flex">
      <ul className="w-full">{listItems}</ul>
    </div>
  );
};

export default DropDownCard;
