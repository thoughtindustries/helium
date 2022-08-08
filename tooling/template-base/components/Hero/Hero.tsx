import React from 'react';
import overlay from '../../renderer/HeroImage.svg';

const Hero = (props: { headline: string; body: string; buttonUrl: string; buttonText: string }) => {
  return (
    <>
      {/* <img src={overlay} className="relative" />
      <div className="absolute">
        <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
      </div> */}
      <div className="relative h-96 w-full">
        <img src={overlay} className="object-cover h-96 w-full" />
        <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-2xl sm:text-3xl md:text-5xl">{props.headline}</div>
          <div className="font-bold text-sm sm:text-lg md:text-xl">{props.body}</div>
          <div className="px-6 py-3 ">
            <a href={props.buttonUrl}>
              <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold h-10 w-20 md:h-14 md:w-28 rounded">
                {props.buttonText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
