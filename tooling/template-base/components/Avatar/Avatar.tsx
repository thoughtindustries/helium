import React, { useState } from 'react';
import { usePageContext } from '../../renderer/usePageContext';

const Avatar = (props: { style: string }) => {
  const pageContext = usePageContext();
  const { currentUser } = pageContext;

  let snippet;

  // if currentUser.asset
  if (currentUser?.asset) {
    // return the users avatar
    snippet = <img src={currentUser?.asset} className={`${props.style} rounded-full h-11`} />;
  } else {
    // return the initals
    const userInitials = currentUser?.firstName?.split('')[0] + currentUser?.lastName?.split('')[0];
    snippet = (
      <div className="bg-slate-50 h-11 w-11 rounded-full font-bold">
        <div className="p-2.5">{userInitials}</div>
      </div>
    );
  }
  return snippet;
};

export default Avatar;
