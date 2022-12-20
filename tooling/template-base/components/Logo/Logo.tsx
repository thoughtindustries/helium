import React from 'react';
import defaultLogo from '../Assets/logoImage';
import { usePageContext } from '../../renderer/usePageContext';

const Logo = (props: { size: string }) => {
  const { appearance } = usePageContext();

  const companyLogo = appearance?.logoAsset ? appearance?.logoAsset : defaultLogo;

  let logoElement;
  if (props.size === 'large') {
    logoElement = (
      <a href="/" className="flex">
        <img src={companyLogo} className="h-14" />
      </a>
    );
  } else if (props.size === 'small') {
    logoElement = (
      <a href="/" className="flex">
        <img src={companyLogo} className="h-9" />
      </a>
    );
  } else {
    logoElement = (
      <a href="/" className="flex">
        <img src={companyLogo} className="h-11" />
      </a>
    );
  }

  return <>{logoElement}</>;
};

export default Logo;
