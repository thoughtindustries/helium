import React from 'react';
import ActivityCard from './ActivityCard';
import Dropdown from './Dropdown';
import Tabs from './Tabs';

const FilterCard = (props: { heading: string }) => {
  return (
    <div className="">
      {/* Header */}
      <div className="text-2xl font-bold font-header ">{props.heading}</div>
      {/* tabs */}
      <div className="sm:block hidden">
        <Tabs />
      </div>

      {/* heading dropdown */}
      <div className="sm:hidden block">
        <Dropdown text="My Learning" styling="" />
      </div>
      <hr className="py-4"></hr>
      {/* dropdown filter tabs */}
      <div className="flex-col space-x-2 space-y-6 pb-4">
        <Dropdown text="Recently Enrolled" styling="w-[182px]" />
        {/* Pagination */}
        <div className="">
          <div className="text-gray-500 font-semibold md:py-2">4 Results</div>
        </div>
      </div>
      <hr></hr>
      {/* Returned Item Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        <ActivityCard heading="Boost your converstion rate" lessonType="Course | source" />
        <ActivityCard heading="Boost your converstion rate" lessonType="Course | source" />
        <ActivityCard heading="Boost your converstion rate" lessonType="Course | source" />
        <ActivityCard heading="Boost your converstion rate" lessonType="Course | source" />
      </div>
    </div>
  );
};

export default FilterCard;
