import React, { ChangeEvent, KeyboardEventHandler, memo, useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import {
  CatalogFiltersState,
  serializeSort,
  useCatalogFilters,
  useCatalogURLManager
} from './core';
import { GlobalTypes } from '@thoughtindustries/content';
import {
  FilterContentType,
  FilterSearchTerm,
  FilterTokenLabel,
  FilterAggregation
} from './variants/filter';
import { localizedSortMapping } from './constants';
import {
  DisplayTypeIconGrid,
  DisplayTypeIconList,
  DisplayTypeIconCalendar
} from './variants/display-type-icon';

const SearchInput = memo(
  ({ setSearchTerm }: Pick<CatalogFiltersState, 'setSearchTerm'>): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');
    const { t } = useTranslation();
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
      setInputValue(evt.target.value);
    };
    const handleSearch = () => {
      if (inputValue) {
        setSearchTerm(inputValue);
        setInputValue('');
      }
    };
    const handleInputKeyup: KeyboardEventHandler = evt => {
      if (evt.key === 'Enter') {
        handleSearch();
      }
    };
    return (
      <div className="md:h-full relative">
        <input
          className="border border-solid border-gray-400 shadow md:h-full md:m-0 md:border-none md:shadow-none w-full focus:outline-none p-2 text-sm"
          placeholder={t('catalog-search-placeholder')}
          aria-label="Catalog Search"
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyUp={handleInputKeyup}
        />
        <span className="mb-0 absolute h-full top-0 right-0 p-1 table" onClick={handleSearch}>
          <i
            className="text-2xl cursor-pointer py-0 px-3 text-accent table-cell align-middle"
            aria-label="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
              fill="currentColor"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
            </svg>
          </i>
        </span>
      </div>
    );
  }
);
SearchInput.displayName = 'SearchInput';

const ContentTypeFilter = memo(
  ({
    contentTypes,
    resultContentTypes,
    addContentType
  }: Pick<
    CatalogFiltersState,
    'contentTypes' | 'resultContentTypes' | 'addContentType'
  >): JSX.Element => {
    const { t } = useTranslation();
    const contentTypeFieldLabel = t('filter-by');
    const options = resultContentTypes
      .filter(item => !contentTypes.includes(item))
      .map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ));
    const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
      const value = evt.target.value;
      if (value) {
        addContentType(value);
      }
    };

    return (
      <>
        <label className="hidden" htmlFor="content-type-options">
          {contentTypeFieldLabel}
        </label>
        <select
          onChange={handleChange}
          id="content-type-options"
          className="w-full h-10 md:h-full px-2 text-sm border-solid border border-gray-400 bg-gray-100 md:border-none md:bg-transparent"
        >
          <option value="">{contentTypeFieldLabel}</option>
          {options}
        </select>
      </>
    );
  }
);
ContentTypeFilter.displayName = 'ContentTypeFilter';

const SortSelector = memo(
  ({
    enabledSorts,
    setSort
  }: Pick<CatalogFiltersState, 'enabledSorts' | 'setSort'>): JSX.Element => {
    const { t } = useTranslation();
    const label = t('catalog.sort-by');
    const options = enabledSorts.map(item => (
      <option key={item.field} value={serializeSort(item)}>
        {t(localizedSortMapping[item.field])}
      </option>
    ));
    const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
      const value = evt.target.value;
      if (value) {
        setSort(value);
      }
    };
    return (
      <>
        <label className="hidden" htmlFor="sort-options">
          {label}
        </label>
        <select
          onChange={handleChange}
          id="sort-options"
          className="w-full h-10 md:h-full text-sm px-2 border-solid border border-gray-400 bg-gray-100 md:border-none md:bg-transparent"
        >
          <option value="">{label}</option>
          {options}
        </select>
      </>
    );
  }
);
SortSelector.displayName = 'SortSelector';

const getDisplayTypeComponent = (displayType: GlobalTypes.ContentItemDisplayType) => {
  switch (displayType) {
    case GlobalTypes.ContentItemDisplayType.List: {
      return DisplayTypeIconList;
    }
    case GlobalTypes.ContentItemDisplayType.Grid: {
      return DisplayTypeIconGrid;
    }
    case GlobalTypes.ContentItemDisplayType.Calendar: {
      return DisplayTypeIconCalendar;
    }
    default: {
      const _exhaustiveCheck: never = displayType;
      return _exhaustiveCheck;
    }
  }
};
const DisplayTypePicker = memo(
  ({
    activeDisplayType,
    enabledDisplayTypes,
    setDisplayType
  }: Pick<CatalogFiltersState, 'enabledDisplayTypes' | 'setDisplayType'> & {
    activeDisplayType:
      | CatalogFiltersState['displayType']
      | CatalogFiltersState['resultsDisplayType'];
  }): JSX.Element => {
    const selectors = enabledDisplayTypes.map(item => {
      const isActive = item === activeDisplayType;
      const handleClick = () => {
        setDisplayType(item);
      };
      const props = {
        isActive,
        handleClick
      };
      const Component = getDisplayTypeComponent(item);
      return <Component key={item} {...props} />;
    });
    return <div className="flex flex-wrap gap-x-1 justify-end">{selectors}</div>;
  }
);
DisplayTypePicker.displayName = 'DisplayTypePicker';

const CatalogFilters = (): JSX.Element => {
  const {
    searchTerm,
    setSearchTerm,
    removeSearchTerm,
    aggregationFilters,
    token,
    tokenLabel,
    contentTypes,
    resultContentTypes,
    contentTypeFilterEnabled,
    addContentType,
    removeContentType,
    enabledSorts,
    setSort,
    displayType,
    enabledDisplayTypes,
    resultsDisplayType,
    setDisplayType
  } = useCatalogFilters();
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
  const filterContentTypes = contentTypes.map((item, index) => (
    <FilterContentType
      key={`content-type-filter-${index}`}
      contentType={item}
      removeContentType={removeContentType}
    />
  ));
  const filterSearchTerm = searchTerm && (
    <FilterSearchTerm searchTerm={searchTerm} removeSearchTerm={removeSearchTerm} />
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
            <SearchInput setSearchTerm={setSearchTerm} />
          </div>
          {hasActiveSelectionsOrContentTypeFilterEnabled && (
            <div className="relative px-4 float-left mb-2 md:border-l md:border-l-solid md:border-l-gray-400 md:col-span-7 md:mb-0">
              <div className="grid grid-cols-12 md:h-full">
                {enableContentTypeFilter && (
                  <div className="md:relative col-span-full md:col-span-2">
                    <ContentTypeFilter
                      contentTypes={contentTypes}
                      resultContentTypes={resultContentTypes}
                      addContentType={addContentType}
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
              <SortSelector enabledSorts={enabledSorts} setSort={setSort} />
            </div>
          )}
        </div>
      </div>
      {enableDisplayType && (
        <div className="px-4 md:px-0 md:flex-none">
          <DisplayTypePicker
            activeDisplayType={activeDisplayType}
            enabledDisplayTypes={enabledDisplayTypes}
            setDisplayType={setDisplayType}
          />
        </div>
      )}
    </div>
  );
};

CatalogFilters.displayName = 'CatalogFilters';

export default CatalogFilters;
