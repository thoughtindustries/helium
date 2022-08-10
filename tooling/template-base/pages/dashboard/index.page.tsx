import React from 'react';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner';
import Activity from '../../components/Activity/Activity';
import NavBar from '../../components/Navigation/NavBar';
import LearnerAccess from '../../components/LearnerAccess/LearnerAccess';

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
          heading="My Dashboard"
          subtext="Your Dashboard is your game-changing collaborative space where you can view all your learning in one place."
        />
        <LearnerAccess />
        <Footer />
      </div>
    </>
  );
}
