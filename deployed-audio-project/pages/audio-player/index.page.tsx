import React from 'react';
import CommunityNav from '../../components/CommunityNav';
import AudioPlayer from '../../components/AudioPlayer';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function Page() {
  return (
    <>
      <CommunityNav />
      <AudioPlayer />
    </>
  );
}
