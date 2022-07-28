import React from 'react';

const CTA = (props: { headline: string; body: string; buttonUrl: string; buttonText: string }) => {
  return (
    <div className="bg-black text-center pt-16 px-12 pb-10">
      <div className="flex flex-col text-white text-3xl font-bold">{props.headline}</div>
      <div className="max-w-md mx-auto">
        <div className="flex flex-col text-gray-300 text-xl font-bold">{props.body}</div>
      </div>
      <a href={props.buttonUrl}>
        <button className="bg-white text-blue-900 font-normal py-2 px-4 rounded mx-auto mt-6">
          {props.buttonText}
        </button>
      </a>
    </div>
  );
};

export default CTA;
