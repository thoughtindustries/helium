import React from 'react';

const HomepageHeader = (props: { image?: string; title?: string; body?: string }) => {
  return (
    <div className="flex flex-col justify-center py-9 px-20 lg:px-80">
      {props.image && <img src={props.image} className="w-12 pb-2" />}
      {props.title && <div className="text-5xl">{props.title}</div>}
      {props.body && <div className="text-slate-500">{props.body}</div>}
    </div>
  );
};

export default HomepageHeader;
