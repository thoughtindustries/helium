import React from 'react';
import { hydrateContent, GlobalTypes, HydratedContentItem } from '@thoughtindustries/content';
import { useTranslation } from 'react-i18next';
import { CatalogParams, useCatalog } from './core';
import { CatalogResultsProps, PriceFormatFn, ItemWrapper } from './types';
import {
  DisplayTypeResultsList,
  DisplayTypeResultsGrid,
  DisplayTypeResultsCalendar
} from './variants/display-type-results';
import { DEFAULT_CURRENCY_CODE, DEFAULT_LOCALE } from './constants';

type DisplayTypeResultsProps = Pick<
  CatalogParams,
  | 'displayBundle'
  | 'displayAuthorsEnabled'
  | 'displayStartDateEnabled'
  | 'displayDescriptionOnCalendar'
> &
  Omit<CatalogResultsProps, 'companyHasSessionLevelCustomFieldsFeature'> & {
    activeDisplayType: GlobalTypes.ContentItemDisplayType;
    hydratedResults: HydratedContentItem[];
    priceFormatFn: PriceFormatFn;
    ItemWrapperComponent?: ItemWrapper;
  };

const DisplayTypeResults = ({
  activeDisplayType,
  hydratedResults,
  displayBundle,
  displayAuthorsEnabled,
  displayStartDateEnabled,
  displayDescriptionOnCalendar,
  companyTimeZone,
  onClick,
  onAddedToQueue,
  priceFormatFn,
  ItemWrapperComponent
}: DisplayTypeResultsProps): JSX.Element => {
  const baseProps = {
    items: hydratedResults,
    onAddedToQueue,
    priceFormatFn
  };
  let props;
  switch (activeDisplayType) {
    case GlobalTypes.ContentItemDisplayType.List: {
      props = { ...baseProps, onClick, displayStartDateEnabled };
      return <DisplayTypeResultsList {...props} />;
    }
    case GlobalTypes.ContentItemDisplayType.Grid: {
      props = {
        ...baseProps,
        onClick,
        displayAuthorsEnabled,
        displayStartDateEnabled,
        displayBundle
      };
      return <DisplayTypeResultsGrid {...props} ItemWrapperComponent={ItemWrapperComponent} />;
    }
    case GlobalTypes.ContentItemDisplayType.Calendar: {
      props = { ...baseProps, displayDescriptionOnCalendar, companyTimeZone };
      return <DisplayTypeResultsCalendar {...props} />;
    }
    default: {
      const _exhaustiveCheck: never = activeDisplayType;
      return _exhaustiveCheck;
    }
  }
};

const CatalogResults = ({
  companyHasSessionLevelCustomFieldsFeature,
  companyTimeZone,
  onClick,
  onAddedToQueue,
  priceFormat,
  companyDefaultLocale,
  currencyCode,
  ItemWrapperComponent
}: CatalogResultsProps): JSX.Element => {
  const { params } = useCatalog();
  const {
    aggregations,
    aggregationFilters,
    displayType,
    resultsDisplayType,
    results,
    queryCustomFields,
    displayBundle,
    displayAuthorsEnabled,
    displayStartDateEnabled,
    displayDescriptionOnCalendar
  } = params;
  const { i18n, t } = useTranslation();

  // derived values
  /**
   * TODO: check if this description will be always undefined.
   * When aggregation filters are applied, do server respond with aggregations
   * different from the filters?
   */
  let activeFilterDescription;
  if (aggregationFilters.length) {
    const { label: filterLabel, value: filterValue } = aggregationFilters[0];
    aggregations.forEach(({ label, buckets = [] }) => {
      if (label === filterLabel) {
        buckets.forEach(({ value, description }) => {
          if (value === filterValue) {
            activeFilterDescription = description;
          }
        });
      }
    });
  }
  const activeDisplayType = displayType || resultsDisplayType;
  const hydrationCustomFields = companyHasSessionLevelCustomFieldsFeature ? queryCustomFields : {};
  const hydratedResults = results.map(result =>
    hydrateContent(i18n, result, companyTimeZone, hydrationCustomFields)
  );
  const hasResults = !!hydratedResults.length;
  let priceFormatFn = priceFormat;
  if (!priceFormatFn) {
    const locale = companyDefaultLocale ?? DEFAULT_LOCALE;
    const currency = currencyCode ?? DEFAULT_CURRENCY_CODE;
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    });
    priceFormatFn = (priceInCents: number) => formatter.format(priceInCents / 100);
  }

  // components
  const emptyResults = !hasResults && (
    <div className="bg-gray-100 text-gray-700 p-4 mb-4 rounded">{t('filter-no-courses')}</div>
  );
  const activeFilter = !!activeFilterDescription && (
    <>
      {activeFilterDescription}
      <hr />
    </>
  );
  const resultsProps = {
    hydratedResults,
    displayBundle,
    displayAuthorsEnabled,
    displayStartDateEnabled,
    displayDescriptionOnCalendar,
    companyTimeZone,
    onClick,
    onAddedToQueue,
    priceFormatFn
  };

  return (
    <>
      {activeFilter}
      {emptyResults}
      {hasResults && activeDisplayType && (
        <DisplayTypeResults
          {...resultsProps}
          activeDisplayType={activeDisplayType}
          ItemWrapperComponent={ItemWrapperComponent}
        />
      )}
    </>
  );
};

CatalogResults.displayName = 'CatalogResults';
export default CatalogResults;
