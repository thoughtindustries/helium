import React from 'react';
import logo from '../../renderer/logo.svg';

const FeaturedContentCard = (props: {
  title: string,
  text: string,
  lessonType: string
  }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-6 space-y-6">
      {/* logo */}
      <img src={logo} className="flex w-16 m-5 mx-auto" />
      <div className="text-lg">
        {props.title}
      </div>
      <div className="content-start">
        {/* lesson type */}
        <div className="text-sm text-slate-400 pb-2">
          {props.lessonType}
        </div>
        {/* description text */}
        <div className="text-sm text-slate-400 pt-2">
          {props.text}
        </div>
      </div>
      {/* divider */}
      <hr></hr>
      <a href="#" className="text-sm justify-end text-blue-700 font-light text-right">
        View Details
      </a>
    </div>
  )
};

export default FeaturedContentCard;