import React, { ReactNode, SyntheticEvent, useCallback } from 'react';
import { FeaturedContentContentItem, FeaturedContentStaticContentItem } from '../../types';

interface ItemLinkWrapperProps {
  children: ReactNode;
  onClick?: (evt: SyntheticEvent, item: FeaturedContentContentItem) => void;
  item: FeaturedContentContentItem;
}

const ItemLinkWrapper = ({ children, onClick, item }: ItemLinkWrapperProps): JSX.Element => {
  const { isActive, href } = item;
  const { linkOpenInNewTab } = item as FeaturedContentStaticContentItem;

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
  if (linkOpenInNewTab) {
    linkProps.target = '_blank';
  }
  return <a {...linkProps}>{children}</a>;
};

ItemLinkWrapper.displayName = 'ItemLinkWrapper';

export default ItemLinkWrapper;
