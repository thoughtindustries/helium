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
      <div className="catalog-search">
        <input
          className="ember-view ember-text-field input--expand form-control"
          placeholder={t('catalog-search-placeholder')}
          aria-label="Catalog Search"
          type="search"
          value={inputValue}
          onChange={handleChange}
          onKeyUp={handleInputKeyup}
        />
        <span className="catalog-search__button" onClick={handleSearch}>
          <i className="icon-search" aria-label="search">
            Submit
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
      <div className="catalog-content-type small-12 medium-2 columns">
        <label className="label--off-canvas" htmlFor="content-type-options">
          {contentTypeFieldLabel}
        </label>
        <select
          onChange={handleChange}
          id="content-type-options"
          className="form-control select btn--no-margin catalog-filters__select"
        >
          <option value="">{contentTypeFieldLabel}</option>
          {options}
        </select>
      </div>
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
      <div className="catalog-filters__sort small-6 medium-2 columns">
        <label className="label--off-canvas" htmlFor="sort-options">
          {label}
        </label>

        <select
          onChange={handleChange}
          id="sort-options"
          className="form-control select btn--no-margin catalog-filters__select"
        >
          <option value="">{label}</option>
          {options}
        </select>
      </div>
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
    return <div className="catalog-display-type">{selectors}</div>;
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
  const columnClassnamesWithSort = enableSort ? 'medium-10' : 'medium-12';
  const columnClassnames = hasActiveSelectionsOrContentTypeFilterEnabled
    ? 'medium-3'
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
    <div className="catalog-search-bar">
      <div className="catalog-filters">
        <div className={clsx(['catalog-filters__search small-12 columns', columnClassnames])}>
          <SearchInput setSearchTerm={setSearchTerm} />
        </div>
        {hasActiveSelectionsOrContentTypeFilterEnabled && (
          <div className="catalog-filters__selections small-6 medium-7 columns">
            <div className="row collapse">
              {enableContentTypeFilter && (
                <ContentTypeFilter
                  contentTypes={contentTypes}
                  resultContentTypes={resultContentTypes}
                  addContentType={addContentType}
                />
              )}
              {hasActiveSelections && (
                <div className="catalog-active-filters small-12 medium-10 columns">
                  {filterContentTypes}
                  {filterSearchTerm}
                  {filterAggregations}
                  {filterTokenLabel}
                </div>
              )}
            </div>
          </div>
        )}
        {enableSort && <SortSelector enabledSorts={enabledSorts} setSort={setSort} />}
      </div>
      {enableDisplayType && (
        <DisplayTypePicker
          activeDisplayType={activeDisplayType}
          enabledDisplayTypes={enabledDisplayTypes}
          setDisplayType={setDisplayType}
        />
      )}
    </div>
  );
};

CatalogFilters.displayName = 'CatalogFilters';

export default CatalogFilters;
