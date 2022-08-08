import React, { useState } from 'react';
import { usePageContext } from '../renderer/usePageContext';
import defualt_avatar from '../renderer/avatar.png';

const Avatar = (props: { style: string }) => {
  const pageContext = usePageContext();
  const { currentUser } = pageContext;

  let snippet;
  const [asset, setAsset] = useState(false);

  // if currentUser.asset
  if (asset) {
    // return the users avatar
    snippet = (
      <a href="/">
        <img src={defualt_avatar} className={`${props.style} rounded-full`} />
      </a>
    );
  } else {
    // return the initals
    const userInitials = currentUser?.firstName?.split('')[0] + currentUser?.lastName?.split('')[0];
    snippet = (
      <a href="/">
        <div className="bg-slate-50 h-11 w-11 rounded-full font-bold">
          <div className="p-2.5">{userInitials}</div>
        </div>
      </a>
    );
  }
  return snippet;
};

export default Avatar;
