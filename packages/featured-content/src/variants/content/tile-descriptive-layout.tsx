import React, { createContext, useContext, useMemo } from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';
import {
  FeaturedContentContentProps,
  FeaturedContentContentItemProps,
  FeaturedContentTileDescriptiveLayoutContextType
} from '../../types';
import { tileClassnameByDesktopColumnCount } from './utils';
import ContentWrapper from './wrapper';
import ItemLinkWrapper from './item-link-wrapper';
import ItemQueueButton from './item-queue-button';
import ItemAssetBlock from './item-asset-block';

const ContentTileDescriptiveLayoutContext = createContext<
  FeaturedContentTileDescriptiveLayoutContextType | undefined
>(undefined);

function useContentTileDescriptiveLayoutContext() {
  const context = useContext(ContentTileDescriptiveLayoutContext);
  if (!context) {
    throw new Error('No context found for ContentTileDescriptiveLayout');
  }
  return context;
}

const ContentTileDescriptiveLayout = ({
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
    <ContentTileDescriptiveLayoutContext.Provider value={value}>
      <ContentWrapper headerOptions={headerOptions}>
        <ul
          className={clsx([
            'grid gap-5 grid-cols-1',
            tileClassnameByDesktopColumnCount(desktopColumnCount)
          ])}
        >
          {children}
        </ul>
      </ContentWrapper>
    </ContentTileDescriptiveLayoutContext.Provider>
  );
};

const ItemTitleBlock = ({ title, courseStartDate }: { title?: string; courseStartDate?: Date }) => (
  <>
    {title && <p className="mt-4 mb-0 text-base font-bold">{title}</p>}
    {courseStartDate && (
      <div className="text-xs mb-1 text-gray-700">{format(courseStartDate, 'MM/dd/yyyy')}</div>
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
  <p className="text-xs text-gray-700 mb-1">
    {contentTypeLabel && <strong>{contentTypeLabel}</strong>}
    {contentTypeLabel && source && <>|{source}</>}
    {!contentTypeLabel && source && <strong>{source}</strong>}
  </p>
);

const Item = ({ ...item }: FeaturedContentContentItemProps): JSX.Element => {
  const {
    asset,
    title,
    courseStartDate,
    contentTypeLabel,
    source,
    authors,
    shortDescription,
    canAddToQueue
  } = item;
  const { onAddedToQueue, onClick, desktopColumnCount } = useContentTileDescriptiveLayoutContext();

  const columnCountIsOneOrTwo = desktopColumnCount === 1 || desktopColumnCount === 2;
  const gridItemDesktopClassnames = columnCountIsOneOrTwo ? ' md:grid-cols-2 md:gap-x-2' : '';
  const assetWrapperDesktopClassnames = columnCountIsOneOrTwo ? ' md:p-2' : '';
  const addToQueueClassnames = columnCountIsOneOrTwo ? ' justify-end' : ' justify-start';

  return (
    <li>
      <ItemLinkWrapper item={item} onClick={onClick}>
        <div
          className={`grid grid-cols-1${gridItemDesktopClassnames} border border-solid border-gray-300 relative`}
        >
          <div className={`relative${assetWrapperDesktopClassnames}`}>
            <ItemAssetBlock asset={asset} />
          </div>
          <div className="p-2.5">
            <ItemTitleBlock title={title} courseStartDate={courseStartDate} />
            <ItemSourceBlock contentTypeLabel={contentTypeLabel} source={source} />
            {authors && <p className="text-xs mb-1 text-gray-700">{authors}</p>}
            {shortDescription && (
              <p className="mt-4 text-xs relative before:content-[' '] before:border-text-accent before:border-t-2 before:absolute before:left-0 before:border-solid before:w-8 before:h-0 before:-top-1.5">
                {shortDescription}
              </p>
            )}
            <div className={`text-base leading-none flex${addToQueueClassnames}`}>
              {canAddToQueue && (
                <p className="-mb-1.5 mt-2 text-xs bottom-0">
                  <ItemQueueButton item={item} onClickAsync={onAddedToQueue} />
                </p>
              )}
            </div>
          </div>
        </div>
      </ItemLinkWrapper>
    </li>
  );
};

ContentTileDescriptiveLayout.displayName = 'ContentTileDescriptiveLayout';
ContentTileDescriptiveLayout.Item = Item;

export default ContentTileDescriptiveLayout;
