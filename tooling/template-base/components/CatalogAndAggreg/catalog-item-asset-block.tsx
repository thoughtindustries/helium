import React from 'react';
import clsx from 'clsx';
import { usePageContext } from '../../renderer/usePageContext';

interface ItemAssetBlockProps {
  asset?: string;
}

const ItemAssetBlock = ({ asset }: ItemAssetBlockProps) => {
  const { appearance } = usePageContext();
  const itemAsset = asset ? asset : appearance?.logoAsset;
  return (
    <img
      src={itemAsset}
      className={clsx(asset && 'w-full rounded-t-md', !asset && 'p-10 w-full border rounded-t-md')}
    />
  );
};

ItemAssetBlock.displayName = 'ItemAssetBlock';

export default ItemAssetBlock;
