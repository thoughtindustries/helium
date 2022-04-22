import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { ScreenSize, useScreenSize } from './use-screen-size';
import { usePrevious } from './use-previous';

export interface MobileTopbarBehavior<TRef extends HTMLElement> {
  scrollableRef: RefObject<TRef>;
  navigate: (direction: number) => void;
  reset: () => void;
  isSmallScreen: boolean;
  isExpanded: boolean;
  toggleExpand: () => void;
  currentMenuId?: string;
}

export function useMobileTopbarBehavior<TRef extends HTMLElement>(): MobileTopbarBehavior<TRef> {
  const scrollableRef: RefObject<TRef> = useRef(null);
  const screenSize = useScreenSize();
  const prevScreenSize = usePrevious(screenSize);
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentMenuId, setCurrentMenuId] = useState<string | undefined>(undefined);

  const navigate = useCallback(
    (direction, menuId?: string) => {
      if (scrollableRef.current) {
        const newLevel = currentLevel + direction;
        const percentage = -newLevel * 100;
        scrollableRef.current.style.transform = `translateX(${percentage}%)`;
        setCurrentLevel(newLevel);
        setCurrentMenuId(menuId);
      }
    },
    [currentLevel]
  );

  const reset = useCallback(() => {
    if (scrollableRef.current) {
      scrollableRef.current.style.transform = 'translateX(-0%)';
      setCurrentLevel(0);
      setIsExpanded(false);
      setCurrentMenuId(undefined);
    }
  }, []);

  const toggleExpand = useCallback(() => {
    setIsExpanded(isExpanded => !isExpanded);
    if (isExpanded) {
      reset();
    }
  }, [isExpanded]);

  useEffect(() => {
    const isCurrentSmallScreen = screenSize === ScreenSize.Small;
    const isPreviousSmallScreen = prevScreenSize === ScreenSize.Small;
    const changedFromSmallScreen = isPreviousSmallScreen && !isCurrentSmallScreen;
    const changedToSmallScreen = !isPreviousSmallScreen && isCurrentSmallScreen;
    if (changedFromSmallScreen || changedToSmallScreen) {
      reset();
    }
  }, [screenSize, prevScreenSize, reset]);

  return {
    scrollableRef,
    navigate,
    reset,
    isSmallScreen: screenSize === ScreenSize.Small,
    isExpanded,
    toggleExpand,
    currentMenuId
  };
}
