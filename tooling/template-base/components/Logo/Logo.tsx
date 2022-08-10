import React from 'react';
import logo from '../../renderer/logo.svg';

const Logo = (props: { style: string }) => {
  return (
    <a href="/">
      <img src={logo} className={props.style} />
    </a>
  );
};

export default Logo;
