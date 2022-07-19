import { hydrateContent, useAddResourceToQueueMutation, useCatalogQuery } from '@thoughtindustries/content';
import React from 'react';
import FeaturedContentCard from './FeaturedContentCard';
import {
  FeaturedContent,
  ContentTileStandardLayout,
  FeaturedContentContentItem
} from '@thoughtindustries/featured-content';
import i18n from '../../renderer/i18n';
import { useTranslation } from 'react-i18next';
import FeaturedCardContent from './FeaturedCardContent';

const FeaturedContentComp = () => {

  return (
    <section id="featuredcomp" className="bg-slate-50 py-24 px-12">
      <div className="">
        {/* heading */}
        <h2 className="text-4xl font-bold text-center">
          Featured Catalog
        </h2>
        <h4 className="text-slate-500 text-center text-xl font-light">
          Our massive libary of resources engages and informs learners on everything from marking to
          finance and everything in between.
        </h4>
        
        <FeaturedCardContent/>
      </div>
      <a href="/catalog">
        <button className="flex my-10 bg-blue-900 text-white font-bold py-3 px-5 rounded mx-auto">
            View Full Catalog
        </button>
      </a>
    </section>
  );
};

export default FeaturedContentComp;
