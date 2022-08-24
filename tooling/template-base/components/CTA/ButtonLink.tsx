import React from 'react';
import logo from '../../renderer/share.svg';

const ButtonLink = (props: { text: string; linkUrl: string }) => {
  return (
    <div className="m-8 flex justify-center">
      <a href={props.linkUrl} className="">
        <button className="flex flex-row justify-center shadow-md rounded-full bg-slate-100 text-black font-semibold text-lg w-80 h-11 py-2 text-center">
          {props.text}
          <img src={logo} className="pl-2 pt-1" />
        </button>
      </a>
    </div>
  );
};

export default ButtonLink;
