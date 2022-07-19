import React from 'react';
import NavBarItem from './NavBarItem';
import logo from '../../renderer/logo.svg';
import icon from '../../renderer/menubar.png';

const CatalogNavBar = () => {
  return (
    <>
      <nav className="relative container mx-auto p-6">
        {/* <!-- Flex container --> */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="">
            <img src={logo} className="h-10" />
          </div>
          {/* menu items */}
          <div className="hidden md:flex my-auto space-x-6 justify-center mx-auto">
            <a href="#">My Dashboard</a>
            <a href="#">Catalog</a>
            <a href="#">Help</a>
          </div>
          
          {/* sign in button */}
          <button className="hidden my-auto items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:block">
            Sign in
          </button>

          {/* burger icon */}
          <button id="icon" type="submit" className="block h-9 w-9 md:hidden">
            <img src={icon} />
          </button>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Home</a>
            <a href="#">Catalog</a>
            <a href="#">Help</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CatalogNavBar;
