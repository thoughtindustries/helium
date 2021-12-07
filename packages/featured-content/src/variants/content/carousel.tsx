import React, { Children, createContext, useContext, useMemo } from 'react';
import {
  FeaturedContentContentCarouselProps,
  FeaturedContentContentItemProps,
  FeaturedContentCarouselContextType
} from '../../types';
import ContentWrapper from './wrapper';
import ItemLinkWrapper from './item-link-wrapper';
import ItemAssetBlock from './item-asset-block';
import { IconLeft, IconRight } from './icons';
import { useCarouselBehavior } from './use-carousel-behavior';

const ContentCarouselContext = createContext<FeaturedContentCarouselContextType | undefined>(
  undefined
);

function useContentCarouselContext() {
  const context = useContext(ContentCarouselContext);
  if (!context) {
    throw new Error('No context found for ContentCarouselContext');
  }
  return context;
}

const ItemDot = ({ isActive }: { isActive: boolean }): JSX.Element => {
  const activeClassname = isActive ? ' bg-accent' : ' bg-gray-600';
  return <div className={`rounded-full inline-block mr-1 h-1 w-1${activeClassname}`}></div>;
};

const ContentCarousel = ({
  headerOptions = {},
  children,
  onClick
}: FeaturedContentContentCarouselProps): JSX.Element => {
  const totalItems = Children.count(children);

  const { scrollableRef, hasPrevItem, hasNextItem, navigate, currentPosition } =
    useCarouselBehavior<HTMLUListElement>({
      itemCount: totalItems
    });

  const value = useMemo(
    () => ({
      onClick
    }),
    [onClick]
  );

  const styles = {
    touchAction: 'none'
  };
  const navBtnBaseClassNames =
    'transition-colors relative text-center no-underline inline-block text-accent-contrast bg-accent hover:bg-accent-hover border border-solid border-accent hover:border-accent-hover p-0.5';
  const enabledBtnClassNames = `${navBtnBaseClassNames} cursor-pointer`;
  const disabledBtnClassNames = `${navBtnBaseClassNames} cursor-default pointer-events-none opacity-25`;
  const prevNavClassNames = hasPrevItem ? enabledBtnClassNames : disabledBtnClassNames;
  const nextNavClassNames = hasNextItem ? enabledBtnClassNames : disabledBtnClassNames;

  return (
    <ContentCarouselContext.Provider value={value}>
      <ContentWrapper headerOptions={headerOptions}>
        <div className="whitespace-nowrap overflow-hidden relative">
          <ul ref={scrollableRef} style={styles} className="transition-all duration-500 m-0 flex">
            {children}
          </ul>
          <div className="absolute text-center left-0 w-full bottom-2">
            {Array.from({ length: totalItems }, (v, i) => (
              <ItemDot key={`dot-${i}`} isActive={currentPosition === i} />
            ))}
          </div>
          <div className="absolute bottom-2 right-6">
            <button className={prevNavClassNames} onClick={() => navigate(-1)} aria-label="left">
              <IconLeft />
            </button>
            <button className={nextNavClassNames} onClick={() => navigate(1)} aria-label="right">
              <IconRight />
            </button>
          </div>
        </div>
      </ContentWrapper>
    </ContentCarouselContext.Provider>
  );
};

const Item = ({ ...item }: FeaturedContentContentItemProps): JSX.Element => {
  const { asset, title, shortDescription } = item;
  const { onClick } = useContentCarouselContext();

  return (
    <li className="flex-none w-full whitespace-normal text-base">
      <ItemLinkWrapper item={item} onClick={onClick}>
        <div className="relative bg-gray-100">
          <ItemAssetBlock asset={asset} classNames="w-full" />
          <div className="absolute bottom-0 left-0 w-full p-4 pb-11 bg-gray-900 bg-opacity-60">
            <h4 className="mb-0 text-base font-bold text-white">{title}</h4>
            {shortDescription && (
              <p className="mt-1.5 mb-0 text-xs text-white">{shortDescription}</p>
            )}
          </div>
        </div>
      </ItemLinkWrapper>
    </li>
  );
};

ContentCarousel.displayName = 'ContentCarousel';
ContentCarousel.Item = Item;

export default ContentCarousel;
