import React, { createContext, useContext, useMemo } from 'react';
import clsx from 'clsx';
import {
  FeaturedContentContentProps,
  FeaturedContentContentItemProps,
  FeaturedContentTileImageOverlayContextType,
  FeaturedContentHydratedContentItem
} from '../../types';
import { tileClassnameByDesktopColumnCount, limitText } from './utils';
import ContentWrapper from './wrapper';
import ItemLinkWrapper from './item-link-wrapper';
import ItemQueueButton from './item-queue-button';
import ItemAssetBlock from './item-asset-block';

const ContentTileImageOverlayContext = createContext<
  FeaturedContentTileImageOverlayContextType | undefined
>(undefined);

function useContentTileImageOverlayContext() {
  const context = useContext(ContentTileImageOverlayContext);
  if (!context) {
    throw new Error('No context found for ContentTileImageOverlay');
  }
  return context;
}

const ContentTileImageOverlay = ({
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
    <ContentTileImageOverlayContext.Provider value={value}>
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
    </ContentTileImageOverlayContext.Provider>
  );
};

const Item = ({ ...item }: FeaturedContentContentItemProps): JSX.Element => {
  const { asset, title, description } = item;
  const { canAddToQueue } = item as FeaturedContentHydratedContentItem;
  const { onAddedToQueue, onClick } = useContentTileImageOverlayContext();

  return (
    <li>
      <ItemLinkWrapper item={item} onClick={onClick}>
        <div className="relative">
          <ItemAssetBlock asset={asset} />
          <div className="absolute bottom-0 left-0 p-4 w-full bg-gray-900 bg-opacity-80">
            <h4 className="mb-0 text-sm text-white">{title}</h4>
            {description && (
              <p className="mt-1 mb-0 text-xs text-white">{limitText(description, 150)}</p>
            )}
            {canAddToQueue && (
              <p className="mt-1 -mb-1 text-xs text-white text-left">
                <ItemQueueButton
                  item={item}
                  onClickAsync={onAddedToQueue}
                  classNames="hover:text-gray-600"
                />
              </p>
            )}
          </div>
        </div>
      </ItemLinkWrapper>
    </li>
  );
};

ContentTileImageOverlay.displayName = 'ContentTileImageOverlay';
ContentTileImageOverlay.Item = Item;

export default ContentTileImageOverlay;
