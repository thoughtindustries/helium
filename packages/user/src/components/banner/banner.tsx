import React from 'react';
import { ValidationProps } from '../types';

const Banner = ({ valid, message }: ValidationProps): JSX.Element => {
  return (
    <>
      {valid !== null && valid !== undefined && message !== null && message !== undefined ? (
        valid ? (
          <div className="w-full bg-green-600 p-4 text-sm text-white text-left font-bold mb-4">
            {message}
          </div>
        ) : (
          <div className="w-full bg-red-600 p-4 text-sm text-white text-left font-bold mb-4">
            {message}
          </div>
        )
      ) : null}
    </>
  );
};

Banner.displayName = 'Banner';
export default Banner;
