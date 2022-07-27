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
      <HomepageNavbar />
      <Hero
        headline="Making Learning Successful"
        body="Learning is a gateway to success. We aim to provide motivational content, strategies and courses to help you become successful and achieve your goals."
        buttonUrl="/signin"
        buttonText="Sign in"
      />
      <FeaturedContentComp />
      <DocsAndResouces
        headline="Explore Documentation and Resources"
        description="Our developer documentation and tools cover everything you need to know to start building your new project. "
        links={[
          { text: 'Wordpress Documentation', linkUrl: 'https://developer.wordpress.org/' },
          {
            text: 'Storyook Documentation',
            linkUrl: 'https://thoughtindustries.github.io/helium/?path=/story/example-cart--base'
          },
          { text: 'GraphQL Explorer', linkUrl: '/graphiql' },
          { text: 'GraphQL Documentation', linkUrl: 'https://graphql.org/learn/' }
        ]}
      />
      <LearningInfo />
      <CTA
        headline="Are you ready to learn?"
        body="Whether youre looking to grow your business, launch a new product, or simply want to improve certain aspects of your life, we have the tools you need to achieve your goals."
        buttonUrl="/signin"
        buttonText="Sign in"
      />
      <Footer />
    </>
  );
}
