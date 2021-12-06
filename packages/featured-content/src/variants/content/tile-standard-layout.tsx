import React, { createContext, useContext, useMemo } from 'react';
import { format } from 'date-fns';
import {
  FeaturedContentContentProps,
  FeaturedContentContentItemProps,
  FeaturedContentTileStandardLayoutContextType,
  FeaturedContentContentItemRibbon
} from '../../types';
import ContentWrapper from './wrapper';
import ItemLinkWrapper from './item-link-wrapper';
import ItemQueueButton from './item-queue-button';
import ItemAssetBlock from './item-asset-block';
import ItemCompletedBlock from './item-completed-block';

const ContentTileStandardLayoutContext = createContext<
  FeaturedContentTileStandardLayoutContextType | undefined
>(undefined);

function useContentTileStandardLayoutContext() {
  const context = useContext(ContentTileStandardLayoutContext);
  if (!context) {
    throw new Error('No context found for ContentTileStandardLayout');
  }
  return context;
}

const ContentTileStandardLayout = ({
  headerOptions = {},
  desktopColumnCount,
  children,
  onAddedToQueue,
  onClick
}: FeaturedContentContentProps): JSX.Element => {
  const value = useMemo(
    () => ({
      desktopColumnCount,
      onAddedToQueue,
      onClick
    }),
    [desktopColumnCount, onAddedToQueue, onClick]
  );

  return (
    <ContentTileStandardLayoutContext.Provider value={value}>
      <ContentWrapper headerOptions={headerOptions}>
        <ul className={`grid grid-cols-1 md:grid-cols-${desktopColumnCount} gap-5`}>{children}</ul>
      </ContentWrapper>
    </ContentTileStandardLayoutContext.Provider>
  );
};

const ItemTitleBlock = ({ title, courseStartDate }: { title: string; courseStartDate?: Date }) => (
  <p className="mb-1">
    {title}
    {courseStartDate && (
      <>
        <br />
        <span className="text-xs text-gray-700">{format(courseStartDate, 'MM/dd/yyyy')}</span>
      </>
    )}
  </p>
);

const ItemSourceBlock = ({
  contentTypeLabel,
  source
}: {
  contentTypeLabel?: string;
  source?: string;
}) => (
  <div className="text-xs text-gray-700">
    {contentTypeLabel && <strong>{contentTypeLabel}</strong>}
    {contentTypeLabel && source && <>|{source}</>}
    {!contentTypeLabel && source && <strong>{source}</strong>}
  </div>
);

// TODO: might consider extracting as common component
const Star = ({ marked }: { marked: boolean }) => (
  <span className="text-accent">{marked ? '\u2605' : '\u2606'}</span>
);
const Stars = ({ gradePercentage }: { gradePercentage: number }) => {
  let stars;

  stars = gradePercentage * 0.05;
  const remainder = stars % 0.5;

  if (remainder > 0) {
    stars = stars - remainder + 0.5;
  }

  const starCount = parseInt(stars.toString().replace('.', ''));

  return (
    <div>
      {Array.from({ length: 5 }, (v, i) => (
        <Star key={`star-${i}`} marked={starCount > i} />
      ))}
    </div>
  );
};

// TODO: might consider extracting as common component
const ItemRibbon = ({
  ribbon,
  attached
}: {
  ribbon: FeaturedContentContentItemRibbon;
  attached: boolean;
}) => {
  const { contrastColor, bgColor, darkerColor, label } = ribbon;
  const wrapperStyles = {
    color: contrastColor,
    backgroundColor: bgColor
  };
  const wrapperClassnames = `text-xs font-normal leading-none absolute right-0 uppercase max-w-1/2 overflow-ellipsis z-10 px-1.5 py-1 -top-1 whitespace-no-wrap ${
    attached ? '-right-2' : ''
  }`;
  const cornerStyles = {
    borderTopColor: darkerColor,
    borderLeftColor: darkerColor
  };
  return (
    <div className={wrapperClassnames} style={wrapperStyles}>
      {attached && (
        <div
          className="right-0 block border-4 border-solid h-0 w-0 absolute border-transparent top-full"
          style={cornerStyles}
        ></div>
      )}
      {label}
    </div>
  );
};

