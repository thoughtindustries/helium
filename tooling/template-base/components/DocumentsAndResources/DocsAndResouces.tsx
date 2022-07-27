import React from 'react';
import DocLinks from './DocLinks';

const DocsAndResouces = () => {
  return (
    <div className="flex bg-white flex-col px-20 py-24 items-center text-center">
      <div className="text-4xl font-bold mx-auto ">Explore Documentation and Resources</div>
      <div className="text-slate-500 text-xl font-light mx-5">
        Our developer documentation and tools cover eveything you need to know to start building
        your own project.
      </div>
      {/* <div className="flex flex-row"></div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
        <DocLinks text="Wordpress documentation" link="https://developer.wordpress.org/" />
        <DocLinks
          text="StoryBook Documentation"
          link="https://thoughtindustries.github.io/helium/?path=/story/example-cart--base"
        />
        <DocLinks text="GraphQL explorer" link="/graphIQL" />
        <DocLinks text="GraphQL documentation" link="https://graphql.org/learn/" />
      </div>
    </div>
  );
};

export default DocsAndResouces;
