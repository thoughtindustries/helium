import React from 'react';
import clsx from 'clsx';
import { CatalogResultItemRibbon } from '../../types';

type ItemRibbonProps = {
  ribbon: CatalogResultItemRibbon;
  attached: boolean;
  attachedClassnames?: string;
};

const ItemRibbon = ({ ribbon, attached, attachedClassnames = '' }: ItemRibbonProps) => {
  const { contrastColor, color, darkerColor, label } = ribbon;
  const wrapperStyles = {
    color: contrastColor,
    backgroundColor: color
  };
  const wrapperAttachedClassnames = attached ? clsx('-right-2', attachedClassnames) : '-top-1';
  const wrapperClassnames = clsx(
    'text-xs font-normal leading-none absolute right-0 uppercase max-w-1/2 overflow-ellipsis z-10 px-1.5 py-1 whitespace-no-wrap',
    wrapperAttachedClassnames
  );
  const cornerStyles = {
    borderTopColor: darkerColor,
    borderLeftColor: darkerColor
  };
  return (
    <div className={wrapperClassnames} style={wrapperStyles}>
      {attached && (
        <div
          className="absolute right-0 top-full block h-0 w-0 border-4 border-solid border-transparent"
          style={cornerStyles}
        ></div>
      )}
      {label}
    </div>
  );
};

ItemRibbon.displayName = 'ItemRibbon';

export default ItemRibbon;
