import React from 'react'
import FeaturedCardContent from '../FeaturedContent/FeaturedCardContent';
import Filter from './Filter';

const FilterAndCatalog = () => {
  return (
    
    <div className="grid md:grid-cols-3 grid-cols-1 md:p-20 p-5 bg-slate-100">
      <div className="col-span-1">
        <Filter/>
      </div>
      <div className="col-span-2">
        <FeaturedCardContent/>
      </div>
      
    </div>
    
  )
}

export default FilterAndCatalog;