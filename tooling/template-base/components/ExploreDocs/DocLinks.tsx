import React from 'react';
import logo from '../../renderer/Vector.svg';

const DocLinks = (props: { text: string; link: string }) => {
  return (
    <div>
      <button className="flex shadow-md rounded-full bg-slate-100 text-black font-semibold text-lg w-80 px-8 h-11 py-2 items-center">
        <div className="pr-2">{props.text}</div>
        <img ref={props.link} src={logo} className="" />
      </button>
    </div>
  );
};

export default DocLinks;
