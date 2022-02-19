import React, { createRef, ReactElement, useEffect, RefObject, useState } from 'react';
import { useCatalogLoader } from './core';

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

interface CatalogLoaderProps {
  children: (targetRef: RefObject<HTMLDivElement>) => ReactElement;
}

const CatalogLoader = ({ children }: CatalogLoaderProps): JSX.Element => {
  const { isLoading } = useCatalogLoader();
  const targetRef = createRef<HTMLDivElement>();
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (targetRef.current) {
      setHeight(targetRef.current.clientHeight);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div style={{ height }}>
        <LoadingDots />
      </div>
    );
  }

  return children(targetRef);
};

CatalogLoader.displayName = 'CatalogLoader';
export default CatalogLoader;
