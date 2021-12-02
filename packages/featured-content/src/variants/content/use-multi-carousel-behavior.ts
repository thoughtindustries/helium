import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { createUseGesture, dragAction } from '@use-gesture/react';
import { ScreenSize, useScreenSize } from './use-screen-size';
import { usePrevious } from './use-previous';

interface MultiCarouselProps {
  desktopColumnCount: number;
  itemCount: number;
}

interface MultiCarouselBehavior<TRef extends HTMLElement> {
  scrollableRef: RefObject<TRef>;
  countPerSlide: number;
  navigate: (direction: number) => void;
  hasPrevItem: boolean;
  hasNextItem: boolean;
  screenSize: ScreenSize;
  prevScreenSize?: ScreenSize;
}

export function useMultiCarouselBehavior<TRef extends HTMLElement>({
  desktopColumnCount,
  itemCount
}: MultiCarouselProps): MultiCarouselBehavior<TRef> {
  const scrollableRef: RefObject<TRef> = useRef(null);
  const screenSize = useScreenSize();
  const prevScreenSize = usePrevious(screenSize);
  const [currentPosition, setCurrentPosition] = useState<number>(0);

  const isSmallScreen = screenSize === ScreenSize.Small;
  const countPerSlide = isSmallScreen ? 1 : desktopColumnCount;
  const hasPrevItem = currentPosition > 0;
  const hasNextItem = itemCount > (currentPosition + 1) * countPerSlide;

  const navigate = useCallback(
    direction => {
      if (scrollableRef.current) {
        const newPosition = currentPosition + direction;
        const percentage = -newPosition * 100;
        scrollableRef.current.style.transform = `translateX(${percentage}%)`;
        setCurrentPosition(newPosition);
      }
    },
    [currentPosition]
  );

  const useGesture = createUseGesture([dragAction]);
  useGesture(
    {
      onDragEnd: state => {
        const {
          xy: [x1],
          initial: [x0]
        } = state;
        const deltaX = x1 - x0;
        if (deltaX > 0 && hasPrevItem) {
          navigate(-1);
        } else if (deltaX < 0 && hasNextItem) {
          navigate(1);
        }
      }
    },
    { target: scrollableRef, eventOptions: { passive: false } }
  );

  useEffect(() => {
    const isCurrentSmallScreen = screenSize === ScreenSize.Small;
    const isPreviousSmallScreen = prevScreenSize === ScreenSize.Small;
    const changedFromSmallScreen = isPreviousSmallScreen && !isCurrentSmallScreen;
    const changedToSmallScreen = !isPreviousSmallScreen && isCurrentSmallScreen;
    if (changedFromSmallScreen || changedToSmallScreen) {
      setCurrentPosition(0);
      if (scrollableRef.current) {
        scrollableRef.current.style.transform = `translateX(-0%)`;
      }
    }
  }, [screenSize, prevScreenSize]);

  return {
    scrollableRef,
    countPerSlide,
    hasPrevItem,
    hasNextItem,
    screenSize,
    prevScreenSize,
    navigate
  };
}
