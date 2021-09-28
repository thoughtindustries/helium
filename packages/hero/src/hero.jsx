import React, { createContext, useContext, useMemo } from 'react';
import { PictureFill } from './picture-fill';
import { Link } from './link';

export { Hero };

const HeroContext = createContext();

function useHeroContext() {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("No context found for Hero");
  }
  return context;
}

function Hero({ children, ...restProps}) {
  const value = useMemo(
    () => ({
      ...restProps
    }),
    [restProps]
  );
  return (
    <HeroContext.Provider value={value}>
      <div className='overflow-hidden relative'>{children}</div>
    </HeroContext.Provider>
  )
}

function Asset() {
  const { title, asset, largeAsset, smallAsset } = useHeroContext();

  if (!asset) return null;

  return (
    <PictureFill src={asset} alt={title}>
      {largeAsset && <PictureFill.Source srcSet={largeAsset} media="(min-width: 64.063em)" />}
      <PictureFill.Source srcSet={asset} media="(min-width: 48em)" />
      {smallAsset && <PictureFill.Source srcSet={smallAsset} media="(max-width: 48em)" />}
    </PictureFill>
  )
}

function Caption() {
  const { title, subtitle, linkText, linkOpenInNewTab, linkUrl } = useHeroContext();

  if (!title) return null;

  let link;
  if (linkText) {
    const linkProps = {
      className: 'border border-solid rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal mt-0 mb-0 mr-0 ml-4 pt-2 pb-2 pl-4 pr-4 relative text-center no-underline transition-colors ease-in-out duration-200 bg-teal-300 border-teal-300 text-black hover:text-black hover:bg-teal-400 hover:border-teal-400 focus:bg-teal-400 focus:border-teal-400 active:bg-teal-400 active:border-teal-40',
      href: linkUrl
    };
    if (linkOpenInNewTab) {
      linkProps.target = "_blank";
    }
    link = (
      <Link {...linkProps}>{linkText}</Link>
    )
  }

  return (
    <div className='w-full p-8 md:absolute md:left-0 md:bg-white md:bg-opacity-80 md:bottom-8'>
      <h2 className='text-gray-800 text-xl mb-1 md:text-3xl lg:text-4xl'>{title}</h2>
      {subtitle && <span class='text-gray-800 text-xs leading-5 md:text-base lg:text-lg'>{subtitle}</span>}
      {link}
    </div>
  )
}

Hero.Asset = Asset;
Hero.Caption = Caption;
