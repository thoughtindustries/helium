import React, { SyntheticEvent, useMemo } from 'react';
import Footer from '../../components/Footer/Footer';
import FilterAndCatalog from '../../components/FilterAndCatalog/FilterAndCatalog';
import Banner from '../../components/CatalogComp/Banner';
import MobileNavBar from '../../components/Navigation/MobileNavBar';
import LargeSceenNavBar from '../../components/Navigation/LargeScreenNavBar';

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
          <MobileNavBar />
        </div>
        <div className="hidden md:block">
          <LargeSceenNavBar />
        </div>
        <Banner
          heading="Full Learning Catalog"
          subtext="Browse the full list of courses and learning paths."
          searchBar={true}
        />
        <FilterAndCatalog />
        <Footer />
      </div>
    </>
  );
}
