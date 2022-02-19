import React, { MouseEventHandler } from 'react';
import Wrapper from './wrapper';
import RemoveIcon from './remove-icon';

const FilterButton = ({
  label,
  onClick
}: {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element => (
  <Wrapper>
    <button onClick={onClick} className="flex items-center gap-x-1 hover:text-link-hover">
      <i aria-label="remove">
        <RemoveIcon />
      </i>
      {label}
    </button>
  </Wrapper>
);

FilterButton.displayName = 'FilterButton';

export default FilterButton;
