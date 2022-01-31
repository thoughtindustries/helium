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
    actionType
  } = props;
  let { contactEmail } = props;
  contactEmail = 'mailto:' + contactEmail;

  const image = asset && (
    <span className="ember-view avatar avatar--medium">
      <img src={asset} alt={contactName} className="ember-view" />
    </span>
  );
  const description = contactDescription ? (
    <p className="contact-block__description"> {contactDescription}</p>
  ) : (
    <p className="contact-block__description">
      {' '}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique metus nec sagittis
      euismod lorem ipsum forte contiuum.
    </p>
  );
  const nameBlock = (
    <div className="contact-block__name-container">
      {contactName && <p className="contact-block__name"> {contactName}</p>}
      {contactSubtitle && <p className="contact-block__subtitle"> {contactSubtitle} </p>}
    </div>
  );
  const contactBloacStyle = {
    backgroundColor,
    textColor
  };

  const getButton = () => {
    if (actionText && (url || contactEmail)) {
      const anchorProps: { className: string; href?: string; target?: string } = {
        className: 'btn btn--primary btn--centered contact-block__action',
        href: url || contactEmail
      };
      if (linkOpenInNewTab) {
        anchorProps.target = '_blank';
      }
      return <a {...url}>{actionText}</a>;
    }
  };
  const button = getButton() || '';
  return (
    <>
      <div id="ember12482" className="ember-view contact-block" style={contactBloacStyle}>
        <div className="row">
          <div className="small-8 medium-6 small-centered columns">
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
