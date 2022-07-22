import React, { SyntheticEvent, useMemo } from 'react';
import Footer from '../../components/Footer/Footer';
import FilterAndCatalog from '../../components/FilterAndCatalog/FilterAndCatalog';
import Banner from '../../components/CatalogComp/Banner';
import MobileNavBar from '../../components/Navigation/MobileNavBar';
import LargeSceenNavBar from '../../components/Navigation/LargeScreenNavBar';
import LearnerAccess from '../../components/LearnerAccess';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Dashboard Page',
  description: 'The dashboard page'
};

function Page() {
  return (
    <>
      <div className="font-primary">
        <div className="block md:hidden">
          <MobileNavBar />
        </div>
        <div className="hidden md:block">
          <LargeSceenNavBar />
        </div>
        <Banner
          heading="My Dashboard"
          subtext="Your dashboard is your game-changing collaborative space where you can view all your learning in one place."
          searchBar={false}
        />
        <LearnerAccess />
        <Footer />
      </div>
    </>
  );
}
