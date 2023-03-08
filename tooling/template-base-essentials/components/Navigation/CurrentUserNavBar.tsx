import React from 'react';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import dropDownClosed from '../Assets/dropDownClosed';
import dropDownOpen from '../Assets/dropDownOpen';
import Avatar from '../Avatar/Avatar';

export default function CurrentUserNavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow py-4">
      <div className="flex flex-row">
        <div className="basis-1/4">
          {/* logo */}
          <div className="pl-2">
            <Logo size="" />
          </div>
        </div>
        <div className={`flex basis-1/2 md:block ${navbar ? 'block' : 'hidden'}`}>
          <ul className="flex justify-center items-center md:flex">
            <li className="flex justify-start md:hover:bg-white hover:bg-slate-100 rounded py-1.5 pr-4">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="flex justify-center md:hover:bg-white hover:bg-slate-100 rounded py-2 px-4">
              <a href="/catalog">Catalog</a>
            </li>
            <li className="md:hover:bg-white hover:bg-slate-100 rounded py-2 pl-4">
              <a href="/support">Help</a>
            </li>
            <hr></hr>
          </ul>
        </div>

        <div className="flex basis-1/4 justify-end">
          <div className="">
            <button id="icon" type="submit" className="" onClick={() => setNavbar(!navbar)}>
              <div className="flex items-center space-x-3 mr-3">
                <Avatar size="" />
                {navbar ? <div>{dropDownOpen} </div> : <div>{dropDownClosed}</div>}
              </div>
            </button>
          </div>
        </div>
        {/* dropdown menu */}
        <div
          className={`${
            navbar ? 'block' : 'hidden'
          } z-10 absolute right-0 p-5 mt-16 w-96 rounded-md shadow-lg bg-white`}
        >
          <div className="">
            <ul className="space-y-2">
              <div className="flex py-5">
                <Avatar size="small" />
                <div className="mx-3 my-auto">
                  <button className="hover:text-blue-700">
                    <a href="/learn/account?tab=dashboard.account_profile">My Profile</a>
                  </button>
                </div>
              </div>
              <hr></hr>
              <a href="/learn/account?tab=dashboard.account">
                <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 pt-4 pb-2">
                  My Account
                </li>
              </a>
              <a href="learn/transcript">
                <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
                  Transcript
                </li>
              </a>
              <a href="/support">
                <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 pt-2 pb-4">
                  Support
                </li>
              </a>
              <hr></hr>
              <a href="/learn/sign_out">
                <div className="text-center pt-5 text-sm text-blue-900 hover:text-blue-700">
                  Sign out
                </div>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
