import React from 'react';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import Xicon from '../Assets/xicon';
import Avatar from '../Avatar/Avatar';

export default function CurrentUserSmallScreenNavBar() {
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
            <div className="md:hidden">
              <div
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <button
                    id="icon"
                    type="submit"
                    className="block h-9 w-9 md:hidden"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <div>{Xicon}</div>
                  </button>
                ) : (
                  <button
                    id="icon"
                    type="submit"
                    className="block md:hidden"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <Avatar size="" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={`flex my-auto space-x-6 mx-auto md:block ${navbar ? 'block' : 'hidden'}`}>
          <ul className="items-center justify-between space-y-3 pt-4 md:space-y-0 md:flex md:space-x-6 w-full">
            <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-1.5">
              <a href="/">Home</a>
            </li>
            <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
              <a href="/catalog">Catalog</a>
            </li>
            <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
              <a href="/support">Help</a>
            </li>
            <hr></hr>
            <div className="flex">
              <Avatar size="" />
              <div className="mx-3 my-auto">
                <button className="hover:text-blue-700">
                  <a href="learn/account?tab=dashboard.account_profile">My Profile</a>
                </button>
              </div>
            </div>
            <hr></hr>
            <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-1.5">
              <a href="learn/account?tab=dashboard.account">Account</a>
            </li>
            <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
              <a href="learn/transcript">Transcript</a>
            </li>
            <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
              <a href="/support">Support</a>
            </li>
            <hr></hr>
            <a href="/learn/sign_out">
              <div className="text-center pt-5 text-sm text-blue-900 hover:text-blue-700">
                Sign out
              </div>
            </a>
            <hr></hr>
          </ul>
        </div>

        <div className="hidden md:block">
          <button className="hidden my-auto items-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:block">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}
