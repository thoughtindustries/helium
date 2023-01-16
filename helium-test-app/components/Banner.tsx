import React from 'react';

const Banner = (props: { heading: string; subtext: string }) => {
  return (
    <div className="flex flex-col p-24 bg-slate-50">
      <div className="lg:text-6xl md:text-5xl text-3xl font-bold mx-auto text-center">
        {props.heading}
      </div>
      <div className="text-slate-500 text-xl font-light text-center mx-5">{props.subtext}</div>
    </div>
  );
};

export default Banner;
