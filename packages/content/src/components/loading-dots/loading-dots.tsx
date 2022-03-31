import React from 'react';

const LoadingDots = (): JSX.Element => {
  const firstDotStyles = { animationDelay: '-0.32s' };
  const secondDotStyles = { animationDelay: '-0.16s' };
  return (
    <div className="flex items-center justify-center space-x-10">
      <div className="animate-ping w-5 h-5 bg-gray-700 rounded-full" style={firstDotStyles}></div>
      <div className="animate-ping w-5 h-5 bg-gray-700 rounded-full" style={secondDotStyles}></div>
      <div className="animate-ping w-5 h-5 bg-gray-700 rounded-full"></div>
    </div>
  );
};

LoadingDots.displayName = 'LoadingDots';
export default LoadingDots;
