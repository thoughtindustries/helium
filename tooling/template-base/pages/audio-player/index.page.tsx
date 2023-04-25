import React, { useEffect, useState } from 'react';
import NavBar from '../../components/Navigation/NavBar';
import AudioPlayer from '../../components/AudioPlayer';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Dashboard Page',
  description: 'The dashboard page'
};

function Page() {
  return (
    <>
      <div className="font-primary">
        <NavBar />
        <AudioPlayer />
      </div>
    </>
  );
}
