import React, { Children, createContext, useContext, useMemo } from 'react';
import clsx from 'clsx';
import { formatTime } from '@thoughtindustries/content';
import {
  FeaturedContentContentProps,
  FeaturedContentContentItemProps,
  FeaturedContentMultiCarouselContextType,
  FeaturedContentHydratedContentItem
} from '../../types';
import ContentWrapper from './wrapper';
import ItemLinkWrapper from './item-link-wrapper';
import ItemAssetBlock from './item-asset-block';
import ItemCompletedBlock from './item-completed-block';
import ItemQueueButton from './item-queue-button';
import { IconLeft, IconRight } from './icons';
import { useMultiCarouselBehavior } from './use-multi-carousel-behavior';
import { limitText } from './utils';

const ContentMultiCarouselContext = createContext<
  FeaturedContentMultiCarouselContextType | undefined
>(undefined);

function useContentMultiCarouselContext() {
  const context = useContext(ContentMultiCarouselContext);
  if (!context) {
    throw new Error('No context found for ContentMultiCarouselContext');
  }
  return context;
}

const ContentMultiCarousel = ({
  headerOptions = {},
  desktopColumnCount,
  children,
  onAddedToQueue,
  onClick
}: FeaturedContentContentProps): JSX.Element => {
  const totalItems = Children.count(children);

  const { scrollableRef, hasPrevItem, hasNextItem, navigate } =
    useMultiCarouselBehavior<HTMLUListElement>({
      desktopColumnCount,
      itemCount: totalItems
    });

  const value = useMemo(
    () => ({
      desktopColumnCount,
      onAddedToQueue,
      onClick
    }),
    [desktopColumnCount, onAddedToQueue, onClick]
  );

  const styles = {
    touchAction: 'none'
  };
  const navBtnBaseClassNames =
    'no-underline font-normal cursor-pointer p-0 text-center text-gray-600 top-2/4 absolute';
  const prevNavClassNames = `${navBtnBaseClassNames} left-0`;
  const nextNavClassNames = `${navBtnBaseClassNames} right-0`;

  return (
    <ContentMultiCarouselContext.Provider value={value}>
      <ContentWrapper headerOptions={headerOptions}>
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
      </ContentWrapper>
    </ContentMultiCarouselContext.Provider>
  );
};

const ItemTitleBlock = ({
  title,
  courseStartDate,
  timeZone
}: {
  title?: string;
  courseStartDate?: string;
  timeZone?: string;
}) => (
  <>
    {title && <h4 className="text-sm font-bold mb-2">{title}</h4>}
    {courseStartDate && (
      <div className="text-xs text-gray-700 mb-1.5">
        {formatTime(courseStartDate, timeZone, 'MM/DD/YYYY')}
      </div>
    )}
  </>
);

const ItemSourceBlock = ({
  contentTypeLabel,
  source
}: {
  contentTypeLabel?: string;
  source?: string;
}) => (
  <p className="text-xs text-gray-700 mb-1.5">
    {contentTypeLabel && <strong>{contentTypeLabel}</strong>}
    {contentTypeLabel && source && <>|{source}</>}
    {!contentTypeLabel && source && <strong>{source}</strong>}
  </p>
);

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

const Item = ({ ...item }: FeaturedContentContentItemProps): JSX.Element => {
  const { asset, title, description } = item;
  const {
    courseStartDate,
    contentTypeLabel,
    source,
    authors,
    canAddToQueue,
    isCompleted,
    timeZone
  } = item as FeaturedContentHydratedContentItem;
  const { onAddedToQueue, onClick, desktopColumnCount } = useContentMultiCarouselContext();

  const classNames = clsx([
    'px-5 pb-5 text-base flex-none w-full',
    itemClassnameByDesktopColumnCount(desktopColumnCount)
  ]);
  const displayAuthors = authors?.length ? authors.join(', ') : null;

  return (
    <li className={classNames}>
      <ItemLinkWrapper item={item} onClick={onClick}>
        <div className="border-r-2 border-solid border-white relative bg-gray-100">
          <div className="relative">
            {isCompleted && <ItemCompletedBlock />}
            <ItemAssetBlock asset={asset} classNames="p-2.5 pb-0" />
          </div>
          <div className="text-center py-3 px-1">
            <ItemTitleBlock title={title} courseStartDate={courseStartDate} timeZone={timeZone} />
            <ItemSourceBlock contentTypeLabel={contentTypeLabel} source={source} />
            {displayAuthors && <p className="text-xs mb-1 text-gray-700">{displayAuthors}</p>}
            {description && (
              <p className="mt-1.5 mb-0 text-xs relative text-left py-0 px-2">
                {limitText(description, 150)}
              </p>
            )}
            {canAddToQueue && (
              <p className="text-xs text-gray-700 text-left mt-1.5 mr-0 -mb-1.5 ml-1.5">
                <ItemQueueButton item={item} onClickAsync={onAddedToQueue} />
              </p>
            )}
          </div>
        </div>
      </ItemLinkWrapper>
    </li>
  );
};

ContentMultiCarousel.displayName = 'ContentMultiCarousel';
ContentMultiCarousel.Item = Item;

export default ContentMultiCarousel;
