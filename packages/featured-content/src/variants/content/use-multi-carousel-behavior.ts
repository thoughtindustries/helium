import { useEffect } from 'react';
import { ScreenSize } from './use-screen-size';
import { useCarouselBehavior, CarouselBehavior } from './use-carousel-behavior';

interface MultiCarouselProps {
  desktopColumnCount: number;
  itemCount: number;
}

interface MultiCarouselBehavior<TRef extends HTMLElement>
  extends Omit<CarouselBehavior<TRef>, 'currentPosition' | 'setCurrentPosition'> {
  countPerSlide: number;
}

export function useMultiCarouselBehavior<TRef extends HTMLElement>({
  desktopColumnCount,
  itemCount
}: MultiCarouselProps): MultiCarouselBehavior<TRef> {
  const {
    scrollableRef,
    screenSize,
    prevScreenSize,
    navigate,
    currentPosition,
    setCurrentPosition
  } = useCarouselBehavior<TRef>({ itemCount });

  const isSmallScreen = screenSize === ScreenSize.Small;
  const countPerSlide = isSmallScreen ? 1 : desktopColumnCount;
  const hasPrevItem = currentPosition > 0;
  const hasNextItem = itemCount > (currentPosition + 1) * countPerSlide;

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
