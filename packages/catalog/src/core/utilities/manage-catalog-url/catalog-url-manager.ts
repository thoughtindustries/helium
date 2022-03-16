import { GlobalTypes } from '@thoughtindustries/content';
import {
  AggregationFilter,
  CatalogRequestURLParams,
  parseAggregationFilters,
  Sort,
  serializeSort
} from '../parse-catalog-data';
import {
  AggregationFilterWithComposedURL,
  ContentTypeWithComposedURL,
  CatalogParsedURL,
  CatalogURLSearchParams,
  SearchTermFormHiddenField
} from './types';
import { toRequestParams } from './utilities';

/**
 * The URL Manager is responsible for parsing URL and composing URLs
 * for server side routing. When user interacts with the UI, user will
 * be redirected to the new route reflecting their interactions.
 *
 * Note that only Catalog relevant query params will be handled here.
 * For some URL navigations, the `page` param will be reset.
 * For non-relevant query params, composed URLs will carry them over.
 */

export default class CatalogURLManager {
  private readonly _pathname;
  private readonly _searchParams;
  private readonly _parsedRequestParams;
  private _isCurated: boolean | undefined;
  private _selectedDisplayType: GlobalTypes.ContentItemDisplayType | undefined;

  constructor(parsedUrl: CatalogParsedURL) {
    const { pathname, searchString } = parsedUrl;
    this._pathname = pathname;
    this._searchParams = new URLSearchParams(searchString || undefined);
    this._parsedRequestParams = toRequestParams(this._searchParams);
  }

  private _composeURL(searchString: string): string {
    if (!searchString) {
      return this._pathname;
    }
    return `${this._pathname}?${searchString}`;
  }

  private _resetOrDefaultClonedParams(): URLSearchParams {
    const clonedParams = new URLSearchParams(this._searchParams);
    // reset existing params if is curated
    if (this._isCurated) {
      clonedParams.delete(CatalogURLSearchParams.AggregationLabels);
      clonedParams.delete(CatalogURLSearchParams.AggregationValues);
      clonedParams.delete(CatalogURLSearchParams.ContentTypes);
      clonedParams.delete(CatalogURLSearchParams.DisplayType);
      clonedParams.delete(CatalogURLSearchParams.Page);
      clonedParams.delete(CatalogURLSearchParams.SearchTerm);
      clonedParams.delete(CatalogURLSearchParams.Sort);
      clonedParams.delete(CatalogURLSearchParams.Token);
    }
    // reset page for calendar display
    if (this._selectedDisplayType === GlobalTypes.ContentItemDisplayType.Calendar) {
      clonedParams.delete(CatalogURLSearchParams.Page);
    }
    return clonedParams;
  }

  setIsCurated(isCurated: boolean): void {
    this._isCurated = isCurated;
  }

  setSelectedDisplayType(displayType: GlobalTypes.ContentItemDisplayType | undefined): void {
    this._selectedDisplayType = displayType;
  }

  /**
   * Get parsed request params from url search params
   *
   * @returns URL request params
   */
  getParsedRequestParams(): Partial<CatalogRequestURLParams> {
    return this._parsedRequestParams;
  }

  composeURLForAddAggregationFilter(filter: AggregationFilter): string {
    // use new filter if is curated or append new filter
    const { aggregationFilters = [] } = this._isCurated ? {} : this._parsedRequestParams;
    const newFilters = [...aggregationFilters];
    newFilters.push(filter);
    const transformedFilters = parseAggregationFilters(newFilters);

    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.set(
      CatalogURLSearchParams.AggregationLabels,
      JSON.stringify(transformedFilters.labels)
    );
    clonedParams.set(
      CatalogURLSearchParams.AggregationValues,
      JSON.stringify(transformedFilters.values)
    );
    return this._composeURL(clonedParams.toString());
  }

