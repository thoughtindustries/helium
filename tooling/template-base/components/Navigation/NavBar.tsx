import React from 'react';
import { usePageContext } from '../../renderer/usePageContext';
import CatalogMobileNavBar from './CatalogMobileNavBar';
import CatalogNavBar from './CatalogNavBar';
import HomepageNavbar from './HomepageNavbar';

const NavBar = () => {
  const pageContext = usePageContext();
  const { currentUser } = pageContext;
  let navbar;
  console.log(currentUser?.asset);
  if (currentUser) {
    // signed in
    navbar = (
      <>
        <div className="block md:hidden">
          <CatalogMobileNavBar />
        </div>
        <div className="hidden md:block">
          <CatalogNavBar />
        </div>
      </>
    );
  } else {
    // signed out
    navbar = <HomepageNavbar />;
  }
  return navbar;
};

export default NavBar;
