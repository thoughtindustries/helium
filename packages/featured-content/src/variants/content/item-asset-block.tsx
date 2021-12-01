import React from 'react';

interface ItemAssetBlockProps {
  asset?: string;
}

const ItemAssetBlock = ({ asset }: ItemAssetBlockProps): JSX.Element => (
  <img
    className="max-w-full h-auto"
    src={
      asset ||
      'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png'
    }
  />
);

ItemAssetBlock.displayName = 'ItemAssetBlock';

export default ItemAssetBlock;
