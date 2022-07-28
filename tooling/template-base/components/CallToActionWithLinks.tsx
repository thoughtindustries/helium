import React from 'react';
import ButtonLink from './ButtonLink';

const CallToActionWithLinks = (props: {
  headline: string;
  description: string;
  links: {
    text: string;
    linkUrl: string;
  }[];
}) => {
  const linkEl = props.links.map((link, i) => (
    <div key={i} className="flex-[1_1_50%]">
      <ButtonLink key={link.text} text={link.text} linkUrl={link.linkUrl} />
    </div>
  ));

  return (
    <div className="flex bg-white flex-col px-20 py-24 items-center text-center">
      <div className="text-4xl font-bold mx-auto ">{props.headline}</div>
      <div className="text-slate-500 text-xl font-light mx-5">{props.description}</div>
      <div className="flex flex-wrap px-28">{linkEl}</div>
    </div>
  );
};

export default CallToActionWithLinks;
