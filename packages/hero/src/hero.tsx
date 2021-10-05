import React from 'react';
import { HeroProps } from './types';

const Hero = (props: HeroProps): JSX.Element => {
  const { 
    title, 
    subtitle, 
    linkText, 
    linkOpenInNewTab, 
    linkUrl, 
    asset, 
    largeAsset, 
    smallAsset
  } = props;
  const image = title && (
    <picture className='inline-block w-full'>
      {largeAsset && <source srcSet={largeAsset} media="(min-width: 64.063em)" />}
      <source srcSet={asset} media="(min-width: 48em)" />
      {smallAsset && <source srcSet={smallAsset} media="(max-width: 48em)" />}
      <img src={asset} alt={title} className='w-full' />
    </picture>
  );
  let caption;
  if (title) {
    let link;
    if (linkText && linkUrl) {
      const linkProps: { className: string, href: string, target?: string } = {
        className: 'border border-solid rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal mt-0 mb-0 mr-0 ml-4 pt-2 pb-2 pl-4 pr-4 relative text-center no-underline transition-colors ease-in-out duration-200 bg-accent border-accent text-accent-contrast hover:text-accent-contrast hover:bg-accent-hover hover:border-accent-hover focus:bg-accent-hover focus:border-accent-hover active:bg-accent-hover active:border-accent-hover',
        href: linkUrl
      };
      if (linkOpenInNewTab) {
        linkProps.target = "_blank";
      }
      link = (
        <a {...linkProps}>{linkText}</a>
      )
    }
  
    caption = (
      <div className='w-full p-8 md:absolute md:left-0 md:bg-white md:bg-opacity-80 md:bottom-8'>
        <h2 className='text-gray-800 text-xl mb-1 md:text-3xl lg:text-4xl'>{title}</h2>
        {subtitle && <span className='text-gray-800 text-xs leading-5 font-header md:text-base lg:text-lg'>{subtitle}</span>}
        {link}
      </div>
    );
  }
  return (
    <div className='overflow-hidden relative'>
      {image}
      {caption}
    </div>
  )
}

Hero.displayName = 'Hero';

export default Hero;
