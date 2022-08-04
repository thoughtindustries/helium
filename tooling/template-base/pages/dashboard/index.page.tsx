import React from 'react';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner';
import CatalogMobileNavBar from '../../components/Navigation/CatalogMobileNavBar';
import CatalogNavBar from '../../components/Navigation/CatalogNavBar';
import Activity from '../../components/Activity/Activity';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Catalog Page',
  description: 'The catalog page'
};

function Page() {
  return (
    <>
      <div className="font-primary">
        <div className="block md:hidden">
          <CatalogMobileNavBar />
        </div>
        <div className="hidden md:block">
          <CatalogNavBar />
        </div>
        <Banner
          heading="My Dashboard"
          subtext="Your Dashboard is your game-changing collaborative space where you can view all your learning in one place."
        />
        <Activity />
        <Footer />
      </div>
    </>
  );
}
