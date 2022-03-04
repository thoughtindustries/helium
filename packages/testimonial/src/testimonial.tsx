import React from 'react';
import { TestimonialProps } from './types';

const Testimonial = ({ children }: TestimonialProps): JSX.Element => {
  return <div>{children}</div>;
};

Testimonial.displayName = 'Testimonial';

export default Testimonial;
