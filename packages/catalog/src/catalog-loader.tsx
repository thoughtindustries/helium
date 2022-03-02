import React, { createRef, ReactElement, useEffect, RefObject, useState } from 'react';
import { LoadingDots } from '@thoughtindustries/content';
import { useCatalogLoader } from './core';

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
