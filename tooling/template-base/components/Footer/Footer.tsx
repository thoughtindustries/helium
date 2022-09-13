import React from 'react';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <>
      <div className="pt-2 pb-6">
        <div className="flex justify-center">
          <div className="flex m-5 mx-auto">
            <Logo size="small" />
          </div>
        </div>
        <div className="flex text-slate-500 space-x-6 justify-center font-semibold">
          <a href="/">Home</a>
          <a href="/catalog">Catalog</a>
          <a href="#">Help</a>
        </div>
        <hr className="my-5"></hr>
        <div className="flex justify-center text-slate-500 font-normal">
          &copy; 2022, Astro Theme Powered by Thought Industries
        </div>
      </div>
    </>
  );
};

export default Footer;
