import React from 'react';
import CTA from '../../components/CTA/CTA';
import FeaturedContentComp from '../../components/FeaturedContent/FeaturedContentComp';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import CallToActionWithLinks from '../../components/CTA/CallToActionWithLinks';
import CallToActionParagraphs from '../../components/CTA/CallToActionParagraphs';
// import NavBar from '../../components/Navigation/NavBar';
import { HydratedContentItem } from '@thoughtindustries/content';
export { Page };
export { documentProps };

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="w-0 h-0 relative">
        <div className="absolute z-10 bg-teal-900 flex-col flex flex-wrap items-start justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-white hover:bg-teal-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div className="w-8 h-8 flex justify-around flex-col">
                <div className="w-8 h-0.5 bg-white rounded-lg border-white" />
                <div className="w-8 h-0.5 bg-white rounded-lg border-white" />
                <div className="w-8 h-0.5 bg-white rounded-lg border-white" />
              </div>
            </button>
          </div>
          <div
            className={'flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

function Page() {
  return (
    <>
      <NavBar />

      <Hero
        headline="Making Learning Successful"
        body="Learning is a gateway to success. We aim to provide motivational content, strategies and courses to help you become successful and achieve your goals."
        buttonUrl="/learn/sign_in"
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
        buttonUrl="/learn/sign_in"
        buttonText="Sign in"
      />
      <Footer />
    </>
  );
}
