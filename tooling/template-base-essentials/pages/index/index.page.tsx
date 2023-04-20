import React from 'react';
import TitleAndBody from '../../components/TitleAndBody';
import CommunityNav from '../../components/CommunityNav';
import HomepageHeader from '../../components/HomepageHeader';
import RenderLinks from '../../components/RenderLinks';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function Page() {
  const BUILDING_LINKS = {
    'https://developer.thoughtindustries.com/build/developer-guide': 'Developer Guide',
    'https://thoughtindustries.github.io/helium/?path=/docs/packages-cart': 'Storybook Docs',
    'https://thoughtindustries.github.io/helium-graphql/': 'GraphQL API',
    '/graphiql': 'GraphQL Playground'
  };

  const RESOURCE_LINKS = {
    'https://www.youtube.com/watch?v=sIUreFrmdLA': 'Youtube Developer Series',
    'https://developer.thoughtindustries.com/build/developer-guide#routing': 'Guide to Routing',
    'https://developer.thoughtindustries.com/build/developer-guide#project-breakdown':
      'Project Breakdown'
  };

  const RenderLinksContainerStyling = 'flex flex-col justify-center py-9 px-20 lg:px-80';
  const LinkStyling = 'flex flex-col space-y-5 font-thin text-link-rgba';

  return (
    <>
      <CommunityNav />
      <HomepageHeader
        title="Hello, World"
        body="Welcome to your new custom webpage."
        image="./renderer/wavyHand.svg"
      />
      <TitleAndBody
        title="Configure your page"
        body="Start customzing your Helium app by going to /pages/index.page.tsx to edit this page. Check out some of the resources linked below to learn more about Helium. Have a question? Get help in our Discord and see how other developers are using Helium."
      />
      <div className={RenderLinksContainerStyling}>
        <RenderLinks links={BUILDING_LINKS} linkStyling={LinkStyling} title="Start building" />
      </div>
      {/* RenderLinks */}
      <div className={RenderLinksContainerStyling}>
        <RenderLinks links={RESOURCE_LINKS} linkStyling={LinkStyling} title="Start building" />
      </div>
    </>
  );
}
