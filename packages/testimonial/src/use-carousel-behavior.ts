import { RefObject, useCallback, useRef, useState } from 'react';
import { createUseGesture, dragAction } from '@use-gesture/react';
import { ScreenSize, useScreenSize, usePrevious } from '@thoughtindustries/hooks';

interface CarouselProps {
  itemCount: number;
}

export interface CarouselBehavior<TRef extends HTMLElement> {
  scrollableRef: RefObject<TRef>;
  navigate: (direction: number) => void;
  reset: () => void;
  hasPrevItem: boolean;
  hasNextItem: boolean;
  screenSize: ScreenSize;
  prevScreenSize?: ScreenSize;
  currentPosition: number;
}

export function useCarouselBehavior<TRef extends HTMLElement>({
  itemCount
}: CarouselProps): CarouselBehavior<TRef> {
  const scrollableRef: RefObject<TRef> = useRef(null);
  const screenSize = useScreenSize();
  const prevScreenSize = usePrevious(screenSize);
  const [currentPosition, setCurrentPosition] = useState<number>(0);

  const hasPrevItem = currentPosition > 0;
  const hasNextItem = itemCount > currentPosition + 1;

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

  const reset = useCallback(() => {
    if (scrollableRef.current) {
      scrollableRef.current.style.transform = 'translateX(-0%)';
      setCurrentPosition(0);
    }
  }, []);

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

  return {
    scrollableRef,
    hasPrevItem,
    hasNextItem,
    screenSize,
    prevScreenSize,
    navigate,
    reset,
    currentPosition
  };
}
