import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { CatalogResultItem, CatalogResultItemRibbon, CatalogResultsProps } from '../../types';
import ItemLinkWrapper from './item-link-wrapper';
import ItemAssetBlock from './item-asset-block';
import ItemQueueButton from './item-queue-button';
import { priceFormat } from './utilities';

type DisplayTypeResultsListProps = Pick<CatalogResultsProps, 'onClick' | 'onAddedToQueue'> & {
  displayStartDateEnabled: boolean;
  items: CatalogResultItem[];
};

type DisplayTypeResultsListItemProps = Omit<DisplayTypeResultsListProps, 'items'> & {
  item: CatalogResultItem;
};

// TODO: might consider extracting as common component
const ItemRibbon = ({
  ribbon,
  attached
}: {
  ribbon: CatalogResultItemRibbon;
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
          className="absolute right-0 top-full block h-0 w-0 border-4 border-solid border-transparent"
          style={cornerStyles}
        ></div>
      )}
      {label}
    </div>
  );
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
      {source && <p className="catalog-list-item__source">{source}</p>}
    </>
  );
  const sourceWithoutAuthors = !authors?.length && <>| {source}</>;
  return (
    <div className="catalog-list-item__info">
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
    return assetIsWide ? 'medium-5' : 'medium-5 medium-offset-1';
  }

  if (hasAsset) {
    return assetIsWide ? 'medium-8' : 'medium-9';
  }

  if (showCallToAction) {
    return 'medium-9';
  }

  return 'small-12';
};

const getCtaColumnClassnames = ({
  hasAsset,
  assetIsWide
}: {
  hasAsset: boolean;
  assetIsWide: boolean;
}): string => {
  if (hasAsset) {
    if (assetIsWide) {
      return 'medium-3';
    }
    return 'medium-3 medium-offset-1';
  }
  return 'medium-3';
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
    suggestedRetailPriceInCents
  } = item;

  // derived values
  const showCallToAction = !!priceInCents || !isActive || !!canAddToQueue;
  const assetIsWide = !contentTypeAssetAspectRatio || contentTypeAssetAspectRatio === '16:9';
  const hasAsset = !!asset;

  // stylings
  const titleColumnClassnames = showCallToAction || ribbon ? 'medium-9' : 'small-12';
  const imageColumnClassnames = assetIsWide ? 'medium-4' : 'medium-2 small-6';
  const contentColumnClassnames = getContentColumnClassnames({
    showCallToAction,
    hasAsset,
    assetIsWide
  });
  const ctaColumnClassnames = getCtaColumnClassnames({ hasAsset, assetIsWide });

  return (
    <ItemLinkWrapper onClick={onClick} item={item}>
      <div className="catalog-list-item">
        <div className="catalog-list-item__title-container">
          <div className="row collapse">
            <div className={clsx(['columns'], titleColumnClassnames)}>
              {isCompleted && (
                <div className="catalog-list-item__completed">
                  <i className="icon-check" aria-label="Completed"></i>{' '}
                  {t('course-completed-decal')}
                </div>
              )}
              <h3 className="catalog-list-item__title">
                {title}
                {displayStartDateEnabled && courseStartDate && (
                  <>
                    <br />
                    <span className="catalog-list-item__start-date">
                      {format(courseStartDate, 'MM/dd/yyyy')}
                    </span>
                  </>
                )}
              </h3>
            </div>
          </div>
          {!showCallToAction && ribbon && <ItemRibbon ribbon={ribbon} attached={false} />}
        </div>

        <div className="catalog-list-item__body">
          {showCallToAction && ribbon && <ItemRibbon ribbon={ribbon} attached />}
          <div className="row collapse">
            {asset && (
              <div className={clsx(['columns'], imageColumnClassnames)}>
                <ItemAssetBlock asset={asset} classNames="catalog-list-item__asset" />
              </div>
            )}

            <div className={clsx(['columns'], contentColumnClassnames)}>
              <ItemSourceBlock
                contentTypeLabel={contentTypeLabel}
                authors={authors}
                source={source}
              />

              <div className="catalog-list-item__description">
                {/* // TODO: port over ti-editor-content */}
                {description}
              </div>
            </div>

            {showCallToAction && (
              <div className={clsx(['columns'], ctaColumnClassnames)}>
                <div className="catalog-list-item__cta-container">
                  {canAddToQueue && (
                    <div className="catalog-list-item__cta">
                      {isActive && (
                        <span className="btn btn--primary btn--centered btn--small btn--no-margin">
                          {callToAction}
                        </span>
                      )}
                      {!isActive && (
                        <div className="catalog-list-item__text-cta">{callToAction}</div>
                      )}
                      <ItemQueueButton item={item} onAddedToQueue={onAddedToQueue} />
                    </div>
                  )}
                  {!canAddToQueue && priceInCents && (
                    <>
                      <div className="catalog-list-item__price">{priceFormat(priceInCents)}</div>
                      {suggestedRetailPriceInCents && (
                        <div className="catalog-list-item__suggested-price">
                          {priceFormat(suggestedRetailPriceInCents)}
                        </div>
                      )}
                      <div className="catalog-list-item__cta">
                        <button className="btn btn--primary btn--centered btn--small btn--no-margin">
                          {callToAction}
                        </button>
                      </div>
                    </>
                  )}
                  {!canAddToQueue && !priceInCents && (
                    <div className="catalog-list-item__text-cta">{callToAction}</div>
                  )}
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
