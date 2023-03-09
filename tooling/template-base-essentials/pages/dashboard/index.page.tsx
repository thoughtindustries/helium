import React, { createContext, useContext } from 'react';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner';
import NavBar from '../../components/Navigation/NavBar';
import LearnerAccess from '../../components/LearnerAccess/LearnerAccess';
import FeaturedContentComp from '../../components/FeaturedContent/FeaturedContentComp';
import { HydratedContentItem } from '@thoughtindustries/content';

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
        <NavBar />
        <Banner
          heading="My Dashboard"
          subtext="Your Dashboard is your game-changing collaborative space where you can view all your learning in one place."
        />
        <LearnerAccess companyHasWaitlistingFeature={true} />
        <FeaturedContentComp
          onAddedToQueue={function (item: HydratedContentItem): Promise<boolean | void> {
            throw new Error('Function not implemented.');
          }}
          numberOfContentItems={3}
        />
        <Footer />
      </div>
    </>
  );
}