const ItemCtaBlock = ({
  isActive,
  callToAction
}: {
  isActive?: boolean;
  callToAction?: string;
}) => {
  if (isActive) {
    return (
      <span className="border-none rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 text-accent float-right text-left h-auto hover:text-accent">
        {callToAction}
      </span>
    );
  }

  return <span className="text-xs">{callToAction}</span>;
};

const ItemPriceBlock = ({
  priceInCents,
  hasAvailability,
  suggestedRetailPriceInCents
}: {
  priceInCents?: number;
  hasAvailability?: boolean;
  suggestedRetailPriceInCents?: number;
}) => {
  if (hasAvailability) {
    return null;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const priceFormat = (priceInCents: number) => formatter.format(priceInCents / 100);

  return (
    <>
      <span>{priceFormat(priceInCents as number)}</span>
      {suggestedRetailPriceInCents && (
        <span className="line-through text-gray-700 text-xs">
          {priceFormat(suggestedRetailPriceInCents as number)}
        </span>
      )}
    </>
  );
};

const Item = ({ ...item }: FeaturedContentContentItemProps): JSX.Element => {
  const {
    ribbon,
    isCompleted,
    asset,
    title,
    courseStartDate,
    contentTypeLabel,
    source,
    authors,
    shortDescription,
    rating,
    canAddToQueue,
    isActive,
    callToAction,
    priceInCents,
    hasAvailability,
    suggestedRetailPriceInCents
  } = item;
  const { onAddedToQueue, onClick, desktopColumnCount } = useContentTileStandardLayoutContext();

  const columnCountIsOneOrTwo = desktopColumnCount === 1 || desktopColumnCount === 2;
  const gridItemDesktopClassnames = columnCountIsOneOrTwo ? ' md:grid-cols-2 md:gap-x-2' : '';
  const assetWrapperDesktopClassnames = columnCountIsOneOrTwo ? ' md:p-2' : '';

  return (
    <li>
      <ItemLinkWrapper item={item} onClick={onClick}>
        <div
          className={`grid grid-cols-1${gridItemDesktopClassnames} border border-solid border-gray-300 relative`}
        >
          {ribbon && <ItemRibbon ribbon={ribbon} attached />}
          <div className={`relative${assetWrapperDesktopClassnames}`}>
            {isCompleted && <ItemCompletedBlock />}
            <ItemAssetBlock asset={asset} />
          </div>
          <div className="p-2.5">
            {title && <ItemTitleBlock title={title} courseStartDate={courseStartDate} />}
            <ItemSourceBlock contentTypeLabel={contentTypeLabel} source={source} />
            {authors && <p className="text-xs mb-1 text-gray-700">{authors}</p>}
            {shortDescription && (
              <p className="text-xs text-gray-700 pt-1 mb-0 overflow-hidden">{shortDescription}</p>
            )}
            {rating && <Stars gradePercentage={rating} />}
            <hr className="my-3" />
            <div className="text-base leading-none">
              {canAddToQueue && (
                <div className="flex flex-wrap-reverse justify-between items-end">
                  <span>
                    <ItemQueueButton item={item} onClickAsync={onAddedToQueue} />
                  </span>
                  <span>
                    <ItemCtaBlock isActive={isActive} callToAction={callToAction} />
                  </span>
                </div>
              )}
              {!canAddToQueue && priceInCents && (
                <>
                  <ItemPriceBlock
                    priceInCents={priceInCents}
                    hasAvailability={hasAvailability}
                    suggestedRetailPriceInCents={suggestedRetailPriceInCents}
                  />
                  <ItemCtaBlock isActive callToAction={callToAction} />
                </>
              )}
              {!canAddToQueue && !priceInCents && (
                <ItemCtaBlock isActive={isActive} callToAction={callToAction} />
              )}
            </div>
          </div>
        </div>
      </ItemLinkWrapper>
    </li>
  );
};

ContentTileStandardLayout.displayName = 'ContentTileStandardLayout';
ContentTileStandardLayout.Item = Item;

export default ContentTileStandardLayout;
