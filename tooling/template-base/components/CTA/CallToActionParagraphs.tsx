import React from 'react';
import CtaAsset from '../Assets/CtaAsset';

type paragraphItemsArgs = {
  heading: string;
  content: string;
  buttonText: string;
  buttonUrl: string;
};

const CallToActionParagraphs = (props: {
  heading: string;
  subheading: string;
  paragraphItems: paragraphItemsArgs[];
}) => {
  const RightAlignedSection = (props: {
    item: {
      heading: string;
      content: string;
      buttonText: string;
      buttonUrl: string;
    };
  }) => {
    return (
      <div className="flex flex-col px-4 mx-auto mt-10 mb-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="md:flex flex-col space-y-8 md:w-1/2 hidden">
          <CtaAsset styling="p-4 md:p-8" />
        </div>
        <div className="flex flex-col med:w-1/2">
          <h2 className="max-w-md font-bold text-left text-2xl md:text-3xl">
            {props.item.heading}
          </h2>
          <div className="max-w-sm text-slate-500 text-left md:text-left pt-6 text-lg">
            {props.item.content}
          </div>
          <a href={props.item.buttonUrl} className="text-blue-900 py-10">
            {props.item.buttonText} &#x2192;
          </a>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2 md:hidden">
          <CtaAsset styling="p-4 md:p-8" />
        </div>
      </div>
    );
  };

  const LeftAlignedSection = (props: {
    item: {
      heading: string;
      content: string;
      buttonText: string;
      buttonUrl: string;
    };
  }) => {
    return (
      <div className="flex flex-col px-4 mx-auto mt-10 mb-10 md:flex-row">
        <div className="flex flex-col med:w-1/2">
          <h2 className="max-w-md font-bold text-left text-2xl md:text-3xl">
            {props.item.heading}
          </h2>
          <div className="max-w-sm text-slate-500 text-left md:text-left pt-6 text-lg">
            {props.item.content}
          </div>
          <a href={props.item.buttonUrl} className="text-blue-900 py-10">
            {props.item.buttonText} &#x2192;
          </a>
        </div>

        {/* numbered list */}
        <div className="flex flex-col md:w-1/2 py-16 md:py-1">
          <CtaAsset styling="p-4 md:p-8" />
        </div>
      </div>
    );
  };

  const listItems = props.paragraphItems.map((item, i) => {
    return i % 2 === 0 ? (
      <RightAlignedSection item={item} key={i} />
    ) : (
      <LeftAlignedSection item={item} key={i} />
    );
  });

  return (
    <>
      <div className="flex flex-col pt-16 px-10 pb-20 bg-slate-50">
        <div className="text-3xl font-bold text-center">{props.heading}</div>
        <div className="text-slate-500 text-xl font-normal text-center mx-5 pt-6">
          {props.subheading}
        </div>
        {listItems}
      </div>
    </>
  );
};

export default CallToActionParagraphs;
