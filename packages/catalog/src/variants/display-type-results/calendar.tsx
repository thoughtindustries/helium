import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { formatTime } from '@thoughtindustries/content';
import { CatalogResultItem, CatalogResultsProps } from '../../types';
import { priceFormat } from './utilities';
import ItemAssetBlock from './item-asset-block';
import ItemQueueButton from './item-queue-button';
import { ArrowDownIcon, ArrowRightIcon } from '../../icons';
import { DesktopComputerIcon, LocationMarkerIcon } from './icons';
import { CatalogParams } from '../../core';

type DisplayTypeResultsCalendarProps = Pick<
  CatalogResultsProps,
  'companyTimeZone' | 'onAddedToQueue'
> &
  Pick<CatalogParams, 'displayDescriptionOnCalendar'> & {
    items: CatalogResultItem[];
  };

type MonthlyItems = {
  heading: string;
  items: CatalogResultItem[];
};

type ItemsByMonth = {
  [key: string]: MonthlyItems;
};

type DisplayTypeResultsCalendarMonthlyItemsProps = MonthlyItems &
  DisplayTypeResultsCalendarProps & {
    expandedItemId: string | undefined;
    setExpandedItemId: (id: string | undefined) => void;
  };

type DisplayTypeResultsCalendarMonthlyItemProps = Omit<
  DisplayTypeResultsCalendarMonthlyItemsProps,
  'items' | 'heading'
> & {
  item: CatalogResultItem;
  hasPrices: boolean;
};

const ItemLocationBlock = ({
  location,
  locationIsInPerson
}: {
  location: CatalogResultItem['location'];
  locationIsInPerson: CatalogResultItem['locationIsInPerson'];
}) => {
  const { t } = useTranslation();
  const { address1, name, city, state, country } = location || {};
  const iconWrapperClassnames = 'flex items-center justify-end gap-x-1 md:justify-start';
  const iconClassnames = 'w-4 h-4';

  if (address1) {
    return (
      <>
        {name && <strong>{name}</strong>}
        <br />
        {city && `${city}, `}
        {state && `${state}, `}
        {country}
      </>
    );
  }

  if (locationIsInPerson) {
    return (
      <span className={iconWrapperClassnames}>
        <i className={iconClassnames} aria-label="location">
          <LocationMarkerIcon />
        </i>
        {t('catalog.location-in-person')}
      </span>
    );
  }

  return (
    <span className={iconWrapperClassnames}>
      <i className={iconClassnames} aria-label="online">
        <DesktopComputerIcon />
      </i>
      {t('catalog.location-online')}
    </span>
  );
};

