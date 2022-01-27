import React from 'react';
import { ContactBlockProps } from './types';

const ContactBlock = (props: ContactBlockProps): JSX.Element => {
  const { linkOpenInNewTab, asset, backgroundColor, textColor, url, contactName, contactSubtitle } =
    props;

  return <div className=""></div>;
};

export default ContactBlock;
