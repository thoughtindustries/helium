import React from 'react';
import { usePageContext } from '../../renderer/usePageContext';
import CurrentUserSmallScreenNavBar from './CurrentUserSmallScreenNavBar';
import CurrentUserNavBar from './CurrentUserNavBar';
import UserLoginNavBar from './UserLoginNavBar';

const NavBar = () => {
  const pageContext = usePageContext();
  const { currentUser } = pageContext;

  let navbar;
  if (currentUser) {
    // signed in
    navbar = (
      <>
        <div className="block md:hidden">
          <CurrentUserSmallScreenNavBar />
        </div>
        <div className="hidden md:block">
          <CurrentUserNavBar />
        </div>
      </>
    );
  } else {
    // signed out
    navbar = <UserLoginNavBar />;
  }
  return navbar;
};

export default NavBar;
