import React from 'react';
import logo from '../renderer/trees1.png';

const CallToActionParagraphs = (props: {
  heading: string;
  subheading: string;
  paragraphItems: [
    {
      heading: string;
      content: string;
      buttonText: string;
      buttonUrl: string;
    }
  ];
}) => {
  // const arr: { heading: string; content: string; buttonText; string: buttonUrl; }[] = props.paragraphItems;
  let i = 1;
  const listItems = props.paragraphItems.map(item => {
    const { heading, content, buttonText, buttonUrl } = item;
    const leftAlignmentClasses = i % 2 === 0 ? 'hidden' : 'md:block hidden';
    const rightAlignmentClasses = i % 2 !== 0 ? 'md:hidden block' : 'md:block';
    console.log(i);
    i += 1;
    return (
      <div key={i} className="flex flex-col px-4 mx-auto mt-10 mb-10 md:flex-row">
        <div className={`flex   py-16 md:py-1 ${leftAlignmentClasses}`}>
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col">
          <h2 className="max-w-md font-bold text-2xl md:text-3xl">{heading}</h2>
          <div className="max-w-sm text-slate-500 pt-6 text-lg">{content}</div>
          <a href={buttonUrl} className="text-blue-900 py-10">
            {buttonText} &#x2192;
          </a>
        </div>

        {/* numbered list */}
        <div className={`flex flex-col py-16 md:py-1 ${rightAlignmentClasses}`}>
          <img src={logo} alt="" />
        </div>
      </div>
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