const DisplayTypeResultsCalendarMonthlyItem = ({
  companyTimeZone,
  displayDescriptionOnCalendar,
  item,
  hasPrices,
  expandedItemId,
  setExpandedItemId,
  onAddedToQueue
}: DisplayTypeResultsCalendarMonthlyItemProps): JSX.Element => {
  const {
    meetingStartDate,
    courseStartDate,
    timeZone,
    locationIsOnline,
    locationIsInPerson,
    href,
    id,
    asset,
    description,
    contentTypeAssetAspectRatio,
    title,
    priceInCents,
    isActive,
    callToAction,
    location,
    canAddToQueue
  } = item;

  // derived values
  const calendarStartDate = (meetingStartDate || courseStartDate) as string;
  const formattedDate = formatTime(
    calendarStartDate,
    locationIsOnline ? companyTimeZone : timeZone,
    'MMM Do YYYY hh:mm A z'
  );
  const expanded = expandedItemId === id;
  const ariaId = `catalog-calendar-description-${id}`;
  const shouldDisplayDescriptionToggle = (asset || description) && displayDescriptionOnCalendar;
  const itemHrefWithId = href.includes('?') ? `${href}&courseId=${id}` : `${href}?courseId=${id}`;
  const assetIsWide = !contentTypeAssetAspectRatio || contentTypeAssetAspectRatio === '16:9';
  const tdCount = hasPrices ? 5 : 4;

  // stylings
  const expandedImageColumnClassnames = assetIsWide
    ? 'col-span-full md:col-span-4'
    : 'col-span-6 md:col-span-2';
  const expandedContentColumnClassnames = assetIsWide
    ? 'col-span-full md:col-span-8'
    : 'col-span-full md:col-span-9';
  const trBaseClassnames =
    'border border-solid border-gray-400 rounded block p-3 md:border-none md:rounded-none md:table-row';
  const trClassnames = expanded
    ? clsx(trBaseClassnames, 'border-b-0 rounded-bl-none rounded-br-none pb-0 mb-0')
    : clsx(trBaseClassnames, 'mb-3');
  const expandedTrClassnames = clsx(
    trBaseClassnames,
    'mb-3 border-t-0 rounded-tl-none rounded-tr-none'
  );
  const tdBaseClassnames =
    'p-0 text-right block mb-1 md:py-4 md:px-5 md:text-left md:table-cell md:mb-0';
  const borderedTdClassnames = clsx(
    tdBaseClassnames,
    'border-none md:border-b md:border-solid md:border-gray-400'
  );
  const tdClassnames = expanded ? clsx(tdBaseClassnames, 'pb-0 last:mb-0') : borderedTdClassnames;
  const buttonLinkClassnames =
    'w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4';
  const ctaLinkClassnames =
    'bg-accent hover:bg-accent-hover border border-solid border-accent hover:border-accent-hover rounded-sm font-normal font-secondary text-accent-contrast text-sm text-center no-underline leading-none cursor-pointer inline-block relative transition-colors ease-in-out duration-200 py-1 px-4 block w-full md:w-auto';

  // event handlers
  const toggleExpanded = useCallback(() => {
    if (expanded) {
      setExpandedItemId(undefined);
    } else {
      setExpandedItemId(id);
    }
  }, [expanded, id, setExpandedItemId]);

  return (
    <>
      <tr className={trClassnames}>
        <td data-label="courseHeading" className={tdClassnames}>
          {shouldDisplayDescriptionToggle && (
            <div className="grid grid-cols-12">
              <div className="col-span-2">
                <button
                  className={buttonLinkClassnames}
                  onClick={toggleExpanded}
                  aria-expanded={expanded}
                  aria-controls={ariaId}
                >
                  <span className="text-xl inline-block leading-4 text-center w-5 h-5">
                    {expanded && <ArrowDownIcon />}
                    {!expanded && <ArrowRightIcon />}
                  </span>
                </button>
              </div>
              <div className="col-span-10">{title}</div>
            </div>
          )}
          {!shouldDisplayDescriptionToggle && <>{title}</>}
        </td>
        <td data-label="locationHeading" className={tdClassnames}>
          <ItemLocationBlock location={location} locationIsInPerson={locationIsInPerson} />
        </td>
        <td data-label="dateTimeHeading" className={tdClassnames}>
          {formattedDate}
        </td>
        {hasPrices && (
          <td data-label="priceHeading" className={tdClassnames}>
            {!!priceInCents && priceFormat(priceInCents)}
          </td>
        )}
        <td className={tdClassnames}>
          <div className="flex flex-col gap-3 justify-center items-center">
            {isActive && (
              <a className={ctaLinkClassnames} href={itemHrefWithId}>
                {callToAction}
              </a>
            )}
            {!isActive && callToAction}
            {canAddToQueue && <ItemQueueButton item={item} onAddedToQueue={onAddedToQueue} />}
          </div>
        </td>
      </tr>

      {expanded && (
        <tr id={ariaId} className={expandedTrClassnames}>
          <td colSpan={tdCount} className={borderedTdClassnames}>
            <div className="grid grid-cols-12 gap-3.5">
              {asset && (
                <div className={expandedImageColumnClassnames}>
                  <ItemAssetBlock asset={asset} />
                </div>
              )}

              <div className={expandedContentColumnClassnames}>
                <div className="text-xs mt-2 leading-5 text-gray-700 pr-1">
                  {/* // TODO: port over ti-editor-content */}
                  {description}
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

const DisplayTypeResultsCalendarMonthlyItems = ({
  heading,
  items,
  ...restProps
}: DisplayTypeResultsCalendarMonthlyItemsProps): JSX.Element => {
  const { t } = useTranslation();

  // derived values
  const hasPrices = items.some(({ priceInCents }) => !!priceInCents);
  const itemBaseProps = { hasPrices, ...restProps };

  // stylings
  const thBaseClassnames = 'py-4 px-5 border-b border-solid border-gray-400 text-left';
  const theadClassnames =
    'h-px -m-px overflow-hidden p-0 absolute w-px md:h-full md:w-full md:static';

  return (
    <table className="table-auto border-collapse border-none md:border md:border-solid md:border-gray-400 rounded mb-10 text-sm w-full">
      <caption className="font-secondary text-xl leading-tight text-left mb-5">{heading}</caption>
      <thead className={theadClassnames}>
        <tr>
          <th className={clsx(thBaseClassnames, 'w-1/4')}>{t('course')}</th>
          <th className={clsx(thBaseClassnames, 'w-1/6')}>{t('catalog.location')}</th>
          <th className={clsx(thBaseClassnames, 'w-1/4')}>{t('catalog.date-time')}</th>
          {hasPrices && <th className={clsx(thBaseClassnames, 'w-1/12')}>{t('catalog.price')}</th>}
          <th className={clsx(thBaseClassnames, 'w-1/4')}></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <DisplayTypeResultsCalendarMonthlyItem
            key={`result-item-${index}`}
            item={item}
            {...itemBaseProps}
          />
        ))}
      </tbody>
    </table>
  );
};

const DisplayTypeResultsCalendar = ({
  items,
  ...restProps
}: DisplayTypeResultsCalendarProps): JSX.Element => {
  const [expandedItemId, setExpandedItemId] = useState<string | undefined>(undefined);

  const contentItemsByMonth = items
    .sort((a, b) => {
      const calendarStartDateA = a.meetingStartDate || a.courseStartDate;
      const calendarStartDateB = b.meetingStartDate || b.courseStartDate;
      if (!calendarStartDateA || !calendarStartDateB) {
        return -1;
      }
      return dayjs(calendarStartDateA).isBefore(dayjs(calendarStartDateB)) ? -1 : 1;
    })
    .reduce((itemsByMonth, item) => {
      const calendarStartDate = item.meetingStartDate || item.courseStartDate;

      if (!calendarStartDate) {
        return itemsByMonth;
      }

      const month = formatTime(calendarStartDate, item.timeZone, 'MMM YYYY');
      if (!itemsByMonth[month]) {
        itemsByMonth[month] = { heading: month, items: [] };
      }
      itemsByMonth[month].items.push(item);
      return itemsByMonth;
    }, {} as ItemsByMonth);

  return (
    <div>
      {Object.entries(contentItemsByMonth).map(([_, monthlyItems], index) => (
        <DisplayTypeResultsCalendarMonthlyItems
          key={`result-month-${index}`}
          {...monthlyItems}
          {...restProps}
          expandedItemId={expandedItemId}
          setExpandedItemId={setExpandedItemId}
        />
      ))}
    </div>
  );
};

DisplayTypeResultsCalendar.displayName = 'DisplayTypeResultsCalendar';
export default DisplayTypeResultsCalendar;
