import React, { ReactNode, SyntheticEvent, useCallback } from 'react';
import { CatalogResultItem, CatalogResultsProps } from '../../types';

type ItemLinkWrapperProps = Pick<CatalogResultsProps, 'onClick'> & {
  children: ReactNode;
  item: CatalogResultItem;
};

const ItemLinkWrapper = ({ children, onClick, item }: ItemLinkWrapperProps): JSX.Element => {
  const { isActive, href } = item;

  const itemIsActiveOrWebinarOrEvent = !!isActive;

  const handleClick = useCallback(
    (evt: SyntheticEvent) => {
      onClick && onClick(evt, item);
    },
    [item, onClick]
  );
  const linkProps: {
    className: string;
    href?: string;
    onClick: (evt: SyntheticEvent) => void;
    target?: string;
  } = {
    href,
    onClick: handleClick,
    className: `block text-gray-800 ${!itemIsActiveOrWebinarOrEvent ? 'cursor-default' : ''}`
  };
  return <a {...linkProps}>{children}</a>;
};

ItemLinkWrapper.displayName = 'ItemLinkWrapper';

export default ItemLinkWrapper;
