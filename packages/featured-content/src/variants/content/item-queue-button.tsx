import React, { SyntheticEvent, useCallback, useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { FeaturedContentContentItem } from '../../types';

interface ItemQueueButtonProps {
  item: FeaturedContentContentItem;
  onClickAsync: (item: FeaturedContentContentItem) => Promise<void>;
  classNames?: string;
}

const ItemQueueButton = ({
  item,
  onClickAsync,
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
        await onClickAsync(item);
        setWasAddedToQueue(true);
      } catch (e: unknown) {
        // handle error
      } finally {
        setIsLoading(false);
      }
    },
    [wasAddedToQueue, isLoading, item, onClickAsync]
  );

  const btnClassNames = clsx([
    'inline-block pl-0 mb-1 text-xs border-none rounded-sm cursor-pointer inline-block font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 hover:text-link-hover',
    { 'cursor-default': wasAddedToQueue },
    classNames
  ]);

  return (
    <button onClick={handleClick} className={btnClassNames}>
      {wasAddedToQueue && (
        <span className="inline-block align-top">
          <i
            className="-top-px pr-0 relative text-xs not-italic before:content-['\2705']"
            aria-label="check"
          ></i>{' '}
          {t('course-added-to-queue')}
        </span>
      )}
      {!wasAddedToQueue && (
        <span className="inline-block align-top">
          <i
            className="-top-px pr-0 relative text-xs not-italic before:content-['\002B']"
            aria-label="plus"
          ></i>{' '}
          {t('course-add-to-queue')}
        </span>
      )}
    </button>
  );
};

ItemQueueButton.displayName = 'ItemQueueButton';

export default ItemQueueButton;
