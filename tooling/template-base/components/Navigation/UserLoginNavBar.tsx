import React from 'react';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import xicon from '../Assets/xicon';
import hamburger from '../Assets/hamburger';

export default function UserLoginNavBar() {
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
        <div className={`hidden my-auto md:block basis-1/2 ${navbar ? 'block' : 'hidden'}`}>
          <ul className="items-center justify-center space-y-3 pt-4 md:pt-0 md:space-y-0 md:flex">
            <li className="md:hover:bg-white hover:bg-slate-100 rounded py-1.5 pr-4">
              <a href="/">Home</a>
            </li>
            <li className="md:hover:bg-white hover:bg-slate-100 rounded py-2 px-4">
              <a href="/catalog">Catalog</a>
            </li>
            <li className="md:hover:bg-white hover:bg-slate-100 rounded py-2 pl-4">
              <a href="/support3">Help</a>
            </li>
            <hr></hr>
          </ul>
        </div>

        <div className="basis-1/2 md:hidden"></div>

        <div className="flex basis-1/4 justify-end pr-3">
          <button className="hidden md:flex justify-center w-24 my-auto items-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <div>Sign in</div>
          </button>
          <div
            className="text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border md:hidden flex items-center space-x-3"
            onClick={() => setNavbar(!navbar)}
          >
            <button type="submit" className="" onClick={() => setNavbar(!navbar)}>
              {navbar ? <div>{xicon}</div> : <div>{hamburger}</div>}
            </button>
          </div>
        </div>
        {/* dropdown menu */}
        <div
          className={`${
            navbar ? 'block' : 'hidden'
          } z-10 absolute right-0 p-5 mt-16 w-96 rounded-md shadow-lg bg-white md:hidden`}
        >
          <div className={`flex my-auto space-x-6 mx-auto md:block ${navbar ? 'block' : 'hidden'}`}>
            <ul className="items-center justify-between space-y-3 pt-4 md:pt-0 md:space-y-0 md:flex md:space-x-6 w-full">
              <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-1.5">
                <a href="/">Home</a>
              </li>
              <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
                <a href="/catalog">Catalog</a>
              </li>
              <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
                <a href="/support3">Help</a>
              </li>
              <hr></hr>
              <button className="md:hidden my-auto items-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded">
                Sign in
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
