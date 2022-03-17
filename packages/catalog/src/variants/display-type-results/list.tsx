import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatTime } from '@thoughtindustries/content';
import { CatalogResultItem, CatalogResultsProps } from '../../types';
import ItemLinkWrapper from './item-link-wrapper';
import ItemAssetBlock from './item-asset-block';
import ItemQueueButton from './item-queue-button';
import ItemRibbon from './item-ribbon';
import { CheckIcon } from '../../icons';
import { priceFormat } from './utilities';
import { CatalogParams } from '../../core';

type DisplayTypeResultsListProps = Pick<CatalogResultsProps, 'onClick' | 'onAddedToQueue'> &
  Pick<CatalogParams, 'displayStartDateEnabled'> & {
    items: CatalogResultItem[];
  };

type DisplayTypeResultsListItemProps = Omit<DisplayTypeResultsListProps, 'items'> & {
  item: CatalogResultItem;
};

const ItemSourceBlock = ({
  contentTypeLabel,
  authors,
  source
}: {
  contentTypeLabel?: string;
  authors?: string[];
  source?: string;
}) => {
  const sourceWithAuthors = !!authors?.length && (
    <>
      | {authors.join(', ')}
      {source && <p className="mb-1 text-gray-700">{source}</p>}
    </>
  );
  const sourceWithoutAuthors = !authors?.length && <>| {source}</>;
  return (
    <div className="mt-3 text-xs">
      <strong>{contentTypeLabel}</strong>
      {sourceWithAuthors}
      {sourceWithoutAuthors}
    </div>
  );
};

const getContentColumnClassnames = ({
  showCallToAction,
  hasAsset,
  assetIsWide
}: {
  showCallToAction: boolean;
  hasAsset: boolean;
  assetIsWide: boolean;
}): string => {
  if (showCallToAction && hasAsset) {
    return 'col-span-full md:col-span-5';
  }

  if (hasAsset) {
    return assetIsWide ? 'col-span-full md:col-span-8' : 'col-span-full md:col-span-9';
  }

  if (showCallToAction) {
    return 'col-span-full md:col-span-9';
  }

  return 'col-span-full';
};

const DisplayTypeResultsListItem = ({
  onClick,
  onAddedToQueue,
  displayStartDateEnabled,
  item
}: DisplayTypeResultsListItemProps): JSX.Element => {
  const { t } = useTranslation();
  const {
    canAddToQueue,
    priceInCents,
    isActive,
    ribbon,
    isCompleted,
    title,
    courseStartDate,
    asset,
    contentTypeAssetAspectRatio,
    contentTypeLabel,
    authors,
    source,
    description,
    callToAction,
    suggestedRetailPriceInCents,
    timeZone
  } = item;

  // derived values
  const showCallToAction = !!priceInCents || !isActive || !!canAddToQueue;
  const assetIsWide = !contentTypeAssetAspectRatio || contentTypeAssetAspectRatio === '16:9';
  const hasAsset = !!asset;

  // stylings
  const titleColumnClassnames =
    showCallToAction || ribbon ? 'col-span-full md:col-span-3' : 'col-span-full';
  const imageColumnClassnames = assetIsWide
    ? 'col-span-full md:col-span-4'
    : 'col-span-6 md:col-span-2';
  const contentColumnClassnames = getContentColumnClassnames({
    showCallToAction,
    hasAsset,
    assetIsWide
  });
  const ctaColumnClassnames = 'col-span-full md:col-span-3';
  const ctaClassnames =
    'bg-accent hover:bg-accent-hover border border-solid border-accent hover:border-accent-hover rounded-sm font-normal font-secondary text-accent-contrast text-sm text-center no-underline leading-none cursor-pointer inline-block relative transition-colors ease-in-out duration-200 py-1 px-3 table mx-auto';
  const ribbonAttachedClassnames = '-top-5';

  return (
    <ItemLinkWrapper onClick={onClick} item={item}>
      <div className="mb-5 border-b border-solid border-gray-300 mr-2 pb-5">
        <div className="relative">
          <div className="grid grid-cols-4">
            <div className={titleColumnClassnames}>
              {isCompleted && (
                <div className="pb-1 flex items-center gap-x-1">
                  <i className="inline-block w-4 h-4 text-green-500" aria-label="Completed">
                    <CheckIcon />
                  </i>{' '}
                  {t('course-completed-decal')}
                </div>
              )}
              <h3 className="pr-3 text-black">
                {title}
                {displayStartDateEnabled && courseStartDate && (
                  <>
                    <br />
                    <span className="text-xs text-gray-700">
                      {formatTime(courseStartDate, timeZone, 'MM/DD/YYYY')}
                    </span>
                  </>
                )}
              </h3>
            </div>
          </div>
          {!showCallToAction && ribbon && <ItemRibbon ribbon={ribbon} attached={false} />}
        </div>

        <div className="relative">
          {showCallToAction && ribbon && (
            <ItemRibbon ribbon={ribbon} attached attachedClassnames={ribbonAttachedClassnames} />
          )}
          <div className="row collapse grid grid-cols-12 gap-4">
            {asset && (
              <div className={imageColumnClassnames}>
                <ItemAssetBlock asset={asset} />
              </div>
            )}

            <div className={contentColumnClassnames}>
              <ItemSourceBlock
                contentTypeLabel={contentTypeLabel}
                authors={authors}
                source={source}
              />

              <div className="text-xs mt-2 text-gray-700 pr-1 leading-6">{description}</div>
            </div>

            {showCallToAction && (
              <div className={ctaColumnClassnames}>
                <div className="border border-solid border-gray-300 p-4 mt-4 md:-mt-4 text-center">
                  {canAddToQueue && (
                    <div className="mt-4">
                      {isActive && <span className={ctaClassnames}>{callToAction}</span>}
                      {!isActive && <div className="text-xs">{callToAction}</div>}
                      <ItemQueueButton
                        item={item}
                        onAddedToQueue={onAddedToQueue}
                        classNames="mt-3 mx-auto block"
                      />
                    </div>
                  )}
                  {!canAddToQueue && priceInCents && (
                    <>
                      <div className="text-lg font-bold text-center">
                        {priceFormat(priceInCents)}
                      </div>
                      {suggestedRetailPriceInCents && (
                        <div className="text-base pt-0 line-through text-center text-gray-400">
                          {priceFormat(200)}
                        </div>
                      )}
                      <div className="mt-4">
                        <button className={ctaClassnames}>{callToAction}</button>
                      </div>
                    </>
                  )}
                  {!canAddToQueue && !priceInCents && <div className="text-xs">{callToAction}</div>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ItemLinkWrapper>
  );
};

const DisplayTypeResultsList = ({
  items,
  ...restProps
}: DisplayTypeResultsListProps): JSX.Element => {
  const contentItems = items
    .filter(({ isNotCompleted }) => !isNotCompleted)
    .map((item, index) => (
      <DisplayTypeResultsListItem key={`result-item-${index}`} item={item} {...restProps} />
    ));
  return <>{contentItems}</>;
};

DisplayTypeResultsList.displayName = 'DisplayTypeResultsList';
export default DisplayTypeResultsList;
