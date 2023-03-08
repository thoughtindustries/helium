import React from 'react';
import HeroImage from '../Assets/HeroImage';

const Hero = (props: { headline: string; body: string; buttonUrl: string; buttonText: string }) => {
  return (
    <>
      <div className="relative h-96 w-full z-0">
        <div className="absolute h-96 w-full bg-gray-900 opacity-50" />
        <HeroImage styling="object-cover h-96 w-full" />
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
