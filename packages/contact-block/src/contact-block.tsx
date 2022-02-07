import React from 'react';
import { ContactBlockProps } from './types';

const ContactBlock = (props: ContactBlockProps): JSX.Element => {
  const {
    linkOpenInNewTab,
    contactDescription,
    asset,
    backgroundColor,
    textColor,
    url,
    contactName,
    contactSubtitle,
    actionText,
    contactEmail
  } = props;

  const image = asset && (
    <span className="mx-auto mt-0 mb-4 bg-gray-400 text-gray-700 rounded-lg block h-10 relative w-10 leading-7 text-5xl">
      <img src={asset} alt={contactName} />
    </span>
  );
  const description = contactDescription ? (
    <p className="font-medium text-sm leading-7 mb-4"> {contactDescription}</p>
  ) : (
    <p className="font-medium text-sm leading-7 mb-4">
      {' '}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique metus nec sagittis
      euismod lorem ipsum forte contiuum.
    </p>
  );
  const nameBlock = (
    <div className="text-xs mb-4">
      {contactName && (
        <p className="font-extrabold my-0 mr-0 ml-1 uppercase tracking-widest"> {contactName}</p>
      )}
      {contactSubtitle && <p className="mx-0 mb-0 mt-px"> {contactSubtitle} </p>}
    </div>
  );
  const contactBloacStyle = {
    backgroundColor,
    color: textColor
  };

  const getButton = () => {
    if (actionText && (url || contactEmail)) {
      const anchorProps: { className: string; href?: string; target?: string } = {
        className:
          'text-white bg-indigo-700 hover:bg-indigo-600  rounded-sm border-solid border cursor-pointer inline-block font-normal text-sm leading-tight py-2 px-5 relative text-center no-underline ease-in-out duration-200 transition font-sans mx-auto mb-0',
        href: url || 'mailto:' + contactEmail
      };
      if (linkOpenInNewTab) {
        anchorProps.target = '_blank';
      }
      return <a {...anchorProps}>{actionText}</a>;
    }
    return '';
  };
  const button = getButton();
  return (
    <>
      <div className="px-4 py-12 text-center" style={contactBloacStyle}>
        <div className="row">
          <div className="w-8/12 md:w-6/12 float-none mx-auto px-4 relative">
            {image}
            {description}
            {nameBlock}
            {button}
          </div>
        </div>
      </div>
    </>
  );
};

ContactBlock.displayName = 'contactBlockWidget';

export default ContactBlock;
