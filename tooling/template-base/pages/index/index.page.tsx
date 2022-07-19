import React from 'react';
import CatalogComp from '../../components/CatalogComp/CatalogComp';
import CTA from '../../components/CTA/CTA';
import DocsAndResouces from '../../components/ExploreDocs/DocsAndResouces';
import FeaturedContentComp from '../../components/FeaturedContent/FeaturedContentComp';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navigation/Navbar';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function Page() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <FeaturedContentComp/>
      <DocsAndResouces/>
      <CatalogComp/>
      <CTA/>
      <Footer/>
    </>
  );
}
