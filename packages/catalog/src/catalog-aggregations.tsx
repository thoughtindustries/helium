import React, { memo, ReactNode, useState } from 'react';
import { useCatalogAggregations, useCatalogURLManager } from './core';
import clsx from 'clsx';

type AggregationBucketProps = {
  href: string;
  value: string;
  count?: number;
};

type AggregationProps = {
  index: number;
  label: string;
  defaultIsExpanded: boolean;
  aggregationBuckets: ReactNode;
};

const AggregationBucket = memo(
  ({ href, value, count }: AggregationBucketProps): JSX.Element => (
    <li>
      <a href={href} className="btn btn--bare btn--inherit-font catalog-aggregation__value">
        {value}
        {count && <span className="catalog-aggregation__count">({count})</span>}
      </a>
    </li>
  )
);
AggregationBucket.displayName = 'AggregationBucket';

const Aggregation = memo(
  ({ index, label, defaultIsExpanded, aggregationBuckets }: AggregationProps): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState(defaultIsExpanded);
    const handleToggle = () => {
      setIsExpanded(prevIsExpanded => !prevIsExpanded);
    };
    const wrapperClassnames = isExpanded ? 'catalog-aggregation--expanded' : '';
    const ariaId = `catalog-aggregation-dropdown-${index}`;
    return (
      <div className={clsx(['catalog-aggregation'], wrapperClassnames)}>
        <button
          className="btn btn--link btn--inherit-font catalog-aggregation__header"
          onClick={handleToggle}
          aria-expanded={isExpanded}
          aria-labelledby={ariaId}
        >
          <div className="row collapse">
            <div className="column small-1">
              <span className="catalog-aggregation__expander">
                {isExpanded && <i className="icon-navigatedown"></i>}
                {!isExpanded && <i className="icon-navigateright"></i>}
              </span>
            </div>
            <div className="column small-11">
              <span className="catalog-aggregation__header--label">{label}</span>
            </div>
          </div>
        </button>
        <ul aria-hidden={!isExpanded} id={ariaId} className="unlist">
          {aggregationBuckets}
        </ul>
      </div>
    );
  }
);
Aggregation.displayName = 'Aggregation';

const CatalogAggregations = (): JSX.Element => {
  const { aggregations, aggregationFilters, isCurated, token, tokenLabel } =
    useCatalogAggregations();
  const urlManager = useCatalogURLManager();

  // derived value
  const firstAggregationFilterLabel = aggregationFilters.length
    ? aggregationFilters[0].label
    : undefined;

  const contents = aggregations.reduce((acc, { label = '', buckets = [] }, index) => {
    const isAggregationLabel = label === firstAggregationFilterLabel;
    const isTokenLabel = tokenLabel && label === tokenLabel;
    const isCurrentLabel = isAggregationLabel || isTokenLabel;
    /**
     * never expand first aggregation when using curated categories.
     * otherwise, never expand the first aggregation when using token search.
     */
    const shouldExpandFirst = !isCurated && !token;
    const isExpanded = isCurrentLabel || (shouldExpandFirst && index === 0);

    const aggregationBuckets = buckets.reduce((bucketsAcc, { value = '', count }, bucketIndex) => {
      const filter = { label, value };
      const props = {
        key: `catalog-aggregation-bucket-${bucketIndex}`,
        href: urlManager.composeURLForAddAggregationFilter(filter, isCurated),
        value,
        count
      };
      bucketsAcc.push(<AggregationBucket {...props} />);
      return bucketsAcc;
    }, [] as JSX.Element[]);

    const props = {
      key: `catalog-aggregation-${index}`,
      index,
      defaultIsExpanded: isExpanded,
      label,
      aggregationBuckets
    };
    acc.push(<Aggregation {...props} />);
    return acc;
  }, [] as JSX.Element[]);

  return <>{contents}</>;
};

CatalogAggregations.displayName = 'CatalogAggregations';

export default CatalogAggregations;
