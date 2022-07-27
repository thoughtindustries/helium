import { list } from 'postcss';
import React from 'react';
import DocLinks from './DocLinks';

const DocsAndResouces = (props: {
  headline: string;
  description: string;
  links: {
    text: string;
    linkUrl: string;
  }[];
}) => {
  const linkEl = props.links.map(link => (
    <DocLinks key={link.text} text={link.text} linkUrl={link.linkUrl} />
  ));

  return (
    <div className="flex bg-white flex-col px-20 py-24 items-center text-center">
      <div className="text-4xl font-bold mx-auto ">
        {/* Explore Documentation and Resources */}
        {props.headline}
      </div>
      <div className="text-slate-500 text-xl font-light mx-5">{props.description}</div>

      <div className="grid grid-cols-1 pt-5">
        <div>{linkEl}</div>
      </div>
    </div>
  );
};

export default DocsAndResouces;
