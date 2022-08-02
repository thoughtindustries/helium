import React from 'react';
import { formatTime } from '@thoughtindustries/content';
import {
  CatalogParams,
  HeightEqualizer,
  HeightEqualizerElement,
  HeightEqualizerElementProps
} from '@thoughtindustries/catalog/src/core';
import {
  CatalogResultItem,
  CatalogResultsProps,
  PriceFormatFn
} from '@thoughtindustries/catalog/src/types';
import ItemLinkWrapper from '@thoughtindustries/catalog/src/variants/display-type-results/item-link-wrapper';
import ItemAssetBlock from '@thoughtindustries/catalog/src/variants/display-type-results/item-asset-block';
import ItemRibbon from '@thoughtindustries/catalog/src/variants/display-type-results/item-ribbon';
import clsx from 'clsx';
import { limitText } from '@thoughtindustries/catalog/src/variants/display-type-results/utilities';

type DisplayTypeResultsGridProps = Pick<CatalogResultsProps, 'onClick' | 'onAddedToQueue'> &
  Pick<CatalogParams, 'displayAuthorsEnabled' | 'displayStartDateEnabled' | 'displayBundle'> & {
    items: CatalogResultItem[];
    priceFormatFn: PriceFormatFn;
  };

type DisplayTypeResultsGridItemProps = Omit<DisplayTypeResultsGridProps, 'items'> & {
  item: CatalogResultItem;
};

const HeightEqualizerElementWrapper = ({
  className,
  children,
  ...restProps
}: HeightEqualizerElementProps) => {
  // stylings
  const baseClassnames = 'overflow-hidden block transition-all';
  return (
    <HeightEqualizerElement className={clsx(className, baseClassnames)} {...restProps}>
      {children}
    </HeightEqualizerElement>
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
  <div className="mb-1 font-normal text-lg">
    <HeightEqualizerElementWrapper name="title" as="h3" className="leading-6">
      {title}
    </HeightEqualizerElementWrapper>
    <HeightEqualizerElementWrapper name="course-date" className="leading-4">
      {courseStartDate && (
        <span className="text-xs text-gray-700">
          {contentTypeLabel} | {formatTime(courseStartDate, timeZone, 'MM/DD/YYYY')}
        </span>
      )}
    </HeightEqualizerElementWrapper>
  </div>
);

const ItemSourceBlock = ({
  contentTypeLabel,
  courseStartDate
}: {
  contentTypeLabel?: string;
  courseStartDate?: string;
}) => (
  <HeightEqualizerElementWrapper name="source" className="text-sm text-gray-500">
    <p>
      {courseStartDate && <span className="flex text-md text-gray-500">{contentTypeLabel}</span>}
    </p>
  </HeightEqualizerElementWrapper>
);

const ItemCtaBlock = ({
  isActive,
  callToAction
}: {
  isActive?: boolean;
  callToAction?: string;
}) => {
  if (isActive) {
    return (
      <span className="border-none text-blue-500 rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 float-right h-auto hover:text-accent">
        {callToAction}
      </span>
    );
  }

  return <span className="text-xs">{callToAction}</span>;
};

const DisplayTypeResultsGridItem = ({
  onClick,
  displayStartDateEnabled,
  item,
  priceFormatFn
}: DisplayTypeResultsGridItemProps): JSX.Element => {
  const {
    asset,
    title,
    description,
    isActive,
    ribbon,
    courseStartDate,
    contentTypeLabel,
    callToAction,
    timeZone
  } = item;

  // derived values
  const displayCourseStartDate = displayStartDateEnabled ? courseStartDate : undefined;

  return (
    <li>
      <>
        <ItemLinkWrapper item={item} onClick={onClick}>
          <div className="grid grid-cols-1 relative">
            <div className="bg-white px-6 py-6 rounded-md">
              {ribbon && <ItemRibbon ribbon={ribbon} attached attachedClassnames="-top-1" />}
              <div className="relative">
                <ItemAssetBlock asset={asset} />
              </div>
              <div className="pt-5">
                {title && (
                  <ItemTitleBlock
                    title={title}
                    courseStartDate={displayCourseStartDate}
                    timeZone={timeZone}
                    contentTypeLabel={contentTypeLabel}
                  />
                )}
                <ItemSourceBlock
                  contentTypeLabel={contentTypeLabel}
                  courseStartDate={courseStartDate}
                />
                <div className="text-sm text-gray-500 pt-3 mb-0">
                  {description && limitText(description, 75)}
                </div>
                <hr className="my-2" />
                <div className="text-base leading-none py-2">
                  <ItemCtaBlock isActive={isActive} callToAction={callToAction} />
                </div>
              </div>
            </div>
          </div>
        </ItemLinkWrapper>
      </>
    </li>
  );
};

const DisplayTypeResultsGrid = ({
  items,
  ...restProps
}: DisplayTypeResultsGridProps): JSX.Element => {
  const contentItems = items
    .filter(({ isNotCompleted }) => !isNotCompleted)
    .map((item, index) => (
      <DisplayTypeResultsGridItem key={`result-item-${index}`} item={item} {...restProps} />
    ));
  return (
    <HeightEqualizer>
      <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{contentItems}</ul>
    </HeightEqualizer>
  );
};

DisplayTypeResultsGrid.displayName = 'DisplayTypeResultsGrid';
export default DisplayTypeResultsGrid;
function timezone(courseStartDate: string, timezone: any, arg2: string): React.ReactNode {
  throw new Error('Function not implemented.');
}
