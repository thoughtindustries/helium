import React from 'react';

const TitleAndBody = (props: { title: string | undefined; body: string | undefined }) => {
  return (
    <div className="flex flex-col justify-center py-9 px-20 lg:px-80">
      <div className="p-6 bg-slate-100 border rounded-md">
        <div className="text-xl font-bold pb-3.5">{props.title}</div>
        <div className="text-slate-500">{props.body}</div>
      </div>
    </div>
  );
};

export default TitleAndBody;
