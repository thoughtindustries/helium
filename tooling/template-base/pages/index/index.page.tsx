import React from 'react';
import CTA from '../../components/CTA/CTA';
import DocsAndResouces from '../../components/DocumentsAndResources/DocsAndResouces';
import FeaturedContentComp from '../../components/FeaturedContent/FeaturedContentComp';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero';
import HomepageNavbar from '../../components/Navigation/HomepageNavbar';
import LearningInfo from '../../components/LearningInfo/LearningInfo';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function Page() {
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      <Navbar/>
      <Hero/>
      <FeaturedContentComp/>
      <DocsAndResouces/>
      <CatalogComp/>
      <CTA/>
      <Footer/>
=======
=======
>>>>>>> refs/remotes/origin/build-homepage-catalogpage
      <HomepageNavbar />
      <Hero />
      <FeaturedContentComp />
      <DocsAndResouces />
      <LearningInfo />
      <CTA />
      <Footer />
<<<<<<< HEAD
>>>>>>> 29502bb (feat: correct packages file)
=======
>>>>>>> refs/remotes/origin/build-homepage-catalogpage
    </>
  );
}
