import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ItemAssetBlockProps {
  asset?: string;
  classNames?: string;
}

const ItemAssetBlock = ({ asset, classNames = '' }: ItemAssetBlockProps): JSX.Element => (
  <img
    className={twMerge(['max-w-full h-auto', classNames])}
    src={
      asset ||
      'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png'
    }
  />
);

ItemAssetBlock.displayName = 'ItemAssetBlock';

export default ItemAssetBlock;
