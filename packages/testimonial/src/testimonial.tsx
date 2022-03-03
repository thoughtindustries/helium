import React from 'react';
import { TestimonialProps } from './types';

enum Alignment {
  Left = 'Left',
  Right = 'Right',
  Center = 'Center'
}

const Testimonial = ({
  quote,
  username,
  description,
  backgroundColor,
  textColor,
  alignment,
  asset
}: TestimonialProps): JSX.Element => {
  const wrappedStyles = {
    backgroundColor: backgroundColor,
    color: textColor,
    backgroundImage: `url(${asset})`
  };

  {
    return (
      <div className="relative before:block before:w-full flex justify-center">
        <div
          className={`${
            alignment === Alignment.Center
              ? 'text-center px-4 py-0'
              : alignment === Alignment.Left
              ? 'text-left px-4 py-0'
              : 'text-right px-4 py-0'
          } absolute`}
          style={wrappedStyles}
        >
          <h1 className="text-4xl mb-6">{quote}</h1>
          <p className="text-2xl relative pt-2 m-0 italic before:w-full before:border-solid before:border-t before:border-t-current before:block before:absolute before:top-0 before:h-0">
            {username}
          </p>
          <p className="text-base italic">{description}</p>
        </div>
      </div>
    );
  }
};

Testimonial.displayName = 'Testimonial';

export default Testimonial;
