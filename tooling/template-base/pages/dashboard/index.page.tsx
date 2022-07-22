import React, { SyntheticEvent, useMemo } from 'react';
import Layout from '../../components/Layout';
import { usePageContext } from '../../renderer/usePageContext';
import { Catalog, CatalogProvider, CatalogResultItem } from '@thoughtindustries/catalog';
import { useAddResourceToQueueMutation } from '@thoughtindustries/content';
import { Appearance, CurrentUser } from '../../types';
import NavBar from '../../components/Navigation/HomepageNavBar';
import LearningCat from '../../components/CatalogComp/LearningCat';
import HomepageNavBar from '../../components/Navigation/HomepageNavBar';
import CatalogNavBar from '../../components/Navigation/MobileNavBar';
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
