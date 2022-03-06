import React, { Children, createContext, useContext, useMemo } from 'react';
import clsx from 'clsx';
import {
  TestimonialItemProps,
  TestimonialMultiCarouselContextType,
  TestimonialCarouselProps
} from './types';
import { ScreenSize, useScreenSize } from './use-screen-size';
import { IconLeft, IconRight } from './icons';
import { useMultiCarouselBehavior } from './use-multi-carousel-behavior';

enum Alignment {
  Left = 'Left',
  Right = 'Right',
  Center = 'Center'
}

const TestimonialMultiCarouselContext = createContext<
  TestimonialMultiCarouselContextType | undefined
>(undefined);

function useTestimonialMultiCarouselContext() {
  const context = useContext(TestimonialMultiCarouselContext);
  if (!context) {
    throw new Error('No context found for TestimonialMultiCarouselContext');
  }
  return context;
}

const TestimonialMultiCarousel = ({
  desktopColumnCount,
  children,
  textColor
}: TestimonialCarouselProps): JSX.Element => {
  const totalItems = Children.count(children);

  const { scrollableRef, hasPrevItem, hasNextItem, navigate } =
    useMultiCarouselBehavior<HTMLUListElement>({
      desktopColumnCount,
      itemCount: totalItems
    });

  const value = useMemo(
    () => ({
      desktopColumnCount
    }),
    [desktopColumnCount]
  );

  const styles = {
    touchAction: 'none'
  };
  const navBtnBaseClassNames =
    'no-underline font-normal cursor-pointer p-0 text-center text-gray-600 top-36 absolute';
  const prevNavClassNames = `${navBtnBaseClassNames} left-0`;
  const nextNavClassNames = `${navBtnBaseClassNames} right-0`;

  return (
    <TestimonialMultiCarouselContext.Provider value={value}>
      <div className="overflow-hidden relative">
        <ul ref={scrollableRef} style={styles} className="transition-all duration-500 flex">
          {children}
        </ul>
        {hasPrevItem && (
          <button
            className={prevNavClassNames}
            onClick={() => navigate(-1)}
            aria-label="left"
            style={{ color: textColor }}
          >
            <IconLeft />
          </button>
        )}
        {hasNextItem && (
          <button
            className={nextNavClassNames}
            onClick={() => navigate(1)}
            aria-label="right"
            style={{ color: textColor }}
          >
            <IconRight />
          </button>
        )}
      </div>
    </TestimonialMultiCarouselContext.Provider>
  );
};

/**
 * in tailwind JIT mode, dynamic values like `md:w-1/${count}` are not supported.
 * use static complete strings instead.
 * @param desktopColumnCount
 * @returns
 */
const itemClassnameByDesktopColumnCount = (desktopColumnCount: number): string => {
  switch (desktopColumnCount) {
    case 2:
      return 'md:w-1/2';
    case 3:
      return 'md:w-1/3';
    case 4:
      return 'md:w-1/4';
    case 5:
      return 'md:w-1/5';
  }
  return '';
};

const Item = ({ ...item }: TestimonialItemProps): JSX.Element => {
  const { quote, username, description, backgroundColor, textColor, alignment, asset } = item;
  const { desktopColumnCount } = useTestimonialMultiCarouselContext();
  const screenSize = useScreenSize();
  const isSmallScreen = screenSize === ScreenSize.Small;
  const quoteSize = isSmallScreen ? 'text-xl' : 'text-3xl';
  const nameSize = isSmallScreen ? 'text-md' : 'text-xl';
  const descriptionSize = isSmallScreen ? 'text-sm' : 'text-lg';

  const classNames = clsx([
    'flex-none w-full p-8',
    itemClassnameByDesktopColumnCount(desktopColumnCount)
  ]);

  const setAlignment = (alignment: string, prop: string) => {
    if (prop === 'justify') {
      return alignment === Alignment.Center
        ? 'justify-center'
        : alignment === Alignment.Left
        ? 'justify-start'
        : 'justify-end';
    } else {
      return alignment === Alignment.Center
        ? 'text-center'
        : alignment === Alignment.Left
        ? 'text-left'
        : 'text-right';
    }
  };

  const wrappedStyles = {
    backgroundColor: backgroundColor,
    color: textColor,
    backgroundImage: `url(${asset})`
  };

  return (
    <li className={classNames} style={wrappedStyles}>
      <div className="text-center py-36 px-1 block">
        <div
          className={`relative before:block before:w-full flex items-center py-0 px-12 ${setAlignment(
            alignment,
            'justify'
          )}`}
        >
          <div className={`${setAlignment(alignment, 'text')} absolute`}>
            <h1 className={`${quoteSize} mb-6`}>{quote}</h1>
            <p
              className={`${nameSize} relative pt-2 m-0 italic before:w-full before:border-solid before:border-t before:border-t-current before:block before:absolute before:top-0 before:h-0`}
            >
              {username}
            </p>
            <p className={`${descriptionSize} italic`}>{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

TestimonialMultiCarousel.displayName = 'TestimonialMultiCarousel';
TestimonialMultiCarousel.Item = Item;

export default TestimonialMultiCarousel;
