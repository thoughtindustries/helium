import React from 'react';
import logo from '../../renderer/logo.svg';

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} className="h-10" />
    </a>
  )
}

export default Logo;