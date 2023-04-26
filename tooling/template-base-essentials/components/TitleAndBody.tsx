import React from 'react';

const TitleAndBody = (props: { title?: string; body?: string }) => {
  return (
    <div className="flex flex-col justify-center py-9 px-20 lg:px-80">
      <div className="p-6 bg-slate-100 border rounded-md">
        {props.title && <div className="text-xl font-bold pb-3.5">{props.title}</div>}
        {props.body && <div className="text-slate-500">{props.body}</div>}
      </div>
    </div>
  );
};

export default TitleAndBody;
