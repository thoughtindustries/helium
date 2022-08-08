import React, { createContext, useContext, useMemo } from 'react';
import { formatTime } from '@thoughtindustries/content';
import {
  FeaturedContentContentProps,
  FeaturedContentContentItemProps,
  FeaturedContentTileStandardLayoutContextType,
  FeaturedContentContentItemRibbon,
  FeaturedContentHydratedContentItem
} from '@thoughtindustries/featured-content/types';
import { limitText } from '@thoughtindustries/featured-content/src/variants/content/utils';
import ContentWrapper from '@thoughtindustries/featured-content/src/variants/content/wrapper';
import ItemLinkWrapper from '@thoughtindustries/featured-content/src/variants/content/item-link-wrapper';
import ItemAssetBlock from '@thoughtindustries/featured-content/src/variants/content/item-asset-block';
import ItemCompletedBlock from '@thoughtindustries/featured-content/src/variants/content/item-completed-block';

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
        <ul className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">{children}</ul>
      </ContentWrapper>
    </ContentTileStandardLayoutContext.Provider>
  );
};

const ItemTitleBlock = ({
  title,
  courseStartDate,
  timeZone,
  contentTypeLabel
}: {
  title: string;
  courseStartDate?: string;
  timeZone?: string;
  contentTypeLabel?: string;
}) => (
  <p className="mb-1">
    <div className="font-bold">{title}</div>
    {courseStartDate && (
      <>
        <span className="flex text-md text-gray-500 my-3">
          {contentTypeLabel} | {formatTime(courseStartDate, timeZone, 'MM/DD/YYYY')}
        </span>
      </>
    )}
  </p>
);

const ItemRibbon = ({
  ribbon,
  attached
}: {
  ribbon: FeaturedContentContentItemRibbon;
  attached: boolean;
}) => {
  const { contrastColor, color, darkerColor, label } = ribbon;
  const wrapperStyles = {
    color: contrastColor,
    backgroundColor: color
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

const Item = ({ ...item }: FeaturedContentContentItemProps): JSX.Element => {
  const { asset, title, description } = item;
  const { ribbon, isCompleted, courseStartDate, contentTypeLabel, authors, timeZone } =
    item as FeaturedContentHydratedContentItem;
  const { onClick, desktopColumnCount } = useContentTileStandardLayoutContext();

  const columnCountIsOneOrTwo = desktopColumnCount === 1 || desktopColumnCount === 2;
  const gridItemDesktopClassnames = columnCountIsOneOrTwo ? ' md:grid-cols-2 md:gap-x-2' : '';
  const assetWrapperDesktopClassnames = columnCountIsOneOrTwo ? ' md:p-2' : '';
  return (
    <li>
      <ItemLinkWrapper item={item} onClick={onClick}>
        <div
          className={`${gridItemDesktopClassnames} bg-white rounded-lg relative shadow-md space-y-6`}
        >
          {ribbon && <ItemRibbon ribbon={ribbon} attached />}
          <ItemAssetBlock asset={asset} />
          <div className={`relative${assetWrapperDesktopClassnames}`}>
            {isCompleted && <ItemCompletedBlock />}
          </div>
          <div className="">
            {title && (
              <ItemTitleBlock
                title={title}
                courseStartDate={courseStartDate}
                timeZone={timeZone}
                contentTypeLabel={contentTypeLabel}
              />
            )}
            {description && (
              <p className="text-md text-gray-500 font-light pt-1 mb-0 overflow-hidden">
                {limitText(description, 60)}
              </p>
            )}
            <hr className="my-3" />
            <div className="text-base">
              <div className="flex justify-end font-light text-blue-500">View details</div>
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
