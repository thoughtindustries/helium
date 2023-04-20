import React from 'react';

const CommunityNav = () => {
  const CommunityNavElement = (props: {
    image: string | undefined;
    text: string | undefined;
    link: string | undefined;
  }) => {
    return (
      <a href={props.link} className="flex">
        <img src={props.image} />
        <div className="text-slate-600 underline px-1 font-semibold">{props.text}</div>
      </a>
    );
  };

  return (
    <div className="flex w-full pt-16 pr-10 lg:pr-80 justify-end space-x-3">
      <CommunityNavElement
        text="View Repo"
        image="./renderer/github.svg"
        link="https://github.com/thoughtindustries/helium"
      />
      <CommunityNavElement
        text="Join Community"
        image="./renderer/discord.svg"
        link="https://discord.gg/cTJBX4muVn"
      />
    </div>
  );
};

export default CommunityNav;
