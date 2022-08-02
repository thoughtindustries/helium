import React from 'react';
import overlay from '../renderer/Overlay.png';

const Hero = (props: { headline: string; body: string; buttonUrl: string; buttonText: string }) => {
  return (
    <div className="flex text-center object-cover">
      <img src={overlay} className="absolute mix-blend-overlay w-full h-full" />
      <div className="p-20">
        <div className="flex flex-col text-white lg:text-6xl md:text-5xl text-4xl font-bold pb-2">
          {props.headline}
        </div>
        <div className="flex flex-col text-white font-bold text-xl mx-5">{props.body}</div>
        <div className="px-6 py-3 5">
          <a href={props.buttonUrl}>
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold h-14 w-28 rounded">
              {props.buttonText}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
