import React, { useMemo } from 'react';
import { usePageContext } from '../../renderer/usePageContext';
import Avatar from '../Avatar';

const MobileMenu = () => {
  const pageContext = usePageContext();
  const { currentUser } = pageContext;

  return (
    <div className="">
      <ul className="space-y-2">
        <div className="flex py-5">
          <Avatar style="h-11 w-11" />
          <div className="mx-3 my-auto">
            <button className="hover:text-blue-700">
              <a href="/learn/profile">My Profile</a>
            </button>
          </div>
        </div>
        <hr></hr>
        <a href="/learn/profile">
          <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 pt-4 pb-2">Account</li>
        </a>
        <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2">
          <a href="/">Transcript</a>
        </li>
        <li className="md:hover:bg-white hover:bg-slate-100 rounded pl-2 pt-2 pb-4">
          <a href="/">Support</a>
        </li>
        <hr></hr>
        {/* check if the user is logged */}
        <a href="/learn/profile">
          <div className="text-center pt-5 text-sm text-blue-900 hover:text-blue-700">Sign out</div>
        </a>
      </ul>
    </div>
  );
};

export default MobileMenu;
