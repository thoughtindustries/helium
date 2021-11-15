import React from 'react';
import { HeaderProps } from './types';

const Header = (props: HeaderProps): JSX.Element => {
  const { title, alternateTitleDisplay } = props;

  if (alternateTitleDisplay) {
    return (
      <>
        <div>
          <h3>{title}</h3>
        </div>
        <hr className="relative" />
      </>
    );
  }

  return <h2 className="text-2xl text-center text-gray-700 mb-4 font-header">{title}</h2>;
};

Header.displayName = 'Header';

export default Header;
