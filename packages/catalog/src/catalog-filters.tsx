import React from 'react';
import clsx from 'clsx';
import { useCatalog, useCatalogURLManager } from './core';
import { GlobalTypes } from '@thoughtindustries/content';
import {
  ContentTypeSelector,
  DisplayTypeSelector,
  SearchInput,
  SortSelector
} from './variants/filter-selector';
import {
  FilterContentType,
  FilterSearchTerm,
  FilterTokenLabel,
  FilterAggregation
} from './variants/filter';

const CatalogFilters = (): JSX.Element => {
  const { params } = useCatalog();
  const {
    searchTerm,
    aggregationFilters,
    token,
    tokenLabel,
    contentTypes,
    resultContentTypes,
    contentTypeFilterEnabled,
    enabledSorts,
    sort,
    displayType,
    enabledDisplayTypes,
    resultsDisplayType
  } = params;
  const urlManager = useCatalogURLManager();

  // derived values
  const hasActiveFilters = !!searchTerm || !!aggregationFilters.length || !!tokenLabel;
  const hasActiveSelections = hasActiveFilters || !!contentTypes.length;
  const activeDisplayType = displayType || resultsDisplayType;
  const isActiveDisplayTypeCalendar =
    activeDisplayType === GlobalTypes.ContentItemDisplayType.Calendar;
  const enableContentTypeFilter = contentTypeFilterEnabled && !isActiveDisplayTypeCalendar;
  const enableSort = !!enabledSorts.length && !isActiveDisplayTypeCalendar;
  const hasActiveSelectionsOrContentTypeFilterEnabled =
    hasActiveSelections || enableContentTypeFilter;
  const enableDisplayType = !!enabledDisplayTypes.length;

  // stylings
  const columnClassnamesWithSort = enableSort ? 'md:col-span-10' : 'md:col-span-full';
  const columnClassnames = hasActiveSelectionsOrContentTypeFilterEnabled
    ? 'md:col-span-3'
    : columnClassnamesWithSort;

  // components
  const filterContentTypes = urlManager
    .composeURLForRemoveContentTypeBatch(contentTypes)
    .map(({ contentType, url }, index) => (
      <FilterContentType
        key={`content-type-filter-${index}`}
        contentType={contentType}
        removeFilterHref={url}
      />
    ));
  const filterSearchTerm = searchTerm && (
    <FilterSearchTerm
      searchTerm={searchTerm}
      removeFilterHref={urlManager.composeURLForRemoveSearchTerm()}
    />
  );
  const filterAggregations = urlManager
    .composeURLsForRemoveAggregationFilterBatch(aggregationFilters)
    .map(({ filter, url }, index) => (
      <FilterAggregation
        key={`catalog-aggregation-filter-${index}`}
        label={filter.value}
        removeFilterHref={url}
      />
    ));
  const filterTokenLabel = token && tokenLabel && (
    <FilterTokenLabel
      tokenLabel={tokenLabel}
      removeFilterHref={urlManager.composeURLForRemoveToken()}
    />
  );

  return (
    <div className="mb-6 w-full flex flex-col md:flex-row md:gap-x-1">
      <div className="md:flex-1 md:border md:border-solid md:border-gray-400 md:bg-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-12 md:h-full">
          <div className={clsx(['px-4 mb-2 col-span-full md:bg-white md:mb-0', columnClassnames])}>
            <SearchInput
              formAction={urlManager.composeURLForSetSearchTermForm()}
              hiddenFields={urlManager.composeSearchTermFormHiddenFields()}
            />
          </div>
          {hasActiveSelectionsOrContentTypeFilterEnabled && (
            <div className="relative px-4 float-left mb-2 md:border-l md:border-l-solid md:border-l-gray-400 md:col-span-7 md:mb-0">
              <div className="grid grid-cols-12 md:h-full">
                {enableContentTypeFilter && (
                  <div className="md:relative col-span-full md:col-span-2">
                    <ContentTypeSelector
                      contentTypes={contentTypes}
                      resultContentTypes={resultContentTypes}
                    />
                  </div>
                )}
                {hasActiveSelections && (
                  <div className="col-span-full md:col-span-10 mb-2 md:h-full md:mb-0 text-sm">
                    {filterContentTypes}
                    {filterSearchTerm}
                    {filterAggregations}
                    {filterTokenLabel}
                  </div>
                )}
              </div>
            </div>
          )}
          {enableSort && (
            <div className="md:border-l md:border-l-solid md:border-l-gray-400 md:bg-white md:col-span-2 relative px-4 float-left mb-2 md:h-full md:mb-0 md:pr-0">
              <SortSelector enabledSorts={enabledSorts} sort={sort} />
            </div>
          )}
        </div>
      </div>
      {enableDisplayType && (
        <div className="px-4 md:px-0 md:flex-none">
          <DisplayTypeSelector
            activeDisplayType={activeDisplayType}
            enabledDisplayTypes={enabledDisplayTypes}
          />
        </div>
      )}
    </div>
  );
};

CatalogFilters.displayName = 'CatalogFilters';

export default CatalogFilters;
