import React, { useEffect, useRef, useState, useCallback } from 'react';
import useHeightEqualizer from './hook';
import { HeightEqualizerElementProps } from './types';
import { DEFAULT_ELEMENT_TYPE } from './constants';

const HeightEqualizerElement = ({
  children = '',
  name,
  as,
  className
}: HeightEqualizerElementProps) => {
  const {
    sizes,
    update,
    setTemporarySizes,
    setOriginalChildrenCount,
    setChildrenCount,
    animationSpeed
  } = useHeightEqualizer();

  // States
  const [height, setHeight] = useState<number>();

  // Refs to wrapper element
  const innerElement = useRef<HTMLElement>(null);

  // Calculate method
  const getHeight = useCallback(() => {
    if (!innerElement.current) {
      return;
    }
    const tempHeight = innerElement.current.style.getPropertyValue('height');
    innerElement.current.style.removeProperty('height');
    const newHeight = innerElement.current.offsetHeight;
    innerElement.current.style.setProperty('height', tempHeight);
    setTemporarySizes(values => {
      return [
        ...values,
        {
          name,
          height: newHeight
        }
      ];
    });
    setChildrenCount(value => value + 1);
  }, [setTemporarySizes, setChildrenCount, name]);

  // Init
  useEffect(() => {
    // Report self to parent component (to calculate how many components exist)
    setOriginalChildrenCount(value => value + 1);
    return () => {
      setOriginalChildrenCount(value => value - 1);
    };
  }, [setOriginalChildrenCount]);

  // Call calculate method
  useEffect(() => {
    getHeight();
  }, [update, getHeight]);

  // Set sizes on elements in DOM
  useEffect(() => {
    const elementIndex: number = sizes.findIndex(e => e.name === name);

    if (sizes && sizes[elementIndex] && sizes[elementIndex].height) {
      setHeight(sizes[elementIndex].height);
    }
  }, [sizes, name]);

  // stylings
  const inlineStyles = {
    height: `${height}px`,
    transitionDuration: animationSpeed === 0 ? '' : `${animationSpeed}s`
  };

  return React.createElement(
    as ?? DEFAULT_ELEMENT_TYPE,
    {
      ref: innerElement,
      className,
      style: inlineStyles
    },
    children
  );
};

HeightEqualizerElement.displayName = 'HeightEqualizerElement';

export default HeightEqualizerElement;
