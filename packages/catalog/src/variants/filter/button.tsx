import React, { MouseEventHandler } from 'react';
import Wrapper from './wrapper';

const FilterButton = ({
  label,
  onClick
}: {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element => (
  <Wrapper>
    <button
      onClick={onClick}
      className="btn btn--link btn--inherit-font catalog-active-filter__remove"
    >
      <i className="icon-delete" aria-label="remove"></i>
      {label}
    </button>
  </Wrapper>
);

FilterButton.displayName = 'FilterButton';

export default FilterButton;
