import React from 'react';
import { hydrateContent, GlobalTypes, HydratedContentItem } from '@thoughtindustries/content';
import { useTranslation } from 'react-i18next';
import { CatalogResultsState, useCatalogResults } from './core';
import { CatalogResultsProps } from './types';
import {
  DisplayTypeResultsList,
  DisplayTypeResultsGrid,
  DisplayTypeResultsCalendar
} from './variants/display-type-results';
import CatalogPagination from './catalog-pagination';

const DisplayTypeResults = ({
  activeDisplayType,
  hydratedResults,
  displayBundle,
  displayStartDateEnabled,
  displayDescriptionOnCalendar,
  onClick,
  onAddedToQueue
}: {
  activeDisplayType: GlobalTypes.ContentItemDisplayType;
  hydratedResults: HydratedContentItem[];
  displayBundle: CatalogResultsState['displayBundle'];
  displayStartDateEnabled: CatalogResultsState['displayStartDateEnabled'];
  displayDescriptionOnCalendar: CatalogResultsState['displayDescriptionOnCalendar'];
  onClick: CatalogResultsProps['onClick'];
  onAddedToQueue: CatalogResultsProps['onAddedToQueue'];
}): JSX.Element => {
  const baseProps = {
    items: hydratedResults,
    onClick,
    onAddedToQueue
  };
  let props;
  switch (activeDisplayType) {
    case GlobalTypes.ContentItemDisplayType.List: {
      props = { ...baseProps, displayStartDateEnabled };
      return <DisplayTypeResultsList {...props} />;
    }
    case GlobalTypes.ContentItemDisplayType.Grid: {
      return <DisplayTypeResultsGrid {...baseProps} />;
    }
    case GlobalTypes.ContentItemDisplayType.Calendar: {
      props = { ...baseProps, displayDescriptionOnCalendar };
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
  onClick,
  onAddedToQueue
}: CatalogResultsProps): JSX.Element => {
  const {
    aggregations,
    aggregationFilters,
    displayType,
    resultsDisplayType,
    results,
    queryCustomFields,
    displayBundle,
    displayStartDateEnabled,
    displayDescriptionOnCalendar
  } = useCatalogResults();
  const { i18n, t } = useTranslation();

  // derived values
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
    hydrateContent(i18n, result, hydrationCustomFields)
  );
  const hasResults = !!hydratedResults.length;

  // components
  const emptyResults = !hasResults && <div className="panel">{t('filter-no-courses')}</div>;
  // TODO: port over ti-editor-content
  const activeFilter = !!activeFilterDescription && (
    <>
      {activeFilterDescription}
      <hr />
    </>
  );
  const resultsProps = {
    hydratedResults,
    displayBundle,
    displayStartDateEnabled,
    displayDescriptionOnCalendar,
    onClick,
    onAddedToQueue
  };

  return (
    <>
      {activeFilter}
      {emptyResults}
      {hasResults && activeDisplayType && (
        <DisplayTypeResults {...resultsProps} activeDisplayType={activeDisplayType} />
      )}
      <CatalogPagination />
    </>
  );
};

CatalogResults.displayName = 'CatalogResults';
export default CatalogResults;
