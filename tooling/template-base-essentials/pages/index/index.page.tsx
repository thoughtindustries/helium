import React from 'react';
import TitleAndBody from '../../components/TitleAndBody';
import CommunityNav from '../../components/CommunityNav';
import HomepageHeader from '../../components/HomepageHeader';
import RenderLinks from '../../components/RenderLinks';
import WavyHand from '../../renderer/wavyHand.svg';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function Page() {
  const BUILDING_LINKS = [
    {
      href: 'https://developer.thoughtindustries.com/build/developer-guide',
      label: 'Developer Guide'
    },
    {
      href: 'https://thoughtindustries.github.io/helium/?path=/docs/packages-cart',
      label: 'Storybook Docs'
    },
    { href: 'https://thoughtindustries.github.io/helium-graphql/', label: 'GraphQL API' },
    { href: '/graphiql', label: 'GraphQL Playground' }
  ];

  const RESOURCE_LINKS = [
    { href: 'https://www.youtube.com/watch?v=sIUreFrmdLA', label: 'Youtube Developer Series' },
    {
      href: 'https://developer.thoughtindustries.com/build/developer-guide#routing',
      label: 'Guide to Routing'
    },
    {
      href: 'https://developer.thoughtindustries.com/build/developer-guide#project-breakdown',
      label: 'Project Breakdown'
    }
  ];

  const RenderLinksContainerStyling = 'flex flex-col justify-center py-9 px-20 lg:px-80';
  const LinkStyling = 'flex flex-col space-y-5 font-thin text-link-rgba';

  return (
    <>
      <CommunityNav />
      <HomepageHeader
        title="Hello, World"
        body="Welcome to your new custom webpage."
        image={WavyHand}
      />
      <TitleAndBody
        title="Configure your page"
        body="Start customzing your Helium app by going to /pages/index.page.tsx to edit this page. Check out some of the resources linked below to learn more about Helium. Have a question? Get help in our Discord and see how other developers are using Helium."
      />
      <div className={RenderLinksContainerStyling}>
        <RenderLinks links={BUILDING_LINKS} linkStyling={LinkStyling} title="Start building" />
      </div>
      <div className={RenderLinksContainerStyling}>
        <RenderLinks links={RESOURCE_LINKS} linkStyling={LinkStyling} title="Resources" />
      </div>
    </>
  );
}
