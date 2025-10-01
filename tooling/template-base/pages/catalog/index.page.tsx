import React from 'react';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner';
import NavBar from '../../components/Navigation/NavBar';
import CatalogAndAggregation from '../../components/CatalogAndAggreg/CatalogAndAggregation';
import { HydratedContentItem } from '@thoughtindustries/content';

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
        <CatalogAndAggregation
          onAddedToQueue={async function (item: HydratedContentItem): Promise<boolean | void> {
            // TODO: Implement queue functionality
            console.warn(
              '[PLACEHOLDER] onAddedToQueue is not yet implemented. Item that would be queued:',
              item
            );
            // Return true to indicate success for now
            return true;
          }}
        />
        <Footer />
      </div>
    </>
  );
}
