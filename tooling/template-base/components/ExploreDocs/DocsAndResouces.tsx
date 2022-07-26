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
        <DocLinks text="Wordpress documentation" />
        <DocLinks text="StoryBook Documentation" />
        <DocLinks text="GraphQL explorer" />
        <DocLinks text="GraphQL documentation" />
      </div>
    </div>
  );
};

export default DocsAndResouces;
