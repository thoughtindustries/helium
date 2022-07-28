import React from 'react';
import logo from '../renderer/Vector.svg';

const ButtonLink = (props: { text: string; linkUrl: string }) => {
  return (
    <div className="m-8">
      <a href={props.linkUrl}>
        <button className="flex shadow-md rounded-full bg-slate-100 text-black font-semibold text-lg w-80 px-8 h-11 py-2 items-center">
          <div className="pr-2">{props.text}</div>
          <img src={logo} className="" />
        </button>
      </a>
    </div>
  );
};

export default ButtonLink;
