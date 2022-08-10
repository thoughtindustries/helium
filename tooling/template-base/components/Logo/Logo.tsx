import React from 'react';
import logo from '../../renderer/logo.svg';

const Logo = (props: { logoLink: string; style: string }) => {
  return (
    <a href="/">
      <img src={logo} className="h-10" />
    </a>
  );
};

export default Logo;