  composeURLsForRemoveAggregationFilterBatch(
    filters: AggregationFilter[]
  ): AggregationFilterWithComposedURL[] {
    // empty filter if is curated or remove the filter
    const { aggregationFilters = [] } = this._isCurated ? {} : this._parsedRequestParams;
    const clonedParams = this._resetOrDefaultClonedParams();
    return filters.map(currentFilter => {
      const { label: currentLabel, value: currentValue } = currentFilter;
      const newClonedParams = new URLSearchParams(clonedParams);
      const newFilters = aggregationFilters.filter(
        ({ label, value }) => label !== currentLabel && value !== currentValue
      );

      if (newFilters.length) {
        const transformedFilters = parseAggregationFilters(newFilters);
        newClonedParams.set(
          CatalogURLSearchParams.AggregationLabels,
          JSON.stringify(transformedFilters.labels)
        );
        newClonedParams.set(
          CatalogURLSearchParams.AggregationValues,
          JSON.stringify(transformedFilters.values)
        );
      } else {
        newClonedParams.delete(CatalogURLSearchParams.AggregationLabels);
        newClonedParams.delete(CatalogURLSearchParams.AggregationValues);
      }

      // reset page
      newClonedParams.delete(CatalogURLSearchParams.Page);

      return {
        filter: currentFilter,
        url: this._composeURL(newClonedParams.toString())
      };
    });
  }

  composeURLForSetPage(page: number): string {
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.set(CatalogURLSearchParams.Page, page.toString());
    return this._composeURL(clonedParams.toString());
  }

  composeURLForRemoveToken(): string {
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.delete(CatalogURLSearchParams.Token);
    // reset page
    clonedParams.delete(CatalogURLSearchParams.Page);
    return this._composeURL(clonedParams.toString());
  }

  composeURLForAddContentType(contentType: string): string {
    // use new content type if is curated or append new content type
    const { contentTypes = [] } = this._isCurated ? {} : this._parsedRequestParams;
    const newContentTypes = [...contentTypes];
    newContentTypes.push(contentType);

    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.set(CatalogURLSearchParams.ContentTypes, JSON.stringify(newContentTypes));
    return this._composeURL(clonedParams.toString());
  }

  composeURLForRemoveContentTypeBatch(filters: string[]): ContentTypeWithComposedURL[] {
    // empty content type if is curated or remove the content type
    const { contentTypes = [] } = this._isCurated ? {} : this._parsedRequestParams;
    const clonedParams = this._resetOrDefaultClonedParams();
    return filters.map(currentContentType => {
      const newClonedParams = new URLSearchParams(clonedParams);
      const newContentTypes = [...contentTypes].filter(item => item !== currentContentType);

      if (newContentTypes.length) {
        newClonedParams.set(CatalogURLSearchParams.ContentTypes, JSON.stringify(newContentTypes));
      } else {
        newClonedParams.delete(CatalogURLSearchParams.ContentTypes);
      }

      return {
        contentType: currentContentType,
        url: this._composeURL(newClonedParams.toString())
      };
    });
  }

  composeURLForSetSearchTermForm(): string {
    return this._composeURL('');
  }

  composeSearchTermFormHiddenFields(): SearchTermFormHiddenField[] {
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.delete(CatalogURLSearchParams.Page);
    clonedParams.delete(CatalogURLSearchParams.SearchTerm);
    const hiddenFields = [];
    for (const [name, value] of clonedParams.entries()) {
      hiddenFields.push({ name, value });
    }
    return hiddenFields;
  }

  composeURLForRemoveSearchTerm(): string {
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.delete(CatalogURLSearchParams.SearchTerm);
    return this._composeURL(clonedParams.toString());
  }

  composeURLForSetDisplayType(displayType: GlobalTypes.ContentItemDisplayType): string {
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.set(CatalogURLSearchParams.DisplayType, displayType.toString());
    // `calendar` displayType results are pre-filtered, so existing
    // contentType selections are cleared.
    if (displayType === GlobalTypes.ContentItemDisplayType.Calendar) {
      clonedParams.delete(CatalogURLSearchParams.ContentTypes);
    }
    return this._composeURL(clonedParams.toString());
  }

  composeURLForSetSort(sort: Sort): string {
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.set(CatalogURLSearchParams.Sort, serializeSort(sort));
    return this._composeURL(clonedParams.toString());
  }
}
