import React from 'react';
import CTA from '../../components/CTA/CTA';
import FeaturedContentComp from '../../components/FeaturedContent/FeaturedContentComp';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import CallToActionWithLinks from '../../components/CTA/CallToActionWithLinks';
import CallToActionParagraphs from '../../components/CTA/CallToActionParagraphs';
import NavBar from '../../components/Navigation/NavBar';
import { HydratedContentItem } from '@thoughtindustries/content';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function Page() {
  return (
    <>
      <NavBar />
      <Hero
        headline="Making Learning Successful"
        body="Learning is a gateway to success. We aim to provide motivational content, strategies and courses to help you become successful and achieve your goals."
        buttonUrl="/signin"
        buttonText="Sign in"
      />
      <FeaturedContentComp
        onAddedToQueue={function (item: HydratedContentItem): Promise<boolean | void> {
          throw new Error('Function not implemented.');
        }}
        numberOfContentItems={3}
      />
      <CallToActionWithLinks
        headline="Explore Documentation and Resources"
        description="Our developer documentation and tools cover everything you need to know to start building your new project. "
        links={[
          { text: 'Helium Developer Guide', linkUrl: 'https://developer.thoughtindustries.com/' },
          {
            text: 'Storyook Documentation',
            linkUrl: 'https://thoughtindustries.github.io/helium/?path=/story/example-cart--base'
          },
          { text: 'GraphQL Explorer', linkUrl: '/graphiql' },
          {
            text: 'GraphQL Documentation',
            linkUrl: 'https://thoughtindustries.github.io/helium-graphql/'
          }
        ]}
      />
      <CallToActionParagraphs
        heading="Your source for learning, community and success."
        subheading="Find products, resources, and programs for every stage of your business journey."
        paragraphItems={[
          {
            heading: 'Learning Tools and Resources',
            content:
              'Our goal is to help you become successful by providing learning materials to improve yourself or your company on various topics, such as marketing, business, finance and design.',
            buttonText: 'View catalog',
            buttonUrl: '/catalog'
          },
          {
            heading: 'World Class Content',
            content:
              'Our content is curated for you. The Academy is focused on your everyday tasks and the goals you want to achieve.',
            buttonText: 'View catalog',
            buttonUrl: '/catalog'
          },
          {
            heading: 'World Class Content',
            content:
              'Our content is curated for you. The Academy is focused on your everyday tasks and the goals you want to achieve.',
            buttonText: 'View catalog',
            buttonUrl: '/catalog'
          }
        ]}
      />
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
