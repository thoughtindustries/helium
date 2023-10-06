import React from 'react';
import { FreeTextProps } from './types';

const FreeText = (props: FreeTextProps): JSX.Element => {
  const { body } = props;
  return <div dangerouslySetInnerHTML={{ __html: body as string }} />;
};

FreeText.displayName = 'FreeText';

export default FreeText;
