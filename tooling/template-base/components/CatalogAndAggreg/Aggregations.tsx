import React, { ReactNode, useState } from 'react';
import { useCatalog } from '@thoughtindustries/catalog';
import clsx from 'clsx';
import { ArrowDownIcon, ArrowRightIcon } from '@thoughtindustries/catalog/src/icons';
import { useLanguagesQueryQuery } from '@thoughtindustries/content';

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

const AggregationBucket = ({ href, value, count }: AggregationBucketProps): JSX.Element => (
  <li className="rounded-lg pt-2">
    <a
      href={href}
      className="flex justify-between pt-2 pl-2 hover:bg-blue-500 hover:text-white rounded"
    >
      <div className="text-sm font-semibold">{value}</div>
      <div className="mt-0">
        {count && (
          <button className="px-4 py-0.5 mb-2 mr-2 bg-gray-300 text-sm font-medium rounded-full">
            {count}
          </button>
        )}
      </div>
    </a>
  </li>
);

const Aggregation = ({
  index,
  label,
  defaultIsExpanded,
  aggregationBuckets
}: AggregationProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(defaultIsExpanded);
  const handleToggle = () => {
    setIsExpanded(prevIsExpanded => !prevIsExpanded);
  };

  const buttonLinkClassnames =
    'w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent flex items-center gap-4';
  const ariaId = `catalog-aggregation-dropdown-${index}`;
  return (
    <div className="bg-white p-6 rounded">
      <div className={clsx('py-4 px-3 rounded', isExpanded && 'border-b mb-4 bg-gray-100')}>
        <button
          className={`${buttonLinkClassnames}`}
          onClick={handleToggle}
          aria-expanded={isExpanded}
          aria-labelledby={ariaId}
        >
          <span className="text-xl inline-block leading-4 text-center w-5 h-5">
            {isExpanded && <ArrowDownIcon />}
            {!isExpanded && <ArrowRightIcon />}
          </span>
          <span className="font-semibold">{label}</span>
        </button>
        <ul
          aria-hidden={!isExpanded}
          id={ariaId}
          className={clsx('pl-6 text-sm', { hidden: !isExpanded })}
        >
          {aggregationBuckets}
        </ul>
      </div>
    </div>
  );
};

const CatalogAggregations = (): JSX.Element => {
  const { params, urlManager } = useCatalog();
  const { aggregations, aggregationFilters, isCurated, token, tokenLabel } = params;
  const { data } = useLanguagesQueryQuery();

  const firstAggregationFilterLabel = aggregationFilters.length
    ? aggregationFilters[0].label
    : undefined;
  const languages = data ? data.Languages : [];

  const contents = aggregations.map(({ label = '', buckets = [] }, index) => {
    const isAggregationLabel = label === firstAggregationFilterLabel;
    const isTokenLabel = tokenLabel && label === tokenLabel;
    const isCurrentLabel = isAggregationLabel || isTokenLabel;
    const shouldExpandFirst = !isCurated && !token;
    const isExpanded = isCurrentLabel || (shouldExpandFirst && index === 0);

    const aggregationBuckets = buckets.map(({ value = '', count, query }, bucketIndex) => {
      const filter = { label, value };
      const isLanguageLabel = query?.includes('language');
      const languageLabel = languages.find(({ code }) => code === value)?.label || value;
      const displayLabel = isLanguageLabel ? languageLabel : value;
      const props = {
        href: urlManager.composeURLForAddAggregationFilter(filter),
        value: displayLabel,
        count
      };
      return <AggregationBucket key={`catalog-aggregation-bucket-${bucketIndex}`} {...props} />;
    });

    const props = {
      index,
      defaultIsExpanded: isExpanded,
      label,
      aggregationBuckets
    };
    return <Aggregation key={`catalog-aggregation-${index}`} {...props} />;
  });

  return <>{contents}</>;
};

CatalogAggregations.displayName = 'CatalogAggregations';

export default CatalogAggregations;
