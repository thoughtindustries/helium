import React from 'react';
import { useState } from 'react';
import Logo from './Logo';
import avatar from '../../renderer/avatar.png';
import MobileMenu from './MobileMenu';
import dropDownClosed from '../../renderer/dropDownClosed.png';
import dropDownOpen from '../../renderer/dropDownOpen.png';

export default function LargeSceenNavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow py-4">
      <div className="justify-between px-4 md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between md:block">
            {/* logo */}
            <div className="">
              <Logo />
            </div>
            <div className="md:hidden"></div>
          </div>
        </div>
        <div className={`flex my-auto space-x-6 mx-auto md:block ${navbar ? 'block' : 'hidden'}`}>
          <ul className="items-center justify-between space-y-3 md:space-y-0 md:flex md:space-x-6 w-full">
            <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-1.5">
              <a href="/dashboard">My Dashboard</a>
            </li>
            <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
              <a href="/catalog">Catalog</a>
            </li>
            <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
              <a href="/help">Help</a>
            </li>
            <hr></hr>
          </ul>
        </div>

        <div className="hidden md:block">
          <button className="hidden md:block">
            {navbar ? (
              <button id="icon" type="submit" className="block" onClick={() => setNavbar(!navbar)}>
                <div className="flex items-center space-x-3 mr-3">
                  <img src={avatar} />
                  <img src={dropDownOpen} />
                </div>
              </button>
            ) : (
              <button id="icon" type="submit" className="block" onClick={() => setNavbar(!navbar)}>
                <div className="flex items-center space-x-3 mr-3">
                  <img src={avatar} />
                  <img src={dropDownClosed} />
                </div>
              </button>
            )}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`${
          navbar ? 'block' : 'hidden'
        } absolute right-0 p-5 mt-6 mr-2 w-96 rounded-md shadow-lg bg-white`}
      >
        <MobileMenu />
      </div>
    </nav>
  );
}
