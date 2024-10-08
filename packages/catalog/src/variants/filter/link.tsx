import React from 'react';
import Wrapper from './wrapper';
import RemoveIcon from './remove-icon';
import { CatalogLinkButton } from '../../core';

const FilterLink = ({ label, href }: { label: string; href: string }): JSX.Element => (
  <Wrapper>
    <CatalogLinkButton
      href={href}
      className="flex items-center gap-x-1 text-accent hover:text-link-hover"
    >
      <i aria-label="remove" className="w-3 h-3">
        <RemoveIcon />
      </i>
      {label}
    </CatalogLinkButton>
  </Wrapper>
);

FilterLink.displayName = 'FilterLink';

export default FilterLink;
