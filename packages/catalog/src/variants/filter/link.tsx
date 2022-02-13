import React from 'react';
import Wrapper from './wrapper';

const FilterLink = ({ label, href }: { label: string; href: string }): JSX.Element => (
  <Wrapper>
    <a href={href} className="catalog-active-filter__remove">
      <i className="icon-delete" aria-label="remove"></i>
      {label}
    </a>
  </Wrapper>
);

FilterLink.displayName = 'FilterLink';

export default FilterLink;
