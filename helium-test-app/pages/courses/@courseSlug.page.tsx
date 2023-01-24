import React from 'react';

export { Page };

const Page = ({ routeParams }) => {
  return (
    <div className="text-center pt-20">
      <div>This is a Helium Page, but just the default!</div>
      {routeParams && <div>This is being displayed instead of {routeParams.courseSlug}</div>}
    </div>
  );
};
