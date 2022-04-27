import React, { useCallback, useState, useEffect } from 'react';
import { useWindowEventListener } from '@thoughtindustries/hooks';
import { DEFAULT_ANIMATION_SPEED, DEFAULT_TIMEOUT } from './constants';
import HeightEqualizerContext from './context';
import { HeightEqualizerContextType, HeightEqualizerProps } from './types';
import { useDebouncedCallback } from 'use-debounce';

const HeightEqualizer = ({
  children,
  timeout = DEFAULT_TIMEOUT,
  animationSpeed = DEFAULT_ANIMATION_SPEED
}: HeightEqualizerProps) => {
  // States
  const [sizes, setSizes] = useState<HeightEqualizerContextType['sizes']>([]);
  const [temporarySizes, setTemporarySizes] = useState<
    HeightEqualizerContextType['temporarySizes']
  >([]);
  const [update, setUpdate] = useState<HeightEqualizerContextType['update']>(false);
  const [originalChildrenCount, setOriginalChildrenCount] =
    useState<HeightEqualizerContextType['originalChildrenCount']>(0);
  const [childrenCount, setChildrenCount] =
    useState<HeightEqualizerContextType['childrenCount']>(0);

  const handleUpdate = useCallback(() => setUpdate(value => !value), []);
  const debouncedHandleUpdate = useDebouncedCallback(handleUpdate, timeout);
  useWindowEventListener('resize', debouncedHandleUpdate);

  // Force calculate height when children count changed
  useEffect(() => {
    handleUpdate();
  }, [originalChildrenCount, handleUpdate]);

  // Choose only highest heights when all children calculated
  // Set right sizes
  // Reset temp values
  useEffect(() => {
    // statement (<= instead ===) in case when new children will be add
    if (originalChildrenCount <= childrenCount) {
      let filteredSizes: HeightEqualizerContextType['sizes'] = [];
      temporarySizes.map(filteredSize => {
        const name = filteredSize.name;
        const height = filteredSize.height;
        const elementIndex = filteredSizes.findIndex(e => e.name === name);
        if (elementIndex > -1) {
          const savedHeight = filteredSizes[elementIndex].height;
          if (savedHeight < height) {
            filteredSizes[elementIndex].height = height;
          }
        } else {
          filteredSizes = [
            ...filteredSizes,
            {
              name,
              height
            }
          ];
        }
      });
      setSizes(filteredSizes);

      // Reset
      setTemporarySizes([]);
      setChildrenCount(0);
    }
  }, [originalChildrenCount, childrenCount, temporarySizes]);

  return (
    <HeightEqualizerContext.Provider
      value={{
        sizes,
        temporarySizes,
        update,
        animationSpeed,
        originalChildrenCount,
        childrenCount,
        setTemporarySizes,
        setOriginalChildrenCount,
        setChildrenCount
      }}
    >
      {children}
    </HeightEqualizerContext.Provider>
  );
};

HeightEqualizer.displayName = 'HeightEqualizer';

export default HeightEqualizer;
