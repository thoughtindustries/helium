import React from 'react';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import dropDownClosed from '../../renderer/dropDownClosed.svg';
import dropDownOpen from '../../renderer/dropDownOpen.svg';
import Avatar from '../Avatar/Avatar';

export default function CurrentUserNavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow py-4">
      <div className="justify-between px-4 md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between md:block">
            {/* logo */}
            <div className="">
              <Logo size="" />
            </div>
            <div className="md:hidden"></div>
          </div>
        </div>
        <div className={`flex ml-8 my-auto space-x-6 md:block ${navbar ? 'block' : 'hidden'}`}>
          <ul className="items-center justify-between space-y-3 md:space-y-0 md:flex md:space-x-6 w-full">
            <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-1.5">
              <a href="/dashboard">My Dashboard</a>
            </li>
            <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
              <a href="/catalog">Catalog</a>
            </li>
            <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
              <a href="/support">Help</a>
            </li>
            <hr></hr>
          </ul>
        </div>

        <div className="hidden md:block">
          {navbar ? (
            <button id="icon" type="submit" className="block" onClick={() => setNavbar(!navbar)}>
              <div className="flex items-center space-x-3 mr-3">
                <Avatar size="" />
                <img src={dropDownOpen} />
              </div>
            </button>
          ) : (
            <button id="icon" type="submit" className="block" onClick={() => setNavbar(!navbar)}>
              <div className="flex items-center space-x-3 mr-3">
                <Avatar size="" />
                <img src={dropDownClosed} />
              </div>
            </button>
          )}
        </div>
      </div>
      {/* dropdown menu */}
      <div
        className={`${
          navbar ? 'block' : 'hidden'
        } z-10 absolute right-0 p-5 mt-6 w-96 rounded-md shadow-lg bg-white`}
      >
        <div className="">
          <ul className="space-y-2">
            <div className="flex py-5">
              <Avatar size="small" />
              <div className="mx-3 my-auto">
                <button className="hover:text-blue-700">
                  <a href="/learn/profile">My Profile</a>
                </button>
              </div>
            </div>
            <hr></hr>
            <a href="/learn/profile">
              <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 pt-4 pb-2">
                Account
              </li>
            </a>
            <a href="/transcript">
              <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">Transcript</li>
            </a>
            <a href="/support">
              <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 pt-2 pb-4">
                Support
              </li>
            </a>
            <hr></hr>
            <a href="/signout">
              <div className="text-center pt-5 text-sm text-blue-900 hover:text-blue-700">
                Sign out
              </div>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
