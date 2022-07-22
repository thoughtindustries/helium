import React from 'react';
import avatar from '../../renderer/avatar.png';

const MobileMenu = () => {
  return (
    <div className="">
      <ul className="space-y-2">
        <div className="flex py-5">
          <div className="h-11 w-11">
            <img src={avatar} />
          </div>
          <div className="mx-3 my-auto">
            <button className="hover:text-blue-700">
              <a href="/sign-in">My Profile</a>
            </button>
          </div>
        </div>
        <hr></hr>
        <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 pt-4 pb-2">
          <a href="/">Account</a>
        </li>
        <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
          <a href="/catalog">Transcript</a>
        </li>
        <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 pt-2 pb-4">
          <a href="/help">Support</a>
        </li>
        <hr></hr>
        <div className="text-center pt-5 text-sm text-blue-900 hover:text-blue-700">Sign out</div>
        <hr></hr>
      </ul>
    </div>
  );
};

export default MobileMenu;
