import React from 'react';
import logo from '../Assets/logoImage';
import { usePageContext } from '../../renderer/usePageContext';

const Logo = (props: { size: string }) => {
  const { appearance } = usePageContext();
  const companyLogo = appearance?.logoAsset ? appearance?.logoAsset : logo;

  let logoElement;
  if (props.size === 'large') {
    logoElement = (
      <a href="/">
        <div className="h-14">{companyLogo}</div>
      </a>
    );
  } else if (props.size === 'small') {
    logoElement = (
      <a href="/">
        <div className="h-9">{companyLogo}</div>
      </a>
    );
  } else {
    logoElement = (
      <a href="/">
        <div className="h-11">{companyLogo}</div>
      </a>
    );
  }

  return <>{logoElement}</>;
};

export default Logo;
