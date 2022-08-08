import React from 'react';
import Footer from '../../components/Footer/Footer';
import FilterAndCatalog from '../../components/FilterAndCatalog/FilterAndCatalog';
import Banner from '../../components/Banner';
import CatalogMobileNavBar from '../../components/Navigation/CatalogMobileNavBar';
import CatalogNavBar from '../../components/Navigation/CatalogNavBar';
import NavBar from '../../components/Navigation/NavBar';

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
        <NavBar />
        <Banner
          heading="Full Learning Catalog"
          subtext="Browse the full list of courses and learning paths."
        />
        <FilterAndCatalog />
        <Footer />
      </div>
    </>
  );
}
