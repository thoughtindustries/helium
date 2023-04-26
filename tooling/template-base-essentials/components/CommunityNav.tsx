import React from 'react';
import DiscordLogo from '../renderer/discord.svg';
import GitHubLogo from '../renderer/github.svg';

const RenderNavElements = (props: {
  elements: Array<{ text: string; image?: string; link: string }>;
}) => {
  const ElementsArray = [];
  for (let i = 0; i < props.elements.length; i++) {
    ElementsArray.push(
      <a href={props.elements[i].link} className="flex" key={i}>
        {props.elements[i].image && <img src={props.elements[i].image} />}
        <div className="text-slate-600 underline px-1 font-semibold">{props.elements[i].text}</div>
      </a>
    );
  }
  return <>{ElementsArray}</>;
};

const CommunityNav = () => {
  const NavElementArray = [
    {
      text: 'View Repo',
      image: DiscordLogo,
      link: 'https://github.com/thoughtindustries/helium'
    },
    {
      text: 'Join Community',
      image: GitHubLogo,
      link: 'https://discord.gg/cTJBX4muVn'
    }
  ];

  return (
    <div className="flex w-full pt-16 pr-10 lg:pr-80 justify-end space-x-3">
      <RenderNavElements elements={NavElementArray} />
    </div>
  );
};

export default CommunityNav;
