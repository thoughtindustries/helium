import React from 'react';
import clsx from 'clsx';

interface ItemAssetBlockProps {
  asset: string;
  classNames?: string;
}

const ItemAssetBlock = ({ asset, classNames = '' }: ItemAssetBlockProps): JSX.Element => (
  <img className={clsx(['max-w-full h-auto', classNames])} src={asset} />
);

ItemAssetBlock.displayName = 'ItemAssetBlock';

export default ItemAssetBlock;
