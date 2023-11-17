import React, { SyntheticEvent, useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';
import { CatalogResultsProps, CatalogResultItem } from '../../types';
import { PlusIcon, CheckCircleIcon } from './icons';

type ItemQueueButtonProps = Pick<CatalogResultsProps, 'onAddedToQueue'> & {
  item: CatalogResultItem;
  classNames?: string;
};

const ItemQueueButton = ({
  item,
  onAddedToQueue,
  classNames = ''
}: ItemQueueButtonProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [wasAddedToQueue, setWasAddedToQueue] = useState<boolean>(false);
  const { t } = useTranslation();
  const handleClick = useCallback(
    async (evt: SyntheticEvent) => {
      evt.preventDefault();
      evt.stopPropagation();

      if (!!wasAddedToQueue || isLoading) {
        return;
      }

      setIsLoading(true);

      try {
        await onAddedToQueue(item);
        setWasAddedToQueue(true);
      } catch (e: unknown) {
        // handle error
      } finally {
        setIsLoading(false);
      }
    },
    [wasAddedToQueue, isLoading, item, onAddedToQueue]
  );

  const btnClassNames = twMerge([
    'pl-0 mb-1 text-xs border-none rounded-sm cursor-pointer font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 hover:text-link-hover',
    wasAddedToQueue ? 'cursor-default' : null,
    classNames
  ]);

  return (
    <button onClick={handleClick} className={btnClassNames}>
      {wasAddedToQueue && (
        <span className="flex items-center gap-x-1">
          <i className="inline-block w-3 h-3 text-green-600" aria-label="check">
            <CheckCircleIcon />
          </i>
          {` ${t('course-added-to-queue')}`}
        </span>
      )}
      {!wasAddedToQueue && (
        <span className="flex items-center gap-x-1">
          <i className="inline-block w-3 h-3" aria-label="plus">
            <PlusIcon />
          </i>
          {` ${t('course-add-to-queue')}`}
        </span>
      )}
    </button>
  );
};

ItemQueueButton.displayName = 'ItemQueueButton';

export default ItemQueueButton;
