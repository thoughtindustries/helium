import React from 'react';
import { hydrateContent, GlobalTypes, HydratedContentItem } from '@thoughtindustries/content';
import { useTranslation } from 'react-i18next';
import { CatalogParams } from '@thoughtindustries/catalog';
import { useCatalog } from '@thoughtindustries/catalog';
import { CatalogResultsProps, PriceFormatFn } from '@thoughtindustries/catalog/src/types';
import DisplayTypeResultsGrid from './CatalogElementsGrid';
import { DEFAULT_CURRENCY_CODE, DEFAULT_LOCALE } from '@thoughtindustries/catalog/src/constants';

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
  };

const DisplayTypeResults = ({
  hydratedResults,
  displayBundle,
  displayAuthorsEnabled,
  displayStartDateEnabled,
  onClick,
  onAddedToQueue,
  priceFormatFn,
  numberOfContentItems
}: DisplayTypeResultsProps): JSX.Element => {
  const baseProps = {
    items: hydratedResults,
    onAddedToQueue,
    priceFormatFn,
    numberOfContentItems
  };
  const props = {
    ...baseProps,
    onClick,
    displayAuthorsEnabled,
    displayStartDateEnabled,
    displayBundle
  };
  return <DisplayTypeResultsGrid {...props} />;
};

const CatalogResults = ({
  companyHasSessionLevelCustomFieldsFeature,
  companyTimeZone,
  onClick,
  onAddedToQueue,
  priceFormat,
  companyDefaultLocale,
  currencyCode,
  numberOfContentItems
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
          numberOfContentItems={numberOfContentItems}
          {...resultsProps}
          activeDisplayType={activeDisplayType}
        />
      )}
    </>
  );
};

CatalogResults.displayName = 'CatalogResults';
export default CatalogResults;
