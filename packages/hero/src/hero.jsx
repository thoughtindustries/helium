import React from 'react';

export { Hero };

function Hero({ 
  title, 
  subtitle, 
  linkText, 
  linkOpenInNewTab, 
  linkUrl, 
  asset, 
  largeAsset, 
  smallAsset
}) {
  const image = title && (
    <picture src={asset} alt={title} className='inline-block w-full'>
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
      const linkProps = {
        className: 'border border-solid rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal mt-0 mb-0 mr-0 ml-4 pt-2 pb-2 pl-4 pr-4 relative text-center no-underline transition-colors ease-in-out duration-200 bg-teal-300 border-teal-300 text-black hover:text-black hover:bg-teal-400 hover:border-teal-400 focus:bg-teal-400 focus:border-teal-400 active:bg-teal-400 active:border-teal-40',
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
        {subtitle && <span class='text-gray-800 text-xs leading-5 md:text-base lg:text-lg'>{subtitle}</span>}
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
