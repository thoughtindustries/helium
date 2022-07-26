import React from 'react';
import logo from '../../renderer/trees1.png';

const CatalogComp = () => {
  return (
    <>
      <div className="flex flex-col pt-16 px-10 pb-20 bg-slate-50">
        <div className="text-3xl font-bold text-center">
          Your source for learning, community and success.
        </div>
        <div className="text-slate-500 text-xl font-normal text-center mx-5 pt-6">
          Find products, resources, and products for every stage of your business journey.
        </div>

        <div className="flex flex-col px-4 mx-auto mt-10 mb-10 md:flex-row">
          <div className="flex flex-col med:w-1/2">
            <h2 className="max-w-md font-bold text-left text-2xl md:text-3xl">
              Learning Tools and Resources
            </h2>
            <div className="max-w-sm text-slate-500 text-left md:text-left pt-6 text-lg">
              Our goal is to help you become successful by providing learning meterials to improve
              yourself or your company on various topics, such as marketing, business, finance and
              design.
            </div>
            <a href="/catalog" className="text-blue-900 py-10">
              View Catalog &#x2192;
            </a>
          </div>

          {/* numbered list */}
          <div className="flex flex-col md:w-1/2 py-16 md:py-1">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="flex flex-col px-4 mx-auto mt-10 mb-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="md:flex flex-col space-y-8 md:w-1/2 hidden">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col med:w-1/2">
            <h2 className="max-w-md font-bold text-left text-2xl md:text-3xl">
              World Class Content
            </h2>
            <div className="max-w-sm text-slate-500 text-left md:text-left pt-6 text-lg">
              Our content is curated for you. The Academy is focused on your everyday tasks and the
              goals you want to achieve.
            </div>
            <a href="/catalog" className="text-blue-900 py-10">
              View Catalog &#x2192;
            </a>
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2 md:hidden">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogComp;
