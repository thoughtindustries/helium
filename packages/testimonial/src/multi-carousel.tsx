import React, { Children, createContext, useContext, useMemo } from 'react';
import clsx from 'clsx';
import {
  TestimonialItemProps,
  TestimonialMultiCarouselContextType,
  TestimonialCarouselProps
} from './types';
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
  children
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
    'no-underline font-normal cursor-pointer p-0 text-center text-gray-600 top-2/4 absolute';
  const prevNavClassNames = `${navBtnBaseClassNames} left-0`;
  const nextNavClassNames = `${navBtnBaseClassNames} right-0`;

  return (
    <TestimonialMultiCarouselContext.Provider value={value}>
      <div className="whitespace-nowrap overflow-hidden relative">
        <ul ref={scrollableRef} style={styles} className="transition-all duration-500 flex">
          {children}
        </ul>
        {hasPrevItem && (
          <button className={prevNavClassNames} onClick={() => navigate(-1)} aria-label="left">
            <IconLeft />
          </button>
        )}
        {hasNextItem && (
          <button className={nextNavClassNames} onClick={() => navigate(1)} aria-label="right">
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

  const classNames = clsx([
    'px-5 pb-5 text-base flex-none w-full',
    itemClassnameByDesktopColumnCount(desktopColumnCount)
  ]);

  const wrappedStyles = {
    backgroundColor: backgroundColor,
    color: textColor,
    backgroundImage: `url(${asset})`
  };

  return (
    <li className={classNames}>
      <div className="text-center py-3 px-1">
        <div className="relative before:block before:w-full flex justify-center">
          <div
            className={`${
              alignment === Alignment.Center
                ? 'text-center px-4 py-0'
                : alignment === Alignment.Left
                ? 'text-left px-4 py-0'
                : 'text-right px-4 py-0'
            } absolute`}
            style={wrappedStyles}
          >
            <h1 className="text-4xl mb-6">{quote}</h1>
            <p className="text-2xl relative pt-2 m-0 italic before:w-full before:border-solid before:border-t before:border-t-current before:block before:absolute before:top-0 before:h-0">
              {username}
            </p>
            <p className="text-base italic">{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

TestimonialMultiCarousel.displayName = 'TestimonialMultiCarousel';
TestimonialMultiCarousel.Item = Item;

export default TestimonialMultiCarousel;
